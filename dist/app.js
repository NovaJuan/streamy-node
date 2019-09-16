"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])(); //Settings

app.set('port', process.env.PORT || 3000); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use('/public', _express["default"]["static"]("public")); //Routes

app.use('/api/songs', _index["default"]);
app.use('/*', function (req, res) {
  return res.sendFile(_path["default"].resolve('public/index.html'));
});
var _default = app;
exports["default"] = _default;