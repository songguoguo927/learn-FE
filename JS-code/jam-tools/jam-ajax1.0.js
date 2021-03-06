(function (){
    //实现ajax请求公共方法 options 是一个对象,传参不受个数，和位置的影响
function ajax(options){
    var _default = {
        method:"get",
        url:"",
        dataType:"json",
        async:true,
        data:null,//放在请求主体中的内容
        getHead:null,//在readyState === 2时执行的回调方法
        success:null,
        failed:null
    }
    //--->使用用户传递进来的值覆盖
    for(var key in options){
        if(options.hasOwnProperty(key)){
            _default[key]=options[key]
        }
    }
   //-》如果当前的请求方式是get，需要在url末尾加随机数用于清除缓存
   if(_default.method==="get"){
      if( _default.url.indexOf("?") >= 0) {
        _default.url +="&" 
      }else{
        _default.url += "?";
      }
       _default.url += `_=${Math.random()}`
   }
   //1,创建对象实例并初始化对象
    if(window.XMLHttpRequest){
        var xhr =  new XMLHttpRequest()
    }else{
        var xhr = new ActiveXObject('Microsoft.XMLHTTp')
    }
    //---以上处于阶段0--未初始化，对象已创建但还未调用open方法
    xhr.open(_default.method,_default.url,_default.async);
    //2，指定响应处理函数
    xhr.onreadystatechange = function(){
       if(/^2\d{2}$/.test(xhr.status)){
           if(xhr.readyState === 2){
            if(typeof _default.getHead === 'function'){
                _default.getHead.call(xhr)
            }
           }
           if(xhr.readyState === 4){
               var val = xhr.responseText;
               if(_default.dataType==='json'){
                val = JSON.parse(val);
               }
               _default.success && _default.success.call(xhr,val);//和上面一样
        }
       }
    }
    //send()` 方法只接收一个参数，即表示请求主体的字符串
    //如果请求不包含主体（如：GET 请求就不包含主体），则必须传入 null。
    xhr.send(_default.data)
}
window.ajax = ajax;
})();