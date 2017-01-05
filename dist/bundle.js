webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const SET_GAME_START = 'setGameStart';
/* harmony export (immutable) */ exports["a"] = SET_GAME_START;

const SET_GAME_PLAY = 'setGamePlay';
/* harmony export (immutable) */ exports["b"] = SET_GAME_PLAY;

const SET_GAME_END = 'setGameEnd';
/* harmony export (immutable) */ exports["c"] = SET_GAME_END;


const TOGGLE_KEY_PRESSED = 'toggleKeyPressed';
/* harmony export (immutable) */ exports["d"] = TOGGLE_KEY_PRESSED;

const UPDATE_POINTER_DELTA = 'updatePointerDelta';
/* harmony export (immutable) */ exports["e"] = UPDATE_POINTER_DELTA;

const RESET_POINTER_DELTA = 'resetPointerDelta';
/* harmony export (immutable) */ exports["f"] = RESET_POINTER_DELTA;


const VIEW_ANGLE_UPDATE = 'viewAngleUpdate';
/* harmony export (immutable) */ exports["g"] = VIEW_ANGLE_UPDATE;

const PLAYER_POSITION_UPDATE = 'playerPositionUpdate';
/* harmony export (immutable) */ exports["h"] = PLAYER_POSITION_UPDATE;

const PLAYER_STATE_RUN = 'playerStateRun';
/* harmony export (immutable) */ exports["i"] = PLAYER_STATE_RUN;

const PLAYER_STATE_WALK = 'playerStateWalk';
/* harmony export (immutable) */ exports["j"] = PLAYER_STATE_WALK;

const PLAYER_STATE_STOP = 'playerStateStop';
/* harmony export (immutable) */ exports["k"] = PLAYER_STATE_STOP;


const OBJECTS_SET_VISIBLE = 'objectsSetVisible';
/* harmony export (immutable) */ exports["l"] = OBJECTS_SET_VISIBLE;

const OBJECTS_SET_REACHABLE = 'objectsSetReachable';
/* harmony export (immutable) */ exports["m"] = OBJECTS_SET_REACHABLE;


const DOOR_SET_CLOSING = 'doorSetClosing';
/* harmony export (immutable) */ exports["n"] = DOOR_SET_CLOSING;

const DOOR_SET_CLOSE = 'doorSetClose';
/* harmony export (immutable) */ exports["p"] = DOOR_SET_CLOSE;

const DOOR_SET_OPENING = 'doorSetOpening';
/* harmony export (immutable) */ exports["o"] = DOOR_SET_OPENING;

const DOOR_SET_OPEN = 'doorSetOpen';
/* harmony export (immutable) */ exports["q"] = DOOR_SET_OPEN;


const HINTS_ADD = 'hintsAdd';
/* harmony export (immutable) */ exports["r"] = HINTS_ADD;

const HINTS_REMOVE = 'hintsRemove';
/* harmony export (immutable) */ exports["s"] = HINTS_REMOVE;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const FPS = 60;
/* harmony export (immutable) */ exports["t"] = FPS;

const KEY_W = 87;
/* harmony export (immutable) */ exports["v"] = KEY_W;

const KEY_S = 83;
/* harmony export (immutable) */ exports["w"] = KEY_S;

const KEY_A = 65;
/* harmony export (immutable) */ exports["x"] = KEY_A;

const KEY_D = 68;
/* harmony export (immutable) */ exports["y"] = KEY_D;

const KEY_E = 69;
/* harmony export (immutable) */ exports["C"] = KEY_E;

const KEY_SHIFT = 16;
/* harmony export (immutable) */ exports["z"] = KEY_SHIFT;

const STEP = 4;
/* harmony export (immutable) */ exports["B"] = STEP;

const RUNNING_COEFF = 1.5;
/* harmony export (immutable) */ exports["A"] = RUNNING_COEFF;

const SENSITIVITY = 0.5;
/* harmony export (immutable) */ exports["u"] = SENSITIVITY;

const BROAD_CELL_SIZE = 250;
/* harmony export (immutable) */ exports["d"] = BROAD_CELL_SIZE;

const HAND_LENGTH = 150;
/* harmony export (immutable) */ exports["s"] = HAND_LENGTH;

const HINT_SHOW_TIME = 5000;
/* harmony export (immutable) */ exports["D"] = HINT_SHOW_TIME;

const SPOTLIGHT_RADIUS = 1.5 * BROAD_CELL_SIZE;
/* harmony export (immutable) */ exports["g"] = SPOTLIGHT_RADIUS;


const PAINTING_TYPE = 'painting';
/* unused harmony export PAINTING_TYPE */

const FLOOR_TYPE = 'floor';
/* harmony export (immutable) */ exports["m"] = FLOOR_TYPE;

const CEILING_TYPE = 'ceiling';
/* harmony export (immutable) */ exports["n"] = CEILING_TYPE;

const WALL_TYPE = 'wall';
/* harmony export (immutable) */ exports["o"] = WALL_TYPE;

const BOX_TYPE = 'box';
/* harmony export (immutable) */ exports["p"] = BOX_TYPE;

const SWITCHER_TYPE = 'switcher';
/* harmony export (immutable) */ exports["q"] = SWITCHER_TYPE;

const DOOR_TYPE = 'door';
/* harmony export (immutable) */ exports["r"] = DOOR_TYPE;


const DOOR_OPEN = 'open';
/* harmony export (immutable) */ exports["k"] = DOOR_OPEN;

const DOOR_OPENING = 'opening';
/* harmony export (immutable) */ exports["j"] = DOOR_OPENING;

const DOOR_CLOSE = 'close';
/* harmony export (immutable) */ exports["l"] = DOOR_CLOSE;

const DOOR_CLOSING = 'closing';
/* harmony export (immutable) */ exports["i"] = DOOR_CLOSING;

const DOOR_OPEN_TIME = 3000;
/* harmony export (immutable) */ exports["h"] = DOOR_OPEN_TIME;


const LOADING = 'loading';
/* harmony export (immutable) */ exports["E"] = LOADING;

const START = 'start';
/* harmony export (immutable) */ exports["a"] = START;

const PLAY = 'play';
/* harmony export (immutable) */ exports["b"] = PLAY;

const END = 'end';
/* harmony export (immutable) */ exports["c"] = END;


const PLAYER_RUN = 'run';
/* harmony export (immutable) */ exports["f"] = PLAYER_RUN;

const PLAYER_WALK = 'walk';
/* harmony export (immutable) */ exports["e"] = PLAYER_WALK;

const PLAYER_STOP = 'stop';
/* harmony export (immutable) */ exports["F"] = PLAYER_STOP;


/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(9);
/* harmony export (immutable) */ exports["a"] = getTransformRule;
/* harmony export (immutable) */ exports["h"] = getVisibleObjects;
/* harmony export (immutable) */ exports["d"] = getPlayerCell;
/* harmony export (immutable) */ exports["e"] = isObjectVisible;
/* harmony export (immutable) */ exports["f"] = getPointPosition;
/* harmony export (immutable) */ exports["c"] = vectorsAdd3D;
/* harmony export (immutable) */ exports["b"] = convertDegreeToRad;

const AXIS = ['X', 'Y', 'Z'];

/**
 * Returns css transform rule for given position and angle
 * @param {Object} data
 * @returns {{transform: string}}
 */
function getTransformRule(data) {
    let transform = '';
    if (data.pos) {
        transform = 'translate3d(' + data.pos[0] + 'px,' + data.pos[1] + 'px,' + data.pos[2] + 'px)';
    }
    if (data.angle) {
        for (let axis = 0; axis < data.angle.length; axis++) {
            transform = transform + ' rotate' + AXIS[axis] + '(' + data.angle[axis] + 'deg)';
        }
    }
    return { transform: transform };
}

/**
 * Returns array of objects to be shown on map
 * @param {Array} playerPos
 * @param {Array} objects
 * @returns {Array}
 */
function getVisibleObjects(playerPos, objects) {
    const playerCell = getPlayerCell(playerPos);
    const addVisibleObjects = {};
    const removeVisibleObjects = {};
    for (let i = 0; i < objects.length; i = i + 1) {
        const object = objects[i];
        const isVisible = isObjectVisible(playerCell, object);
        if (object.isVisible !== isVisible) {
            (isVisible ? addVisibleObjects : removeVisibleObjects)[object.name] = true;
        }
    }
    return { addVisibleObjects, removeVisibleObjects };
}

function getPlayerCell(playerPos) {
    return [Math.floor(playerPos[0] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["d" /* BROAD_CELL_SIZE */]), Math.floor(playerPos[2] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["d" /* BROAD_CELL_SIZE */])];
}

function isObjectVisible(playerCell, object) {
    let isVisible = false;
    for (let k = 0; k < object.broadCells.length; k = k + 1) {
        if (Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 && Math.abs(playerCell[1] - object.broadCells[k][1]) < 2) {
            isVisible = true;
            break;
        }
    }
    return isVisible;
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

/**
 * Stores an array of actions that should be dispatched at a certain time
 */
class DelayedActions {
    constructor() {
        this.delayedActions = [];
    }

    /**
     * Returns an array of actions, that are to be dispatched
     * @returns {Array}
     */
    getActualActions() {
        const now = Date.now();
        let actualActions = [];
        let delayedActions = [];
        for (let i = 0; i < this.delayedActions.length; i++) {
            if (this.delayedActions[i].timestamp <= now) {
                actualActions.push(this.delayedActions[i].action);
            } else {
                delayedActions.push(this.delayedActions[i]);
            }
        }
        this.delayedActions = delayedActions;
        return actualActions;
    }

    /**
     * Adds a delayed action to the list
     * @param {Object} action
     * @param {number} delay
     */
    pushAction({ action, delay }) {
        this.delayedActions.push({
            action,
            timestamp: Date.now() + delay
        });
    }

    clear() {
        this.delayedActions = [];
    }
}
/* harmony export (immutable) */ exports["g"] = DelayedActions;


function vectorsAdd3D(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

/**
 * Returns radians for given degrees
 * @param {number} angle
 * @returns {number}
 */
function convertDegreeToRad(angle) {
    return angle / 180 * Math.PI;
}

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_light__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_simple__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class Plain extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);

        this.styleRules = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: props.pos, angle: props.angle }), {
            width: props.size[0],
            height: props.size[1],
            margin: -props.size[1] / 2 + 'px 0 0 ' + props.size[0] / -2 + 'px'
        });
        this.className = 'obj plain ' + props.className;
    }

    render() {
        const {
            parentPos,
            parentAngle,
            pos,
            angle,
            size,
            playerPos,
            light
        } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: this.className, style: this.styleRules },
            light === 'simple' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__light_simple__["a" /* default */], {
                parentPos: parentPos,
                playerPos: playerPos,
                pos: pos
            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__light_light__["a" /* default */], {
                parentPos: parentPos,
                parentAngle: parentAngle,
                pos: pos,
                angle: angle,
                size: size,
                playerPos: playerPos
            })
        );
    }
}

Plain.defaultProps = {
    angle: [0, 0, 0],
    className: ''
};
/* harmony default export */ exports["a"] = Plain;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_collision__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(9);




const level = {
    boundaries: [2500, null, 2500],
    player: {
        pos: [1250, 150, 250],
        size: [50, 150, 50],
        angle: [0, 0, 0]
    },
    objects: [{
        name: 'wall_001',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [2000, 125, 250]
    }, {
        name: 'wall_002',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [250, 125, 500]
    }, {
        name: 'wall_003',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [750, 125, 500]
    }, {
        name: 'wall_004',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [1750, 125, 500]
    }, {
        name: 'wall_005',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 750]
    }, {
        name: 'wall_006',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [2000, 125, 750]
    }, {
        name: 'wall_007',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1250, 125, 1000]
    }, {
        name: 'wall_008',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 450],
        pos: [1000, 125, 1250]
    },
    // {
    //     name: 'dickbutt',
    //     type: PAINTING_TYPE,
    //     size: [50, 50, 0],
    //     pos: [1026, 125, 1250],
    //     angle: [0, 90, 0],
    //     background: 'url(assets/dickbutt.png) 50% 50% / contain',
    //     collides: false
    // },
    {
        name: 'wall_009',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1250, 125, 1500]
    }, {
        name: 'wall_010',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [2225, 125, 1500]
    }, {
        name: 'wall_011',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 1750]
    }, {
        name: 'wall_012',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 450],
        pos: [2000, 125, 1750]
    }, {
        name: 'wall_013',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [750, 125, 2000]
    }, {
        name: 'wall_014',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1750, 125, 2000]
    }, {
        name: 'wall_015',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 2250]
    }, {
        name: 'box_001',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [200, 75, 200],
        props: {
            mode: 1
        }
    }, {
        name: 'box_002',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [50, 50, 50],
        pos: [175, 175, 175],
        props: {
            mode: 2
        }
    }, {
        name: 'box_003',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [2425, 75, 75],
        props: {
            mode: 3
        }
    }, {
        name: 'box_004',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [1300, 75, 900],
        props: {
            mode: 2
        }
    }, {
        name: 'box_005',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [2110, 75, 1975],
        props: {
            mode: 1
        }
    }, {
        name: 'box_006',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [100, 150, 100],
        pos: [900, 75, 2400],
        props: {
            mode: 2
        }
    }, {
        name: 'box_007',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["p" /* BOX_TYPE */],
        size: [90, 70, 90],
        pos: [900, 185, 2390],
        props: {
            mode: 3
        }
    }, {
        name: 'switcher_01',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* SWITCHER_TYPE */],
        pos: [1027, 150, 1250],
        size: [40, 60, 100],
        angle: [0, 90, 0],
        props: {
            id: 1
        },
        isInteractive: true
    }, {
        name: 'door_01',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["r" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [250, 125, 975],
        props: {
            id: 1,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["l" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_02',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* SWITCHER_TYPE */],
        pos: [250, 150, 526],
        size: [40, 60, 100],
        angle: [0, 0, 0],
        props: {
            id: 2
        },
        isInteractive: true
    }, {
        name: 'door_02',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["r" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [2250, 125, 975],
        props: {
            id: 2,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["l" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_03',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* SWITCHER_TYPE */],
        pos: [2026, 150, 250],
        size: [40, 60, 100],
        angle: [0, 90, 0],
        props: {
            id: 3
        },
        isInteractive: true
    }, {
        name: 'door_03',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["r" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [250, 125, 1525],
        props: {
            id: 3,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["l" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_04',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* SWITCHER_TYPE */],
        pos: [250, 150, 2449],
        size: [40, 60, 100],
        angle: [0, 180, 0],
        props: {
            id: 4
        },
        isInteractive: true
    }, {
        name: 'door_04',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["r" /* DOOR_TYPE */],
        size: [20, 250, 500],
        pos: [1500, 125, 2250],
        props: {
            id: 4,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["l" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_05',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* SWITCHER_TYPE */],
        pos: [2250, 150, 1526],
        size: [40, 60, 100],
        angle: [0, 0, 0],
        props: {
            id: 5
        },
        isInteractive: true
    },
    // {
    //     name: 'switcher_05_test',
    //     type: SWITCHER_TYPE,
    //     pos: [1027, 150, 500],
    //     size: [40, 60, 100],
    //     angle: [0, 90, 0],
    //     props: {
    //         id: 5
    //     },
    //     isInteractive: true
    // },
    {
        name: 'door_05',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["r" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [1250, 125, 25],
        props: {
            id: 5,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["l" /* DOOR_CLOSE */]
        }
    }]
};

// generate border walls
for (let x = 250; x < level.boundaries[0]; x += 500) {
    for (let z = 25; z <= level.boundaries[2] - 25; z += level.boundaries[2] - 50) {
        // leave gap for exit door
        if (x === 1250 && z === 25) {
            continue;
        }
        level.objects.push({
            name: 'border wall ' + x + '_' + z,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
            size: [500, 250, 50],
            pos: [x, 125, z]
        });
    }
}
for (let z = 250; z < level.boundaries[2]; z += 500) {
    for (let x = 25; x <= level.boundaries[0] - 25; x += level.boundaries[0] - 50) {
        level.objects.push({
            name: 'border wall ' + x + '_' + z,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["o" /* WALL_TYPE */],
            size: [50, 250, 500],
            pos: [x, 125, z]
        });
    }
}

// generate floor panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'floor tile ' + z + '_' + x,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* FLOOR_TYPE */],
            size: [500, 0, 500],
            pos: [x + 250, 0, z + 250],
            collides: false
        });
    }
}

// generate ceiling panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'ceiling tile ' + z + '_' + x,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["n" /* CEILING_TYPE */],
            size: [500, 0, 500],
            pos: [x + 250, 250, z + 250],
            collides: false
        });
    }
}

// calculate 2d points coordinates for objects hitboxes
const playerCell = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["d" /* getPlayerCell */])(level.player.pos);
for (let i = 0; i < level.objects.length; i++) {
    const obj = level.objects[i];
    let sizeXHalf = 0;
    let sizeYHalf = 0;
    let sizeZHalf = 0;

    if (obj.collides !== false) {
        sizeXHalf = obj.size[0] / 2;
        sizeYHalf = obj.size[1] / 2;
        sizeZHalf = obj.size[2] / 2;
    }
    const playerXHalf = level.player.size[0] / 2;
    const playerYHalf = level.player.size[1] / 2;
    const playerZHalf = level.player.size[2] / 2;
    // if object is "collidable", enlarge its hitbox to simulate players size (actual player is a dot)
    obj.hitbox = [[obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[0] + sizeXHalf + playerXHalf], [obj.pos[1] - sizeYHalf - playerYHalf, obj.pos[1] + sizeYHalf + playerYHalf], [obj.pos[2] - sizeZHalf - playerZHalf, obj.pos[2] + sizeZHalf + playerZHalf]];

    // define to which broad cells does an object belong
    obj.broadCells = [];
    const broadCellsXMax = Math.ceil(level.boundaries[0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */]) - 1;
    const broadCellsYMax = Math.ceil(level.boundaries[2] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */]) - 1;
    const topLeftCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */])));
    const topLeftCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */])));
    const bottomRightCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */])));
    const bottomRightCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */])));
    for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
        for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
            obj.broadCells.push([i, j]);
        }
    }

    obj.isVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["e" /* isObjectVisible */])(playerCell, obj);

    obj.isReachable = false;
}

const collisionView = __WEBPACK_IMPORTED_MODULE_0__lib_collision__["a" /* default */].getCollisionView([level.player.pos, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["f" /* getPointPosition */])({ pos: level.player.pos, distance: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["s" /* HAND_LENGTH */], angle: level.player.angle })], level.objects, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* BROAD_CELL_SIZE */]);
if (collisionView) {
    collisionView.obj.isReachable = true;
}

level.objects = JSON.stringify(level.objects);

/* harmony default export */ exports["a"] = level;

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doorsState__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hints__ = __webpack_require__(108);

/* harmony reexport (module object) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__game__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__player__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__objects__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__doorsState__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__hints__; });


/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(9);





class SimpleLight extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    render() {
        const { parentPos, playerPos, pos } = this.props;
        const relativePos = parentPos ? [pos].concat(parentPos).reduce(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["c" /* vectorsAdd3D */]) : pos;
        const opacity = SimpleLight.getOpacity(SimpleLight.vectorLength3D([playerPos[0] - relativePos[0], playerPos[1] + relativePos[1], playerPos[2] - relativePos[2]]));
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__light_css___default.a.overlay,
            style: { opacity }
        });
    }

    static getOpacity(distance) {
        const ratio = Math.max(0, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* SPOTLIGHT_RADIUS */] - distance) / __WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* SPOTLIGHT_RADIUS */];
        return 1 - ratio;
    }

    static vectorLength3D(v) {
        return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    }
}

/* harmony default export */ exports["a"] = SimpleLight;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
                return [firstCollision, _extends({}, secondCollision, {
                    newPos: secondCollision.collisionPoint
                })];
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


/***/ },
/* 66 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"light-root-3ic0q","overlay":"light-overlay-1kisp"};

/***/ },
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loadingScreen_loadingScreen__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_startScreen_startScreen__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_endScreen_endScreen__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hints_hints__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewport_viewport__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__camera_camera__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__player_player__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scene__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gameLoop__ = __webpack_require__(126);
















class Game extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        if (window.AudioContext) {
            this.audioCtx = new window.AudioContext();
        } else {
            this.audioCtx = new window.webkitAudioContext();
        }
        this.assets = {};

        this.setGameStateStart = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* START */]);
        this.setGameStatePlay = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* PLAY */]);
        this.setGameStateEnd = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["c" /* END */]);

        this.cacheAssetData = this.cacheAssetData.bind(this);
        this.viewportNode = null;
    }

    getChildContext() {
        return {
            audioCtx: this.audioCtx,
            assets: this.assets
        };
    }

    render() {
        const { gameState, hints } = this.props;
        if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["E" /* LOADING */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_loadingScreen_loadingScreen__["a" /* default */], {
                onLoaded: this.setGameStateStart,
                cacheAssetData: this.cacheAssetData
            });
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* START */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_startScreen_startScreen__["a" /* default */], { onStart: this.setGameStatePlay });
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* PLAY */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9__viewport_viewport__["a" /* default */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_hints_hints__["a" /* default */], { hints: hints }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_13__gameLoop__["a" /* default */],
                    { onWin: this.setGameStateEnd },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_10__camera_camera__["a" /* default */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_11__player_player__["a" /* default */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__scene__["a" /* default */], null)
                        )
                    )
                )
            );
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["c" /* END */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_endScreen_endScreen__["a" /* default */], { onEnd: this.setGameStateStart });
        }
    }

    setGameState(state) {
        this.props.setGameState(state);
    }

    cacheAssetData(assetSrc, data) {
        this.assets[assetSrc] = data;
    }
}

Game.propTypes = {
    gameState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    hints: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].instanceOf(Map).isRequired,
    setGameState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
Game.childContextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
function mapStateToProps(state) {
    return {
        gameState: state.gameState,
        hints: state.hints
    };
}

function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
        setGameState: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* game */].setGameState
    }, dispatch);
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Game);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameState_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyPressed_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointerDelta_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewAngle_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playerPosition_js__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playerState_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doorsState_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hints_js__ = __webpack_require__(132);












/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    gameState: __WEBPACK_IMPORTED_MODULE_1__gameState_js__["a" /* default */],
    keyPressed: __WEBPACK_IMPORTED_MODULE_2__keyPressed_js__["a" /* default */],
    pointerDelta: __WEBPACK_IMPORTED_MODULE_3__pointerDelta_js__["a" /* default */],
    viewAngle: __WEBPACK_IMPORTED_MODULE_4__viewAngle_js__["a" /* default */],
    pos: __WEBPACK_IMPORTED_MODULE_5__playerPosition_js__["a" /* default */],
    playerState: __WEBPACK_IMPORTED_MODULE_6__playerState_js__["a" /* default */],
    objects: __WEBPACK_IMPORTED_MODULE_7__objects_js__["a" /* default */],
    doorsState: __WEBPACK_IMPORTED_MODULE_8__doorsState_js__["a" /* default */],
    hints: __WEBPACK_IMPORTED_MODULE_9__hints_js__["a" /* default */]
});

/***/ },
/* 104 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 105 */
/***/ function(module, exports) {

module.exports = [["dist/3628ed55158b5a413097584e7fd8a725.jpg", "image"], ["dist/4419d2b2d3f0aa84d05e653afbce87a8.jpg", "image"], ["dist/83f558afad0f8b176e361b3f574ccb42.jpg", "image"], ["dist/8b3a4e276e0a424265cc0c55fa95360d.svg", "image"], ["dist/abcc39d175e2f5f6ad0df4cc14457193.jpg", "image"], ["dist/c161dc30a1bcbfb0ea16c3740f6189c3.jpg", "image"], ["dist/cc88c5d09dfc94f5daa77e65b2233782.jpg", "image"], ["src/components/door/mixdown.m4a", "audio"], ["src/components/startScreen/theme.m4a", "audio"], ["src/containers/player/steps-running.m4a", "audio"], ["src/containers/player/steps-walking.m4a", "audio"]];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setClosing"] = setClosing;
/* harmony export (immutable) */ exports["setOpening"] = setOpening;
/* harmony export (immutable) */ exports["setClose"] = setClose;
/* harmony export (immutable) */ exports["setOpen"] = setOpen;


function setClosing(id) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["n" /* DOOR_SET_CLOSING */],
        id
    };
}

function setOpening(id) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["o" /* DOOR_SET_OPENING */],
        id
    };
}

function setClose(id) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["p" /* DOOR_SET_CLOSE */],
        id
    };
}

function setOpen(id) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["q" /* DOOR_SET_OPEN */],
        id
    };
}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setGameState"] = setGameState;
/* harmony export (immutable) */ exports["toggleKeyPressed"] = toggleKeyPressed;
/* harmony export (immutable) */ exports["updatePointerDelta"] = updatePointerDelta;
/* harmony export (immutable) */ exports["resetPointerDelta"] = resetPointerDelta;



function setGameState(state) {
    switch (state) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* START */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* SET_GAME_START */]
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["b" /* PLAY */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["b" /* SET_GAME_PLAY */]
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["c" /* END */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["c" /* SET_GAME_END */]
            };
    }
}

function toggleKeyPressed(keyCode, on) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["d" /* TOGGLE_KEY_PRESSED */],
        keyCode, on
    };
}

function updatePointerDelta(x, y) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["e" /* UPDATE_POINTER_DELTA */],
        x, y
    };
}

function resetPointerDelta() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["f" /* RESET_POINTER_DELTA */]
    };
}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["addHints"] = addHints;
/* harmony export (immutable) */ exports["removeHints"] = removeHints;


function addHints(hints) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["r" /* HINTS_ADD */],
        hints
    };
}

function removeHints(hints) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["s" /* HINTS_REMOVE */],
        hints
    };
}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setVisible"] = setVisible;
/* harmony export (immutable) */ exports["setReachable"] = setReachable;


function setVisible({ addVisibleObjects, removeVisibleObjects }) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["l" /* OBJECTS_SET_VISIBLE */],
        addVisibleObjects,
        removeVisibleObjects
    };
}

function setReachable(reachableObject) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["m" /* OBJECTS_SET_REACHABLE */],
        reachableObject
    };
}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["updateViewAngle"] = updateViewAngle;
/* harmony export (immutable) */ exports["updatePosition"] = updatePosition;
/* harmony export (immutable) */ exports["run"] = run;
/* harmony export (immutable) */ exports["walk"] = walk;
/* harmony export (immutable) */ exports["stop"] = stop;


function updateViewAngle(viewAngle) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["g" /* VIEW_ANGLE_UPDATE */],
        viewAngle
    };
}

function updatePosition(pos) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["h" /* PLAYER_POSITION_UPDATE */],
        pos
    };
}

function run() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["i" /* PLAYER_STATE_RUN */]
    };
}

function walk() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["j" /* PLAYER_STATE_WALK */]
    };
}

function stop() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["k" /* PLAYER_STATE_STOP */]
    };
}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_css__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__logo_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



function Logo() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_0__logo_css___default.a.root },
        'The deep dark dungeon'
    );
}

/* harmony default export */ exports["a"] = Logo;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_css__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__box_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);





class Box extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: this.posWithInvertedY });
        this.className = ['obj', __WEBPACK_IMPORTED_MODULE_0__box_css___default.a.root, __WEBPACK_IMPORTED_MODULE_0__box_css___default.a['mode-' + props.mode]].join(' ');
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { pos, playerPos, size } = this.props;

        // Front-Back-Left-Right-Top
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: this.className, style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [0, 0, size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 0, 0]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [0, 0, -size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 180, 0]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [-size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, -90, 0]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, 90, 0]
            }),
            playerPos[1] > pos[1] + size[1] / 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [0, -size[1] / 2, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[0], size[2]],
                angle: [90, 0, 0]
            }) : ''
        );
    }
}

/* harmony default export */ exports["a"] = Box;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ceiling_css__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ceiling_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ceiling_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class Ceiling extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(props) {
        super(props);

        this.styleRules = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["a" /* getTransformRule */])({
            pos: [props.pos[0], -props.pos[1], props.pos[2]],
            angle: [-90, 0, 0]
        }), {
            width: props.size[0],
            height: props.size[1],
            margin: `-${ props.size[1] / 2 }px 0 0 -${ props.size[0] / 2 }px`
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'obj ' + __WEBPACK_IMPORTED_MODULE_0__ceiling_css___default.a.root,
            style: this.styleRules
        });
    }
}

/* harmony default export */ exports["a"] = Ceiling;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_door_door_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_door_door_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_simple__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








const BARS_GAP = 25;

class Door extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(props, context) {
        super(props, context);

        const { pos, size } = props;

        this.posWithInvertedY = [pos[0], -pos[1], pos[2]];
        this.rootStyleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: this.posWithInvertedY });
        this.doorStyleRules = {
            transitionDuration: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["h" /* DOOR_OPEN_TIME */] + 'ms',
            height: size[1]
        };

        this.audioSource = null;
        this.decodedAudioBuffer = this.context.assets['src/components/door/mixdown.m4a'];

        this.panner = this.context.audioCtx.createPanner();
        this.panner.panningModel = 'HRTF';
        this.panner.distanceModel = 'inverse';
        this.panner.refDistance = 20;
        this.panner.rolloffFactor = 0.1;
        this.panner.coneInnerAngle = 360;
        this.panner.coneOuterAngle = 0;
        this.panner.coneOuterGain = 0;
        if (this.panner.positionX) {
            this.panner.positionX.value = pos[0];
            this.panner.positionY.value = pos[1] + size[1];
            this.panner.positionZ.value = pos[2];
        } else {
            this.panner.setPosition(pos[0], pos[1] + size[1], pos[2]);
        }
        this.panner.connect(this.context.audioCtx.destination);
    }

    componentWillUpdate(nextProps) {
        if ([__WEBPACK_IMPORTED_MODULE_4__constants_constants__["i" /* DOOR_CLOSING */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["j" /* DOOR_OPENING */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.startSound();
        } else if ([__WEBPACK_IMPORTED_MODULE_4__constants_constants__["k" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["l" /* DOOR_CLOSE */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.stopSound();
        }
    }

    componentWillUnmount() {
        this.stopSound();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos || nextProps.viewAngle !== this.props.viewAngle || nextProps.state !== this.props.state || nextProps.isVisible !== this.props.isVisible;
    }

    render() {
        const { isVisible, viewAngle, state, size } = this.props;
        const isOpen = [__WEBPACK_IMPORTED_MODULE_4__constants_constants__["j" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["k" /* DOOR_OPEN */]].includes(state);
        const doorStyleRules = _extends({}, this.doorStyleRules, {
            transform: 'translateY(' + (isOpen ? -size[1] * 0.9 : 0) + 'px)'
        });
        const angle = [0, -viewAngle[0], 0];

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'obj door-container', style: this.rootStyleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default.a.root,
                    style: doorStyleRules },
                isVisible ? this.renderBars({ parentPos: [this.posWithInvertedY], angle }) : null
            )
        );
    }

    renderBars({ parentPos, angle }) {
        const { size, playerPos } = this.props;
        const bars = [];
        const maxDimension = size[0] > size[2] ? 0 : 2;
        let key = 0;
        for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i = i + BARS_GAP) {
            const pos = maxDimension === 0 ? [-size[0] / 2 + i, -size[1] / 2, 0] : [0, -size[1] / 2, -size[2] / 2 + i];
            bars.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: key,
                    className: __WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default.a.bar,
                    style: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos, angle }), {
                        height: size[1]
                    })
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__light_simple__["a" /* default */], {
                    parentPos: parentPos,
                    playerPos: playerPos,
                    pos: pos
                })
            ));
            key = key + 1;
        }
        return bars;
    }

    startSound() {
        this.audioSource = this.context.audioCtx.createBufferSource();
        this.audioSource.connect(this.panner);
        this.audioSource.buffer = this.decodedAudioBuffer;
        this.audioSource.start(0);
    }

    stopSound() {
        if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.disconnect(this.panner);
            this.audioSource = null;
        }
    }
}

Door.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
Door.defaultProps = {
    isVisible: true,
    isOpen: false
};
/* harmony default export */ exports["a"] = Door;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endScreen_css__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__endScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



const ENDING_TIME = 3000;

class EndScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;
    }

    componentDidMount() {
        this.endingTimer = setTimeout(() => {
            this.setState({
                showAnyKeyMessage: true
            });
        }, ENDING_TIME);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        clearTimeout(this.endingTimer);
        this.endingTimer = null;
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                className: __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a.root,
                onClick: this.handleKeyDown
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a.message },
                'You escaped'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a.anyKey },
                'Press any key'
            )
        );
    }

    handleKeyDown() {
        if (this.state.showAnyKeyMessage) {
            this.props.onEnd();
        }
    }
}

EndScreen.propTypes = {
    onEnd: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired
};
/* harmony default export */ exports["a"] = EndScreen;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floor_css__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__floor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(26);





class Floor extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { pos, playerPos, size } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
            className: __WEBPACK_IMPORTED_MODULE_0__floor_css___default.a.root,
            pos: pos,
            size: [size[0], size[2]],
            angle: [90, 0, 0],
            playerPos: playerPos
        });
    }
}

/* harmony default export */ exports["a"] = Floor;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hints_css__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hints_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__hints_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



class Hints extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    render() {
        const { hints } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__hints_css___default.a.root },
            Array.from(hints.keys()).map(hint => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__hints_css___default.a.hint, key: hint },
                hint
            ))
        );
    }
}

Hints.propTypes = {
    hints: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].instanceOf(Map).isRequired
};
/* harmony default export */ exports["a"] = Hints;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(9);






const DEFAULT_STYLE_RULES = {
    backgroundImage: 'none',
    backgroundColor: '#000'
};

class Light extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const {
            parentPos,
            parentAngle,
            pos,
            angle,
            size,
            playerPos
        } = this.props;
        let styleRules = DEFAULT_STYLE_RULES;
        const relativePos = parentPos ? [pos].concat(parentPos).reduce(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["c" /* vectorsAdd3D */]) : pos;
        const relativeAngle = parentAngle ? [angle].concat(parentAngle).reduce(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["c" /* vectorsAdd3D */]) : angle;

        // front
        if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
            if (playerPos[2] > relativePos[2]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - relativePos[2]
                });
            }
            // back
        } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
            if (playerPos[2] < relativePos[2]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[2] - playerPos[2]
                });
            }
            // left
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
            if (playerPos[0] < relativePos[0]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[0] - playerPos[0]
                });
            }
            // right
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
            if (playerPos[0] > relativePos[0]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - relativePos[0]
                });
            }
            // top
        } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] > -relativePos[1]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        }

        // return <div className={styles.root} style={{
        //     backgroundImage: 'none',
        //     backgroundColor: 'none'
        // }} />;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__light_css___default.a.root,
            style: styleRules
        });
    }

    static getPlayerSpotLightBackground({ pos, distance }) {
        const ratio = Math.max(0, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* SPOTLIGHT_RADIUS */] - distance) / __WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* SPOTLIGHT_RADIUS */];
        if (ratio) {
            const size = (2 + ratio) * __WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* SPOTLIGHT_RADIUS */] / 2 * 10;
            return {
                backgroundPosition: pos[0] - size / 2 + 'px ' + (pos[1] - size / 2) + 'px',
                backgroundSize: size,
                backgroundColor: 'rgba(0, 0, 0, ' + (1 - ratio) + ')'
            };
        } else {
            return DEFAULT_STYLE_RULES;
        }
    }
}

/* harmony default export */ exports["a"] = Light;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loadingScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloadAssetsList__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloadAssetsList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__preloadAssetsList__);





class LoadingScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.totalAssets = __WEBPACK_IMPORTED_MODULE_2__preloadAssetsList___default.a.length;
        this.state = {
            assetsLoaded: 0,
            loadingFailed: false
        };

        __WEBPACK_IMPORTED_MODULE_2__preloadAssetsList___default.a.forEach(([assetSrc, assetType]) => {
            if (assetType === 'image') {
                const image = new Image();
                image.onload = () => {
                    this.handleAssetLoaded();
                };
                image.onerror = () => {
                    this.handleAssetError(`Couldn't load image ${ assetSrc }`);
                };
                image.src = assetSrc;
            } else if (assetType === 'audio') {
                fetch(assetSrc).then(response => response.arrayBuffer()).then(buffer => new Promise((resolve, reject) => {
                    this.context.audioCtx.decodeAudioData(buffer, decodedData => {
                        this.props.cacheAssetData(assetSrc, decodedData);
                        resolve();
                    }, reject);
                })).then(() => {
                    this.handleAssetLoaded();
                }).catch(error => {
                    this.handleAssetError(error);
                });
            }
        });
    }

    componentDidUpdate() {
        if (this.state.assetsLoaded === this.totalAssets) {
            this.props.onLoaded();
        }
    }

    render() {
        const percent = Math.ceil(100 * this.state.assetsLoaded / this.totalAssets);
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css___default.a.root },
            this.state.loadingFailed ? 'Loading failed, sorry' : `Loading assets ${ percent } %`
        );
    }

    handleAssetLoaded() {
        this.setState({ assetsLoaded: this.state.assetsLoaded + 1 });
    }

    handleAssetError(error) {
        this.setState({ loadingFailed: true });
        console.error(error);
    }
}

LoadingScreen.propTypes = {
    onLoaded: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    cacheAssetData: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired
};
LoadingScreen.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = LoadingScreen;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plain_plain__ = __webpack_require__(26);



class Painting extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        // todo use background
        const { pos, playerPos, size, angle, background } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__plain_plain__["a" /* default */], {
            className: 'painting',
            pos: [pos[0], -pos[1], pos[2]],
            playerPos: playerPos,
            size: size,
            angle: angle,
            background: background
        });
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = Painting;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startScreen_css__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__startScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logo_Logo__ = __webpack_require__(111);




const MUSIC_VOLUME = 0.2;

class StartScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.decodedAudioBuffer = this.context.assets['src/components/startScreen/theme.m4a'];
        this.gainNode = this.context.audioCtx.createGain();
        this.gainNode.gain.value = MUSIC_VOLUME;
        this.gainNode.connect(this.context.audioCtx.destination);

        this.handleStart = this.handleStart.bind(this);
    }

    componentDidMount() {
        this.startMusic();
    }

    componentWillUnmount() {
        this.stopMusic();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.root },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Logo_Logo__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menuItem },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'button',
                    { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menuItemButton, onClick: this.handleStart },
                    'Start'
                )
            )
        );
    }

    handleStart() {
        this.props.onStart();
    }

    startMusic() {
        this.audioSource = this.context.audioCtx.createBufferSource();
        this.audioSource.connect(this.gainNode);
        this.audioSource.buffer = this.decodedAudioBuffer;
        this.audioSource.loop = true;
        this.audioSource.start(0);
    }

    stopMusic() {
        if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.disconnect(this.gainNode);
            this.audioSource = null;
        }
    }
}

StartScreen.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
StartScreen.propTypes = {
    onStart: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired
};
/* harmony default export */ exports["a"] = StartScreen;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);






const HANDLE_SIZE = [6, 40];
const meaningfulProps = ['playerPos', 'isReachable', 'isOn', 'isInteractive'];

class Switcher extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({
            pos: this.posWithInvertedY,
            angle: props.angle
        });
    }

    shouldComponentUpdate(nextProps) {
        for (let i = 0; i < meaningfulProps.length; i++) {
            if (nextProps[meaningfulProps[i]] !== this.props[meaningfulProps[i]]) {
                return true;
            }
        }
        return false;
    }

    render() {
        const { playerPos, size, angle, isReachable = false,
            isOn = false, isInteractive = true } = this.props;
        const classNames = ['obj', __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.root, isOn ? __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.on : __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.off];
        if (isInteractive && isReachable) {
            classNames.push(__WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.reachable);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: classNames.join(' '), style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                className: __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.wood,
                size: [size[0], size[1]],
                pos: [0, 0, 0],
                playerPos: playerPos,
                parentPos: [this.posWithInvertedY],
                parentAngle: [angle]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: `${ __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.handle } obj` },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                    light: 'simple',
                    size: [HANDLE_SIZE[1], HANDLE_SIZE[0]],
                    pos: [-HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2],
                    angle: [0, -90, 0],
                    playerPos: playerPos,
                    parentPos: [this.posWithInvertedY],
                    parentAngle: [angle]
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                    light: 'simple',
                    size: [HANDLE_SIZE[1], HANDLE_SIZE[0]],
                    pos: [HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2],
                    angle: [0, 90, 0],
                    playerPos: playerPos,
                    parentPos: [this.posWithInvertedY],
                    parentAngle: [angle]
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                    light: 'simple',
                    size: [HANDLE_SIZE[0], HANDLE_SIZE[1]],
                    pos: [0, -HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2],
                    angle: [90, 0, 0],
                    playerPos: playerPos,
                    parentPos: [this.posWithInvertedY],
                    parentAngle: [angle]
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                    light: 'simple',
                    size: [HANDLE_SIZE[0], HANDLE_SIZE[1]],
                    pos: [0, HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2],
                    angle: [-90, 0, 0],
                    playerPos: playerPos,
                    parentPos: [this.posWithInvertedY],
                    parentAngle: [angle]
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                    light: 'simple',
                    size: [HANDLE_SIZE[0], HANDLE_SIZE[0]],
                    pos: [0, 0, HANDLE_SIZE[1]],
                    angle: [0, 0, 0],
                    playerPos: playerPos,
                    parentPos: [this.posWithInvertedY],
                    parentAngle: [angle]
                })
            )
        );
    }
}
/* harmony export (immutable) */ exports["a"] = Switcher;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wall_css__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wall_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wall_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);






// no support for rotated walls for now
class Wall extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: this.posWithInvertedY });
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.playerPos !== this.props.playerPos;
    }

    render() {
        const { size, playerPos } = this.props;

        // Front-Back-Left-Right
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'obj ' + __WEBPACK_IMPORTED_MODULE_0__wall_css___default.a.root, style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [0, 0, size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 0, 0]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [0, 0, -size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 180, 0]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [-size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, -90, 0]
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                pos: [size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, 90, 0]
            })
        );
    }
}

/* harmony default export */ exports["a"] = Wall;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const HINT_GOAL = 'Where am I? It\'s so dark here. I have to find the way out';
/* harmony export (immutable) */ exports["a"] = HINT_GOAL;

const HINT_FIRST_SWITCHER = 'What if I push this lever?';
/* harmony export (immutable) */ exports["e"] = HINT_FIRST_SWITCHER;

const HINT_DOOR = 'Sounds like the door opened somewhere';
/* harmony export (immutable) */ exports["f"] = HINT_DOOR;

const HINT_WASD = 'Use `W`, `A`, `S`, `D` or arrows to move';
/* harmony export (immutable) */ exports["b"] = HINT_WASD;

const HINT_SHIFT = 'Hold `Shift` to run';
/* harmony export (immutable) */ exports["c"] = HINT_SHIFT;

const HINT_E = 'Press `E` to interact';
/* harmony export (immutable) */ exports["d"] = HINT_E;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_css__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__camera_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);







function Camera({ viewAngle, children }) {
    const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_0__camera_css___default.a.root, style: transformRule },
        children
    );
}
Camera.propTypes = {
    viewAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired
};

function mapStateToProps(state) {
    return {
        viewAngle: state.viewAngle
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Camera);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_hints__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_loop__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__level__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_collision__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actionCreators__ = __webpack_require__(41);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };















class GameLoop extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.delayedActions = new __WEBPACK_IMPORTED_MODULE_6__lib_utils__["g" /* DelayedActions */]();

        this.loop = new __WEBPACK_IMPORTED_MODULE_7__lib_loop__["a" /* default */](this.loopCallback.bind(this), __WEBPACK_IMPORTED_MODULE_4__constants_constants__["t" /* FPS */]);

        this.prevKeysPressed = {};
        this.shownHints = {};
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
        this.delayedActions.clear();
        this.shownHints = {};
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
    }

    loopCallback(frameRateCoefficient) {
        const actions = this.delayedActions.getActualActions();

        const newState = {};
        const currentStore = this.context.store.getState();

        // show start hint
        actions.push(this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["a" /* HINT_GOAL */], __WEBPACK_IMPORTED_MODULE_5__constants_hints__["b" /* HINT_WASD */], __WEBPACK_IMPORTED_MODULE_5__constants_hints__["c" /* HINT_SHIFT */]], true));

        const pointerDelta = currentStore.pointerDelta;
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = currentStore.viewAngle;
            const newViewAngle = [(currentViewAngle[0] - pointerDelta.x * __WEBPACK_IMPORTED_MODULE_4__constants_constants__["u" /* SENSITIVITY */]) % 360, Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * __WEBPACK_IMPORTED_MODULE_4__constants_constants__["u" /* SENSITIVITY */], -90), 90), 0];
            actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["b" /* player */].updateViewAngle(newViewAngle));
            actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["a" /* game */].resetPointerDelta());
            newState.viewAngle = newViewAngle;
        }

        let angleShift = [];
        const keyPressed = currentStore.keyPressed;
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["v" /* KEY_W */]]) {
            angleShift.push(Math.PI);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["w" /* KEY_S */]]) {
            angleShift.push(0);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["x" /* KEY_A */]]) {
            angleShift.push(Math.PI / 2);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["y" /* KEY_D */]]) {
            // hack for angles sum
            if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["v" /* KEY_W */]]) {
                angleShift.push(3 * Math.PI / 2);
            } else {
                angleShift.push(-Math.PI / 2);
            }
        }

        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["v" /* KEY_W */]] || keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["w" /* KEY_S */]] || keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["x" /* KEY_A */]] || keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["y" /* KEY_D */]]) {
            if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* KEY_SHIFT */]]) {
                actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["b" /* player */].run());
            } else {
                actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["b" /* player */].walk());
            }
        } else {
            actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["b" /* player */].stop());
        }

        if (angleShift.length) {
            let reducedAngleShift = 0;
            for (let i = 0; i < angleShift.length; i++) {
                reducedAngleShift = reducedAngleShift + angleShift[i];
            }
            reducedAngleShift = reducedAngleShift / angleShift.length;

            reducedAngleShift = reducedAngleShift + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_utils__["b" /* convertDegreeToRad */])(currentStore.viewAngle[0]);

            let step = frameRateCoefficient * (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* KEY_SHIFT */]] ? __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* RUNNING_COEFF */] : 1) * __WEBPACK_IMPORTED_MODULE_4__constants_constants__["B" /* STEP */];
            const shift = [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)];
            const currentPos = currentStore.pos;
            const newPos = [];
            for (let i = 0; i < 3; i++) {
                newPos.push(currentPos[i] + shift[i]);
            }
            const objects = currentStore.objects;
            const collisions = __WEBPACK_IMPORTED_MODULE_9__lib_collision__["a" /* default */].getCollisions([currentPos, newPos], objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["d" /* BROAD_CELL_SIZE */]);
            // get last collision result as new player position
            const newPosAfterCollisions = collisions[collisions.length - 1].newPos;
            actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["b" /* player */].updatePosition(newPosAfterCollisions));
            newState.pos = newPosAfterCollisions;
        }

        if (newState.pos) {
            // if out of bounds - win
            for (let i = 0; i < 3; i++) {
                if (__WEBPACK_IMPORTED_MODULE_8__level__["a" /* default */].boundaries[i]) {
                    if (newState.pos[i] < 0 || newState.pos[i] > __WEBPACK_IMPORTED_MODULE_8__level__["a" /* default */].boundaries[i]) {
                        this.props.onWin();
                        return;
                    }
                }
            }

            // render only visible objects
            const { addVisibleObjects, removeVisibleObjects } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_utils__["h" /* getVisibleObjects */])(newState.pos, currentStore.objects);
            if (Object.keys(addVisibleObjects).length || Object.keys(removeVisibleObjects).length) {
                actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["c" /* objects */].setVisible({ addVisibleObjects, removeVisibleObjects }));
            }
        }

        // find interactive object which we can reach with a hand
        let reachableObject;
        if (newState.pos || newState.viewAngle) {
            const playerPosition = newState.pos || currentStore.pos;
            const viewAngle = newState.viewAngle || currentStore.viewAngle;
            const collisionView = __WEBPACK_IMPORTED_MODULE_9__lib_collision__["a" /* default */].getCollisionView([playerPosition, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_utils__["f" /* getPointPosition */])({ pos: playerPosition, distance: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["s" /* HAND_LENGTH */], angle: viewAngle })], currentStore.objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["d" /* BROAD_CELL_SIZE */]);
            if (collisionView && collisionView.obj.isInteractive) {
                reachableObject = collisionView.obj;
                if (!reachableObject.isReachable) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["c" /* objects */].setReachable(_extends({}, reachableObject)));
                    actions.push(this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["d" /* HINT_E */]], false));
                    actions.push(this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["e" /* HINT_FIRST_SWITCHER */]], true));
                }
            } else {
                actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["c" /* objects */].setReachable(null));
            }
        } else {
            reachableObject = currentStore.objects.find(obj => obj.isReachable);
        }

        // perform interaction if key E is pressed
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["C" /* KEY_E */]] && !this.prevKeysPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["C" /* KEY_E */]] && reachableObject) {
            if (reachableObject.type === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* SWITCHER_TYPE */]) {
                const door = currentStore.doorsState[reachableObject.props.id];
                if (![__WEBPACK_IMPORTED_MODULE_4__constants_constants__["j" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["i" /* DOOR_CLOSING */]].includes(door)) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_10__actionCreators__["d" /* doorsState */][door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["k" /* DOOR_OPEN */] ? 'setClosing' : 'setOpening'](reachableObject.props.id));
                    this.delayedActions.pushAction({
                        action: __WEBPACK_IMPORTED_MODULE_10__actionCreators__["d" /* doorsState */][door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["k" /* DOOR_OPEN */] ? 'setClose' : 'setOpen'](reachableObject.props.id),
                        delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["h" /* DOOR_OPEN_TIME */]
                    });
                    if (door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["l" /* DOOR_CLOSE */]) {
                        this.delayedActions.pushAction({
                            action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["f" /* HINT_DOOR */]], false, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["h" /* DOOR_OPEN_TIME */]),
                            delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["h" /* DOOR_OPEN_TIME */]
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

    showHints(hints, once, delay = 0) {
        const rawHints = hints.filter(hint => {
            if (once && this.shownHints[hint]) {
                return false;
            }
            this.shownHints[hint] = true;
            return true;
        });
        if (rawHints.length) {
            this.delayedActions.pushAction({
                action: __WEBPACK_IMPORTED_MODULE_10__actionCreators__["e" /* hints */].removeHints(rawHints),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["D" /* HINT_SHOW_TIME */] + delay
            });
        }
        return __WEBPACK_IMPORTED_MODULE_10__actionCreators__["e" /* hints */].addHints(rawHints);
    }
}

GameLoop.contextTypes = {
    store: __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__["a" /* default */].isRequired
};
GameLoop.propTypes = {
    onWin: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(GameLoop);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_painting_painting__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floor_floor__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ceiling_ceiling__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_wall_wall__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_box_box__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_switcher_switcher__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_door_door__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_constants__ = __webpack_require__(9);













function Scene({ pos, viewAngle, doorsState, visibleObjects }) {
    const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_utils__["a" /* getTransformRule */])({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const renderedObjects = [];
    for (let i = 0; i < visibleObjects.length; i++) {
        const object = visibleObjects[i];
        switch (object.type) {
            // case PAINTING_TYPE:
            //     renderedObjects.push(<Painting
            //         key={object.name}
            //         pos={object.pos}
            //         playerPos={pos}
            //         angle={object.angle}
            //         size={object.size.filter(value => value !== 0).slice(0, 2)}
            //         background={object.background}
            //         getTransformRule={getTransformRule}
            //     />);
            //     break;
            case __WEBPACK_IMPORTED_MODULE_10__constants_constants__["m" /* FLOOR_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_floor_floor__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants_constants__["n" /* CEILING_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ceiling_ceiling__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    size: [object.size[0], object.size[2]]
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants_constants__["o" /* WALL_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_wall_wall__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants_constants__["p" /* BOX_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_box_box__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size,
                    mode: object.props.mode
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants_constants__["q" /* SWITCHER_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_switcher_switcher__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    size: object.size,
                    angle: object.angle,
                    playerPos: pos,
                    isReachable: object.isReachable,
                    isInteractive: [__WEBPACK_IMPORTED_MODULE_10__constants_constants__["k" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_10__constants_constants__["l" /* DOOR_CLOSE */]].includes(doorsState[object.props.id]),
                    isOn: [__WEBPACK_IMPORTED_MODULE_10__constants_constants__["k" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_10__constants_constants__["j" /* DOOR_OPENING */]].includes(doorsState[object.props.id])
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants_constants__["r" /* DOOR_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_door_door__["a" /* default */], {
                    key: object.name,
                    isVisible: object.isVisible,
                    pos: object.pos,
                    playerPos: pos,
                    viewAngle: viewAngle,
                    size: object.size,
                    state: doorsState[object.props.id]
                }));
                break;
        }
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'obj scene', style: transformRule },
        renderedObjects
    );
}
Scene.propTypes = {
    pos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    viewAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    doorsState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    visibleObjects: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object).isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        visibleObjects: state.objects.filter(obj => obj.isVisible || obj.type === __WEBPACK_IMPORTED_MODULE_10__constants_constants__["r" /* DOOR_TYPE */]),
        doorsState: state.doorsState
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Scene);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_css__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__viewport_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(41);







class Viewport extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

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
        this.viewportNode.requestPointerLock();
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__viewport_css___default.a.root,
                onMouseMove: this.onMouseMove,
                onClick: this.requestPointerLock,
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

    requestPointerLock() {
        this.viewportNode.requestPointerLock();
    }

    onPointerLockChange() {
        this.pointerLocked = document.pointerLockElement === this.viewportNode;
    }
}

Viewport.propTypes = {
    toggleKeyPressed: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    updatePointerDelta: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired
};
function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({
        updatePointerDelta: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* game */].updatePointerDelta,
        toggleKeyPressed: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* game */].toggleKeyPressed
    }, dispatch);
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, mapDispatchToProps)(Viewport);

/***/ },
/* 129 */
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
}
/* harmony export (immutable) */ exports["a"] = Loop;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = doorsState;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function getInitialState() {
    return JSON.parse(__WEBPACK_IMPORTED_MODULE_0__level__["a" /* default */].objects).filter(obj => obj.type === __WEBPACK_IMPORTED_MODULE_1__constants_constants__["r" /* DOOR_TYPE */]).reduce((result, obj) => {
        result[obj.props.id] = obj.props.state;
        return result;
    }, {});
}

function doorsState(state = {}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["n" /* DOOR_SET_CLOSING */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["i" /* DOOR_CLOSING */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["o" /* DOOR_SET_OPENING */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["j" /* DOOR_OPENING */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["p" /* DOOR_SET_CLOSE */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["l" /* DOOR_CLOSE */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["q" /* DOOR_SET_OPEN */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["k" /* DOOR_OPEN */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(9);
/* harmony export (immutable) */ exports["a"] = gameState;



function gameState(state = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* LOADING */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* SET_GAME_START */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["a" /* START */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["b" /* SET_GAME_PLAY */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["b" /* PLAY */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["c" /* SET_GAME_END */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* END */];
        default:
            return state;
    }
}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = hints;


function hints(state = new Map(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["r" /* HINTS_ADD */]:
            {
                if (!action.hints.length) {
                    return state;
                }
                const newState = new Map(state);
                action.hints.forEach(hint => {
                    const refCount = newState.get(hint) || 0;
                    newState.delete(hint);
                    newState.set(hint, refCount + 1);
                });
                return newState;
            }
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["s" /* HINTS_REMOVE */]:
            {
                if (!action.hints.length) {
                    return state;
                }
                const newState = new Map(state);
                action.hints.forEach(hint => {
                    const refCount = newState.get(hint);
                    if (refCount === 1) {
                        newState.delete(hint);
                    } else if (refCount) {
                        newState.set(hint, refCount - 1);
                    }
                });
                return newState;
            }
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* SET_GAME_START */]:
            return new Map();
        default:
            return state;
    }
}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = keyPressed;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function getInitialState() {
    return {
        [__WEBPACK_IMPORTED_MODULE_0__constants_constants__["v" /* KEY_W */]]: false,
        [__WEBPACK_IMPORTED_MODULE_0__constants_constants__["w" /* KEY_S */]]: false,
        [__WEBPACK_IMPORTED_MODULE_0__constants_constants__["x" /* KEY_A */]]: false,
        [__WEBPACK_IMPORTED_MODULE_0__constants_constants__["y" /* KEY_D */]]: false,
        [__WEBPACK_IMPORTED_MODULE_0__constants_constants__["C" /* KEY_E */]]: false,
        [__WEBPACK_IMPORTED_MODULE_0__constants_constants__["z" /* KEY_SHIFT */]]: false
    };
}

function keyPressed(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["d" /* TOGGLE_KEY_PRESSED */]:
            if (action.keyCode in state) {
                return _extends({}, state, {
                    [action.keyCode]: action.on
                });
            }
            return state;
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level__ = __webpack_require__(27);
/* harmony export (immutable) */ exports["a"] = objects;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function getInitialState() {
    return JSON.parse(__WEBPACK_IMPORTED_MODULE_2__level__["a" /* default */].objects);
}

function setDoorCollidable({ state, id, on }) {
    const objects = new Array(state.length);
    for (let i = 0; i < state.length; i++) {
        let object = state[i];
        if (object.type === __WEBPACK_IMPORTED_MODULE_0__constants_constants__["r" /* DOOR_TYPE */] && object.props.id === id) {
            object.collides = on;
        }
        objects[i] = object;
    }
    return objects;
}

function objects(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["l" /* OBJECTS_SET_VISIBLE */]:
            {
                const objects = new Array(state.length);
                for (let i = 0; i < state.length; i++) {
                    const object = state[i];
                    if (object.name in action.addVisibleObjects) {
                        objects[i] = _extends({}, object, { isVisible: true });
                    } else if (object.name in action.removeVisibleObjects) {
                        objects[i] = _extends({}, object, { isVisible: false });
                    } else {
                        objects[i] = object;
                    }
                }
                return objects;
            }
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["m" /* OBJECTS_SET_REACHABLE */]:
            {
                const objects = new Array(state.length);
                for (let i = 0; i < state.length; i++) {
                    const object = state[i];
                    let isReachable;
                    if (action.reachableObject && object.name === action.reachableObject.name) {
                        isReachable = true;
                    }
                    if (isReachable !== object.isReachable) {
                        objects[i] = _extends({}, object, { isReachable });
                    } else {
                        objects[i] = object;
                    }
                }
                return objects;
            }
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["q" /* DOOR_SET_OPEN */]:
            {
                return setDoorCollidable({ state, id: action.id, on: false });
            }
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["p" /* DOOR_SET_CLOSE */]:
            {
                return setDoorCollidable({ state, id: action.id, on: true });
            }
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* SET_GAME_START */]:
            {
                return getInitialState();
            }
        default:
            return state;
    }
}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level__ = __webpack_require__(27);
/* harmony export (immutable) */ exports["a"] = playerPosition;



function getInitialState() {
    return [...__WEBPACK_IMPORTED_MODULE_1__level__["a" /* default */].player.pos];
}

function playerPosition(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["h" /* PLAYER_POSITION_UPDATE */]:
            return action.pos;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = playerState;



function playerState(state = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["F" /* PLAYER_STOP */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["k" /* PLAYER_STATE_STOP */]:
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* SET_GAME_START */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["F" /* PLAYER_STOP */];
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["j" /* PLAYER_STATE_WALK */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["e" /* PLAYER_WALK */];
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["i" /* PLAYER_STATE_RUN */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["f" /* PLAYER_RUN */];
        default:
            return state;
    }
}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = pointerDelta;


function getInitialState() {
    return { x: 0, y: 0 };
}

function pointerDelta(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["e" /* UPDATE_POINTER_DELTA */]:
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["f" /* RESET_POINTER_DELTA */]:
            return getInitialState();
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = viewAngle;



function getInitialState() {
    return [...__WEBPACK_IMPORTED_MODULE_0__level__["a" /* default */].player.angle];
}

function viewAngle(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["g" /* VIEW_ANGLE_UPDATE */]:
            return action.viewAngle;
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 139 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"logo-root-1ptFe"};

/***/ },
/* 140 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"box-root-1bYIs","mode-1":"box-mode-1-2_ljJ","mode-2":"box-mode-2-3XTO6","mode-3":"box-mode-3-ZvQ5H"};

/***/ },
/* 141 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ceiling-root-oxGSS"};

/***/ },
/* 142 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"door-root-eMRzu","bar":"door-bar-eZp6B"};

/***/ },
/* 143 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"endScreen-root-37ZFZ","message":"endScreen-message-2i6JW","anyKey":"endScreen-anyKey--krEO"};

/***/ },
/* 144 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"floor-root-3F8ag"};

/***/ },
/* 145 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"hints-root-3NehV","hint":"hints-hint-2sBxI"};

/***/ },
/* 146 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"loadingScreen-root-1mysW"};

/***/ },
/* 147 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"startScreen-root-jM2W-","menuItem":"startScreen-menuItem-1ZrkU","menuItemButton":"startScreen-menuItemButton-3tYC1"};

/***/ },
/* 148 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"switcher-root-2DxPU","handle":"switcher-handle-3j71N","off":"switcher-off-yQoql","on":"switcher-on-H20ki","reachable":"switcher-reachable-24rEd"};

/***/ },
/* 149 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"wall-root-1TWW_"};

/***/ },
/* 150 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"camera-root-3QZty"};

/***/ },
/* 151 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"viewport-root-goyag"};

/***/ },
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
});


/***/ },
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_game__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers__ = __webpack_require__(103);












const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__["enableBatching"])(__WEBPACK_IMPORTED_MODULE_7__reducers__["a" /* default */]));

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_game__["a" /* default */], null)
), document.getElementById('app'));

/***/ },
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_css__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__player_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_utils__ = __webpack_require__(11);







class Player extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.decodedAudioBufferWalking = this.context.assets['src/containers/player/steps-walking.m4a'];
        this.decodedAudioBufferRunning = this.context.assets['src/containers/player/steps-running.m4a'];

        this.panner = this.context.audioCtx.createPanner();
        this.panner.panningModel = 'HRTF';
        this.panner.distanceModel = 'inverse';
        this.panner.refDistance = 20;
        this.panner.rolloffFactor = 0.1;
        this.panner.coneInnerAngle = 360;
        this.panner.coneOuterAngle = 0;
        this.panner.coneOuterGain = 0;
        this.panner.connect(this.context.audioCtx.destination);

        this.gainNode = this.context.audioCtx.createGain();
        this.gainNode.gain.value = 1;
        this.gainNode.connect(this.panner);

        this.updateListenerPosition(this.props.playerPos);
        this.updateListenerOrientation(this.props.viewAngle);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.playerPos && this.props.playerPos !== nextProps.playerPos) {
            this.updatePannerPosition(nextProps.playerPos);
            this.updateListenerPosition(nextProps.playerPos);
        }

        if (nextProps.viewAngle && this.props.viewAngle !== nextProps.viewAngle) {
            this.updateListenerOrientation(nextProps.viewAngle);
        }

        if (nextProps.playerState && this.props.playerState !== nextProps.playerState) {
            switch (nextProps.playerState) {
                case __WEBPACK_IMPORTED_MODULE_3__constants_constants__["e" /* PLAYER_WALK */]:
                    this.soundStop();
                    this.soundStart(this.decodedAudioBufferWalking);
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__constants_constants__["f" /* PLAYER_RUN */]:
                    this.soundStop();
                    this.soundStart(this.decodedAudioBufferRunning);
                    break;
                default:
                    this.soundStop();
            }
        }
    }

    componentWillUnmount() {
        this.soundStop();
    }

    render() {
        const { children, playerState } = this.props;
        const className = ['obj player-animation', playerState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["e" /* PLAYER_WALK */] ? __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.playerAnimationWalking : playerState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["f" /* PLAYER_RUN */] ? __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.playerAnimationRunning : ''].join(' ');

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: className },
            children
        );
    }

    soundStart(decodedAudioBuffer) {
        this.audioSource = this.context.audioCtx.createBufferSource();
        this.audioSource.connect(this.gainNode);
        this.audioSource.buffer = decodedAudioBuffer;
        this.audioSource.loop = true;
        this.audioSource.start(0);
    }

    soundStop() {
        if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.disconnect(this.gainNode);
            this.audioSource = null;
        }
    }

    updatePannerPosition(pos) {
        if (this.panner.positionX) {
            this.panner.positionX.value = pos[0];
            this.panner.positionY.value = 0;
            this.panner.positionZ.value = pos[2];
        } else {
            this.panner.setPosition(pos[0], 0, pos[2]);
        }
    }

    /**
     * Updates audio listener position values
     * @param {Array} pos
     */
    updateListenerPosition(pos) {
        if (this.context.audioCtx.listener.positionX) {
            this.context.audioCtx.listener.positionX.value = pos[0];
            this.context.audioCtx.listener.positionY.value = pos[1];
            this.context.audioCtx.listener.positionZ.value = pos[2];
        } else {
            this.context.audioCtx.listener.setPosition(...pos);
        }
    }

    /**
     * Updates audio listener orientation values
     * @param {Array} angle
     */
    updateListenerOrientation(angle) {
        const [forwardX, forwardY, forwardZ] = Player.getVectorFromAngles(...angle);

        let upVerticalAngle;
        let upHorizontalAngle;
        if (angle[1] > 0) {
            upVerticalAngle = 90 - angle[1];
            upHorizontalAngle = (angle[0] - 180) % 360;
        } else {
            upVerticalAngle = 90 + angle[1];
            upHorizontalAngle = angle[0];
        }
        const [upX, upY, upZ] = Player.getVectorFromAngles(upHorizontalAngle, upVerticalAngle);

        if (this.context.audioCtx.listener.forwardX) {
            this.context.audioCtx.listener.forwardX.value = forwardX;
            this.context.audioCtx.listener.forwardY.value = forwardY;
            this.context.audioCtx.listener.forwardZ.value = forwardZ;
            this.context.audioCtx.listener.upX.value = upX;
            this.context.audioCtx.listener.upY.value = upY;
            this.context.audioCtx.listener.upZ.value = upZ;
        } else {
            this.context.audioCtx.listener.setOrientation(forwardX, forwardY, forwardZ, upX, upY, upZ);
        }
    }

    /**
     * Returns vector coordinates for given angles
     * @param {number} horizontalAngle (rad)
     * @param {number} verticalAngle (rad)
     * @returns {number[]}
     */
    static getVectorFromAngles(horizontalAngle, verticalAngle) {
        const y = Math.sin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_utils__["b" /* convertDegreeToRad */])(verticalAngle));
        const xzProjectionDist = Math.sqrt(1 - y * y);
        const x = Math.sin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_utils__["b" /* convertDegreeToRad */])(horizontalAngle)) * xzProjectionDist;
        let z = Math.sqrt(xzProjectionDist * xzProjectionDist - x * x);
        if (Math.abs(horizontalAngle) < 90 || Math.abs(horizontalAngle) > 270) {
            z = -z;
        }
        return [x, y, z];
    }
}

Player.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
Player.propTypes = {
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    viewAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerState: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired
};
function mapStateToProps(state) {
    return {
        playerPos: state.pos,
        viewAngle: state.viewAngle,
        playerState: state.playerState
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Player);

/***/ },
/* 290 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"playerAnimationWalking":"player-playerAnimationWalking-v-Wqe","playerAnimationRunning":"player-playerAnimationRunning-2Ehsc","playerAnimationWalkingY":"player-playerAnimationWalkingY-XdwCr","playerAnimationWalkingX":"player-playerAnimationWalkingX-rfzrE"};

/***/ }
],[279]);