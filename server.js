const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let fileName = req.url === "/" ? "index.html" : `${req.url}.html`;
  let filePath = path.join(__dirname, fileName);    
  fs.readFile(filePath, (err, data) => {
    if (err) {
      const errorPagePath = path.join(__dirname, "404.html");
      fs.readFile(errorPagePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'content-type': 'text/plain' });
          res.write("Encountered some error!");
          res.end();
          return;
        }
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(data);
        res.end();
      })
      return;
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(data);
    res.end();
  })
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});