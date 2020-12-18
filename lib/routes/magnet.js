"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _torrent2magnet = require("torrent2magnet");

var router = (0, _express.Router)(); // router.get('/', (req, res) => { 
//   res.json({ route: req.originalUrl }) 
// });

router.get('/', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello from Express!</h1>');
  res.end();
});
router.post('/', function (req, res) {
  (0, _torrent2magnet.torrent2magnet)(req.body.url).then(function (uri) {
    return res.json({
      uri: uri
    });
  })["catch"](function (err) {
    throw new Error(err);
  });
});
var _default = router;
exports["default"] = _default;