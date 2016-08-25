webpackJsonp([1],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	class Loop {
	    constructor(fn = () => {}, fps = 60, startImmediately = false) {
	        this.fn = fn;
	        this.fps = fps;
	        this.oldTimestamp = null;
	        this.rafId = null;
	        if (startImmediately) {
	            this.start();
	        }
	    }

	    start(timestamp) {
	        this.rafId = window.requestAnimationFrame(this.start.bind(this));
	        let frameRateCoefficient = 1;
	        if (timestamp) {
	            if (this.oldTimestamp) {
	                frameRateCoefficient = (timestamp - this.oldTimestamp) * this.fps / 1000;
	            }
	            this.oldTimestamp = timestamp;
	        }
	        this.fn(frameRateCoefficient);
	    }

	    stop() {
	        window.cancelAnimationFrame(this.rafId);
	        this.rafId = null;
	    }
	}/* harmony export */ exports["a"] = Loop;

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(20);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __WEBPACK_IMPORTED_MODULE_1_redux__ && __WEBPACK_IMPORTED_MODULE_1_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_1_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_level__ = __webpack_require__(58);




	// fix lack of default parameters support in webpack 2
	const level = __WEBPACK_IMPORTED_MODULE_2__levels_level__["a" /* default */];

	function viewAngle(state = level.player.angle, action) {
	    switch (action.type) {
	        case 'updateViewAngle':
	            return [(state[0] - action.pointerDelta.x * __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* SENSITIVITY */]) % 360, Math.min(Math.max(state[1] + action.pointerDelta.y * __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* SENSITIVITY */], -90), 90), 0];
	        default:
	            return state;
	    }
	}

	function playerPosition(state = level.player.pos, action) {
	    switch (action.type) {
	        case 'updatePlayerPos':
	            let newPos = [];
	            for (let i = 0; i < 3; i++) {
	                let newAxisPos = state[i] + action.shift[i];
	                // check if got out of bounds
	                for (let i = 0; i < 3; i++) {
	                    if (level.boundaries[i]) {
	                        newAxisPos = Math.min(Math.max(newAxisPos, 0), level.boundaries[i] - 1);
	                    }
	                }
	                newPos.push(newAxisPos);
	            }
	            const collisions = level.collision.getCollisions([state, newPos]);
	            // get last collision result as new player position
	            return collisions[collisions.length - 1].newPos;
	        default:
	            return state;
	    }
	}

	function playerState(state = 'stop', action) {
	    switch (action.type) {
	        case 'playerStateStop':
	            return 'stop';
	        case 'playerStateWalk':
	            return 'walk';
	        case 'playerStateRun':
	            return 'run';
	        default:
	            return state;
	    }
	}

	function objects(state = level.objects, action) {
	    return state;
	}

	/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
	    viewAngle,
	    pos: playerPosition,
	    playerState,
	    objects
	});

/***/ },

/***/ 102:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 103:
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.batchActions = batchActions;
	exports.enableBatching = enableBatching;
	var BATCH = exports.BATCH = 'BATCHING_REDUCER.BATCH';

	function batchActions(actions) {
		return { type: BATCH, payload: actions };
	}

	function enableBatching(reduce) {
		return function batchingReducer(state, action) {
			switch (action.type) {
				case BATCH:
					return action.payload.reduce(batchingReducer, state);
				default:
					return reduce(state, action);
			}
		};
	}

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(21);
	__webpack_require__(22);




	const backgrounds = ['src/components/box/box01.jpg', 'src/components/box/box02.jpg', 'src/components/box/box03.jpg'];

	/* harmony default export */ exports["a"] = function ({ pos, playerPos, isVisible, size, mode = 1, getTransformRule }) {
	    const posWithInvertedY = [pos[0], -pos[1], pos[2]];
	    const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
	        display: isVisible ? 'block' : 'none'
	    });

	    const background = `url(${ backgrounds[mode - 1] }) 50% 50% / cover`;

	    // Front-Back-Left-Right-Top
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'box obj', style: styleRules },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, 0, size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 0, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, 0, -size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 180, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [-size[0] / 2, 0, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, -90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [size[0] / 2, 0, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, 90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        playerPos[1] > pos[1] + size[1] / 2 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1] / 2, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[0], size[2]],
	            angle: [90, 0, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }) : ''
	    );
	};

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(21);



	/* harmony default export */ exports["a"] = ({ pos, playerPos, size, isVisible = true, getTransformRule }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	    className: 'floor',
	    isVisible: isVisible,
	    pos: pos,
	    playerPos: playerPos,
	    size: [size[0], size[2]],
	    angle: [90, 0, 0],
	    getTransformRule: getTransformRule,
	    background: 'url(src/components/floor/floor.jpg)'
	});

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(21);



	/* harmony default export */ exports["a"] = ({ pos, playerPos, size, angle, isVisible, background, getTransformRule }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	    className: 'painting',
	    pos: [pos[0], -pos[1], pos[2]],
	    playerPos: playerPos,
	    size: size,
	    isVisible: isVisible,
	    angle: angle,
	    getTransformRule: getTransformRule,
	    background: background
	});

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__painting_Painting__ = __webpack_require__(106);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__floor_Floor__ = __webpack_require__(105);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wall_Wall__ = __webpack_require__(109);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__box_Box__ = __webpack_require__(104);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switcher_Switcher__ = __webpack_require__(108);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__levels_level__ = __webpack_require__(58);
	/* harmony export */ exports["a"] = Scene;__webpack_require__(22);
	__webpack_require__(114);











	function Scene({ pos, playerState, viewAngle, objects, getTransformRule }) {
	    const transformRule = getTransformRule({
	        pos: [-pos[0], pos[1], -pos[2]]
	    });
	    const collisionView = __WEBPACK_IMPORTED_MODULE_7__levels_level__["a" /* default */].collision.getCollisionView([pos, getPointPosition({ pos, distance: __WEBPACK_IMPORTED_MODULE_6__constants__["g" /* HAND_LENGTH */], angle: viewAngle })]);

	    const playerCell = [Math.floor(pos[0] / __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* BROAD_CELL_SIZE */]), Math.floor(pos[2] / __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* BROAD_CELL_SIZE */])];
	    const renderedObjects = [];
	    for (let i = 0; i < objects.length; i++) {
	        const object = objects[i];
	        let isVisible = false;
	        if (object.collides !== false) {
	            for (let k = 0; k < object.broadCells.length; k++) {
	                if (Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 && Math.abs(playerCell[1] - object.broadCells[k][1]) < 2) {
	                    isVisible = true;
	                    break;
	                }
	            }
	        } else {
	            if (Math.abs(pos[0] - object.pos[0]) < 2 * __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* BROAD_CELL_SIZE */] && Math.abs(pos[2] - object.pos[2]) < 2 * __WEBPACK_IMPORTED_MODULE_6__constants__["f" /* BROAD_CELL_SIZE */]) {
	                isVisible = true;
	            }
	        }
	        switch (object.type) {
	            case 'painting':
	                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__painting_Painting__["a" /* default */], {
	                    key: i + object.name,
	                    pos: object.pos,
	                    playerPos: pos,
	                    angle: object.angle,
	                    size: object.size.filter(value => value !== 0).slice(0, 2),
	                    isVisible: isVisible,
	                    background: object.background,
	                    getTransformRule: getTransformRule
	                }));
	                break;
	            case 'floor':
	                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__floor_Floor__["a" /* default */], {
	                    key: object.name,
	                    pos: object.pos,
	                    playerPos: pos,
	                    isVisible: isVisible,
	                    size: object.size,
	                    getTransformRule: getTransformRule
	                }));
	                break;
	            case 'wall':
	                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__wall_Wall__["a" /* default */], {
	                    key: i + object.name,
	                    pos: object.pos,
	                    playerPos: pos,
	                    isVisible: isVisible,
	                    size: object.size,
	                    getTransformRule: getTransformRule
	                }));
	                break;
	            case 'box':
	                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__box_Box__["a" /* default */], {
	                    key: i + object.name,
	                    pos: object.pos,
	                    playerPos: pos,
	                    isVisible: isVisible,
	                    size: object.size,
	                    mode: object.mode,
	                    getTransformRule: getTransformRule
	                }));
	                break;
	            case 'switcher':
	                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__switcher_Switcher__["a" /* default */], {
	                    key: i + object.name,
	                    pos: object.pos,
	                    size: object.size,
	                    angle: object.angle,
	                    playerPos: pos,
	                    isVisible: isVisible,
	                    isInteractive: collisionView && collisionView[0].obj === object,
	                    getTransformRule: getTransformRule
	                }));
	                break;
	        }
	    }
	    const className = 'player-animation obj' + (playerState === 'walk' ? ' player-animation_walking' : playerState === 'run' ? ' player-animation_running' : '');
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: className },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	            'div',
	            { className: 'scene obj', style: transformRule },
	            renderedObjects
	        )
	    );
	}
	Scene.propTypes = {
	    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
	    playerState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
	    objects: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object).isRequired,
	    getTransformRule: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
	};

	/**
	 * Returns coordinates of a point which is `distance` away from `pos` in the direction `angle`
	 * @param {Array} pos
	 * @param {number} distance
	 * @param {Array} angle
	 * @returns {Array}
	 */
	function getPointPosition({ pos, distance, angle }) {
	    const y = pos[1] + Math.round(distance * Math.sin(Math.PI / 180 * angle[1]));
	    const tempDistance = distance * Math.cos(Math.PI / 180 * angle[1]);
	    const x = pos[0] + Math.round(tempDistance * Math.sin(Math.PI / 180 * angle[0]));
	    const z = pos[2] - Math.round(tempDistance * Math.cos(Math.PI / 180 * angle[0]));
	    return [x, y, z];
	}

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(115);




	const HANDLE_SIZE = [6, 40];
	const BACKGROUND = 'url(src/components/switcher/wood.jpg) 50% 50% / cover';

	class Switcher extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            isOn: false
	        };
	    }

	    render() {
	        const { pos, playerPos, size, angle, isVisible = false, isInteractive = false, getTransformRule } = this.props;
	        const posWithInvertedY = [pos[0], -pos[1], pos[2]];
	        const { isOn } = this.state;
	        const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
	            display: isVisible ? 'block' : 'none'
	        });
	        const classNames = ['switcher obj', isOn ? 'switcher_on' : 'switcher_off', isInteractive ? 'switcher_interactive' : ''].join(' ');
	        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	            'div',
	            { className: classNames, style: styleRules },
	            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                className: 'switcher-plate',
	                pos: [0, 0, 0],
	                parentPos: [posWithInvertedY],
	                playerPos: playerPos,
	                size: [size[0], size[1]],
	                isVisible: isVisible,
	                angle: angle,
	                getTransformRule: getTransformRule,
	                background: BACKGROUND
	            }),
	            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	                'div',
	                { className: 'switcher-handle obj' },
	                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                    pos: [-HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2],
	                    parentPos: [posWithInvertedY],
	                    playerPos: playerPos,
	                    size: [HANDLE_SIZE[1], HANDLE_SIZE[0]],
	                    isVisible: isVisible,
	                    angle: [0, -90, 0],
	                    parentAngle: [angle],
	                    background: BACKGROUND,
	                    getTransformRule: getTransformRule
	                }),
	                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                    pos: [HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2],
	                    parentPos: [posWithInvertedY],
	                    playerPos: playerPos,
	                    size: [HANDLE_SIZE[1], HANDLE_SIZE[0]],
	                    isVisible: isVisible,
	                    angle: [0, 90, 0],
	                    parentAngle: [angle],
	                    background: BACKGROUND,
	                    getTransformRule: getTransformRule
	                }),
	                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                    pos: [0, -HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2],
	                    parentPos: [posWithInvertedY],
	                    playerPos: playerPos,
	                    size: [HANDLE_SIZE[0], HANDLE_SIZE[1]],
	                    isVisible: isVisible,
	                    angle: [90, 0, 0],
	                    parentAngle: [angle],
	                    background: BACKGROUND,
	                    getTransformRule: getTransformRule
	                }),
	                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                    pos: [0, HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2],
	                    parentPos: [posWithInvertedY],
	                    playerPos: playerPos,
	                    size: [HANDLE_SIZE[0], HANDLE_SIZE[1]],
	                    isVisible: isVisible,
	                    angle: [-90, 0, 0],
	                    parentAngle: [angle],
	                    background: BACKGROUND,
	                    getTransformRule: getTransformRule
	                }),
	                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                    pos: [0, 0, HANDLE_SIZE[1]],
	                    parentPos: [posWithInvertedY],
	                    playerPos: playerPos,
	                    size: [HANDLE_SIZE[0], HANDLE_SIZE[0]],
	                    isVisible: isVisible,
	                    angle: [0, 0, 0],
	                    parentAngle: [angle],
	                    background: BACKGROUND,
	                    getTransformRule: getTransformRule
	                })
	            )
	        );
	    }

	    handleClick() {
	        this.setState({ isOn: !this.state.isOn });
	        // this.props.toggleSwitcher({
	        //     id: this.props.id,
	        //     isOn: this.state.isOn
	        // });
	    }
	}/* harmony export */ exports["a"] = Switcher;

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(21);
	__webpack_require__(22);




	// no support for rotated walls for now
	/* harmony default export */ exports["a"] = ({ pos, size, isVisible = true, playerPos, getTransformRule }) => {
	    const posWithInvertedY = [pos[0], -pos[1], pos[2]];
	    const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
	        display: isVisible ? 'block' : 'none'
	    });
	    const background = 'url(src/components/wall/wall.jpg) 50% 50% / cover';

	    // Front-Back-Left-Right
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'wall obj', style: styleRules },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, 0, size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 0, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, 0, -size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 180, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [-size[0] / 2, 0, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, -90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [size[0] / 2, 0, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, 90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        })
	    );
	};

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __WEBPACK_IMPORTED_MODULE_1_react__ && __WEBPACK_IMPORTED_MODULE_1_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_react___default, 'a', __WEBPACK_IMPORTED_MODULE_1_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(37);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __WEBPACK_IMPORTED_MODULE_2_react_dom__ && __WEBPACK_IMPORTED_MODULE_2_react_dom__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_react_dom__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_react_dom__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_2_react_dom___default, 'a', __WEBPACK_IMPORTED_MODULE_2_react_dom___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(20);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __WEBPACK_IMPORTED_MODULE_3_redux__ && __WEBPACK_IMPORTED_MODULE_3_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_3_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_3_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(26);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __WEBPACK_IMPORTED_MODULE_4_react_redux__ && __WEBPACK_IMPORTED_MODULE_4_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_react_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_4_react_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_4_react_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__ = __webpack_require__(103);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions___default = __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__ && __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions___default, 'a', __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_Controls__ = __webpack_require__(99);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_Loop__ = __webpack_require__(100);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_Camera__ = __webpack_require__(98);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers__ = __webpack_require__(101);
	__webpack_require__(102);














	const store = __WEBPACK_IMPORTED_MODULE_3_redux__.createStore(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__["enableBatching"])(__WEBPACK_IMPORTED_MODULE_9__reducers__["a" /* default */]));

	const viewportNode = document.getElementById('viewport');
	var controls = new __WEBPACK_IMPORTED_MODULE_6__lib_Controls__["a" /* default */]({
	    pointerLockerNode: viewportNode
	});

	new __WEBPACK_IMPORTED_MODULE_7__lib_Loop__["a" /* default */](frameRateCoefficient => {
	    const actions = [];
	    const pointerDelta = controls.getPointerDelta();
	    if (pointerDelta.x || pointerDelta.y) {
	        actions.push({
	            type: 'updateViewAngle',
	            pointerDelta
	        });
	    }

	    let angleShift = [];
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]]) {
	        angleShift.push(Math.PI);
	    }
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_S */]]) {
	        angleShift.push(0);
	    }
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_A */]]) {
	        angleShift.push(Math.PI / 2);
	    }
	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* KEY_D */]]) {
	        // hack for angles sum
	        if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]]) {
	            angleShift.push(3 * Math.PI / 2);
	        } else {
	            angleShift.push(-Math.PI / 2);
	        }
	    }

	    if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]] || controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_S */]] || controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_A */]] || controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* KEY_D */]]) {
	        if (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* KEY_SHIFT */]]) {
	            actions.push({ type: 'playerStateRun' });
	        } else {
	            actions.push({ type: 'playerStateWalk' });
	        }
	    } else {
	        actions.push({ type: 'playerStateStop' });
	    }

	    if (angleShift.length) {
	        let reducedAngleShift = 0;
	        for (let i = 0; i < angleShift.length; i++) {
	            reducedAngleShift += angleShift[i];
	        }
	        reducedAngleShift /= angleShift.length;

	        // convert to radians and add
	        reducedAngleShift += store.getState().viewAngle[0] * Math.PI / 180;

	        let step = frameRateCoefficient * (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* KEY_SHIFT */]] ? __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* RUNNING_COEFF */] : 1) * __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* STEP */];
	        actions.push({
	            type: 'updatePlayerPos',
	            shift: [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)]
	        });
	    }
	    if (actions.length) {
	        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__["batchActions"])(actions));
	    }
	}, __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* FPS */], true);

	__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
	    { store: store },
	    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__containers_Camera__["a" /* default */], null)
	), viewportNode);

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);


	/**
	 * Returns collision detection object instance
	 * @param {Object} level - level description object
	 */
	class Collision {
	    constructor(level) {
	        this.broadCells = Collision.getBroadCells(level.boundaries, __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */]);

	        // fill broad cells with corresponding objects
	        for (let k = 0; k < level.objects.length; k++) {
	            const obj = level.objects[k];
	            if (obj.collides === false) {
	                continue;
	            }
	            obj.broadCells = [];
	            const topLeftCellX = Math.min(this.broadCells[0].length - 1, Math.max(0, Math.floor(obj.hitbox[0][0] / __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */])));
	            const topLeftCellZ = Math.min(this.broadCells.length - 1, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */])));
	            const bottomRightCellX = Math.min(this.broadCells[0].length - 1, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */])));
	            const bottomRightCellZ = Math.min(this.broadCells.length - 1, Math.max(0, Math.floor(obj.hitbox[2][1] / __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */])));
	            for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
	                for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
	                    this.broadCells[j][i].objects.push(obj);
	                    obj.broadCells.push([i, j]);
	                }
	            }
	        }
	    }

	    /**
	     * Gets closest cells and counts collisions with objects on them
	     * @param {Array} line - coordinates of initial and final player positions
	     * @returns {Array} - Array of objects with info about collisions
	     */
	    getCollisions(line) {
	        const firstCollision = this.getCollisionPos(line);
	        if (firstCollision.obj && !Collision.vectorsEqual(firstCollision.collisionPoint, firstCollision.newPos)) {
	            // if collision was registered and we didn't stop there, check if rebound also collides with smth
	            const secondCollision = this.getCollisionPos([firstCollision.collisionPoint, firstCollision.newPos]);
	            if (secondCollision.obj) {
	                // if it does, stop right there (no need to check further collisions)
	                return [firstCollision, Object.assign(secondCollision, { newPos: secondCollision.collisionPoint })];
	            }
	        }
	        return [firstCollision];
	    }

	    /**
	     * Returns an object with info about collision
	     * @param {Array} line - coordinates of initial and final subject positions
	     * @returns {Object} - object with info about collision
	     */
	    getCollisionPos(line) {
	        let result = { newPos: line[1] };
	        // if moving line length is 0
	        if (Collision.vectorsEqual(line[0], line[1])) {
	            return result;
	        }

	        // get objects from broad cells relative to subject's movement
	        const objectsSet = this.getRelativeObjectsSet(line, __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */]);

	        const intersections = [];
	        // search for collisions with given objects
	        for (let obj of objectsSet) {
	            // const lineIntersections = [];
	            for (let i = 0; i < 3; i++) {
	                // not checking collision on y-axis
	                if (i === 1) {
	                    continue;
	                }
	                if (line[0][i] === line[1][i]) {
	                    continue;
	                }
	                let collisionCoords = [];
	                let direction;
	                if (line[0][i] > line[1][i]) {
	                    collisionCoords[i] = obj.hitbox[i][1];
	                    if (line[0][i] >= collisionCoords[i] && line[1][i] <= collisionCoords[i]) {
	                        collisionCoords = Collision.getCoordsFromCanonical(line[0], line[1], collisionCoords);
	                        direction = [i, 1];
	                    }
	                } else {
	                    collisionCoords[i] = obj.hitbox[i][0];
	                    if (line[0][i] <= collisionCoords[i] && line[1][i] >= collisionCoords[i]) {
	                        collisionCoords = Collision.getCoordsFromCanonical(line[0], line[1], collisionCoords);
	                        direction = [i, -1];
	                    }
	                }
	                if (direction && (i === 0 && collisionCoords[2] >= obj.hitbox[2][0] && collisionCoords[2] <= obj.hitbox[2][1] || i === 2 && collisionCoords[0] >= obj.hitbox[0][0] && collisionCoords[0] <= obj.hitbox[0][1])) {
	                    intersections.push({
	                        coords: collisionCoords,
	                        direction,
	                        obj,
	                        distance: Collision.getDistance(line[0], collisionCoords)
	                    });
	                }
	            }
	        }
	        if (intersections.length) {
	            let minDistanceIntersections = [];
	            let minDistance = Infinity;
	            for (let j = 0; j < intersections.length; j++) {
	                if (intersections[j].distance < minDistance) {
	                    minDistance = intersections[j].distance;
	                    minDistanceIntersections = [intersections[j]];
	                } else if (intersections[j].distance === minDistance) {
	                    minDistanceIntersections.push(intersections[j]);
	                }
	            }
	            if (minDistanceIntersections.length > 1) {
	                const intersectionPoint = minDistanceIntersections[0].coords;
	                const quadrants = [{
	                    add: [line[1][0] >= intersectionPoint[0] ? 1 : -1, 0, line[1][2] >= intersectionPoint[2] ? 1 : -1]
	                }];
	                quadrants.push({ add: [-quadrants[0].add[0], 0, quadrants[0].add[2]] });
	                quadrants.push({ add: [quadrants[0].add[0], 0, -quadrants[0].add[2]] });
	                for (let i = 0; i < quadrants.length; i++) {
	                    quadrants[i].point = Collision.vectorsAdd(intersectionPoint, quadrants[i].add);
	                }
	                for (let i = 0; i < minDistanceIntersections.length; i++) {
	                    for (let j = 0; j < quadrants.length; j++) {
	                        if (quadrants[j].containedIn) {
	                            continue;
	                        }
	                        if (Collision.contains(minDistanceIntersections[i].obj, quadrants[j].point)) {
	                            quadrants[j].containedIn = minDistanceIntersections[i].obj;
	                        }
	                    }
	                }
	                // if quadrant which contains the movement endpoint is blocked by wall,
	                // check where to go next
	                if (quadrants[0].containedIn) {
	                    result = {
	                        obj: quadrants[0].containedIn
	                    };
	                    // if the two adjacent quadrants are also blocked, stay at the collision point
	                    if (quadrants[1].containedIn && quadrants[2].containedIn) {
	                        result.collisionPoint = Collision.vectorsAdd(intersectionPoint, [-quadrants[0].add[0], 0, -quadrants[0].add[2]]);
	                        result.newPos = result.collisionPoint;
	                        // if one of the adjacent quadrants is empty of obstacles, go there
	                    } else if (quadrants[1].containedIn) {
	                            result.collisionPoint = Collision.vectorsAdd(intersectionPoint, [0, 0, quadrants[2].add[2]]);
	                            result.newPos = [line[1][0], result.collisionPoint[1], result.collisionPoint[2]];
	                        } else if (quadrants[2].containedIn) {
	                            result.collisionPoint = Collision.vectorsAdd(intersectionPoint, [quadrants[1].add[0], 0, 0]);
	                            result.newPos = [result.collisionPoint[0], result.collisionPoint[1], line[1][2]];
	                            // if the two adjacent quadrants are empty, chose between them
	                        } else {
	                                result.collisionPoint = Collision.vectorsAdd(intersectionPoint, [-quadrants[0].add[0], 0, -quadrants[0].add[2]]);
	                                if (Math.abs(line[1][0] - result.collisionPoint[0]) >= Math.abs(line[1][2] - result.collisionPoint[2])) {
	                                    result.newPos = [result.collisionPoint[0], result.collisionPoint[1], line[1][2]];
	                                } else {
	                                    result.newPos = [line[1][0], result.collisionPoint[1], result.collisionPoint[2]];
	                                }
	                            }
	                }
	            } else {
	                const intersection = minDistanceIntersections[0];
	                const collisionPoint = intersection.coords;
	                collisionPoint[intersection.direction[0]] += intersection.direction[1];
	                const positionAfterIntersection = [...collisionPoint];
	                // if obstacle line lies along axis Z (has constant X-coord)
	                if (intersection.direction[0] === 0) {
	                    positionAfterIntersection[2] = line[1][2];
	                    // if obstacle line lies along axis X (has constant Z-coord)
	                } else if (intersection.direction[0] === 2) {
	                        positionAfterIntersection[0] = line[1][0];
	                    }

	                result = {
	                    obj: intersection.obj,
	                    collisionPoint,
	                    newPos: positionAfterIntersection
	                };
	            }
	        }
	        return result;
	    }

	    /**
	     * Returns array of objects which are first to intersect with `line` in 3d space (or null if there's none)
	     * @param {Array} line
	     * @returns {null|Array}
	     */
	    getCollisionView(line) {
	        if (Collision.vectorsEqual(line[0], line[1])) {
	            return null;
	        }

	        const intersections = [];
	        // get objects from broad cells relative to subject's movement
	        const objectsSet = this.getRelativeObjectsSet(line, __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */]);
	        for (const obj of objectsSet) {
	            for (let i = 0; i < 3; i++) {
	                if (line[0][i] === line[1][i]) {
	                    continue;
	                }
	                let collisionCoords = [];
	                if (line[0][i] > line[1][i]) {
	                    const tempAxis = obj.pos[i] + obj.size[i] / 2;
	                    if (line[0][i] >= tempAxis && line[1][i] <= tempAxis) {
	                        collisionCoords[i] = tempAxis;
	                        collisionCoords = Collision.getCoordsFromCanonical(line[0], line[1], collisionCoords);
	                    }
	                } else {
	                    const tempAxis = obj.pos[i] - obj.size[i] / 2;
	                    if (line[0][i] <= tempAxis && line[1][i] >= tempAxis) {
	                        collisionCoords[i] = tempAxis;
	                        collisionCoords = Collision.getCoordsFromCanonical(line[0], line[1], collisionCoords);
	                    }
	                }
	                if (collisionCoords.length && collisionCoords.every((axisValue, i) => axisValue >= obj.pos[i] - obj.size[i] / 2 && axisValue <= obj.pos[i] + obj.size[i] / 2)) {
	                    intersections.push({
	                        coords: collisionCoords,
	                        obj,
	                        distance: Collision.getDistance(line[0], collisionCoords)
	                    });
	                }
	            }
	        }
	        if (intersections.length) {
	            let minDistanceIntersections = [];
	            let minDistance = Infinity;
	            for (let i = 0; i < intersections.length; i++) {
	                if (intersections[i].distance < minDistance) {
	                    minDistance = intersections[i].distance;
	                    minDistanceIntersections = [intersections[i]];
	                } else if (intersections[i].distance === minDistance) {
	                    minDistanceIntersections.push(intersections[i]);
	                }
	            }
	            return minDistanceIntersections;
	        }
	        return null;
	    }

	    /**
	     * Returns set of objects that can potentially collide with line2d
	     * @param {Array} line - coordinates of initial and final subject positions
	     * @param {Array} broadCellSize - maximum cell size
	     * @returns {Set} - js Set of objects, that can possibly collide with the subject
	     */
	    getRelativeObjectsSet(line, broadCellSize) {
	        const relativeBroadCells = [[Math.floor(line[0][0] / broadCellSize), Math.floor(line[0][2] / broadCellSize)], [Math.floor(line[1][0] / broadCellSize), Math.floor(line[1][2] / broadCellSize)]];
	        // if subject moved to diagonal cell, include two adjacent cells
	        if (relativeBroadCells[0][0] !== relativeBroadCells[1][0] && relativeBroadCells[0][1] !== relativeBroadCells[1][1]) {
	            relativeBroadCells.push([relativeBroadCells[0][0], relativeBroadCells[1][1]], [relativeBroadCells[1][0], relativeBroadCells[0][1]]);
	        }
	        // include unique objects to objects set
	        const objectsSet = new Set();
	        for (let i = 0; i < relativeBroadCells.length; i++) {
	            const row = Math.max(Math.min(relativeBroadCells[i][1], this.broadCells.length - 1), 0);
	            const column = Math.max(Math.min(relativeBroadCells[i][0], this.broadCells[row].length - 1), 0);
	            const broadCellObjects = this.broadCells[row][column].objects;
	            for (let j = 0; j < broadCellObjects.length; j++) {
	                objectsSet.add(broadCellObjects[j]);
	            }
	        }
	        return objectsSet;
	    }

	    /**
	     * Returns array of cells which divide level field
	     * @param {Array} boundaries - level size
	     * @param {number} broadCellSize - maximum cell size
	     * @returns {Array} - array of cells
	     */
	    static getBroadCells(boundaries, broadCellSize) {
	        const broadCells = [];

	        let y = 0;
	        let j = 0;

	        do {
	            broadCells[j] = [];
	            let nextY = Math.min(y + broadCellSize, boundaries[2]);
	            let x = 0;
	            let i = 0;
	            do {
	                let nextX = Math.min(x + broadCellSize, boundaries[0]);
	                broadCells[j][i] = {
	                    objects: [],
	                    coords: [[x, y], [nextX, y], [nextX, nextY], [x, nextY]]
	                };
	                x = nextX;
	                i++;
	            } while (x < boundaries[0]);
	            y = nextY;
	            j++;
	        } while (y < boundaries[2]);

	        return broadCells;
	    }

	    /**
	     * Returns all coordinates of a point which lays on a line which connects `point1` and `point2`
	     * given one of them
	     * @param {Array} point1
	     * @param {Array} point2
	     * @param {Array} data - array with one known axis coordinate, i.e. `[undefined, 100, undefined]`
	     * @returns {Array}
	     */
	    static getCoordsFromCanonical(point1, point2, data) {
	        const dataIndex = data.findIndex(Boolean);
	        const tempValue = (data[dataIndex] - point1[dataIndex]) / (point2[dataIndex] - point1[dataIndex]);
	        const result = [];
	        for (let i = 0; i < 3; i++) {
	            if (i === dataIndex) {
	                result.push(data[dataIndex]);
	            } else {
	                result.push(point1[i] === point2[i] ? point1[i] : tempValue * (point2[i] - point1[i]) + point1[i]);
	            }
	        }
	        return result;
	    }

	    /**
	     * Returns distance between two points
	     * @param {Array} point1
	     * @param {Array} point2
	     * @returns {number}
	     */
	    static getDistance(point1, point2) {
	        return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2) + Math.pow(point1[2] - point2[2], 2));
	    }

	    /**
	     * Returns true if point lies inside given object
	     * @param {Object} obj
	     * @param {Array} point
	     * @returns {boolean}
	     */
	    static contains(obj, point) {
	        return point[0] >= obj.hitbox[0][0] && point[0] <= obj.hitbox[0][1] && point[2] >= obj.hitbox[2][0] && point[2] <= obj.hitbox[2][1];
	    }

	    /**
	     * Returns 2d vectors sum
	     * @param {Array} v1
	     * @param {Array} v2
	     * @returns {Array}
	     */
	    static vectorsAdd(v1, v2) {
	        return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
	    }

	    /**
	     * Retruns true if two 2d vectors are identical
	     * @param {Array} v1
	     * @param {Array} v2
	     * @returns {boolean}
	     */
	    static vectorsEqual(v1, v2) {
	        return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2];
	    }
	}/* harmony export */ exports["a"] = Collision;

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony export */ exports["a"] = getTransformRule;const AXIS = ['X', 'Y', 'Z'];

	function getTransformRule(params) {
	    let transform = '';
	    if (params.pos) {
	        transform += `translate3d(${ params.pos[0] }px,${ params.pos[1] }px,${ params.pos[2] }px)`;
	    }
	    if (params.angle) {
	        for (let axis = 0; axis < params.angle.length; axis++) {
	            transform += ` rotate${ AXIS[axis] }(${ params.angle[axis] }deg)`;
	        }
	    }
	    return { transform };
	}

/***/ },

/***/ 113:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 114:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 115:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const FPS = 60;/* harmony export */ exports["k"] = FPS;
	const KEY_W = 87;/* harmony export */ exports["a"] = KEY_W;
	const KEY_S = 83;/* harmony export */ exports["b"] = KEY_S;
	const KEY_A = 65;/* harmony export */ exports["c"] = KEY_A;
	const KEY_D = 68;/* harmony export */ exports["d"] = KEY_D;
	const KEY_SHIFT = 16;/* harmony export */ exports["e"] = KEY_SHIFT;
	const STEP = 4;/* harmony export */ exports["j"] = STEP;
	const RUNNING_COEFF = 1.5;/* harmony export */ exports["i"] = RUNNING_COEFF;
	const SENSITIVITY = 0.5;/* harmony export */ exports["h"] = SENSITIVITY;
	const BROAD_CELL_SIZE = 250;/* harmony export */ exports["f"] = BROAD_CELL_SIZE;
	const HAND_LENGTH = 70;/* harmony export */ exports["g"] = HAND_LENGTH;

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(17);
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	__webpack_require__(22);
	__webpack_require__(113);



	const MAX_SIMPLE_LIGHT_SIZE = 50;

	/* harmony default export */ exports["a"] = ({
	    className = '',
	    pos,
	    parentPos,
	    playerPos,
	    isVisible = true,
	    size,
	    angle = [0, 0, 0],
	    parentAngle,
	    background,
	    getTransformRule
	}) => {
	    let backgroundStyle = {
	        background: 'none'
	        // background,
	        // opacity: 0
	    };
	    // if (false && isVisible) {
	    if (isVisible) {
	        const relativePos = parentPos ? [pos].concat(parentPos).reduce(vectorsAdd3D) : pos;
	        const relativeAngle = parentAngle ? [angle].concat(parentAngle).reduce(vectorsAdd3D) : angle;
	        const hasSimpleLight = size[0] <= MAX_SIMPLE_LIGHT_SIZE && size[1] <= MAX_SIMPLE_LIGHT_SIZE;
	        if (hasSimpleLight) {
	            backgroundStyle = getPlayerSpotLightBackground({
	                distance: vectorLength3D([playerPos[0] - relativePos[0], playerPos[1] + relativePos[1], playerPos[2] - relativePos[2]]),
	                background,
	                hasSimpleLight
	            });
	        } else {
	            // front
	            if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
	                if (playerPos[2] > relativePos[2]) {
	                    backgroundStyle = getPlayerSpotLightBackground({
	                        pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
	                        distance: playerPos[2] - relativePos[2],
	                        background
	                    });
	                }
	                // back
	            } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
	                    if (playerPos[2] < relativePos[2]) {
	                        backgroundStyle = getPlayerSpotLightBackground({
	                            pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
	                            distance: relativePos[2] - playerPos[2],
	                            background
	                        });
	                    }
	                    // left
	                } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
	                        if (playerPos[0] < relativePos[0]) {
	                            backgroundStyle = getPlayerSpotLightBackground({
	                                pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
	                                distance: relativePos[0] - playerPos[0],
	                                background
	                            });
	                        }
	                        // right
	                    } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
	                            if (playerPos[0] > relativePos[0]) {
	                                backgroundStyle = getPlayerSpotLightBackground({
	                                    pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
	                                    distance: playerPos[0] - relativePos[0],
	                                    background
	                                });
	                            }
	                            // top
	                        } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
	                                if (playerPos[1] > -relativePos[1]) {
	                                    backgroundStyle = getPlayerSpotLightBackground({
	                                        pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
	                                        distance: playerPos[1] + relativePos[1],
	                                        background
	                                    });
	                                }
	                            }
	            // todo bottom
	        }
	    }
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: `plain obj ${ className }`, style: _extends({
	                display: isVisible ? 'block' : 'none'
	            }, getTransformRule({ pos, angle }), {
	                width: size[0],
	                height: size[1],
	                margin: `-${ size[1] / 2 }px 0 0 -${ size[0] / 2 }px`,
	                background: backgroundStyle.background
	            }) },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'plain-overlay', style: {
	                opacity: 'opacity' in backgroundStyle ? backgroundStyle.opacity : 1
	            } })
	    );
	};

	// const MAX_COLORS_COUNT = 20;
	// function getSpotLightColorsString(minOpacity = 0, colorsCount = MAX_COLORS_COUNT) {
	//     const result = [];
	//     for (let i = 0; i < colorsCount; i++) {
	//         const opacity = minOpacity + (i + 1) * (1 - minOpacity) / colorsCount;
	//         result.push(`rgba(0, 0, 0, ${opacity}) ${i * 100 / colorsCount}%`);
	//         result.push(`rgba(0, 0, 0, ${opacity}) ${(i + 1) * 100 / colorsCount}%`);
	//     }
	//     return result.join(', ');
	// }

	function getPlayerSpotLightBackground(params) {
	    return getSpotLightBackground(_extends({}, params, { radius: 1.1 * __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* BROAD_CELL_SIZE */] }));
	}

	function getSpotLightBackground({ pos, distance, background, radius, hasSimpleLight }) {
	    const ratio = Math.max(0, radius - distance) / radius;
	    if (ratio) {
	        const result = {
	            opacity: 1 - ratio
	        };
	        // const size = (2 + ratio) * radius / 2;
	        // const colorsCount = Math.round((1 + ratio) * MAX_COLORS_COUNT / 2);
	        // return {
	        //     background: `radial-gradient(${size}px at ${pos[0]}px ${pos[1]}px, ` +
	        //         `${getSpotLightColorsString(1 - ratio, colorsCount)})`
	        // };
	        if (!hasSimpleLight) {
	            const size = (2 + ratio) * radius / 2 * 10;
	            result.background = `url(src/components/plain/mask.svg) ${ pos[0] - size / 2 }px ${ pos[1] - size / 2 }px / ${ size }px no-repeat, ` + background;
	        } else {
	            result.background = background;
	        }
	        return result;
	    } else {
	        return {
	            background: '#000'
	        };
	    }
	}

	function vectorLength3D(v) {
	    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
	}

	function vectorsAdd3D(v1, v2) {
	    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
	}

/***/ },

/***/ 22:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Collision__ = __webpack_require__(111);


	const level = {
	    boundaries: [2500, null, 2500],
	    player: {
	        pos: [1250, 100, 250],
	        size: [50, 150, 50],
	        angle: [0, 0, 0]
	    },
	    objects: [{
	        name: 'wall_001',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [2000, 100, 250]
	    }, {
	        name: 'wall_002',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [250, 100, 500]
	    }, {
	        name: 'wall_003',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [750, 100, 500]
	    }, {
	        name: 'wall_004',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1750, 100, 500]
	    }, {
	        name: 'wall_005',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [500, 100, 750]
	    }, {
	        name: 'wall_006',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [2000, 100, 750]
	    }, {
	        name: 'wall_007',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1250, 100, 1000]
	    }, {
	        name: 'wall_008',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [1000, 100, 1250]
	    }, {
	        name: 'dickbutt',
	        type: 'painting',
	        size: [50, 50, 0],
	        pos: [1026, 100, 1250],
	        angle: [0, 90, 0],
	        background: 'url(src/assets/images/misc/dickbutt.png) 50% 50% / contain',
	        collides: false
	    }, {
	        name: 'wall_009',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1250, 100, 1500]
	    }, {
	        name: 'wall_010',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [2250, 100, 1500]
	    }, {
	        name: 'wall_011',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [500, 100, 1750]
	    }, {
	        name: 'wall_012',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [2000, 100, 1750]
	    }, {
	        name: 'wall_013',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [750, 100, 2000]
	    }, {
	        name: 'wall_014',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1750, 100, 2000]
	    }, {
	        name: 'wall_015',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [500, 100, 2250]
	    }, {
	        name: 'box_001',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [200, 75, 200],
	        mode: 1
	    }, {
	        name: 'box_002',
	        type: 'box',
	        size: [50, 50, 50],
	        pos: [175, 175, 175],
	        mode: 2
	    }, {
	        name: 'box_003',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [2425, 75, 75],
	        mode: 3
	    }, {
	        name: 'box_004',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [1300, 75, 900],
	        mode: 2
	    }, {
	        name: 'box_005',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [2110, 75, 1975],
	        mode: 1
	    }, {
	        name: 'box_006',
	        type: 'box',
	        size: [100, 150, 100],
	        pos: [900, 75, 2400],
	        mode: 2
	    }, {
	        name: 'box_006',
	        type: 'box',
	        size: [90, 70, 90],
	        pos: [900, 185, 2390],
	        mode: 3
	    }, {
	        name: 'switcher_01',
	        type: 'switcher',
	        pos: [1250, 100, 26],
	        size: [40, 60, 100],
	        angle: [0, 0, 0]
	    }]
	};

	// generate border walls
	for (let x = 250; x < level.boundaries[0]; x += 500) {
	    for (let z = 0; z <= level.boundaries[2]; z += level.boundaries[2]) {
	        level.objects.push({
	            name: 'border wall ' + x + '_' + z,
	            type: 'wall',
	            size: [500, 200, 50],
	            pos: [x, 100, z]
	        });
	    }
	}
	for (let z = 250; z < level.boundaries[2]; z += 500) {
	    for (let x = 0; x <= level.boundaries[0]; x += level.boundaries[0]) {
	        level.objects.push({
	            name: 'border wall ' + x + '_' + z,
	            type: 'wall',
	            size: [50, 200, 500],
	            pos: [x, 100, z]
	        });
	    }
	}

	// generate floor panels
	for (let z = 0; z < level.boundaries[2]; z += 500) {
	    for (let x = 0; x < level.boundaries[0]; x += 500) {
	        level.objects.push({
	            name: 'floor tile ' + z + '_' + x,
	            type: 'floor',
	            size: [500, 0, 500],
	            pos: [x + 250, 0, z + 250],
	            collides: false
	        });
	    }
	}

	// calculate 2d points coordinates for objects hitboxes
	for (let i = 0; i < level.objects.length; i++) {
	    const obj = level.objects[i];
	    // enlarge object's hitbox to simulate players volume
	    if (obj.collides === false) {
	        continue;
	    }
	    const sizeXHalf = obj.size[0] / 2;
	    const sizeYHalf = obj.size[1] / 2;
	    const sizeZHalf = obj.size[2] / 2;
	    const playerXHalf = level.player.size[0] / 2;
	    const playerYHalf = level.player.size[1] / 2;
	    const playerZHalf = level.player.size[2] / 2;
	    obj.hitbox = [[obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[0] + sizeXHalf + playerXHalf], [obj.pos[1] - sizeYHalf - playerYHalf, obj.pos[1] + sizeYHalf + playerYHalf], [obj.pos[2] - sizeZHalf - playerZHalf, obj.pos[2] + sizeZHalf + playerZHalf]];
	}

	level.collision = new __WEBPACK_IMPORTED_MODULE_0__lib_Collision__["a" /* default */](level);

	/* harmony default export */ exports["a"] = level;

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(26);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __WEBPACK_IMPORTED_MODULE_1_react_redux__ && __WEBPACK_IMPORTED_MODULE_1_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_react_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_1_react_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_scene_Scene__ = __webpack_require__(107);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(112);





	const Camera = ({ pos, playerState, viewAngle, objects }) => {
	    const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({
	        pos: [0, 0, 600],
	        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
	    });
	    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	        'div',
	        { className: 'camera', style: transformRule },
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_scene_Scene__["a" /* default */], {
	            pos: pos,
	            playerState: playerState,
	            viewAngle: viewAngle,
	            objects: objects,
	            getTransformRule: __WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */]
	        })
	    );
	};
	Camera.propTypes = {
	    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
	    playerState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
	    viewAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
	    objects: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object).isRequired
	};

	function mapStateToProps(state) {
	    return {
	        pos: state.pos,
	        playerState: state.playerState,
	        viewAngle: state.viewAngle,
	        objects: state.objects
	    };
	}

	/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Camera);

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);


	class Controls {
	    constructor({ pointerLockerNode }) {
	        this.keyPressed = {
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* KEY_W */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* KEY_S */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_A */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* KEY_D */]]: false,
	            [__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* KEY_SHIFT */]]: false
	        };

	        document.addEventListener('keydown', e => {
	            if (e.keyCode in this.keyPressed) {
	                this.keyPressed[e.keyCode] = true;
	            }
	        });

	        document.addEventListener('keyup', e => {
	            if (e.keyCode in this.keyPressed) {
	                this.keyPressed[e.keyCode] = false;
	            }
	        });

	        this.pointerDelta = { x: 0, y: 0 };

	        if (pointerLockerNode.requestPointerLock) {
	            this.updatePointerDelta = function (e) {
	                this.pointerDelta.x -= e.movementX;
	                this.pointerDelta.y -= e.movementY;
	            }.bind(this);

	            document.addEventListener('pointerlockchange', () => {
	                if (document.pointerLockElement === pointerLockerNode) {
	                    pointerLockerNode.addEventListener('mousemove', this.updatePointerDelta);
	                } else {
	                    pointerLockerNode.removeEventListener('mousemove', this.updatePointerDelta);
	                }
	            });

	            pointerLockerNode.addEventListener('click', e => {
	                pointerLockerNode.requestPointerLock();
	            });
	        } else {
	            let lastCursorPos = null;

	            this.updatePointerDelta = function () {
	                if (lastCursorPos) {
	                    this.pointerDelta.x += lastCursorPos.x - e.clientX;
	                    this.pointerDelta.y += lastCursorPos.y - e.clientY;
	                }
	                lastCursorPos = {
	                    x: e.clientX,
	                    y: e.clientY
	                };
	            }.bind(this);

	            document.addEventListener('mousemove', this.updatePointerDelta);
	        }
	    }

	    getPointerDelta() {
	        const pointerDelta = this.pointerDelta;
	        this.pointerDelta = { x: 0, y: 0 };
	        return pointerDelta;
	    }
	}/* harmony export */ exports["a"] = Controls;

/***/ }

},[110]);