function ajax({method,url,success,failed}){
    var arr = [];
    for(key in arguments[0]){
        arr.push(arguments[0][key])
    }
    // console.log(arr)
    method = arr[0];
    url = arr[1];
    success = arr[2];
    failed = arr[3];
    if(window.XMLHttpRequest){
        var xhr =  new XMLHttpRequest()
    }else{
        var xhr = new ActiveXObject('Microsoft.XMLHTTp')
    }
    xhr.open(method,url,true);
    xhr.send()
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            if(xhr.status == 200){
                success(xhr.responseText)
            }else{
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}