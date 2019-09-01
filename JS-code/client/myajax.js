function ajax(method,url,fnSucc,fnFaild){
    // 1.做兼容 创建Ajax对象
if(window.XMLHttpRequest){ //window解决报错
    var myAjax = new XMLHttpRequest();
}
else{
    var myAjax = new ActiveXObject("Microsoft.XMLHTTP");
}
//2.连接服务器
//open(方法,读取文件名,是否异步传输,默认true）
myAjax.open(method,url,true)
//3.发送请求
myAjax.send()
//4.接收返回  4表示读取完成
myAjax.onreadystatechange = function(){
    if(myAjax.readyState==4){
        if(myAjax.status == 200){//成功
           fnSucc(myAjax.responseText)
        }else{
            if(fnFaild){
                fnFaild(myAjax.status);
            }
        }
    }
}
}