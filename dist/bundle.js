webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(1);

	var _Controls = __webpack_require__(2);

	var _Controls2 = _interopRequireDefault(_Controls);

	var _Loop = __webpack_require__(3);

	var _Loop2 = _interopRequireDefault(_Loop);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(162);

	var _redux = __webpack_require__(163);

	var _reactRedux = __webpack_require__(172);

	var _Camera = __webpack_require__(181);

	var _Camera2 = _interopRequireDefault(_Camera);

	var _reducers = __webpack_require__(195);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(196);

	var store = (0, _redux.createStore)(_reducers2.default);

	var controls = new _Controls2.default();

	new _Loop2.default(function () {
	    store.dispatch({
	        type: 'updateViewAngle',
	        pointerDelta: controls.getPointerDelta()
	    });

	    var angleShift = [];
	    if (controls.keyPressed.has(_constants.KEY_W)) {
	        angleShift.push(0);
	    }
	    if (controls.keyPressed.has(_constants.KEY_S)) {
	        if (controls.keyPressed.has(_constants.KEY_A)) {
	            angleShift.push(-Math.PI);
	        } else {
	            angleShift.push(Math.PI);
	        }
	    }
	    if (controls.keyPressed.has(_constants.KEY_A)) {
	        angleShift.push(-Math.PI / 2);
	    }
	    if (controls.keyPressed.has(_constants.KEY_D)) {
	        angleShift.push(Math.PI / 2);
	    }
	    if (angleShift.length) {
	        angleShift = angleShift.reduce(function (prev, cur) {
	            return prev + cur;
	        }) / angleShift.length;

	        angleShift += _utils2.default.toRad(store.getState().viewAngle[0]);

	        store.dispatch({
	            type: 'updatePos',
	            shift: [_constants.STEP * Math.sin(angleShift), _constants.STEP * Math.cos(angleShift), 0]
	        });
	    }
	}, true);

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_Camera2.default, null)
	), document.querySelector('.viewport'));

/***/ },

/***/ 1:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var G = exports.G = 1.9;
	var KEY_SPACE = exports.KEY_SPACE = 32;
	var KEY_SHIFT = exports.KEY_SHIFT = 16;
	var KEY_C = exports.KEY_C = 67;
	var KEY_W = exports.KEY_W = 87;
	var KEY_S = exports.KEY_S = 83;
	var KEY_A = exports.KEY_A = 65;
	var KEY_D = exports.KEY_D = 68;
	var STEP = exports.STEP = 10;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controls = (function () {
	    function Controls() {
	        var _this = this;

	        _classCallCheck(this, Controls);

	        this.keyPressed = new Set();
	        this.stack = new Set();
	        var lastCursorPos = null;
	        this.pointerDelta = { x: 0, y: 0 };

	        document.addEventListener('keydown', function (e) {
	            _this.keyPressed.add(e.keyCode);
	            _this.stack.add(e.keyCode);
	        });

	        document.addEventListener('keyup', function (e) {
	            _this.keyPressed.delete(e.keyCode);
	        });

	        document.addEventListener('mousemove', function (e) {
	            if (lastCursorPos) {
	                _this.pointerDelta.x += lastCursorPos.x - e.clientX;
	                _this.pointerDelta.y += lastCursorPos.y - e.clientY;
	            }
	            lastCursorPos = {
	                x: e.clientX,
	                y: e.clientY
	            };
	        });
	    }

	    _createClass(Controls, [{
	        key: 'getStack',
	        value: function getStack() {
	            var result = this.stack.values();
	            this.stack.clear();
	            return result;
	        }
	    }, {
	        key: 'getPointerDelta',
	        value: function getPointerDelta() {
	            var pointerDelta = Object.assign({}, this.pointerDelta);
	            this.pointerDelta = { x: 0, y: 0 };
	            return pointerDelta;
	        }
	    }]);

	    return Controls;
	})();

	exports.default = Controls;

/***/ },

/***/ 3:
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Loop = (function () {
	    function Loop(fn) {
	        _classCallCheck(this, Loop);

	        var startImmediately = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        this.fn = fn;
	        this.rafId = null;
	        if (startImmediately) {
	            this.start();
	        }
	    }

	    _createClass(Loop, [{
	        key: "start",
	        value: function start() {
	            this.rafId = window.requestAnimationFrame(this.start.bind(this));
	            this.fn();
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            window.cancelAnimationFrame(this.rafId);
	            this.rafId = null;
	        }
	    }]);

	    return Loop;
	})();

	exports.default = Loop;

/***/ },

/***/ 4:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var AXIS = ['X', 'Y', 'Z'];

	exports.default = {
	    toRad: function toRad(deg) {
	        return deg * Math.PI / 180;
	    },
	    getTransformRule: function getTransformRule(params) {
	        var transform = '';
	        if (params.pos) {
	            transform += 'translate3d(' + params.pos.map(function (coord) {
	                return coord + 'px';
	            }).join() + ')';
	        }
	        if (params.angle) {
	            transform += params.angle.map(function (angle, i) {
	                return ' rotate' + AXIS[i] + '(' + angle + 'deg)';
	            }).join('');
	        }
	        return { transform: transform };
	    }
	};

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(172);

	var _Scene = __webpack_require__(182);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Camera = function Camera(_ref) {
	    var pos = _ref.pos;
	    var viewAngle = _ref.viewAngle;

	    var transformRule = _utils2.default.getTransformRule({
	        pos: [0, 0, 600],
	        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
	    });
	    return _react2.default.createElement(
	        'div',
	        { className: 'camera', style: transformRule },
	        _react2.default.createElement(_Scene2.default, { pos: pos })
	    );
	};
	Camera.propTypes = {
	    viewAngle: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};

	function select(state) {
	    return {
	        pos: state.pos,
	        viewAngle: state.viewAngle
	    };
	}

	exports.default = (0, _reactRedux.connect)(select)(Camera);

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Field = __webpack_require__(183);

	var _Field2 = _interopRequireDefault(_Field);

	var _Wall = __webpack_require__(190);

	var _Wall2 = _interopRequireDefault(_Wall);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);
	__webpack_require__(193);

	var Scene = function Scene(_ref) {
	    var pos = _ref.pos;

	    var transformRule = _utils2.default.getTransformRule({
	        pos: [-pos[0], pos[2], pos[1]]
	    });
	    return _react2.default.createElement(
	        'div',
	        { className: 'scene obj', style: transformRule },
	        _react2.default.createElement(_Field2.default, null),
	        _react2.default.createElement(_Wall2.default, { wallId: 0 }),
	        _react2.default.createElement(_Wall2.default, { wallId: 1 }),
	        _react2.default.createElement(_Wall2.default, { wallId: 2 }),
	        _react2.default.createElement(_Wall2.default, { wallId: 3 })
	    );
	};
	Scene.propTypes = {
	    pos: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    viewAngle: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};

	exports.default = Scene;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);
	__webpack_require__(188);

	exports.default = function () {
	    return _react2.default.createElement('div', { className: 'field obj' });
	};

/***/ },

/***/ 184:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 188:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);
	__webpack_require__(191);

	exports.default = function (_ref) {
	    var wallId = _ref.wallId;
	    return _react2.default.createElement('div', { className: 'wall obj', 'data-id': wallId });
	};

/***/ },

/***/ 191:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 193:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(163);

	var initialState = {
	    pos: [0, 0, 0],
	    viewAngle: [0, 0, 0]
	};

	function viewAngle() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.viewAngle : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'updateViewAngle':
	            var viewAngle = [state[0] - action.pointerDelta.x, Math.min(Math.max(state[1] + action.pointerDelta.y, -90), 90), 0];
	            viewAngle[0] %= 360;
	            return viewAngle;
	        default:
	            return state;
	    }
	}

	function position() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.pos : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'updatePos':
	            return state.map(function (axisPos, i) {
	                return axisPos + action.shift[i];
	            });
	        default:
	            return state;
	    }
	}

	exports.default = (0, _redux.combineReducers)({
	    viewAngle: viewAngle,
	    pos: position
	});

/***/ },

/***/ 196:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});