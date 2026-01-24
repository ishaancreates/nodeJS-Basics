import http from "http";
import fs from "fs";

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Recieved \n`;
  fs.appendFile("log/txt", log, (err, data) => {
    res.end("Hello from sever");
  });
});

myServer.listen(8000, () => console.log("Server chal rha"));
