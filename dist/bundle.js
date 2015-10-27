/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _scriptsComponentsViewport = __webpack_require__(2);

	var _scriptsComponentsViewport2 = _interopRequireDefault(_scriptsComponentsViewport);

	_reactDom2['default'].render(React.createElement(_scriptsComponentsViewport2['default'], null), document.body);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _scriptsComponentsCameraJs = __webpack_require__(3);

	var _scriptsComponentsCameraJs2 = _interopRequireDefault(_scriptsComponentsCameraJs);

	exports["default"] = function () {
	    return React.createElement(
	        "div",
	        { className: "viewport" },
	        React.createElement(_scriptsComponentsCameraJs2["default"], null)
	    );
	};

	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _scriptsComponentsScene = __webpack_require__(4);

	var _scriptsComponentsScene2 = _interopRequireDefault(_scriptsComponentsScene);

	exports["default"] = function () {
	    return React.createElement(
	        "div",
	        { className: "camera" },
	        React.createElement(_scriptsComponentsScene2["default"], null)
	    );
	};

	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _scriptsComponentsFieldField = __webpack_require__(5);

	var _scriptsComponentsFieldField2 = _interopRequireDefault(_scriptsComponentsFieldField);

	var _scriptsComponentsWallWall = __webpack_require__(6);

	var _scriptsComponentsWallWall2 = _interopRequireDefault(_scriptsComponentsWallWall);

	exports['default'] = function () {
	    return React.createElement(
	        'div',
	        { className: 'scene obj' },
	        React.createElement(_scriptsComponentsFieldField2['default'], null),
	        React.createElement(_scriptsComponentsWallWall2['default'], { wallId: 0 }),
	        React.createElement(_scriptsComponentsWallWall2['default'], { wallId: 1 }),
	        React.createElement(_scriptsComponentsWallWall2['default'], { wallId: 2 }),
	        React.createElement(_scriptsComponentsWallWall2['default'], { wallId: 3 })
	    );
	};

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports["default"] = function () {
	    return React.createElement("div", { className: "field obj" });
	};

	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports["default"] = function (_ref) {
	    var wallId = _ref.wallId;
	    return React.createElement("div", { className: "wall obj", "data-id": wallId });
	};

	module.exports = exports["default"];

/***/ }
/******/ ]);