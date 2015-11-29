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

	var _reducers = __webpack_require__(196);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(198);

	var store = (0, _redux.createStore)(_reducers2.default);

	var controls = new _Controls2.default();

	new _Loop2.default(function (frameRateCoefficient) {
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

	        var step = frameRateCoefficient * _constants.STEP;
	        store.dispatch({
	            type: 'updatePos',
	            shift: [-step * Math.sin(angleShift), 0, step * Math.cos(angleShift)]
	        });
	    }
	}, _constants.FPS, true);

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
	var FPS = exports.FPS = 60;
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

	        //document.addEventListener('mousemove', e => {
	        //    if (lastCursorPos) {
	        //        this.pointerDelta.x += lastCursorPos.x - e.clientX;
	        //        this.pointerDelta.y += lastCursorPos.y - e.clientY;
	        //    }
	        //    lastCursorPos = {
	        //        x: e.clientX,
	        //        y: e.clientY
	        //    };
	        //});
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
	        var fps = arguments.length <= 1 || arguments[1] === undefined ? 60 : arguments[1];
	        var startImmediately = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	        _classCallCheck(this, Loop);

	        this.fn = fn;
	        this.fps = fps;
	        this.oldTimestamp = null;
	        this.rafId = null;
	        if (startImmediately) {
	            this.start();
	        }
	    }

	    _createClass(Loop, [{
	        key: "start",
	        value: function start(timestamp) {
	            this.rafId = window.requestAnimationFrame(this.start.bind(this));
	            var frameRateCoefficient = 1;
	            if (timestamp) {
	                if (this.oldTimestamp) {
	                    frameRateCoefficient = (timestamp - this.oldTimestamp) * this.fps / 1000;
	                }
	                this.oldTimestamp = timestamp;
	            }
	            this.fn(frameRateCoefficient);
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
	    var objects = _ref.objects;

	    var transformRule = _utils2.default.getTransformRule({
	        pos: [0, 0, 600],
	        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
	    });
	    return _react2.default.createElement(
	        'div',
	        { className: 'camera', style: transformRule },
	        _react2.default.createElement(_Scene2.default, { pos: pos, objects: objects })
	    );
	};
	Camera.propTypes = {
	    viewAngle: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};

	function select(state) {
	    return {
	        pos: state.pos,
	        viewAngle: state.viewAngle,
	        objects: state.objects
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

	var _Plain = __webpack_require__(190);

	var _Plain2 = _interopRequireDefault(_Plain);

	var _Wall = __webpack_require__(191);

	var _Wall2 = _interopRequireDefault(_Wall);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);
	__webpack_require__(194);

	var Scene = function Scene(_ref) {
	    var pos = _ref.pos;
	    var objects = _ref.objects;

	    var transformRule = _utils2.default.getTransformRule({
	        pos: [pos[0], pos[1], pos[2]]
	    });
	    var renderedObjects = objects.map(function (object, i) {
	        switch (object.type) {
	            case 'plain':
	                return _react2.default.createElement(_Plain2.default, { key: i, pos: object.pos, size: object.size, angle: object.angle, background: object.background });
	            default:
	                return '';
	        }
	    });
	    return _react2.default.createElement(
	        'div',
	        { className: 'scene obj', style: transformRule },
	        renderedObjects
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

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);
	__webpack_require__(188);

	exports.default = function (_ref) {
	    var pos = _ref.pos;

	    var transformRule = _utils2.default.getTransformRule({
	        angle: [90, 0, 0]
	    });
	    return _react2.default.createElement('div', { className: 'obj', style: transformRule });
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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);

	exports.default = function (_ref) {
	    var pos = _ref.pos;
	    var size = _ref.size;
	    var angle = _ref.angle;
	    var background = _ref.background;

	    var transformRule = _utils2.default.getTransformRule({ pos: pos, angle: angle });
	    var sizeRule = {
	        width: size[0],
	        height: size[1],
	        margin: '-' + size[0] / 2 + 'px 0 0 -' + size[1] / 2 + 'px'
	    };
	    var bgRule = { background: background };
	    var style = _extends({}, transformRule, sizeRule, bgRule);
	    return _react2.default.createElement('div', { className: 'plain obj', style: style });
	};

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(184);
	__webpack_require__(192);

	exports.default = function (_ref) {
	    var wallId = _ref.wallId;
	    return _react2.default.createElement('div', { className: 'wall obj', 'data-id': wallId });
	};

/***/ },

/***/ 192:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 194:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(163);

	var _level = __webpack_require__(197);

	var _level2 = _interopRequireDefault(_level);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function viewAngle() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _level2.default.player[1] : arguments[0];
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
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _level2.default.player[0] : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'updatePos':
	            return state.map(function (axisPos, i) {
	                var newAxisPos = axisPos + action.shift[i];
	                if (_level2.default.boundaries[i]) {
	                    newAxisPos = Math.min(Math.max(newAxisPos, _level2.default.boundaries[i][0]), _level2.default.boundaries[i][1]);
	                }
	                return newAxisPos;
	            });
	        default:
	            return state;
	    }
	}

	function objects() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _level2.default.objects : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        default:
	            return state;
	    }
	}

	exports.default = (0, _redux.combineReducers)({
	    viewAngle: viewAngle,
	    pos: position,
	    objects: objects
	});

/***/ },

/***/ 197:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    boundaries: [[0, 5000], null, [0, 5000]],
	    player: [[0, 350, 0], [0, 0, 0]],
	    objects: [{
	        type: 'plain',
	        pos: [-2500, 0, -2500],
	        size: [5000, 5000],
	        angle: [90, 0, 0],
	        background: '#cfa'
	    }]
	};

/***/ },

/***/ 198:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});