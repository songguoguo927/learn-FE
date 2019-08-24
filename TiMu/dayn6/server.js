const http = require('http');

http.createServer((req,res)=>{
    console.log('request com',req.url)
    res.end('123')
}).listen(8888)

console.log('server listening on 8888')