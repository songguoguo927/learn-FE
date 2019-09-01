
var http = require('http');
var url = require('url');
var util = require('util');
 
//获取get请求内容
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // res.end(util.inspect(url.parse(req.url, true)));
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end()
}).listen(3000);
