const http = require("http");
const fs = require("fs");
const zlib = require('zlib')
http
  .createServer((req, res) => {
    console.log("request com", req.url);

    const host = req.headers.host
    console.log(host)
    if (req.url === "/") {
    //   const html = fs.readFileSync("index.html", "utf8");
      const html = fs.readFileSync("test.html");
        // if(host==='test.com'){
            res.writeHead(200, {
                "Content-type": "text/html",
                // 'Set-Cookie':'id=123'
                // 'Set-Cookie':['id=123','name=xjm']
                // 'Set-Cookie':['id=123','name=xjm;domain=test.com']
                'Set-Cookie':['id=123;max-age=2','name=xjm;HttpOnly']
              });
              res.end(html);
            //   res.end(zlib.gzib(html));
        // }     
    }
    
  })
  .listen(8888);

console.log("server listening on 8888");
