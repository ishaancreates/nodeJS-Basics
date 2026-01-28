import http from "http";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From Server");
});

app.get("/about", (req, res) => {
  return res.send("Hello From About Page " + "hey" + req.query.name);
});

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server chal rha"));
