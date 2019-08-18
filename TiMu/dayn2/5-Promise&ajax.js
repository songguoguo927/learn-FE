//现在几乎所有的库都利用Promise对Ajax请求进行了封装，也包括jQuery
function requireData(options) {
  //1,默认参数
  var _default = {
    url: "",
    method: "get",
    async: "true",
    data: null,
    transferDataType: "JSON" //默认我们传给后台的数据格式是json类型
  };
  //如果用户传了参数，我们需要将用户传的拿进来覆盖--
  //使用,for-in遍历options并赋值
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      _default[key] = options[key];
    }
  }
  //关于根据我们传什么数据_default.data给服务器，需要设置相应的请求头告诉服务器？数据类型
  //   jquery中ajax测试四种：jQuery的ajax默认提交的请求体是表单数据类型的数据

  //   **get无参**   要请求的数据类型：文本，html，css，图片，视频，json数据， 后台会根据你请求的文件类型自己设置对应的请求头
  //   **get有参**   （data:{id:1}）  ajax会帮你拼接url?id=1
  //   **post无参**   不常用
  //   **post有参** 写在data里，并设置请求头（ajax默认自动给你加表单类型的请求头）--》你要传过去的数据类型  文本，form表单，图片..文件

  //需求，做一个和jquery中的ajax功能差不多的myajax
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method, _default.url, _default.async);
    /**设置请求头 */
    if (_default.method == "get") {
      if (_default.data) {
        //get有参一般拼接至路径后头
        //对于表单编码数据发起get请求
      }
      xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
    } else if (_default.method == "post") {
      if (_default.data) {
        if (_default.transferDataType !== "JSON") {
          //对于表单数据（一般前端发来的可能是key value的对象），我们需要进行编码--将要发送的数据转换成表单格式的数据再发送
          /*对每个表单元素的名字和值执行普通的URL编码（使用十六进制转义码替换特殊字符），使用等号把编码后的名字和值分开，并使用"&"符号分开键/值对。*/
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
            var type = xhr.getResponseHeader("Content-type");
            if (type.match(/^text/)) {
              //如果响应MIME类型为text/plain,text/html,text/css 文本类型时，可以使用responseText属性解析
              //如果服务器发送对象或数组这样的结构话数据作为响应，他应该传输JSON编码的字符串数据，也可以使用responseText属性解析；
              //只不过，我们拿到xhr.responseText，可以把他传递给JSON.parse方法进行解析
              resolve(xhr.responseText); //执行回调函数
            }
          } catch (e) {
            reject(e);
          }
        }
      } else {
        reject(new Error(xhr.statusText));
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
//how to use
// requireData({
//     url:'...',
//     method:"post",
//     data:{name:1}
// }).then(function(result){
//     console.log(result)
//之后就是处理数据的具体逻辑
// }).catch(function(err){
//     console.log(err)
// })
