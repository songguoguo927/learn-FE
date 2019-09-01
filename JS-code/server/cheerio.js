const http = require('http')

//发送请求，https的url会报错
http.get('http://localhost:8088/index.html',function (req,res) {
    var str = ''
    req.on('data',function(chunk){
        str+=chunk
    })
    req.on('end',function(){
        console.log(str)
    })
})