const fs = require("fs");
const path = require("path");
const http = require("http");
const portfinder = require("portfinder");
portfinder.basePort = process.env.PORT || 8090;
const chalk = require("chalk");
const server = http.createServer(function(request, response) {
  dealPost(request, response);
});
portfinder.getPort((err, port) => {
  if (!err) {
    console.log(
      chalk.green("Mock-Server is running at http://127.0.0.1:" + port)
    );
    server.listen(port);
  }
});
function dealPost(request, response) {
  fs.readFile(path.resolve(__dirname, "data.json"), "utf-8", (err, data) => {
    try {
      if (!err) {
        const API = JSON.parse(data);
        const apis = findApiByUrl(API, request.url);
        if (apis.length > 0) {
          response.writeHead(200, {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE"
          });
          fs.readFile(
            path.resolve(__dirname, apis[0].path),
            "utf-8",
            (err2, data2) => {
              response.end(data2);
            }
          );
        } else {
          erro(response, "404");
        }
      } else {
        erro(response);
      }
    } catch (e) {
      erro(response, e);
    }
  });
}
function erro(response, code = "500") {
  response.writeHead(200, {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE"
  });
  response.end(code);
}
function findApiByUrl(api, url) {
  return api.length > 0 ? api.filter((item, index) => item.api === url) : [];
}
