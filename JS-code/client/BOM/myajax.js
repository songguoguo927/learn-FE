(function() {
  baseUrl = "http://134.175.154.93:8099/";

  function myAjax(options) {
    var _default = {
      method: "get",
      url: "",
      data: null,
      dataType: "json",
      success: null,
      failed: null
    };
    for (key in options) {
      if (options.hasOwnProperty(key)) {
        _default[key] = options[key];
      }
    }
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest();
    } else {
      var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (_default["url"] == null) {
      console.log("url is required");
      return;
    }
    xhr.open(_default["method"], baseUrl + _default["url"]);
    if (_default.method=="post"&& _default["dataType"] == "form") {
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded;charset=utf-8"
      );
    } 
    if (_default["dataType"] == "json") {
    xhr.setRequestHeader(
        "Content-Type",
        "application/json;charset=utf-8"
      );
    }
    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        _default["success"] && _default["success"].call(xhr,xhr.responseText);
      }
      //有失败的回调函数，则执行
      _default["failed"] && _default["failed"].call(xhr,xhr.readyState, xhr.status);
    };
    if(_default["dataType"]=="text"){
        console.log('111')
        xhr.send(JSON.stringify(_default["data"]));
    }
      else xhr.send(encodeFormData(_default["data"]));
    
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
  window.myAjax = myAjax;
})();

//使用,传递参数，和相应的回调函数 url必填 其余可选填
/*myAjax({
  method: "get",  type  string
  url: "",        type string
  data: null,      type object
  dataType: "json",  type string
  success: null,    type function
  failed: null      type function
});*/
