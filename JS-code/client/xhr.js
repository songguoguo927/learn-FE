//js中XMLHttpRequest对象实现GET、POST异步传输
/*
 * 统一XHR接口
 */
function createXHR() {
  // IE7+,Firefox, Opera, Chrome ,Safari
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  }
  // IE6-
  else if (typeof ActiveXObject != "undefined") {
    if (typeof arguments.callee.activeXString != "string") {
      var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXMLHttp"],
        i,
        len;
      for (i = 0, len = versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex) {
          alert("请升级浏览器版本");
        }
      }
    }
    return arguments.callee.activeXString;
    throw new Error("XHR对象不可用");
  }
}

var xhr = createXHR();
// 定义xhr对象的请求响应事件
xhr.onreadystatechange = function() {
  switch (xhr.readyState) {
    case 0:
      //alert("请求未初始化");
      break;
    case 1:
      //alert("请求启动，尚未发送");
      break;
    case 2:
      //alert("请求发送，尚未得到响应");
      break;
    case 3:
      //alert("请求开始响应，收到部分数据");
      break;
    case 4:
      alert("请求响应完成得到全部数据");
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        var data = xhr.responseText;
        alert(data);
      } else {
        alert(
          "Request was unsuccessful : " + xhr.status + " " + xhr.statusText
        );
      }
      break;
  }
};
/* 
   // get请求
   // get请求添加查询参数
    function urlParam(url, name, value) {
       url += (url.indexOf('?') == -1 ) ? '?' : '&' ; 
       url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
       return url;
    }
    
    // get请求
   url = urlParam("example.php","name","ccb");
    url = urlParam(url,"pass","123");
    xhr.open("get", url ,true);
   xhr.send(null);*/

// post请求
// 格式化post 传递的数据
function postDataFormat(obj) {
  if (typeof obj != "object") {
    alert("输入的参数必须是对象");
    return;
  }

  // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
  if (typeof FormData == "function") {
    var data = new FormData();
    for (var attr in obj) {
      data.append(attr, obj[attr]);
    }
    return data;
  } else {
    // 不支持FormData的浏览器的处理
    var arr = new Array();
    var i = 0;
    for (var attr in obj) {
      arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
      i++;
    }
    return arr.join("&");
  }
}

// post请求
var data = { name: "ccb", pass: "123" };
xhr.open("post", "example.php", true);
// 不支持FormData的浏览器的处理
if (typeof FormData == "undefined") {
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
}
xhr.send(postDataFormat(data));
