const fs = require("fs");
const dotenv = require("dotenv");
const ENV = dotenv.parse(fs.readFileSync(".env"));
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
var port = process.env.PORT || 9000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", function (req, res) {
  console.log(process.env);
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port);
