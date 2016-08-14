webpackJsonp([1],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(20);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __WEBPACK_IMPORTED_MODULE_1_redux__ && __WEBPACK_IMPORTED_MODULE_1_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_1_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_level__ = __webpack_require__(109);




	// fix lack of default parameters support in webpack 2
	const level = __WEBPACK_IMPORTED_MODULE_2__levels_level__["a" /* default */];

	function viewAngle(state = level.player.angle, action) {
	    switch (action.type) {
	        case 'updateViewAngle':
	            let viewAngle = [state[0] - action.pointerDelta.x * __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* SENSITIVITY */], Math.min(Math.max(state[1] + action.pointerDelta.y * __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* SENSITIVITY */], -90), 90), 0];
	            viewAngle[0] %= 360;
	            return viewAngle;
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
	            const collisions = level.collision.getCollisions([[state[0], state[2]], [newPos[0], newPos[2]]]);
	            // get last collision result as new player position
	            const collisionReboundPos = collisions[collisions.length - 1].newPos;
	            return [collisionReboundPos[0], newPos[1], collisionReboundPos[1]];
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
	    switch (action.type) {
	        default:
	            return state;
	    }
	}

	/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
	    viewAngle,
	    pos: playerPosition,
	    playerState,
	    objects
	});

/***/ },

/***/ 101:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 102:
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
	            pos: [0, -size[1] / 2, size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 0, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1] / 2, -size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 180, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [-size[0] / 2, -size[1] / 2, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, -90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [size[0] / 2, -size[1] / 2, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, 90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        playerPos[1] > pos[1] + size[1] / 2 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1], 0],
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

/***/ 103:
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

/***/ 104:
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

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__painting_Painting__ = __webpack_require__(104);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__floor_Floor__ = __webpack_require__(103);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wall_Wall__ = __webpack_require__(107);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__box_Box__ = __webpack_require__(102);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__switcher_Switcher__ = __webpack_require__(106);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(17);
	/* harmony export */ exports["a"] = Scene;__webpack_require__(22);
	__webpack_require__(113);









	function Scene({ pos, playerState, objects, getTransformRule }) {
	    const transformRule = getTransformRule({
	        pos: [-pos[0], pos[1], -pos[2]]
	    });
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
	                    angle: object.angle,
	                    playerPos: pos,
	                    isVisible: isVisible,
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

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_Plain__ = __webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(114);




	const SIZE = [40, 60];
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
	        const { pos, playerPos, angle, isVisible = false, getTransformRule } = this.props;
	        const posWithInvertedY = [pos[0], -pos[1], pos[2]];
	        const { isOn } = this.state;
	        const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
	            display: isVisible ? 'block' : 'none'
	        });
	        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	            'div',
	            { className: `switcher obj ${ isOn ? 'switcher_on' : 'switcher_off' }`, style: styleRules },
	            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	                className: 'switcher-plate',
	                pos: [0, 0, 0],
	                parentPos: [posWithInvertedY],
	                playerPos: playerPos,
	                size: SIZE,
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

/***/ 107:
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
	            pos: [0, -size[1] / 2, size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 0, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [0, -size[1] / 2, -size[2] / 2],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: size,
	            angle: [0, 180, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [-size[0] / 2, -size[1] / 2, 0],
	            parentPos: [posWithInvertedY],
	            playerPos: playerPos,
	            size: [size[2], size[1]],
	            angle: [0, -90, 0],
	            getTransformRule: getTransformRule,
	            background: background
	        }),
	        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_Plain__["a" /* default */], {
	            pos: [size[0] / 2, -size[1] / 2, 0],
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

/***/ 108:
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
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_Controls__ = __webpack_require__(98);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_Loop__ = __webpack_require__(99);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Camera__ = __webpack_require__(97);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers__ = __webpack_require__(100);
	__webpack_require__(101);











	const store = __WEBPACK_IMPORTED_MODULE_3_redux__.createStore(__WEBPACK_IMPORTED_MODULE_8__reducers__["a" /* default */]);

	const viewportNode = document.getElementById('viewport');
	var controls = new __WEBPACK_IMPORTED_MODULE_5__lib_Controls__["a" /* default */]({
	    pointerLockerNode: viewportNode
	});

	new __WEBPACK_IMPORTED_MODULE_6__lib_Loop__["a" /* default */](frameRateCoefficient => {
	    const pointerDelta = controls.getPointerDelta();
	    if (pointerDelta.x || pointerDelta.y) {
	        store.dispatch({
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
	            store.dispatch({ type: 'playerStateRun' });
	        } else {
	            store.dispatch({ type: 'playerStateWalk' });
	        }
	    } else {
	        store.dispatch({ type: 'playerStateStop' });
	    }

	    if (angleShift.length) {
	        let reducedAngleShift = 0;
	        for (let i = 0; i < angleShift.length; i++) {
	            reducedAngleShift += angleShift[i];
	        }
	        reducedAngleShift /= angleShift.length;

	        // convert to radians and add
	        reducedAngleShift += store.getState().viewAngle[0] * Math.PI / 180;

	        let step = frameRateCoefficient * (controls.keyPressed[__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* KEY_SHIFT */]] ? __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* RUNNING_STEP */] : __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* STEP */]);
	        store.dispatch({
	            type: 'updatePlayerPos',
	            shift: [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)]
	        });
	    }
	}, __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* FPS */], true);

	__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
	    { store: store },
	    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_Camera__["a" /* default */], null)
	), viewportNode);

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_Collision__ = __webpack_require__(110);


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
	        pos: [2000, 0, 250]
	    }, {
	        name: 'wall_002',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [250, 0, 500]
	    }, {
	        name: 'wall_003',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [750, 0, 500]
	    }, {
	        name: 'wall_004',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1750, 0, 500]
	    }, {
	        name: 'wall_005',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [500, 0, 750]
	    }, {
	        name: 'wall_006',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [2000, 0, 750]
	    }, {
	        name: 'wall_007',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1250, 0, 1000]
	    }, {
	        name: 'wall_008',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [1000, 0, 1250]
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
	        pos: [1250, 0, 1500]
	    }, {
	        name: 'wall_010',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [2250, 0, 1500]
	    }, {
	        name: 'wall_011',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [500, 0, 1750]
	    }, {
	        name: 'wall_012',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [2000, 0, 1750]
	    }, {
	        name: 'wall_013',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [750, 0, 2000]
	    }, {
	        name: 'wall_014',
	        type: 'wall',
	        size: [500, 200, 50],
	        pos: [1750, 0, 2000]
	    }, {
	        name: 'wall_015',
	        type: 'wall',
	        size: [50, 200, 500],
	        pos: [500, 0, 2250]
	    }, {
	        name: 'box_001',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [200, 0, 200],
	        mode: 1
	    }, {
	        name: 'box_002',
	        type: 'box',
	        size: [50, 50, 50],
	        pos: [175, 150, 175],
	        mode: 2
	    }, {
	        name: 'box_003',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [2425, 0, 75],
	        mode: 3
	    }, {
	        name: 'box_004',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [1300, 0, 900],
	        mode: 2
	    }, {
	        name: 'box_005',
	        type: 'box',
	        size: [150, 150, 150],
	        pos: [2110, 0, 1975],
	        mode: 1
	    }, {
	        name: 'box_006',
	        type: 'box',
	        size: [100, 150, 100],
	        pos: [900, 0, 2400],
	        mode: 2
	    }, {
	        name: 'box_006',
	        type: 'box',
	        size: [90, 70, 90],
	        pos: [900, 150, 2390],
	        mode: 3
	    }, {
	        name: 'switcher_01',
	        type: 'switcher',
	        pos: [1250, 100, 26],
	        size: [50, 0, 100],
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
	            pos: [x, 0, z]
	        });
	    }
	}
	for (let z = 250; z < level.boundaries[2]; z += 500) {
	    for (let x = 0; x <= level.boundaries[0]; x += level.boundaries[0]) {
	        level.objects.push({
	            name: 'border wall ' + x + '_' + z,
	            type: 'wall',
	            size: [50, 200, 500],
	            pos: [x, 0, z]
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
	    const sizeZHalf = obj.size[2] / 2;
	    const playerXHalf = level.player.size[0] / 2;
	    const playerZHalf = level.player.size[2] / 2;
	    obj.hitbox = [[obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[2] - sizeZHalf - playerZHalf], [obj.pos[0] + sizeXHalf + playerXHalf, obj.pos[2] - sizeZHalf - playerZHalf], [obj.pos[0] + sizeXHalf + playerXHalf, obj.pos[2] + sizeZHalf + playerZHalf], [obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[2] + sizeZHalf + playerZHalf]];
	}

	level.collision = new __WEBPACK_IMPORTED_MODULE_0__lib_Collision__["a" /* default */](level);

	/* harmony default export */ exports["a"] = level;

/***/ },

/***/ 110:
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
	            const topLeftCellZ = Math.min(this.broadCells.length - 1, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */])));
	            const bottomRightCellX = Math.min(this.broadCells[0].length - 1, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */])));
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
	     * @param {Array} line2d - coordinates of initial and final player positions
	     * @returns {Array} - Array of objects with info about collisions
	     */
	    getCollisions(line2d) {
	        const firstCollision = this.getCollision(line2d);
	        if (firstCollision.obj && !Collision.vectorsEqual2D(firstCollision.collisionPoint, firstCollision.newPos)) {
	            // if collision was registered and we didn't stop there, check if rebound also collides with smth
	            const secondCollision = this.getCollision([firstCollision.collisionPoint, firstCollision.newPos]);
	            if (secondCollision.obj) {
	                // if it does, stop right there (no need to check further collisions)
	                return [firstCollision, Object.assign(secondCollision, { newPos: secondCollision.collisionPoint })];
	            }
	        }
	        return [firstCollision];
	    }

	    /**
	     * Returns an object with info about collision
	     * @param {Array} line2d - coordinates of initial and final subject positions
	     * @returns {Object} - object with info about collision
	     */
	    getCollision(line2d) {
	        let result = { newPos: line2d[1] };
	        // if (line2d[1][0] > 975 || t) {
	        //     debugger;
	        // }
	        // if moving line length is 0
	        if (line2d[0][0] === line2d[1][0] && line2d[0][1] === line2d[1][1]) {
	            return result;
	        }

	        // get broad cells relative to subject's movement
	        const objectsSet = this.getRelativeObjectsSet(line2d, __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* BROAD_CELL_SIZE */]);

	        const intersections = [];
	        // search for collisions with given objects
	        for (let obj of objectsSet) {
	            const lineIntersections = [];
	            for (let i = 0; i < 4; i++) {
	                const obstacleLine = [obj.hitbox[i], obj.hitbox[i < 3 ? i + 1 : 0]];
	                // check if obstacle line lies along axis X (has constant Z-coord)
	                if (obstacleLine[0][1] === obstacleLine[1][1]) {
	                    const z = obstacleLine[0][1];
	                    // check if line2d intersects with z-line
	                    if ((line2d[0][1] - z) * (line2d[1][1] - z) > 0) {
	                        continue;
	                    }
	                    // check if line2d lies along obstacleLine
	                    if (line2d[0][1] === z && line2d[1][1] === z) {
	                        continue;
	                    }
	                    // get x-coordinate
	                    let x;
	                    if (line2d[0][0] === line2d[1][0]) {
	                        x = line2d[0][0];
	                    } else {
	                        x = (z - line2d[0][1]) * (line2d[0][0] - line2d[1][0]) / (line2d[0][1] - line2d[1][1]) + line2d[0][0];
	                    }
	                    // check if intersection point lies inside obstacleLine
	                    if ((obstacleLine[0][0] - x) * (obstacleLine[1][0] - x) > 0) {
	                        continue;
	                    }
	                    lineIntersections.push({
	                        x,
	                        z,
	                        obj,
	                        wallIndex: i,
	                        distanceFromPos: Collision.getDistance(line2d[0], [x, z])
	                    });
	                    // check if obstacle line lies along axis Z (has constant X-coord)
	                } else if (obstacleLine[0][0] === obstacleLine[1][0]) {
	                        const x = obstacleLine[0][0];
	                        // check if line2d intersects with x-line
	                        if ((line2d[0][0] - x) * (line2d[1][0] - x) > 0) {
	                            continue;
	                        }
	                        // check if line2d lies along obstacleLine
	                        if (line2d[0][0] === x && line2d[1][0] === x) {
	                            continue;
	                        }
	                        // get z-coordinate
	                        let z;
	                        if (line2d[0][1] === line2d[1][1]) {
	                            z = line2d[0][1];
	                        } else {
	                            z = (x - line2d[0][0]) * (line2d[0][1] - line2d[1][1]) / (line2d[0][0] - line2d[1][0]) + line2d[0][1];
	                        }
	                        // check if intersection point lies inside obstacleLine
	                        if ((obstacleLine[0][1] - z) * (obstacleLine[1][1] - z) > 0) {
	                            continue;
	                        }
	                        lineIntersections.push({
	                            x,
	                            z,
	                            obj,
	                            wallIndex: i,
	                            distanceFromPos: Collision.getDistance(line2d[0], [x, z])
	                        });
	                    }
	            }
	            intersections.push(...lineIntersections);
	        }
	        if (intersections.length) {
	            const minDistanceIntersections = [];
	            if (intersections.length !== 1) {
	                let minDistance = Infinity;
	                for (let j = 0; j < intersections.length; j++) {
	                    if (intersections[j].distanceFromPos < minDistance) {
	                        minDistance = intersections[j].distanceFromPos;
	                    }
	                }
	                for (let j = 0; j < intersections.length; j++) {
	                    if (intersections[j].distanceFromPos === minDistance) {
	                        minDistanceIntersections.push(intersections[j]);
	                    }
	                }
	            } else {
	                minDistanceIntersections.push(intersections[0]);
	            }
	            if (minDistanceIntersections.length > 1) {
	                const intersectionPoint = [minDistanceIntersections[0].x, minDistanceIntersections[0].z];
	                const quadrants = [{
	                    add: [line2d[1][0] >= intersectionPoint[0] ? 1 : -1, line2d[1][1] >= intersectionPoint[1] ? 1 : -1]
	                }];
	                quadrants.push({ add: [-quadrants[0].add[0], quadrants[0].add[1]] });
	                quadrants.push({ add: [quadrants[0].add[0], -quadrants[0].add[1]] });
	                for (let i = 0; i < quadrants.length; i++) {
	                    quadrants[i].point = Collision.vectorsAdd2D(intersectionPoint, quadrants[i].add);
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
	                        result.collisionPoint = Collision.vectorsAdd2D(intersectionPoint, [-quadrants[0].add[0], -quadrants[0].add[1]]);
	                        result.newPos = result.collisionPoint;
	                        // if one of the adjacent quadrants is empty of obstacles, go there
	                    } else if (quadrants[1].containedIn) {
	                            result.collisionPoint = [intersectionPoint[0], intersectionPoint[1] + quadrants[2].add[1]];
	                            result.newPos = [line2d[1][0], result.collisionPoint[1]];
	                        } else if (quadrants[2].containedIn) {
	                            result.collisionPoint = [intersectionPoint[0] + quadrants[1].add[0], intersectionPoint[1]];
	                            result.newPos = [result.collisionPoint[0], line2d[1][1]];
	                            // if the two adjacent quadrants are empty, chose between them
	                        } else {
	                                result.collisionPoint = Collision.vectorsAdd2D(intersectionPoint, [-quadrants[0].add[0], -quadrants[0].add[1]]);
	                                if (Math.abs(line2d[1][0] - result.collisionPoint[0]) >= Math.abs(line2d[1][1] - result.collisionPoint[1])) {
	                                    result.newPos = [result.collisionPoint[0], line2d[1][1]];
	                                } else {
	                                    result.newPos = [line2d[1][0], result.collisionPoint[1]];
	                                }
	                            }
	                }
	            } else {
	                let positionAfterIntersection = null;
	                const intersection = minDistanceIntersections[0];
	                const collisionPoint = [intersection.x, intersection.z];
	                // if obstacle line lies along axis X (has constant Z-coord)
	                if (intersection.wallIndex === 0) {
	                    positionAfterIntersection = [line2d[1][0], intersection.z - 1];
	                    collisionPoint[1] -= 1;
	                } else if (intersection.wallIndex === 2) {
	                    positionAfterIntersection = [line2d[1][0], intersection.z + 1];
	                    collisionPoint[1] += 1;
	                    // if obstacle line lies along axis Z (has constant X-coord)
	                } else if (intersection.wallIndex === 1) {
	                        positionAfterIntersection = [intersection.x + 1, line2d[1][1]];
	                        collisionPoint[0] += 1;
	                    } else {
	                        positionAfterIntersection = [intersection.x - 1, line2d[1][1]];
	                        collisionPoint[0] -= 1;
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
	     * Returns set of objects that can potentially collide with line2d
	     * @param {Array} line2d - coordinates of initial and final subject positions
	     * @param {Array} broadCellSize - maximum cell size
	     * @returns {Set} - js Set of objects, that can possibly collide with the subject
	     */
	    getRelativeObjectsSet(line2d, broadCellSize) {
	        const relativeBroadCells = [[Math.floor(line2d[0][0] / broadCellSize), Math.floor(line2d[0][1] / broadCellSize)], [Math.floor(line2d[1][0] / broadCellSize), Math.floor(line2d[1][1] / broadCellSize)]];
	        // if subject moved to diagonal cell, include two adjacent cells
	        if (relativeBroadCells[0][0] !== relativeBroadCells[1][0] && relativeBroadCells[0][1] !== relativeBroadCells[1][1]) {
	            relativeBroadCells.push([relativeBroadCells[0][0], relativeBroadCells[1][1]], [relativeBroadCells[1][0], relativeBroadCells[0][1]]);
	        }
	        // include unique objects to objects set
	        const objectsSet = new Set();
	        for (let i = 0; i < relativeBroadCells.length; i++) {
	            const broadCellObjects = this.broadCells[relativeBroadCells[i][1]][relativeBroadCells[i][0]].objects;
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
	     * Returns distance between two points in 2d space
	     * @param {Array} point1
	     * @param {Array} point2
	     * @returns {number}
	     */
	    static getDistance(point1, point2) {
	        return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
	    }

	    /**
	     * Returns true if point lies inside given object
	     * @param {Object} obj
	     * @param {Array} point
	     * @returns {boolean}
	     */
	    static contains(obj, point) {
	        return point[0] >= obj.hitbox[0][0] && point[0] <= obj.hitbox[1][0] && point[1] >= obj.hitbox[0][1] && point[1] <= obj.hitbox[3][1];
	    }

	    /**
	     * Returns 2d vectors sum
	     * @param {Array} v1
	     * @param {Array} v2
	     * @returns {Array}
	     */
	    static vectorsAdd2D(v1, v2) {
	        return [v1[0] + v2[0], v1[1] + v2[1]];
	    }

	    /**
	     * Retruns true if two 2d vectors are identical
	     * @param {Array} v1
	     * @param {Array} v2
	     * @returns {boolean}
	     */
	    static vectorsEqual2D(v1, v2) {
	        return v1[0] === v2[0] && v1[1] === v2[1];
	    }
	}/* harmony export */ exports["a"] = Collision;

/***/ },

/***/ 111:
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

/***/ 112:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 113:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 114:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const FPS = 60;/* harmony export */ exports["j"] = FPS;
	const KEY_W = 87;/* harmony export */ exports["a"] = KEY_W;
	const KEY_S = 83;/* harmony export */ exports["b"] = KEY_S;
	const KEY_A = 65;/* harmony export */ exports["c"] = KEY_A;
	const KEY_D = 68;/* harmony export */ exports["d"] = KEY_D;
	const KEY_SHIFT = 16;/* harmony export */ exports["e"] = KEY_SHIFT;
	const STEP = 4;/* harmony export */ exports["i"] = STEP;
	const RUNNING_STEP = STEP * 1.5;/* harmony export */ exports["h"] = RUNNING_STEP;
	const SENSITIVITY = 0.5;/* harmony export */ exports["g"] = SENSITIVITY;
	const BROAD_CELL_SIZE = 250;/* harmony export */ exports["f"] = BROAD_CELL_SIZE;

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
	__webpack_require__(112);



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

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(26);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __WEBPACK_IMPORTED_MODULE_1_react_redux__ && __WEBPACK_IMPORTED_MODULE_1_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_react_redux__; };
	/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_react_redux___default, 'a', __WEBPACK_IMPORTED_MODULE_1_react_redux___default);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_scene_Scene__ = __webpack_require__(105);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(111);





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

/***/ 98:
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

/***/ },

/***/ 99:
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

/***/ }

},[108]);