/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"./client/components/Navbar.js\");\n/* harmony import */ var _components_Songs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Songs */ \"./client/components/Songs.js\");\n/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Player */ \"./client/components/Player.js\");\n/* harmony import */ var _components_AddSong__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AddSong */ \"./client/components/AddSong.js\");\n/* harmony import */ var _components_EditSong__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/EditSong */ \"./client/components/EditSong.js\");\n/* harmony import */ var _context_SongContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/SongContext */ \"./client/context/SongContext.js\");\n/* harmony import */ var _context_SongsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/SongsContext */ \"./client/context/SongsContext.js\");\n\n //Components\n\n\n\n\n\n //Song Context\n\n\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_SongsContext__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_SongContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _components_Songs__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true,\n    path: \"/\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _components_AddSong__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    exact: true,\n    path: \"/add\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _components_EditSong__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    exact: true,\n    path: \"/edit/:id\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n}\n\n//# sourceURL=webpack:///./client/app.js?");

/***/ }),

/***/ "./client/components/AddSong.js":
/*!**************************************!*\
  !*** ./client/components/AddSong.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddSong; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction AddSong(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    author: '',\n    audioFile: null,\n    error: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var handleText = function handleText(e) {\n    setState(_objectSpread({}, state, _defineProperty({}, e.target.id, e.target.value)));\n  };\n\n  var handleFiles = function handleFiles(e) {\n    setState(_objectSpread({}, state, {\n      audioFile: e.target.files[0]\n    }));\n  };\n\n  var uploadSong = function uploadSong(e) {\n    e.preventDefault();\n\n    if (!state.title || !state.author || !state.audioFile) {\n      setState(_objectSpread({}, state, {\n        error: 'Missing data.'\n      }));\n      return;\n    }\n\n    var newSong = new FormData();\n    newSong.append('title', state.title);\n    newSong.append('author', state.author);\n    newSong.append('song', state.audioFile);\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/songs', newSong, {\n      headers: {\n        'Content-Type': 'multipart/form-data'\n      }\n    }).then(function (res) {\n      if (res.data.error) {\n        setState(_objectSpread({}, state, {\n          error: res.data.message\n        }));\n        return;\n      }\n\n      props.history.push('/');\n    })[\"catch\"](function (err) {\n      console.log(err);\n      setState(_objectSpread({}, state, {\n        error: 'Something went wrong...'\n      }));\n      return;\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-6 offset-md-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card bg-dark text-white my-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"text-center\"\n  }, \"Add Song\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: uploadSong\n  }, state.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"text-center text-danger\"\n  }, state.error) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"title\",\n    required: true,\n    placeholder: \"Songs title\",\n    value: state.title,\n    onChange: handleText\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"author\",\n    required: true,\n    placeholder: \"Songs Author\",\n    value: state.author,\n    onChange: handleText\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Song:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"file\",\n    className: \"form-control-file\",\n    id: \"song\",\n    multiple: false,\n    accept: \"audio/mpeg\",\n    required: true,\n    placeholder: \"Songs Author\",\n    onChange: handleFiles\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-success btn-block\"\n  }, \"Add Song\")))))));\n}\n\n//# sourceURL=webpack:///./client/components/AddSong.js?");

/***/ }),

/***/ "./client/components/EditSong.js":
/*!***************************************!*\
  !*** ./client/components/EditSong.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditSong; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction EditSong(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    author: '',\n    error: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var id = props.match.params.id;\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/api/songs/\".concat(id)).then(function (res) {\n      if (res.data.error) {\n        if (res.data.noSong) {\n          props.history.push('/');\n          return;\n        }\n\n        setState(_objectSpread({}, state, {\n          error: res.data.message\n        }));\n        return;\n      }\n\n      setState(_objectSpread({}, state, {\n        title: res.data.song.title,\n        author: res.data.song.author\n      }));\n    })[\"catch\"](function (err) {\n      console.log(err);\n      setState(_objectSpread({}, state, {\n        error: 'Something went wrong...'\n      }));\n      return;\n    });\n  }, []);\n\n  var handleText = function handleText(e) {\n    setState(_objectSpread({}, state, _defineProperty({}, e.target.id, e.target.value)));\n  };\n\n  var updateSong = function updateSong(e) {\n    e.preventDefault();\n\n    if (!state.title || !state.author) {\n      setState(_objectSpread({}, state, {\n        error: 'Missing data.'\n      }));\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(\"/api/songs/\".concat(props.match.params.id), state).then(function (res) {\n      if (res.data.error) {\n        setState(_objectSpread({}, state, {\n          error: res.data.message\n        }));\n        return;\n      }\n\n      props.history.push('/');\n    })[\"catch\"](function (err) {\n      console.log(err);\n      setState(_objectSpread({}, state, {\n        error: 'Something went wrong...'\n      }));\n      return;\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-6 offset-md-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card bg-dark text-white my-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"text-center\"\n  }, \"Edit Song\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: updateSong\n  }, state.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"text-center text-danger\"\n  }, state.error) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"title\"\n  }, \"Title:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"title\",\n    required: true,\n    placeholder: \"Songs title\",\n    value: state.title,\n    onChange: handleText\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"author\"\n  }, \"Author:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"author\",\n    required: true,\n    placeholder: \"Songs author\",\n    value: state.author,\n    onChange: handleText\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-success btn-block\"\n  }, \"Edit Song\")))))));\n}\n\n//# sourceURL=webpack:///./client/components/EditSong.js?");

/***/ }),

/***/ "./client/components/Navbar.js":
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nfunction Navbar(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-expand-lg bg-dark navbar-dark\",\n    id: \"Navbar\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"navbar-brand\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Streamy\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-success\"\n  }, \"Node\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navbar-collapse collapse\",\n    id: \"navbarSupportedContent\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"navbar-nav ml-auto\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-link\",\n    to: \"/add\"\n  }, \"Add Song\"))))));\n}\n\n//# sourceURL=webpack:///./client/components/Navbar.js?");

/***/ }),

/***/ "./client/components/Player.js":
/*!*************************************!*\
  !*** ./client/components/Player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_SongContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SongContext */ \"./client/context/SongContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Player() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    playing: false,\n    songUrl: '',\n    isPaused: false\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      player = _useState2[0],\n      setPlayer = _useState2[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_SongContext__WEBPACK_IMPORTED_MODULE_1__[\"SongContext\"]),\n      songPlaying = _useContext.songPlaying,\n      setSongPlaying = _useContext.setSongPlaying,\n      nextSong = _useContext.nextSong,\n      prevSong = _useContext.prevSong,\n      randomSong = _useContext.randomSong;\n\n  if (songPlaying.isPlaying) {\n    var myplayer = document.getElementById('player');\n    var togglePlay = document.getElementById('toggle-play');\n    var trackDuration = document.getElementById('track-duration');\n  }\n\n  function playOrPause(e) {\n    if (e.stopPropagation) e.stopPropagation();\n    e.preventDefault();\n\n    if (myplayer.getAttribute('data-playing') === 'true') {\n      myplayer.pause();\n      myplayer.setAttribute('data-playing', 'false');\n      togglePlay.innerHTML = '<i class=\"far fa-play-circle\"></i>';\n    } else {\n      myplayer.play();\n      myplayer.setAttribute('data-playing', 'true');\n      togglePlay.innerHTML = '<i class=\"far fa-pause-circle\"></i>';\n    }\n  }\n\n  function reloadPlayer() {\n    myplayer.load();\n    myplayer.play();\n    myplayer.setAttribute('data-playing', 'true');\n    togglePlay.innerHTML = '<i class=\"far fa-pause-circle\"></i>';\n  }\n\n  function handleVolume(e) {\n    myplayer.volume = e.target.value;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (songPlaying.isPlaying) {\n      if (player.songUrl !== songPlaying.songUrl) {\n        myplayer.setAttribute('data-playing', 'true');\n        myplayer.setAttribute('src', songPlaying.songUrl);\n\n        myplayer.onloadedmetadata = function (e) {\n          var duration = Math.round(e.target.duration);\n          var hours = 0;\n          var minutes = 0;\n          var seconds = 0;\n\n          while (duration > 0) {\n            if (duration >= 3600) {\n              hours++;\n              duration -= 3600;\n            } else if (duration >= 60) {\n              minutes++;\n              duration -= 60;\n            } else {\n              seconds++;\n              duration--;\n            }\n          }\n\n          if (hours > 0) {\n            trackDuration.innerText = \"(\".concat(hours, \":\").concat(minutes, \":\").concat(seconds < 10 ? '0' + seconds : seconds, \")\");\n          } else {\n            trackDuration.innerText = \"(\".concat(minutes, \":\").concat(seconds < 10 ? '0' + seconds : seconds, \")\");\n          }\n        };\n\n        myplayer.load();\n        myplayer.play();\n        togglePlay.innerHTML = '<i class=\"far fa-pause-circle\"></i>';\n        setPlayer({\n          songUrl: songPlaying.songUrl\n        });\n      }\n    }\n  }, [songPlaying]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: songPlaying.isPlaying ? 'Player' : 'Player d-none'\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"audio\", {\n    src: \"\",\n    id: \"player\",\n    \"data-playing\": \"false\",\n    onEnded: nextSong\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"player-text\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"song-title\"\n  }, songPlaying.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"song-author\"\n  }, \" - \", songPlaying.author, \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"song-duration\",\n    id: \"track-duration\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"player-buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"toggle-play\",\n    onClick: playOrPause\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"far fa-pause-circle\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: reloadPlayer\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-redo-alt\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: prevSong\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-backward\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: nextSong\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-forward\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: randomSong\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-random\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"range\",\n    max: \"1\",\n    min: \"0\",\n    step: \"0.1\",\n    onChange: handleVolume\n  })));\n}\n\n//# sourceURL=webpack:///./client/components/Player.js?");

/***/ }),

/***/ "./client/components/Song.js":
/*!***********************************!*\
  !*** ./client/components/Song.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Song; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_SongContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SongContext */ \"./client/context/SongContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction Song(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    author: '',\n    songUrl: '',\n    id: '',\n    api_id: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      song = _useState2[0],\n      setSong = _useState2[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_SongContext__WEBPACK_IMPORTED_MODULE_1__[\"SongContext\"]),\n      songPlaying = _useContext.songPlaying,\n      setSongPlaying = _useContext.setSongPlaying;\n\n  function settingSong() {\n    var settedSong = props.settedSong,\n        index = props.index;\n    setSong({\n      title: settedSong.title,\n      author: settedSong.author,\n      songUrl: settedSong.song_url,\n      id: index,\n      api_id: settedSong.id\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    settingSong();\n  }, [songPlaying]);\n\n  var playSong = function playSong(e) {\n    if (e.stopPropagation) e.stopPropagation();\n\n    if (song.songUrl !== songPlaying.songUrl) {\n      setSongPlaying({\n        title: song.title,\n        author: song.author,\n        songUrl: song.songUrl,\n        id: song.id,\n        isPlaying: true\n      });\n      setSong({\n        isPlaying: true\n      });\n    }\n  };\n\n  var playOrPauseSong = function playOrPauseSong(e) {\n    if (e.stopPropagation) e.stopPropagation();\n\n    if (song.songUrl !== songPlaying.songUrl) {\n      setSongPlaying({\n        title: song.title,\n        author: song.author,\n        songUrl: song.songUrl,\n        id: song.id,\n        isPlaying: true\n      });\n      setSong({\n        isPlaying: true\n      });\n    }\n  };\n\n  var goToEdit = function goToEdit(e) {\n    if (e.stopPropagation) e.stopPropagation();\n    props.goTo(\"/edit/\".concat(song.api_id));\n  };\n\n  var deleteSong = function deleteSong(e) {\n    if (e.stopPropagation) e.stopPropagation();\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a[\"delete\"](\"/api/songs/\".concat(props.settedSong.id)).then(function (res) {\n      if (res.data.err) {\n        console.log(res.data.message);\n        return;\n      }\n\n      props.getSongs();\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: songPlaying.songUrl === song.songUrl ? 'Song playing' : 'Song',\n    onClick: playSong\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"play-btn\",\n    onClick: playOrPauseSong\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-play\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"song-info\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, song.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, song.author)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"btns\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"edit-btn\",\n    onClick: goToEdit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"far fa-edit\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"delete-btn\",\n    onClick: deleteSong\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"far fa-trash-alt\"\n  }))));\n}\n\n//# sourceURL=webpack:///./client/components/Song.js?");

/***/ }),

/***/ "./client/components/Songs.js":
/*!************************************!*\
  !*** ./client/components/Songs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Songs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Song */ \"./client/components/Song.js\");\n/* harmony import */ var _context_SongsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/SongsContext */ \"./client/context/SongsContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n //Components\n\n //Context\n\n\nfunction Songs(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    songs: null,\n    noSongs: false\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_SongsContext__WEBPACK_IMPORTED_MODULE_3__[\"SongsContext\"]),\n      songs = _useContext.songs,\n      setSongs = _useContext.setSongs;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getSongs();\n  }, []);\n\n  var getSongs = function getSongs() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/songs').then(function (res) {\n      if (res.data.error) {\n        if (res.data.noSongs) {\n          setState({\n            noSongs: true\n          });\n          setSongs({\n            noSongs: true\n          });\n        }\n\n        return console.log(res.data.message);\n      }\n\n      setState({\n        songs: res.data.songs,\n        noSongs: false\n      });\n      setSongs({\n        songs: res.data.songs,\n        noSongs: false\n      });\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"text-center\"\n  }, \"Loading...\");\n\n  if (state.noSongs) {\n    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n      className: \"text-center\"\n    }, \"No songs on database\");\n  }\n\n  if (state.songs && !state.noSongs) {\n    content = state.songs.map(function (song, i) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Song__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        settedSong: song,\n        index: i,\n        key: song.id,\n        goTo: props.history.push,\n        getSongs: getSongs\n      });\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-6 offset-md-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Songs card bg-dark text-white my-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-body\"\n  }, content)))));\n}\n\n//# sourceURL=webpack:///./client/components/Songs.js?");

/***/ }),

/***/ "./client/context/SongContext.js":
/*!***************************************!*\
  !*** ./client/context/SongContext.js ***!
  \***************************************/
/*! exports provided: SongContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SongContext\", function() { return SongContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SongsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SongsContext */ \"./client/context/SongsContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar SongContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nvar SongContextProvider = function SongContextProvider(props) {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_SongsContext__WEBPACK_IMPORTED_MODULE_1__[\"SongsContext\"]),\n      songs = _useContext.songs,\n      setSongs = _useContext.setSongs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: null,\n    author: null,\n    songUrl: null,\n    isPlaying: false,\n    id: null\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      songPlaying = _useState2[0],\n      setSongPlaying = _useState2[1];\n\n  function nextSong() {\n    var nextId = songPlaying.id + 1;\n\n    if (nextId >= songs.songs.length) {\n      nextId = 0;\n    }\n\n    var nextSong = songs.songs[nextId];\n    setSongPlaying({\n      title: nextSong.title,\n      author: nextSong.author,\n      songUrl: nextSong.song_url,\n      isPlaying: true,\n      id: nextId\n    });\n  }\n\n  function prevSong() {\n    var nextId = songPlaying.id - 1;\n\n    if (nextId < 0) {\n      nextId = songs.songs.length - 1;\n    }\n\n    var nextSong = songs.songs[nextId];\n    setSongPlaying({\n      title: nextSong.title,\n      author: nextSong.author,\n      songUrl: nextSong.song_url,\n      isPlaying: true,\n      id: nextId\n    });\n  }\n\n  function randomSong() {\n    var minIndex = 0;\n    var maxIndex = songs.songs.length;\n    var nextId = Math.floor(Math.random() * (maxIndex - minIndex) + minIndex);\n    var nextSong = songs.songs[nextId];\n    if (nextSong.song_url === songPlaying.songUrl) return randomSong();\n    setSongPlaying({\n      title: nextSong.title,\n      author: nextSong.author,\n      songUrl: nextSong.song_url,\n      isPlaying: true,\n      id: nextId\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SongContext.Provider, {\n    value: {\n      songPlaying: songPlaying,\n      setSongPlaying: setSongPlaying,\n      nextSong: nextSong,\n      prevSong: prevSong,\n      randomSong: randomSong\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongContextProvider);\n\n//# sourceURL=webpack:///./client/context/SongContext.js?");

/***/ }),

/***/ "./client/context/SongsContext.js":
/*!****************************************!*\
  !*** ./client/context/SongsContext.js ***!
  \****************************************/
/*! exports provided: SongsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SongsContext\", function() { return SongsContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar SongsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n\nvar SongsContextProvider = function SongsContextProvider(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    songs: null,\n    noSongs: false\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      songs = _useState2[0],\n      setSongs = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SongsContext.Provider, {\n    value: {\n      songs: songs,\n      setSongs: setSongs\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongsContextProvider);\n\n//# sourceURL=webpack:///./client/context/SongsContext.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./client/app.js\");\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), document.getElementById('root'));\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/main.css":
/*!*************************!*\
  !*** ./client/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\api.js'\\n    at C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:313:20\\n    at C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at Array.<anonymous> (C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:203:19)\\n    at Storage.finished (C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:43:16)\\n    at ReadFileContext.<anonymous> (C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:79:9)\\n    at ReadFileContext.callback (C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:115:16)\\n    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:246:13)\");\n\n//# sourceURL=webpack:///./client/main.css?");

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\@babel\\\\polyfill\\\\lib\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/@babel/polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\axios\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\react-dom\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\react-router-dom\\\\esm\\\\react-router-dom.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-router-dom/esm/react-router-dom.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Juan\\\\Documents\\\\Projects\\\\StremyNode\\\\node_modules\\\\react\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./client/index.js ./client/main.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./client/index.js */\"./client/index.js\");\nmodule.exports = __webpack_require__(/*! ./client/main.css */\"./client/main.css\");\n\n\n//# sourceURL=webpack:///multi_./client/index.js_./client/main.css?");

/***/ })

/******/ });