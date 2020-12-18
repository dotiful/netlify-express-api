"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _serverlessHttp = _interopRequireDefault(require("serverless-http"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import express from 'express';
var express = require('express');

var app = express();
var router = express.Router();
// Application-Level Middleware
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express!</h1>');
//   res.end();
// });
// Routes

app.use('/.netlify/functions/index', router); // path must route to lambda

app.use('/magnet', _routes["default"].magnet);
app.use('/', router); // Start

app.listen(process.env.PORT, function () {
  return console.log("Local app listening on port ".concat(process.env.PORT, "!"));
});
module.exports = app;
module.exports.handler = (0, _serverlessHttp["default"])(app);