function fn({method,url,success,failed}){
    // console.log(arguments[0])
    var arr = [];
    for(key in arguments[0]){
        // console.log(arguments[0][key])
        arr.push(arguments[0][key])
    }
    console.log(arr)
    method = arr[0];
    url = arr[1];
    success = arr[2];
    failed = arr[3];
  
}
fn({
    method:"get",
    url:'./data.json',
    success:function(){

    },
    failed:function(){

    }
})