const fs = require("fs");
const dotenv = require("dotenv");
const ENV = dotenv.parse(fs.readFileSync(".env"));
const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const bodyParser = require("body-parser");
const app = express();
var port = process.env.PORT || 9000;

const rewriteFn = function (path, req) {
  return path.replace("/api", "");
};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));

app.use(
  "/api",
  createProxyMiddleware("/api", {
    target: ENV.REACT_APP_API_BASE_URL,
    changeOrigin: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "*",
      "Access-Control-Allow-Origin": "*",
    },
    pathRewrite: rewriteFn,
  })
);

app.get("/*", function (req, res) {
  console.log(process.env);
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port);
