// handlers.js

const fs = require("fs");
const path = require("path");
const getData = require("../queries/get-data");
const postData = require("../queries/post-data");
const querystring = require("querystring");

function handleHome(req, res, endpoint) {
  const filePath = path.join(__dirname, "..", "..", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-type": "text/html" });
      res.end("<h1> We've had a problem</h1>");
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(file);
    }
  });
}

function handlePublic(req, res, endpoint) {
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png",
    jpg: "image/jpg"
  };

  const filePath = path.join(__dirname, "..", "..", endpoint);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1> 404 nothing here </h1>");
    } else {
      res.writeHead(200, { "Content-type": extensionType[extension] });
      res.end(file);
    }
  });
}

function postHandler(req, res) {
  console.log(req.url);
  // postData.postName((err, data), req.url)
  postData.postName(req.url);

  // let allData = "";
  // req.on("data", chunk => {
  //   allData += chunk;
  // });
  // req.on("end", () => {
  //   console.log(
  //     "This is all the data from getData: ",
  //     querystring.parse(allData)
  //   );
  //   // const {x ,y, z} = querystring.parse(allData);
  //   ourTable(x, y, z, err => {
  //     if (err) {
  //       res.writeHead(500, { "Content-type": "text/html" });
  //       res.end("<h1>Server side error </h1>");
  //     }
  //     res.writeHead(301, { Location: "/" });
  //     res.end(JSON.stringify(result));
  //   });
  // });
}

function getHandler(req, res) {
  getData.getStockData((err, data) => {
    if (err) {
      console.log(err);
    } else {
      const stockArray = JSON.stringify(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(stockArray);
    }
  });
}

module.exports = {
  handleHome,
  handlePublic,
  postHandler,
  getHandler
};
