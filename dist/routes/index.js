"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _index = require("../controllers/index");

var _multer = _interopRequireDefault(require("../libs/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.route('/').get(_index.getSongs).post(_multer["default"].single('song'), _index.addSong);
router.route('/:id').get(_index.getOneSong)["delete"](_index.deleteSong).put(_index.updatedSong);
router.get('/file/:file', _index.getSongFile);
var _default = router;
exports["default"] = _default;