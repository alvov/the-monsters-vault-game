webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Scene = __webpack_require__(159);

	var _Scene2 = _interopRequireDefault(_Scene);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(172);

	var Camera = function Camera() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'camera' },
	        _react2.default.createElement(_Scene2.default, null)
	    );
	};

	var Viewport = function Viewport() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'viewport' },
	        _react2.default.createElement(Camera, null)
	    );
	};

	_reactDom2.default.render(_react2.default.createElement(Viewport, null), document.body);

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Field = __webpack_require__(160);

	var _Field2 = _interopRequireDefault(_Field);

	var _Wall = __webpack_require__(167);

	var _Wall2 = _interopRequireDefault(_Wall);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(161);
	__webpack_require__(170);

	exports.default = function () {
	    return React.createElement(
	        'div',
	        { className: 'scene obj' },
	        React.createElement(_Field2.default, null),
	        React.createElement(_Wall2.default, { wallId: 0 }),
	        React.createElement(_Wall2.default, { wallId: 1 }),
	        React.createElement(_Wall2.default, { wallId: 2 }),
	        React.createElement(_Wall2.default, { wallId: 3 })
	    );
	};

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	__webpack_require__(161);
	__webpack_require__(165);

	exports.default = function () {
	    return React.createElement('div', { className: 'field obj' });
	};

/***/ },

/***/ 161:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 165:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	__webpack_require__(161);
	__webpack_require__(168);

	exports.default = function (_ref) {
	    var wallId = _ref.wallId;
	    return React.createElement('div', { className: 'wall obj', 'data-id': wallId });
	};

/***/ },

/***/ 168:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 170:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 172:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});