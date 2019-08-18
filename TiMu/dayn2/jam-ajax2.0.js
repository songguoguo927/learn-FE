//现在几乎所有的库都利用Promise对Ajax请求进行了封装，也包括jQuery
function requireData(options) {
  //1,默认参数
  var _default = {
    url: "",
    method: "get",
    async: "true",
    data: null,
    transferDataType: "JSON"
  };
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      _default[key] = options[key];
    }
  }
  // Object.assign(_default,options)
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method, _default.url, _default.async);
    /**设置请求头 */
    if (_default.method == "post") {
      if (_default.data) {
        if (_default.transferDataType !== "JSON") {
          _default.data = encodeFormData(_default.data);
          xhr.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded;charset=UTF-8"
          );
        }
        //默认是json数据
        xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
      }
    }
    /***/
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          try {
            //外面要什么数据再基于这个改吧           
              resolve(xhr.responseText); //执行回调函数
          } catch (e) {
            reject(e);
          }
        }
      }
    };
  });
}

//将js的对象转换成表单格式的数据
function encodeFormData(data) {
  if (!data) {
    return "";
  }
  var pairs = [];
  for (var name in data) {
    if (!data.hasOwnProperty(name)) {
      continue; //如果该属性不是对象的自有属性，跳出进行下一次循环
    }
    if (typeof data[name] == "function") {
      continue;
    }
    var value = data[name].toString();
    name = encodeURIComponent(name.replace("%20", "+")); //编码名字
    value = encodeURIComponent(value.replace("%20", "+")); //编码值
    pairs.push(name + "=" + value);
  }
  return pairs.join("&");
}
