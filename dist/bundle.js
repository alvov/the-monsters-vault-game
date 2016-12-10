webpackJsonp([0],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);




class Viewport extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.viewportNode = null;
        this.pointerLocked = false;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.requestPointerLock = this.requestPointerLock.bind(this);
        this.onPointerLockChange = this.onPointerLockChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener('pointerlockchange', this.onPointerLockChange);
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('pointerlockchange', this.onPointerLockChange);
        document.exitPointerLock();
        document.removeEventListener('keyup', this.onKeyUp);
        document.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'viewport',
                onClick: this.requestPointerLock,
                onMouseMove: this.onMouseMove,
                ref: viewportNode => {
                    this.viewportNode = viewportNode;
                }
            },
            this.props.children
        );
    }

    onKeyDown(event) {
        this.props.toggleKeyPressed(event.keyCode, true);
    }

    onKeyUp(event) {
        this.props.toggleKeyPressed(event.keyCode, false);
    }

    onMouseMove(event) {
        if (this.pointerLocked) {
            this.props.updatePointerDelta(-event.nativeEvent.movementX, -event.nativeEvent.movementY);
        }
    }

    requestPointerLock(event) {
        event.currentTarget.requestPointerLock();
    }

    onPointerLockChange() {
        this.pointerLocked = document.pointerLockElement === this.viewportNode;
    }
}

Viewport.propTypes = {
    toggleKeyPressed: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    updatePointerDelta: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
        toggleKeyPressed(keyCode, on) {
            return {
                type: 'toggleKeyPressed',
                keyCode, on
            };
        },
        updatePointerDelta(x, y) {
            return {
                type: 'updatePointerDelta',
                x, y
            };
        }
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        keyPressed: state.keyPressed
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Viewport);

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_level__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function viewAngle(state = __WEBPACK_IMPORTED_MODULE_1__levels_level__["a" /* default */].player.angle, action) {
    switch (action.type) {
        case 'viewAngleUpdate':
            return action.viewAngle;
        default:
            return state;
    }
}

function playerPosition(state = __WEBPACK_IMPORTED_MODULE_1__levels_level__["a" /* default */].player.pos, action) {
    switch (action.type) {
        case 'playerPositionUpdate':
            return action.pos;
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

function doors(state = __WEBPACK_IMPORTED_MODULE_1__levels_level__["a" /* default */].objects.filter(obj => obj.type === 'door').reduce((result, obj) => {
    result[obj.props.id] = obj.props.state;
    return result;
}, {}), action) {
    switch (action.type) {
        case 'doorSetClosing':
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* DOOR_CLOSING */]
            });
        case 'doorSetOpening':
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* DOOR_OPENING */]
            });
        case 'doorSetClosed':
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* DOOR_CLOSE */]
            });
        case 'doorSetOpened':
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* DOOR_OPEN */]
            });
        default:
            return state;
    }
}

function objects(state = __WEBPACK_IMPORTED_MODULE_1__levels_level__["a" /* default */].objects, action) {
    switch (action.type) {
        case 'objectsSetVisible':
            {
                const objects = new Array(state.length);
                for (let i = 0; i < state.length; i++) {
                    const object = state[i];
                    const isVisible = object.name in action.visibleObjectIds;
                    if (isVisible !== object.isVisible) {
                        objects[i] = _extends({}, object, { isVisible });
                    } else {
                        objects[i] = object;
                    }
                }
                return objects;
            }
        case 'objectsSetReachable':
            {
                const objects = new Array(state.length);
                for (let i = 0; i < state.length; i++) {
                    const object = state[i];
                    const isReachable = object.name === action.reachableObjectId;
                    if (isReachable !== object.isReachable) {
                        objects[i] = _extends({}, object, { isReachable });
                    } else {
                        objects[i] = object;
                    }
                }
                return objects;
            }
        case 'doorsSetCollidable':
            {
                const objects = new Array(state.length);
                for (let i = 0; i < state.length; i++) {
                    let object = state[i];
                    if (object.type === 'door' && object.props.id === action.id) {
                        object.collides = action.isCollidable;
                    }
                    objects[i] = object;
                }
                return objects;
            }
        default:
            return state;
    }
}

function keyPressed(state = {
    [__WEBPACK_IMPORTED_MODULE_2__constants__["i" /* KEY_W */]]: false,
    [__WEBPACK_IMPORTED_MODULE_2__constants__["j" /* KEY_S */]]: false,
    [__WEBPACK_IMPORTED_MODULE_2__constants__["k" /* KEY_A */]]: false,
    [__WEBPACK_IMPORTED_MODULE_2__constants__["l" /* KEY_D */]]: false,
    [__WEBPACK_IMPORTED_MODULE_2__constants__["p" /* KEY_E */]]: false,
    [__WEBPACK_IMPORTED_MODULE_2__constants__["m" /* KEY_SHIFT */]]: false
}, action) {
    switch (action.type) {
        case 'toggleKeyPressed':
            if (action.keyCode in state) {
                return _extends({}, state, {
                    [action.keyCode]: action.on
                });
            }
            return state;
        default:
            return state;
    }
}

function pointerDelta(state = { x: 0, y: 0 }, action) {
    switch (action.type) {
        case 'updatePointerDelta':
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case 'resetPointerDelta':
            return { x: 0, y: 0 };
        default:
            return state;
    }
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    viewAngle,
    pos: playerPosition,
    playerState,
    doors,
    objects,
    keyPressed,
    pointerDelta
});

/***/ },

/***/ 103:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(21);
__webpack_require__(22);




const backgrounds = ['src/components/box/box01.jpg', 'src/components/box/box02.jpg', 'src/components/box/box03.jpg'];

/* harmony default export */ exports["a"] = function ({ pos, playerPos, isVisible = true, size, mode = 1, getTransformRule }) {
    const posWithInvertedY = [pos[0], -pos[1], pos[2]];
    const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
        display: isVisible ? 'block' : 'none'
    });

    const background = `url(${ backgrounds[mode - 1] }) 50% 50% / cover`;

    // Front-Back-Left-Right-Top
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'box obj', style: styleRules },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [0, 0, size[2] / 2],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: size,
            angle: [0, 0, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [0, 0, -size[2] / 2],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: size,
            angle: [0, 180, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [-size[0] / 2, 0, 0],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: [size[2], size[1]],
            angle: [0, -90, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [size[0] / 2, 0, 0],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: [size[2], size[1]],
            angle: [0, 90, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        playerPos[1] > pos[1] + size[1] / 2 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(16);
__webpack_require__(22);
__webpack_require__(113);





const BAR_WIDTH = 5;
const BARS_GAP = 25;
const BAR_BACKGROUND = 'linear-gradient(to right, #000 0%, #e0e0e0 50%, #000 100%)';

class Door extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props, context) {
        super(props, context);

        const { pos } = this.props;

        this.audioSource = null;

        this.panner = this.context.audioCtx.createPanner();
        this.panner.panningModel = 'HRTF';
        this.panner.distanceModel = 'inverse';
        this.panner.refDistance = 20;
        this.panner.rolloffFactor = 0.1;
        this.panner.coneInnerAngle = 360;
        this.panner.coneOuterAngle = 0;
        this.panner.coneOuterGain = 0;
        this.panner.positionX.value = pos[0];
        // 2x higher, because the opening mechanism is somewhere high
        this.panner.positionY.value = -2 * pos[1];
        this.panner.positionZ.value = -pos[2];
        this.panner.connect(this.context.audioCtx.destination);

        this.decodedData = fetch('src/components/door/mixdown.ogg').then(response => response.arrayBuffer()).then(buffer => new Promise((resolve, reject) => {
            this.context.audioCtx.decodeAudioData(buffer, decodedData => {
                resolve(decodedData);
            }, reject);
        }));
    }

    componentWillUpdate(nextProps) {
        if ([__WEBPACK_IMPORTED_MODULE_2__constants__["d" /* DOOR_CLOSING */], __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* DOOR_OPENING */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.startSound();
        } else if ([__WEBPACK_IMPORTED_MODULE_2__constants__["f" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* DOOR_CLOSE */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.stopSound();
        }
    }

    componentWillUnmount() {
        this.stopSound();
    }

    render() {
        const { pos, viewAngle, isVisible, state, getTransformRule } = this.props;
        const posWithInvertedY = [pos[0], [__WEBPACK_IMPORTED_MODULE_2__constants__["e" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* DOOR_OPEN */]].includes(state) ? -pos[1] * 3 : -pos[1], pos[2]];

        const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
            display: isVisible ? 'block' : 'none'
        });
        const angle = [0, -viewAngle[0], 0];

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'door obj', style: styleRules },
            this.renderBars({ parentPos: [posWithInvertedY], angle })
        );
    }

    renderBars({ parentPos, angle }) {
        const { size, playerPos, getTransformRule } = this.props;
        const bars = [];
        const maxDimension = size[0] > size[2] ? 0 : 2;
        let key = 0;
        for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i += BARS_GAP) {
            bars.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
                key: key,
                className: 'door-bar',
                pos: maxDimension === 0 ? [-size[0] / 2 + i, 0, 0] : [0, 0, size[2] - i],
                size: [BAR_WIDTH, size[1]],
                angle: angle,
                parentPos: parentPos,
                playerPos: playerPos,
                simpleLight: true,
                background: BAR_BACKGROUND,
                getTransformRule: getTransformRule
            }));
            key++;
        }
        return bars;
    }

    createAudioSource() {
        return this.decodedData.then(decodedData => {
            this.audioSource = this.context.audioCtx.createBufferSource();
            this.audioSource.connect(this.panner);
            this.audioSource.buffer = decodedData;
        });
    }

    startSound() {
        this.createAudioSource().then(() => {
            this.audioSource.start(0);
        });
    }

    stopSound() {
        this.audioSource.stop();
        this.audioSource.disconnect(this.panner);
        this.audioSource = null;
    }
}

Door.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
Door.defaultProps = {
    isVisible: true,
    isOpen: false
};
/* harmony default export */ exports["a"] = Door;

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(21);



/* harmony default export */ exports["a"] = ({ pos, playerPos, size, isVisible = true, getTransformRule }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
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

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(21);



/* harmony default export */ exports["a"] = ({ pos, playerPos, size, angle, isVisible = true, background, getTransformRule }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
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

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(21);
__webpack_require__(22);
__webpack_require__(115);




const HANDLE_SIZE = [6, 40];
const BACKGROUND = 'url(src/components/switcher/wood.jpg) 50% 50% / cover';

class Switcher extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pos, playerPos, size, angle, isVisible = true, isReachable = false,
            isOn = false, isInteractive = true, getTransformRule } = this.props;
        const posWithInvertedY = [pos[0], -pos[1], pos[2]];
        const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
            display: isVisible ? 'block' : 'none'
        });
        const classNames = ['switcher obj', isOn ? 'switcher_on' : 'switcher_off'];
        if (isInteractive && isReachable) {
            classNames.push('switcher_reachable');
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: classNames.join(' '), style: styleRules },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
                    pos: [-HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2],
                    parentPos: [posWithInvertedY],
                    playerPos: playerPos,
                    size: [HANDLE_SIZE[1], HANDLE_SIZE[0]],
                    isVisible: isVisible,
                    angle: [0, -90, 0],
                    parentAngle: [angle],
                    background: BACKGROUND,
                    simpleLight: true,
                    getTransformRule: getTransformRule
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
                    pos: [HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2],
                    parentPos: [posWithInvertedY],
                    playerPos: playerPos,
                    size: [HANDLE_SIZE[1], HANDLE_SIZE[0]],
                    isVisible: isVisible,
                    angle: [0, 90, 0],
                    parentAngle: [angle],
                    background: BACKGROUND,
                    simpleLight: true,
                    getTransformRule: getTransformRule
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
                    pos: [0, -HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2],
                    parentPos: [posWithInvertedY],
                    playerPos: playerPos,
                    size: [HANDLE_SIZE[0], HANDLE_SIZE[1]],
                    isVisible: isVisible,
                    angle: [90, 0, 0],
                    parentAngle: [angle],
                    background: BACKGROUND,
                    simpleLight: true,
                    getTransformRule: getTransformRule
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
                    pos: [0, HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2],
                    parentPos: [posWithInvertedY],
                    playerPos: playerPos,
                    size: [HANDLE_SIZE[0], HANDLE_SIZE[1]],
                    isVisible: isVisible,
                    angle: [-90, 0, 0],
                    parentAngle: [angle],
                    background: BACKGROUND,
                    simpleLight: true,
                    getTransformRule: getTransformRule
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
                    pos: [0, 0, HANDLE_SIZE[1]],
                    parentPos: [posWithInvertedY],
                    playerPos: playerPos,
                    size: [HANDLE_SIZE[0], HANDLE_SIZE[0]],
                    isVisible: isVisible,
                    angle: [0, 0, 0],
                    parentAngle: [angle],
                    background: BACKGROUND,
                    simpleLight: true,
                    getTransformRule: getTransformRule
                })
            )
        );
    }
}
/* harmony export (immutable) */ exports["a"] = Switcher;


/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(21);
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [0, 0, size[2] / 2],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: size,
            angle: [0, 0, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [0, 0, -size[2] / 2],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: size,
            angle: [0, 180, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            pos: [-size[0] / 2, 0, 0],
            parentPos: [posWithInvertedY],
            playerPos: playerPos,
            size: [size[2], size[1]],
            angle: [0, -90, 0],
            getTransformRule: getTransformRule,
            background: background
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_scene__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(32);






const Camera = ({ viewAngle }) => {
    const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["c" /* getTransformRule */])({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'camera', style: transformRule },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__scene_scene__["a" /* default */], null)
    );
};
Camera.propTypes = {
    viewAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired
};

function mapStateToProps(state) {
    return {
        viewAngle: state.viewAngle
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Camera);

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_painting_painting__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floor_floor__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_wall_wall__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_box_box__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_switcher_switcher__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_door_door__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_utils__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__(16);
__webpack_require__(22);
__webpack_require__(116);













class Scene extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    render() {
        const { pos, viewAngle, playerState, doors, objects } = this.props;
        const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */])({
            pos: [-pos[0], pos[1], -pos[2]]
        });
        const renderedObjects = [];
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            switch (object.type) {
                case 'painting':
                    renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_painting_painting__["a" /* default */], {
                        key: object.name,
                        pos: object.pos,
                        playerPos: pos,
                        angle: object.angle,
                        size: object.size.filter(value => value !== 0).slice(0, 2),
                        isVisible: object.isVisible,
                        background: object.background,
                        getTransformRule: __WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */]
                    }));
                    break;
                case 'floor':
                    renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_floor_floor__["a" /* default */], {
                        key: object.name,
                        pos: object.pos,
                        playerPos: pos,
                        isVisible: object.isVisible,
                        size: object.size,
                        getTransformRule: __WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */]
                    }));
                    break;
                case 'wall':
                    renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_wall_wall__["a" /* default */], {
                        key: object.name,
                        pos: object.pos,
                        playerPos: pos,
                        isVisible: object.isVisible,
                        size: object.size,
                        getTransformRule: __WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */]
                    }));
                    break;
                case 'box':
                    renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_box_box__["a" /* default */], {
                        key: object.name,
                        pos: object.pos,
                        playerPos: pos,
                        isVisible: object.isVisible,
                        size: object.size,
                        mode: object.props.mode,
                        getTransformRule: __WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */]
                    }));
                    break;
                case 'switcher':
                    renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_switcher_switcher__["a" /* default */], {
                        key: object.name,
                        pos: object.pos,
                        size: object.size,
                        angle: object.angle,
                        playerPos: pos,
                        isVisible: object.isVisible,
                        isReachable: object.isReachable,
                        isInteractive: [__WEBPACK_IMPORTED_MODULE_9__constants__["f" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_9__constants__["b" /* DOOR_CLOSE */]].includes(doors[object.props.id]),
                        isOn: [__WEBPACK_IMPORTED_MODULE_9__constants__["f" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_9__constants__["e" /* DOOR_OPENING */]].includes(doors[object.props.id]),
                        getTransformRule: __WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */]
                    }));
                    break;
                case 'door':
                    renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_door_door__["a" /* default */], {
                        key: object.name,
                        pos: object.pos,
                        playerPos: pos,
                        viewAngle: viewAngle,
                        isVisible: object.isVisible,
                        size: object.size,
                        state: doors[object.props.id],
                        getTransformRule: __WEBPACK_IMPORTED_MODULE_8__lib_utils__["c" /* getTransformRule */]
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
}
Scene.propTypes = {
    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    viewAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    playerState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    doors: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    objects: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object).isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        playerState: state.playerState,
        objects: state.objects,
        doors: state.doors
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Scene);

/***/ },

/***/ 112:
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
        this.fn(1 / frameRateCoefficient);
    }

    stop() {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }
}
/* harmony export (immutable) */ exports["a"] = Loop;


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

/***/ 116:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

"use strict";
const FPS = 60;
/* harmony export (immutable) */ exports["g"] = FPS;

const KEY_W = 87;
/* harmony export (immutable) */ exports["i"] = KEY_W;

const KEY_S = 83;
/* harmony export (immutable) */ exports["j"] = KEY_S;

const KEY_A = 65;
/* harmony export (immutable) */ exports["k"] = KEY_A;

const KEY_D = 68;
/* harmony export (immutable) */ exports["l"] = KEY_D;

const KEY_E = 69;
/* harmony export (immutable) */ exports["p"] = KEY_E;

const KEY_SHIFT = 16;
/* harmony export (immutable) */ exports["m"] = KEY_SHIFT;

const STEP = 4;
/* harmony export (immutable) */ exports["o"] = STEP;

const RUNNING_COEFF = 1.5;
/* harmony export (immutable) */ exports["n"] = RUNNING_COEFF;

const SENSITIVITY = 0.5;
/* harmony export (immutable) */ exports["h"] = SENSITIVITY;

const BROAD_CELL_SIZE = 250;
/* harmony export (immutable) */ exports["a"] = BROAD_CELL_SIZE;

const HAND_LENGTH = 100;
/* harmony export (immutable) */ exports["c"] = HAND_LENGTH;


const DOOR_OPEN = 'open';
/* harmony export (immutable) */ exports["f"] = DOOR_OPEN;

const DOOR_OPENING = 'opening';
/* harmony export (immutable) */ exports["e"] = DOOR_OPENING;

const DOOR_CLOSE = 'close';
/* harmony export (immutable) */ exports["b"] = DOOR_CLOSE;

const DOOR_CLOSING = 'closing';
/* harmony export (immutable) */ exports["d"] = DOOR_CLOSING;


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(22);
__webpack_require__(114);




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
    simpleLight = false,
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
        if (simpleLight) {
            backgroundStyle = getPlayerSpotLightBackground({
                distance: vectorLength3D([playerPos[0] - relativePos[0], playerPos[1] + relativePos[1], playerPos[2] - relativePos[2]]),
                background,
                simpleLight
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

function getPlayerSpotLightBackground(params) {
    return getSpotLightBackground(_extends({}, params, { radius: 1.1 * __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* BROAD_CELL_SIZE */] }));
}

function getSpotLightBackground({ pos, distance, background, simpleLight, radius }) {
    const ratio = Math.max(0, radius - distance) / radius;
    if (ratio) {
        const result = {
            opacity: 1 - ratio
        };
        if (!simpleLight) {
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

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
});


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_batched_actions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_viewport__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_gameLoop__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers__ = __webpack_require__(102);
__webpack_require__(103);












const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux_batched_actions__["enableBatching"])(__WEBPACK_IMPORTED_MODULE_7__reducers__["a" /* default */]));

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__containers_viewport__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_gameLoop__["a" /* default */], null)
    )
), document.getElementById('app'));

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_loop__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__levels_level__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_collision__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_utils__ = __webpack_require__(32);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };













class GameLoop extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.delayedActions = [];

        this.loop = new __WEBPACK_IMPORTED_MODULE_5__lib_loop__["a" /* default */](this.loopCallback.bind(this), __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* FPS */]);

        this.prevKeysPressed = {};

        this.audioCtx = new window.AudioContext();
    }

    getChildContext() {
        return {
            audioCtx: this.audioCtx
        };
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__containers_camera__["a" /* default */], null);
    }

    loopCallback(frameRateCoefficient) {
        const now = Date.now();
        const actions = this.delayedActions.filter(action => action.timestamp <= now);
        this.delayedActions = this.delayedActions.filter(action => action.timestamp > now);

        const newState = {};

        const pointerDelta = this.context.store.getState().pointerDelta;
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = this.context.store.getState().viewAngle;
            const newViewAngle = [(currentViewAngle[0] - pointerDelta.x * __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* SENSITIVITY */]) % 360, Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* SENSITIVITY */], -90), 90), 0];
            actions.push({
                type: 'viewAngleUpdate',
                viewAngle: newViewAngle
            });
            actions.push({
                type: 'resetPointerDelta'
            });
            newState.viewAngle = newViewAngle;
        }

        let angleShift = [];
        const keyPressed = this.context.store.getState().keyPressed;
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* KEY_W */]]) {
            angleShift.push(Math.PI);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["j" /* KEY_S */]]) {
            angleShift.push(0);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["k" /* KEY_A */]]) {
            angleShift.push(Math.PI / 2);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["l" /* KEY_D */]]) {
            // hack for angles sum
            if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* KEY_W */]]) {
                angleShift.push(3 * Math.PI / 2);
            } else {
                angleShift.push(-Math.PI / 2);
            }
        }

        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["i" /* KEY_W */]] || keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["j" /* KEY_S */]] || keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["k" /* KEY_A */]] || keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["l" /* KEY_D */]]) {
            if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["m" /* KEY_SHIFT */]]) {
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

            reducedAngleShift += GameLoop.convertDegreeToRad(this.context.store.getState().viewAngle[0]);

            let step = frameRateCoefficient * (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["m" /* KEY_SHIFT */]] ? __WEBPACK_IMPORTED_MODULE_4__constants__["n" /* RUNNING_COEFF */] : 1) * __WEBPACK_IMPORTED_MODULE_4__constants__["o" /* STEP */];
            const shift = [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)];
            const currentPos = this.context.store.getState().pos;
            const newPos = [];
            for (let i = 0; i < 3; i++) {
                let newAxisPos = currentPos[i] + shift[i];
                // check if got out of bounds
                for (let i = 0; i < 3; i++) {
                    if (__WEBPACK_IMPORTED_MODULE_6__levels_level__["a" /* default */].boundaries[i]) {
                        newAxisPos = Math.min(Math.max(newAxisPos, 0), __WEBPACK_IMPORTED_MODULE_6__levels_level__["a" /* default */].boundaries[i] - 1);
                    }
                }
                newPos.push(newAxisPos);
            }
            const objects = this.context.store.getState().objects;
            const collisions = __WEBPACK_IMPORTED_MODULE_7__lib_collision__["a" /* default */].getCollisions([currentPos, newPos], objects, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* BROAD_CELL_SIZE */]);
            // get last collision result as new player position
            const newPosAfterCollisions = collisions[collisions.length - 1].newPos;
            actions.push({
                type: 'playerPositionUpdate',
                pos: newPosAfterCollisions
            });
            newState.pos = newPosAfterCollisions;
        }

        if (newState.pos) {
            // render only visible objects
            const visibleObjects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_utils__["a" /* getVisibleObjects */])(newState.pos, this.context.store.getState().objects);
            const visibleObjectIds = {};
            for (let i = 0; i < visibleObjects.length; i++) {
                const object = visibleObjects[i];
                visibleObjectIds[object.name] = true;
            }
            actions.push({
                type: 'objectsSetVisible',
                visibleObjectIds
            });

            // update audio listener position
            this.audioCtx.listener.positionX.value = newState.pos[0];
            this.audioCtx.listener.positionY.value = newState.pos[1];
            this.audioCtx.listener.positionZ.value = newState.pos[2];
        }

        if (newState.viewAngle) {
            const [forwardX, forwardY, forwardZ] = GameLoop.getVectorFromAngles(...newState.viewAngle);

            let upVerticalAngle;
            let upHorizontalAngle;
            if (newState.viewAngle[1] > 0) {
                upVerticalAngle = 90 - newState.viewAngle[1];
                upHorizontalAngle = newState.viewAngle[0] - 180;
            } else {
                upVerticalAngle = 90 + newState.viewAngle[1];
                upHorizontalAngle = newState.viewAngle[0];
            }
            const [upX, upY, upZ] = GameLoop.getVectorFromAngles(upHorizontalAngle, upVerticalAngle);

            // update audio listener orientation
            this.audioCtx.listener.forwardX.value = forwardX;
            this.audioCtx.listener.forwardY.value = forwardY;
            this.audioCtx.listener.forwardZ.value = forwardZ;
            this.audioCtx.listener.upX.value = upX;
            this.audioCtx.listener.upY.value = upY;
            this.audioCtx.listener.upZ.value = upZ;
        }

        // find interactive object which we can reach with a hand
        let reachableObject;
        if (newState.pos || newState.viewAngle) {
            const playerPosition = newState.pos || this.context.store.getState().pos;
            const viewAngle = newState.viewAngle || this.context.store.getState().viewAngle;
            const collisionView = __WEBPACK_IMPORTED_MODULE_7__lib_collision__["a" /* default */].getCollisionView([playerPosition, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_utils__["b" /* getPointPosition */])({ pos: playerPosition, distance: __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* HAND_LENGTH */], angle: viewAngle })], this.context.store.getState().objects, __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* BROAD_CELL_SIZE */]);
            if (collisionView && collisionView.obj.isInteractive) {
                reachableObject = collisionView.obj;
                if (!reachableObject.isReachable) {
                    actions.push({
                        type: 'objectsSetReachable',
                        reachableObjectId: reachableObject.name
                    });
                }
            } else {
                actions.push({
                    type: 'objectsSetReachable',
                    reachableObjectId: null
                });
            }
        } else {
            reachableObject = this.context.store.getState().objects.find(obj => obj.isReachable);
        }

        // perform interaction if key E is pressed
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["p" /* KEY_E */]] && !this.prevKeysPressed[__WEBPACK_IMPORTED_MODULE_4__constants__["p" /* KEY_E */]] && reachableObject) {
            if (reachableObject.type === 'switcher') {
                const door = this.context.store.getState().doors[reachableObject.props.id];
                if (![__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* DOOR_CLOSING */]].includes(door)) {
                    actions.push({
                        type: door === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* DOOR_OPEN */] ? 'doorSetClosing' : 'doorSetOpening',
                        id: reachableObject.props.id
                    });
                    this.delayedActions.push({
                        type: door === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* DOOR_OPEN */] ? 'doorSetClosed' : 'doorSetOpened',
                        id: reachableObject.props.id,
                        timestamp: Date.now() + 1000
                    });
                    if (door === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* DOOR_OPEN */]) {
                        actions.push({
                            type: 'doorsSetCollidable',
                            isCollidable: true,
                            id: reachableObject.props.id
                        });
                    } else {
                        this.delayedActions.push({
                            type: 'doorsSetCollidable',
                            isCollidable: false,
                            id: reachableObject.props.id,
                            timestamp: Date.now() + 1000
                        });
                    }
                }
            }
        }

        if (actions.length) {
            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__["batchActions"])(actions));
        }

        this.prevKeysPressed = _extends({}, keyPressed);
    }

    /**
     * Returns radians for given degrees
     * @param {number} angle
     * @returns {number}
     */
    static convertDegreeToRad(angle) {
        return angle / 180 * Math.PI;
    }

    /**
     * Returns vector coordinates for given angles
     * @param {number} horizontalAngle (rad)
     * @param {number} verticalAngle (rad)
     * @returns {number[]}
     */
    static getVectorFromAngles(horizontalAngle, verticalAngle) {
        const y = -Math.sin(GameLoop.convertDegreeToRad(verticalAngle));
        const xzProjectionDist = Math.sqrt(1 - y * y);
        const x = Math.sin(GameLoop.convertDegreeToRad(horizontalAngle)) * xzProjectionDist;
        let z = Math.sqrt(xzProjectionDist * xzProjectionDist - x * x);
        if (Math.abs(horizontalAngle) > 90) {
            z = -z;
        }
        return [x, y, z];
    }
}

GameLoop.contextTypes = {
    store: __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__["a" /* default */].isRequired
};
GameLoop.childContextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(GameLoop);

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(16);
/* harmony export (immutable) */ exports["c"] = getTransformRule;
/* harmony export (immutable) */ exports["a"] = getVisibleObjects;
/* harmony export (immutable) */ exports["b"] = getPointPosition;

const AXIS = ['X', 'Y', 'Z'];

/**
 * Returns css transform rule for given position and angle
 * @param {Array} pos
 * @param {Array} angle
 * @returns {{transform: string}}
 */
function getTransformRule({ pos, angle }) {
    let transform = '';
    if (pos) {
        transform += `translate3d(${ pos[0] }px,${ pos[1] }px,${ pos[2] }px)`;
    }
    if (angle) {
        for (let axis = 0; axis < angle.length; axis++) {
            transform += ` rotate${ AXIS[axis] }(${ angle[axis] }deg)`;
        }
    }
    return { transform };
}

/**
 * Returns array of objects to be shown on map
 * @param {Array} playerPos
 * @param {Array} objects
 * @returns {Array}
 */
function getVisibleObjects(playerPos, objects) {
    const playerCell = [Math.floor(playerPos[0] / __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* BROAD_CELL_SIZE */]), Math.floor(playerPos[2] / __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* BROAD_CELL_SIZE */])];
    const visibleObjects = [];
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        for (let k = 0; k < object.broadCells.length; k++) {
            if (Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 && Math.abs(playerCell[1] - object.broadCells[k][1]) < 2) {
                visibleObjects.push(object);
                break;
            }
        }
    }
    return visibleObjects;
}

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

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_collision__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_utils__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(16);




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
        background: 'url(assets/dickbutt.png) 50% 50% / contain',
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
        props: {
            mode: 1
        }
    }, {
        name: 'box_002',
        type: 'box',
        size: [50, 50, 50],
        pos: [175, 175, 175],
        props: {
            mode: 2
        }
    }, {
        name: 'box_003',
        type: 'box',
        size: [150, 150, 150],
        pos: [2425, 75, 75],
        props: {
            mode: 3
        }
    }, {
        name: 'box_004',
        type: 'box',
        size: [150, 150, 150],
        pos: [1300, 75, 900],
        props: {
            mode: 2
        }
    }, {
        name: 'box_005',
        type: 'box',
        size: [150, 150, 150],
        pos: [2110, 75, 1975],
        props: {
            mode: 1
        }
    }, {
        name: 'box_006',
        type: 'box',
        size: [100, 150, 100],
        pos: [900, 75, 2400],
        props: {
            mode: 2
        }
    }, {
        name: 'box_007',
        type: 'box',
        size: [90, 70, 90],
        pos: [900, 185, 2390],
        props: {
            mode: 3
        }
    }, {
        name: 'switcher_01',
        type: 'switcher',
        pos: [1250, 100, 26],
        size: [40, 60, 100],
        angle: [0, 0, 0],
        props: {
            id: 1
        },
        isInteractive: true
    }, {
        name: 'door_01',
        type: 'door',
        size: [500, 200, 20],
        pos: [1250, 100, 500],
        props: {
            id: 1,
            state: __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* DOOR_CLOSE */]
        }
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
    let sizeXHalf = 0;
    let sizeYHalf = 0;
    let sizeZHalf = 0;
    // if object is "collidable", enlarge its hitbox to simulate players size (actual player is a dot)
    if (obj.collides !== false) {
        sizeXHalf = obj.size[0] / 2;
        sizeYHalf = obj.size[1] / 2;
        sizeZHalf = obj.size[2] / 2;
    }
    const playerXHalf = level.player.size[0] / 2;
    const playerYHalf = level.player.size[1] / 2;
    const playerZHalf = level.player.size[2] / 2;
    obj.hitbox = [[obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[0] + sizeXHalf + playerXHalf], [obj.pos[1] - sizeYHalf - playerYHalf, obj.pos[1] + sizeYHalf + playerYHalf], [obj.pos[2] - sizeZHalf - playerZHalf, obj.pos[2] + sizeZHalf + playerZHalf]];

    // define to which broad cells does an object belong
    obj.broadCells = [];
    const broadCellsXMax = Math.ceil(level.boundaries[0] / __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */]) - 1;
    const broadCellsYMax = Math.ceil(level.boundaries[2] / __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */]) - 1;
    const topLeftCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][0] / __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */])));
    const topLeftCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */])));
    const bottomRightCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */])));
    const bottomRightCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][1] / __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */])));
    for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
        for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
            obj.broadCells.push([i, j]);
        }
    }

    const visibleObjects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["a" /* getVisibleObjects */])(level.player.pos, [obj]);
    obj.isVisible = visibleObjects.length === 1;

    obj.isReachable = false;
}

const collisionView = __WEBPACK_IMPORTED_MODULE_0__lib_collision__["a" /* default */].getCollisionView([level.player.pos, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["b" /* getPointPosition */])({ pos: level.player.pos, distance: __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* HAND_LENGTH */], angle: level.player.angle })], level.objects, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* BROAD_CELL_SIZE */]);
if (collisionView) {
    collisionView.obj.isReachable = true;
}

/* harmony default export */ exports["a"] = level;

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

"use strict";
class Collision {
    /**
     * Returns an array of collisions with objects
     * @param {Array} line - coordinates of initial and final player positions
     * @param {Array} objects - array of objects
     * @param {Array} broadCellSize - maximum cell size
     * @returns {Array} - array of objects with info about collisions
     */
    static getCollisions(line, objects, broadCellSize) {
        const firstCollision = Collision.getCollisionPos(line, objects, broadCellSize);
        // if collision was registered and we didn't stop there, check if rebound also collides with smth
        if (firstCollision.obj && !Collision.vectorsEqual(firstCollision.collisionPoint, firstCollision.newPos)) {
            const secondCollision = Collision.getCollisionPos([firstCollision.collisionPoint, firstCollision.newPos], objects, broadCellSize);
            // if it does, stop right there (no need to check further collisions)
            if (secondCollision.obj) {
                return [firstCollision, Object.assign(secondCollision, { newPos: secondCollision.collisionPoint })];
            }
        }
        return [firstCollision];
    }

    /**
     * Returns an object with info about collision
     * @param {Array} line - coordinates of initial and final subject positions
     * @param {Array} objects - array of objects
     * @param {Array} broadCellSize - maximum cell size
     * @returns {Object} - object with info about collision
     */
    static getCollisionPos(line, objects, broadCellSize) {
        let result = { newPos: line[1] };
        // if moving line length is 0
        if (Collision.vectorsEqual(line[0], line[1])) {
            return result;
        }

        // get objects from broad cells relative to subject's movement
        objects = Collision.filterInvolvedObjects(line, objects, broadCellSize);

        const intersections = [];
        // search for collisions with given objects
        for (let k = 0; k < objects.length; k++) {
            const obj = objects[k];
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
                        squareDistance: Collision.getSquareDistance(line[0], collisionCoords)
                    });
                }
            }
        }
        if (intersections.length) {
            let minDistanceIntersections = [];
            let minDistance = Infinity;
            for (let j = 0; j < intersections.length; j++) {
                if (intersections[j].squareDistance < minDistance) {
                    minDistance = intersections[j].squareDistance;
                    minDistanceIntersections = [intersections[j]];
                } else if (intersections[j].squareDistance === minDistance) {
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
     * @param {Array} objects
     * @param {Array} broadCellSize - maximum cell size
     * @returns {null|Array}
     */
    static getCollisionView(line, objects, broadCellSize) {
        if (Collision.vectorsEqual(line[0], line[1])) {
            return null;
        }

        const intersections = [];
        // get objects from broad cells relative to subject's movement
        objects = Collision.filterInvolvedObjects(line, objects, broadCellSize);
        for (let k = 0; k < objects.length; k++) {
            const obj = objects[k];
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
                        squareDistance: Collision.getSquareDistance(line[0], collisionCoords)
                    });
                }
            }
        }
        if (intersections.length) {
            let minDistanceIntersection;
            let minDistance = Infinity;
            for (let i = 0; i < intersections.length; i++) {
                if (intersections[i].squareDistance < minDistance) {
                    minDistance = intersections[i].squareDistance;
                    minDistanceIntersection = intersections[i];
                }
            }
            return minDistanceIntersection;
        }
        return null;
    }

    /**
     * Returns set of objects that can potentially collide with line2d
     * @param {Array} line - coordinates of initial and final subject positions
     * @param {Array} objects - array of objects
     * @param {Array} broadCellSize - maximum cell size
     * @returns {Array} - array of objects, that can possibly collide with the subject
     */
    static filterInvolvedObjects(line, objects, broadCellSize) {
        const involvedBroadCells = [[Math.floor(Math.min(line[0][0], line[1][0]) / broadCellSize), Math.floor(Math.min(line[0][2], line[1][2]) / broadCellSize)], [Math.floor(Math.max(line[0][0], line[1][0]) / broadCellSize), Math.floor(Math.max(line[0][2], line[1][2]) / broadCellSize)]];
        const involvedObjects = [];
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].collides === false) {
                continue;
            }
            for (let k = 0; k < objects[i].broadCells.length; k++) {
                if (objects[i].broadCells[k][0] >= involvedBroadCells[0][0] && objects[i].broadCells[k][0] <= involvedBroadCells[1][0] && objects[i].broadCells[k][1] >= involvedBroadCells[0][1] && objects[i].broadCells[k][1] <= involvedBroadCells[1][1]) {
                    involvedObjects.push(objects[i]);
                    break;
                }
            }
        }
        return involvedObjects;
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
     * Returns square of distance between two points
     * @param {Array} point1
     * @param {Array} point2
     * @returns {number}
     */
    static getSquareDistance(point1, point2) {
        return Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2) + Math.pow(point1[2] - point2[2], 2);
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
}
/* harmony export (immutable) */ exports["a"] = Collision;


/***/ }

},[244]);