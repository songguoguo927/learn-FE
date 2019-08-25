const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    console.log("request com", req.url);
    if (req.url === "/") {
      const html = fs.readFileSync("index.html", "utf8");
      res.writeHead(200, {
        "Content-type": "text/html"
      });
      res.end(html);
    }
    if (req.url === "/script.js") {
        res.writeHead(200,{
            "Content-Type":"text/javascript",
            "Cache-Control":'max-age=200000,no-cache',
            "Last-Modified":'123',
            'Etag':'777'
        })
        const etag = req.headers['if-none-match']
        if(etag==='777'){
            res.writeHead(304,{
                "Content-Type":"text/javascript",
                "Cache-Control":'max-age=2000000,no-cache',
                "Last-Modified":'123',
                'Etag':'777'
            }) 
            res.end('')
        }else{
            res.writeHead(200,{
                "Content-Type":"text/javascript",
                "Cache-Control":'max-age=200000,no-cache',
                "Last-Modified":'123',
                'Etag':'777'
            })
            res.end('script.js loaded twice three')
        }
        
    }
  })
  .listen(8888);

console.log("server listening on 8888");
