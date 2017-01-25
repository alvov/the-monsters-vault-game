webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const GAME_VERSION = '1.0.0-alpha';
/* harmony export (immutable) */ exports["h"] = GAME_VERSION;


const FPS = 60;
/* harmony export (immutable) */ exports["I"] = FPS;


const KEY_W = 87;
/* harmony export (immutable) */ exports["P"] = KEY_W;

const KEY_S = 83;
/* harmony export (immutable) */ exports["Q"] = KEY_S;

const KEY_A = 65;
/* harmony export (immutable) */ exports["S"] = KEY_A;

const KEY_D = 68;
/* harmony export (immutable) */ exports["R"] = KEY_D;

const KEY_E = 69;
/* harmony export (immutable) */ exports["W"] = KEY_E;

const KEY_Q = 81;
/* harmony export (immutable) */ exports["K"] = KEY_Q;

const KEY_SHIFT = 16;
/* harmony export (immutable) */ exports["T"] = KEY_SHIFT;

const KEY_ESCAPE = 27;
/* harmony export (immutable) */ exports["i"] = KEY_ESCAPE;

const KEY_ENTER = 13;
/* harmony export (immutable) */ exports["j"] = KEY_ENTER;

const XBOX_BUTTON_A = 0;
/* harmony export (immutable) */ exports["l"] = XBOX_BUTTON_A;

const XBOX_BUTTON_X = 2;
/* harmony export (immutable) */ exports["p"] = XBOX_BUTTON_X;

const XBOX_BUTTON_B = 1;
/* harmony export (immutable) */ exports["k"] = XBOX_BUTTON_B;

const XBOX_BUTTON_CROSS_UP = 11;
/* harmony export (immutable) */ exports["m"] = XBOX_BUTTON_CROSS_UP;

const XBOX_BUTTON_CROSS_DOWN = 12;
/* harmony export (immutable) */ exports["n"] = XBOX_BUTTON_CROSS_DOWN;

const XBOX_BUTTON_BACK = 9;
/* harmony export (immutable) */ exports["L"] = XBOX_BUTTON_BACK;

const XBOX_STICK_LEFT_AXIS_X = 0;
/* harmony export (immutable) */ exports["N"] = XBOX_STICK_LEFT_AXIS_X;

const XBOX_STICK_LEFT_AXIS_Y = 1;
/* harmony export (immutable) */ exports["f"] = XBOX_STICK_LEFT_AXIS_Y;

const XBOX_STICK_RIGHT_AXIS_X = 3;
/* harmony export (immutable) */ exports["g"] = XBOX_STICK_RIGHT_AXIS_X;

const XBOX_STICK_RIGHT_AXIS_Y = 4;
/* harmony export (immutable) */ exports["M"] = XBOX_STICK_RIGHT_AXIS_Y;

const XBOX_TRIGGER_RIGHT_AXIS = 5;
/* harmony export (immutable) */ exports["O"] = XBOX_TRIGGER_RIGHT_AXIS;

const CONTROL_STATE = {
    UNUSED: 0,
    FIRST_TIME_DOWN: 1,
    DOWN: 2
};
/* harmony export (immutable) */ exports["o"] = CONTROL_STATE;


const PLAYER_SPEED = 4;
/* harmony export (immutable) */ exports["V"] = PLAYER_SPEED;

const RUNNING_COEFF = 1.5;
/* harmony export (immutable) */ exports["U"] = RUNNING_COEFF;

const STICK_VALUE_THRESHOLD = 0.3;
/* harmony export (immutable) */ exports["_5"] = STICK_VALUE_THRESHOLD;

const BROAD_CELL_SIZE = 250;
/* harmony export (immutable) */ exports["q"] = BROAD_CELL_SIZE;

const HAND_LENGTH = 150;
/* harmony export (immutable) */ exports["H"] = HAND_LENGTH;

const HINT_SHOW_TIME = 5000;
/* harmony export (immutable) */ exports["J"] = HINT_SHOW_TIME;

const DOOR_OPEN_TIME = 3000;
/* harmony export (immutable) */ exports["y"] = DOOR_OPEN_TIME;

const SPOTLIGHT_RADIUS = 1.5 * BROAD_CELL_SIZE;
/* harmony export (immutable) */ exports["t"] = SPOTLIGHT_RADIUS;


const ENEMY_STATE = {
    LIMBO: 'limbo',
    WANDER: 'wander',
    STOP: 'stop',
    ATTACK: 'attack'
};
/* harmony export (immutable) */ exports["z"] = ENEMY_STATE;

const ENEMY_SPEED = 1.5;
/* harmony export (immutable) */ exports["_2"] = ENEMY_SPEED;

const ENEMY_SPEED_RUNNING = 6;
/* harmony export (immutable) */ exports["_4"] = ENEMY_SPEED_RUNNING;

const ENEMY_ATTACK_DISTANCE = 400;
/* harmony export (immutable) */ exports["X"] = ENEMY_ATTACK_DISTANCE;

const ENEMY_ATTACK_DISTANCE_VISIBLE = 600;
/* harmony export (immutable) */ exports["Y"] = ENEMY_ATTACK_DISTANCE_VISIBLE;

const ENEMY_KILL_DISTANCE = 100;
/* harmony export (immutable) */ exports["_3"] = ENEMY_KILL_DISTANCE;

const ENEMY_VIEW_ANGLE_DEG = 120;
/* unused harmony export ENEMY_VIEW_ANGLE_DEG */

const ENEMY_VIEW_ANGLE_RAD = ENEMY_VIEW_ANGLE_DEG / 180 * Math.PI;
/* harmony export (immutable) */ exports["Z"] = ENEMY_VIEW_ANGLE_RAD;

const ENEMY_TARGET_REACH_THRESHOLD = 50;
/* harmony export (immutable) */ exports["_0"] = ENEMY_TARGET_REACH_THRESHOLD;

const ENEMY_CHANGE_TARGET_TIME = 1000;
/* harmony export (immutable) */ exports["_1"] = ENEMY_CHANGE_TARGET_TIME;


const PAINTING_TYPE = 'painting';
/* harmony export (immutable) */ exports["A"] = PAINTING_TYPE;

const FLOOR_TYPE = 'floor';
/* harmony export (immutable) */ exports["B"] = FLOOR_TYPE;

const CEILING_TYPE = 'ceiling';
/* harmony export (immutable) */ exports["C"] = CEILING_TYPE;

const WALL_TYPE = 'wall';
/* harmony export (immutable) */ exports["D"] = WALL_TYPE;

const BOX_TYPE = 'box';
/* harmony export (immutable) */ exports["E"] = BOX_TYPE;

const SWITCHER_TYPE = 'switcher';
/* harmony export (immutable) */ exports["F"] = SWITCHER_TYPE;

const DOOR_TYPE = 'door';
/* harmony export (immutable) */ exports["G"] = DOOR_TYPE;


const DOOR_OPEN = 'open';
/* harmony export (immutable) */ exports["u"] = DOOR_OPEN;

const DOOR_OPENING = 'opening';
/* harmony export (immutable) */ exports["v"] = DOOR_OPENING;

const DOOR_CLOSE = 'close';
/* harmony export (immutable) */ exports["w"] = DOOR_CLOSE;

const DOOR_CLOSING = 'closing';
/* harmony export (immutable) */ exports["x"] = DOOR_CLOSING;


const LOADING = 'loading';
/* harmony export (immutable) */ exports["_6"] = LOADING;

const START = 'start';
/* harmony export (immutable) */ exports["a"] = START;

const PLAY = 'play';
/* harmony export (immutable) */ exports["b"] = PLAY;

const WIN = 'win';
/* harmony export (immutable) */ exports["c"] = WIN;

const LOOSE = 'loose';
/* harmony export (immutable) */ exports["d"] = LOOSE;


const PLAYER_RUN = 'run';
/* harmony export (immutable) */ exports["s"] = PLAYER_RUN;

const PLAYER_WALK = 'walk';
/* harmony export (immutable) */ exports["r"] = PLAYER_WALK;

const PLAYER_STOP = 'stop';
/* harmony export (immutable) */ exports["_7"] = PLAYER_STOP;


const GRAPHICS_QUALITY = {
    LOW: 0,
    NORMAL: 1,
    ULTRA: 2
};
/* harmony export (immutable) */ exports["e"] = GRAPHICS_QUALITY;


/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const SET_GAME_START = 'setGameStart';
/* harmony export (immutable) */ exports["a"] = SET_GAME_START;

const SET_GAME_PLAY = 'setGamePlay';
/* harmony export (immutable) */ exports["b"] = SET_GAME_PLAY;

const SET_GAME_WIN = 'setGameWin';
/* harmony export (immutable) */ exports["c"] = SET_GAME_WIN;

const SET_GAME_LOOSE = 'setGameLoose';
/* harmony export (immutable) */ exports["d"] = SET_GAME_LOOSE;


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


const SET_GAMEPAD_STATE = 'setGamepadState';
/* harmony export (immutable) */ exports["t"] = SET_GAMEPAD_STATE;


const SET_SETTINGS_VOLUME = 'setSettingsVolume';
/* harmony export (immutable) */ exports["u"] = SET_SETTINGS_VOLUME;

const SET_SETTINGS_GRAPHICS_QUALITY = 'setSettingsGraphicsQuality';
/* harmony export (immutable) */ exports["v"] = SET_SETTINGS_GRAPHICS_QUALITY;

const SET_SETTINGS_MOUSE_SENSITIVITY = 'setSettingsMouseSensitivity';
/* harmony export (immutable) */ exports["w"] = SET_SETTINGS_MOUSE_SENSITIVITY;

const SET_SETTINGS_STICK_SENSITIVITY = 'setSettingsStickSensitivity';
/* harmony export (immutable) */ exports["x"] = SET_SETTINGS_STICK_SENSITIVITY;


const SET_ENEMY_STATE = 'setEnemyState';
/* harmony export (immutable) */ exports["A"] = SET_ENEMY_STATE;

const SET_ENEMY_POSITION = 'setEnemyPosition';
/* harmony export (immutable) */ exports["y"] = SET_ENEMY_POSITION;

const SET_ENEMY_DIRECTION = 'setEnemyDirection';
/* harmony export (immutable) */ exports["B"] = SET_ENEMY_DIRECTION;

const SET_ENEMY_TARGET = 'setEnemyTarget';
/* harmony export (immutable) */ exports["z"] = SET_ENEMY_TARGET;

const SET_ENEMY_VISIBILITY = 'setEnemyVisibility';
/* harmony export (immutable) */ exports["C"] = SET_ENEMY_VISIBILITY;


/***/ },
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ exports["a"] = getTransformRule;
/* harmony export (immutable) */ exports["h"] = getVisibleObjects;
/* harmony export (immutable) */ exports["e"] = getPlayerCell;
/* harmony export (immutable) */ exports["f"] = isObjectVisible;
/* harmony export (immutable) */ exports["g"] = getPointPosition;
/* harmony export (immutable) */ exports["c"] = vectorsAdd3D;
/* harmony export (immutable) */ exports["b"] = convertDegreeToRad;
/* harmony export (immutable) */ exports["d"] = convertRadToDegree;

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
    return [Math.floor(playerPos[0] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["q" /* BROAD_CELL_SIZE */]), Math.floor(playerPos[2] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["q" /* BROAD_CELL_SIZE */])];
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

/**
 * Returns degrees for given radians
 * @param {number} angle
 * @returns {number}
 */
function convertRadToDegree(angle) {
    return angle / Math.PI * 180;
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_collision__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(6);




const ENEMY_TRIGGER_DOOR_ID = 3;

const level = {
    boundaries: [2500, null, 2500],
    player: {
        pos: [1250, 150, 250],
        size: [50, 150, 50],
        angle: [0, 0, 0]
    },
    enemy: {
        state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["z" /* ENEMY_STATE */].LIMBO,
        isVisible: false,
        position: [1250, 70, 750],
        target: [1250, 0, 750],
        direction: 0,
        props: {
            triggerDoorId: ENEMY_TRIGGER_DOOR_ID
        }
    },
    objects: [{
        name: 'wall_001',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [2000, 125, 250]
    }, {
        name: 'wall_002',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [250, 125, 500]
    }, {
        name: 'wall_003',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [750, 125, 500]
    }, {
        name: 'wall_004',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [1750, 125, 500]
    }, {
        name: 'wall_005',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 750]
    }, {
        name: 'wall_006',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [2000, 125, 750]
    }, {
        name: 'wall_007',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1250, 125, 1000],
        props: {
            mode: 2
        }
    }, {
        name: 'wall_008',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 450],
        pos: [1000, 125, 1250],
        props: {
            mode: 2
        }
    }, {
        name: 'wall_009',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1250, 125, 1500],
        props: {
            mode: 2
        }
    }, {
        name: 'wall_010',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [2225, 125, 1500],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_011',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 1750],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_012',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 450],
        pos: [2000, 125, 1750],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_013',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [750, 125, 2000],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_014',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1750, 125, 2000],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_015',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 2250],
        props: {
            mode: 3
        }
    }, {
        name: 'box_001',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [200, 75, 200],
        props: {
            mode: 1,
            inhabited: 1
        }
    }, {
        name: 'box_002',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [50, 50, 50],
        pos: [175, 175, 175],
        props: {
            mode: 2
        }
    }, {
        name: 'box_003',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [2100, 75, 500],
        props: {
            mode: 3,
            inhabited: 2
        }
    }, {
        name: 'box_004',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [1300, 75, 899],
        props: {
            mode: 2,
            inhabited: 1,
            triggerDoorId: ENEMY_TRIGGER_DOOR_ID
        }
    }, {
        name: 'box_005',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [2110, 75, 1975],
        props: {
            mode: 1,
            inhabited: 2
        }
    }, {
        name: 'box_006',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [100, 150, 100],
        pos: [900, 75, 2400],
        props: {
            mode: 2
        }
    }, {
        name: 'box_007',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* BOX_TYPE */],
        size: [90, 70, 90],
        pos: [900, 185, 2390],
        props: {
            mode: 3
        }
    }, {
        name: 'painting_escape',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* PAINTING_TYPE */],
        size: [187, 103, 0],
        pos: [350, 125, 51],
        angle: [0, 0, 0],
        props: {
            alias: 'escape'
        },
        collides: false
    }, {
        name: 'painting_give-up',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* PAINTING_TYPE */],
        size: [205, 68, 0],
        pos: [1974, 125, 250],
        angle: [0, -90, 0],
        props: {
            alias: 'give-up'
        },
        collides: false
    }, {
        name: 'painting_forever',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* PAINTING_TYPE */],
        size: [314, 193, 0],
        pos: [1250, 125, 1474],
        angle: [0, 180, 0],
        props: {
            alias: 'forever'
        },
        collides: false
    }, {
        name: 'painting_easter',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* PAINTING_TYPE */],
        size: [139, 150, 0],
        pos: [51, 90, 200],
        angle: [0, 90, 0],
        props: {
            alias: 'easter'
        },
        collides: false
    }, {
        name: 'painting_red',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* PAINTING_TYPE */],
        size: [200, 114, 0],
        pos: [974, 130, 1300],
        angle: [0, -90, 0],
        props: {
            alias: 'red-wall'
        },
        collides: false
    }, {
        name: 'painting_game',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* PAINTING_TYPE */],
        size: [243, 51, 0],
        pos: [2449, 150, 1250],
        angle: [0, -90, 0],
        props: {
            alias: 'game'
        },
        collides: false
    }, {
        name: 'switcher_01',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["F" /* SWITCHER_TYPE */],
        pos: [1027, 150, 1250],
        size: [40, 60, 100],
        angle: [0, 90, 0],
        props: {
            id: 1
        },
        isInteractive: true
    }, {
        name: 'door_01',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [250, 125, 975],
        props: {
            id: 1,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["w" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_02',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["F" /* SWITCHER_TYPE */],
        pos: [250, 150, 526],
        size: [40, 60, 100],
        angle: [0, 0, 0],
        props: {
            id: 2
        },
        isInteractive: true
    }, {
        name: 'door_02',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [2250, 125, 975],
        props: {
            id: 2,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["w" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_03',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["F" /* SWITCHER_TYPE */],
        pos: [2026, 150, 250],
        size: [40, 60, 100],
        angle: [0, 90, 0],
        props: {
            id: 3
        },
        isInteractive: true
    }, {
        name: 'door_03',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [250, 125, 1525],
        props: {
            id: 3,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["w" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_04',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["F" /* SWITCHER_TYPE */],
        pos: [250, 150, 2449],
        size: [40, 60, 100],
        angle: [0, 180, 0],
        props: {
            id: 4
        },
        isInteractive: true
    }, {
        name: 'door_04',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["G" /* DOOR_TYPE */],
        size: [20, 250, 500],
        pos: [1500, 125, 2250],
        props: {
            id: 4,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["w" /* DOOR_CLOSE */]
        }
    }, {
        name: 'switcher_05',
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["F" /* SWITCHER_TYPE */],
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
        type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [1250, 125, 25],
        props: {
            id: 5,
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["w" /* DOOR_CLOSE */]
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
        const wall = {
            name: 'border_wall_' + x + '_' + z,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
            size: [500, 250, 50],
            pos: [x, 125, z]
        };
        // set special mode for far walls
        if (z === 2475) {
            wall.props = {
                mode: 3
            };
        }
        level.objects.push(wall);
    }
}
for (let z = 250; z < level.boundaries[2]; z += 500) {
    for (let x = 25; x <= level.boundaries[0] - 25; x += level.boundaries[0] - 50) {
        const wall = {
            name: 'border_wall_' + x + '_' + z,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* WALL_TYPE */],
            size: [50, 250, 500],
            pos: [x, 125, z]
        };
        // set special mode for far walls
        if (z >= 1750) {
            wall.props = {
                mode: 3
            };
        }
        level.objects.push(wall);
    }
}

// generate floor panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'floor_tile_' + z + '_' + x,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["B" /* FLOOR_TYPE */],
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
            name: 'ceiling_tile_' + z + '_' + x,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["C" /* CEILING_TYPE */],
            size: [500, 0, 500],
            pos: [x + 250, 250, z + 250],
            collides: false
        });
    }
}

// calculate 2d points coordinates for objects hitboxes
const playerCell = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["e" /* getPlayerCell */])(level.player.pos);
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
    const broadCellsXMax = Math.ceil(level.boundaries[0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */]) - 1;
    const broadCellsYMax = Math.ceil(level.boundaries[2] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */]) - 1;
    const topLeftCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */])));
    const topLeftCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */])));
    const bottomRightCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */])));
    const bottomRightCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */])));
    for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
        for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
            obj.broadCells.push([i, j]);
        }
    }

    obj.isVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["f" /* isObjectVisible */])(playerCell, obj);

    obj.isReachable = false;
}

const collisionView = __WEBPACK_IMPORTED_MODULE_0__lib_collision__["a" /* default */].getCollisionView([level.player.pos, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_utils__["g" /* getPointPosition */])({ pos: level.player.pos, distance: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["H" /* HAND_LENGTH */], angle: level.player.angle })], level.objects, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["q" /* BROAD_CELL_SIZE */]);
if (collisionView) {
    collisionView.obj.isReachable = true;
}

level.objects = JSON.stringify(level.objects);

/* harmony default export */ exports["a"] = level;

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plain_css__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plain_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plain_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_diffuse__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_simple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










class Plain extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props) {
        super(props);

        this.styleRules = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_utils__["a" /* getTransformRule */])({ pos: props.pos, angle: props.angle }), {
            width: props.size[0],
            height: props.size[1],
            margin: -props.size[1] / 2 + 'px 0 0 ' + props.size[0] / -2 + 'px'
        });
        this.className = 'obj plain ' + props.className;
        this.relativePos = Plain.getRelative(props.parentPos, props.pos);
        this.relativeAngle = Plain.getRelative(props.parentAngle, props.angle);
    }

    componentWillUpdate(nextProps) {
        this.relativePos = Plain.getRelative(nextProps.parentPos, nextProps.pos);
        this.relativeAngle = Plain.getRelative(nextProps.parentAngle, nextProps.angle);
    }

    render() {
        const { light, graphicsQuality } = this.props;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: this.className, style: this.styleRules },
            graphicsQuality === 2 ? this.renderPattern() : this.renderLight(light),
            graphicsQuality === 2 ? this.renderLight('default') : null
        );
    }

    renderPattern() {
        const { id, playerPos, size, patternId } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'svg',
            { width: '100%', height: '100%', className: __WEBPACK_IMPORTED_MODULE_0__plain_css___default.a.diffuse,
                xmlns: 'http://www.w3.org/2000/svg'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__light_diffuse__["a" /* default */], {
                id: id + '-light',
                relativePos: this.relativePos,
                relativeAngle: this.relativeAngle,
                size: size,
                playerPos: playerPos
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('rect', { width: '100%', height: '100%',
                fill: 'url(#' + patternId + ')',
                filter: 'url(#' + id + '-light)'
            })
        );
    }

    renderLight(light) {
        const { playerPos, size } = this.props;
        if (light === 'simple') {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__light_simple__["a" /* default */], {
                relativePos: this.relativePos,
                playerPos: playerPos
            });
        } else if (light === 'none') {
            return null;
        } else {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__light_light__["a" /* default */], {
                relativePos: this.relativePos,
                relativeAngle: this.relativeAngle,
                size: size,
                playerPos: playerPos
            });
        }
    }

    static getRelative(parent, current) {
        return parent ? [current].concat(parent).reduce(__WEBPACK_IMPORTED_MODULE_5__lib_utils__["c" /* vectorsAdd3D */]) : current;
    }
}

Plain.propTypes = {
    id: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string,
    light: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string,
    className: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    angle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    parentPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number)),
    parentAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number)),
    patternId: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number
};
Plain.defaultProps = {
    angle: [0, 0, 0],
    className: '',
    light: 'default',
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_6__constants_constants__["e" /* GRAPHICS_QUALITY */].NORMAL
};
/* harmony default export */ exports["a"] = Plain;

/***/ },
/* 28 */
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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doorsState__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hints__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gamepad__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enemy__ = __webpack_require__(109);

/* harmony reexport (module object) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__game__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__player__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__objects__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__doorsState__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__hints__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__gamepad__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__settings__; });


/* harmony reexport (module object) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__enemy__; });


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
class Audio {
    static createPanner({
        audioCtx,
        panningModel = 'HRTF',
        distanceModel = 'inverse',
        refDistance = 20,
        rolloffFactor = 0.1,
        maxDistance = 100,
        coneInnerAngle = 360,
        coneOuterAngle = 0,
        coneOuterGain = 0,
        pos
    }) {
        const panner = audioCtx.createPanner();
        panner.panningModel = panningModel;
        panner.distanceModel = distanceModel;
        panner.refDistance = refDistance;
        if (maxDistance) {
            panner.maxDistance = maxDistance;
        } else if (rolloffFactor) {
            panner.rolloffFactor = rolloffFactor;
        }
        panner.coneInnerAngle = coneInnerAngle;
        panner.coneOuterAngle = coneOuterAngle;
        panner.coneOuterGain = coneOuterGain;
        if (pos) {
            if (panner.positionX) {
                panner.positionX.value = pos[0];
                panner.positionY.value = pos[1];
                panner.positionZ.value = pos[2];
            } else {
                panner.setPosition(...pos);
            }
        }
        return panner;
    }

    static setPannerPosition(panner, pos) {
        if (panner.positionX) {
            panner.positionX.value = pos[0];
            panner.positionY.value = pos[1];
            panner.positionZ.value = pos[2];
        } else {
            panner.setPosition(pos);
        }
    }

    static soundStart({ audioSource, audioCtx, buffer, destination, loop = false }) {
        Audio.soundStop(audioSource);

        audioSource = audioCtx.createBufferSource();
        audioSource.connect(destination);
        audioSource.buffer = buffer;
        audioSource.loop = loop;
        audioSource.start(0);
        return audioSource;
    }

    static soundStop(audioSource) {
        if (audioSource) {
            audioSource.stop();
            audioSource.disconnect();
            audioSource = null;
        }
    }
}

/* harmony default export */ exports["a"] = Audio;

/***/ },
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
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
/* 64 */,
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(6);




class SimpleLight extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    render() {
        const { relativePos, playerPos } = this.props;
        const opacity = SimpleLight.getOpacity(SimpleLight.vectorLength3D([playerPos[0] - relativePos[0], playerPos[1] + relativePos[1], playerPos[2] - relativePos[2]]));
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__light_css___default.a.overlay,
            style: { opacity }
        });
    }

    static getOpacity(distance) {
        const ratio = Math.max(0, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["t" /* SPOTLIGHT_RADIUS */] - distance) / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["t" /* SPOTLIGHT_RADIUS */];
        return 1 - ratio;
    }

    static vectorLength3D(v) {
        return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
    }
}

SimpleLight.propTypes = {
    relativePos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired
};
/* harmony default export */ exports["a"] = SimpleLight;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Collision {
    /**
     * Returns an array of collisions with objects
     * @param {Array} line - coordinates of initial and final player positions
     * @param {Array} objects - array of objects
     * @param {number} broadCellSize - maximum cell size
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
     * @param {number} broadCellSize - maximum cell size
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
     * @param {number} broadCellSize - maximum cell size
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

    static getRandomFreeCell({ pos, objects, broadCellSize, boundaries }) {
        broadCellSize = broadCellSize * 2;
        const currentCellCenter = [];
        for (let i = 0; i < pos.length; i++) {
            if (i === 1) {
                continue;
            }
            currentCellCenter.push(Math.floor(pos[i] / broadCellSize) * broadCellSize + broadCellSize / 2);
        }
        const allVariants = [[currentCellCenter[0] - broadCellSize, 0, currentCellCenter[1]], [currentCellCenter[0] + broadCellSize, 0, currentCellCenter[1]], [currentCellCenter[0], 0, currentCellCenter[1] - broadCellSize], [currentCellCenter[0], 0, currentCellCenter[1] + broadCellSize]];
        const availableVariants = [];
        for (let i = 0; i < allVariants.length; i++) {
            if (allVariants[i][0] < 0 || allVariants[i][0] > boundaries[0] || allVariants[i][2] < 0 || allVariants[i][2] > boundaries[2] || Collision.getCollisionView([pos, [allVariants[i][0], pos[1], allVariants[i][2]]], objects, broadCellSize / 2)) {
                continue;
            }
            availableVariants.push(allVariants[i]);
        }
        let variantIndex;
        // locked in a room
        if (availableVariants.length === 0) {
            return currentCellCenter;
        } else if (availableVariants.length === 1) {
            variantIndex = 0;
        } else {
            variantIndex = Collision.getRandom(availableVariants.length);
        }
        return availableVariants[variantIndex];
    }

    /**
     * Returns set of objects that can potentially collide with line2d
     * @param {Array} line - coordinates of initial and final subject positions
     * @param {Array} objects - array of objects
     * @param {number} broadCellSize - maximum cell size
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

    static getRandom(max) {
        return Math.floor(Math.random() * max);
    }
}
/* harmony export (immutable) */ exports["a"] = Collision;


/***/ },
/* 68 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"light-root-3ic0q","overlay":"light-overlay-1kisp"};

/***/ },
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
/* 102 */,
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_screens_loading_loadingScreen__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_screens_start_startScreen__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_screens_end_endScreen__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hints_hints__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_patterns_patterns__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewport_viewport__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__camera_camera__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__player_player__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__scene__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gameLoop__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib_loop__ = __webpack_require__(28);


















const BUTTON_REPEAT_DELAY = 500;
const GAMEPAD_AXIS_UNIT_THRESHOLD = 0.5;
const DEFAULT_GAMEPAD_BUTTONS = {
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["l" /* XBOX_BUTTON_A */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["k" /* XBOX_BUTTON_B */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["p" /* XBOX_BUTTON_X */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["L" /* XBOX_BUTTON_BACK */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["m" /* XBOX_BUTTON_CROSS_UP */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["n" /* XBOX_BUTTON_CROSS_DOWN */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0]
};
const DEFAULT_GAMEPAD_AXES_UNIT = {
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["f" /* XBOX_STICK_LEFT_AXIS_Y */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* XBOX_STICK_RIGHT_AXIS_X */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0, 0]
};

class Game extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        if (window.AudioContext) {
            this.audioCtx = new window.AudioContext();
        } else {
            this.audioCtx = new window.webkitAudioContext();
        }
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.value = this.props.settings.soundVolume;
        this.masterGain.connect(this.audioCtx.destination);

        this.assets = {};

        this.gamepad = {
            index: -1,
            id: 'unknown'
        };

        this.controls = {
            keyPressed: {
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["P" /* KEY_W */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["Q" /* KEY_S */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["S" /* KEY_A */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["R" /* KEY_D */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["W" /* KEY_E */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["K" /* KEY_Q */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["T" /* KEY_SHIFT */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["j" /* KEY_ENTER */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["i" /* KEY_ESCAPE */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0]
            },
            gamepadButtons: DEFAULT_GAMEPAD_BUTTONS,
            gamepadAxesUnit: DEFAULT_GAMEPAD_AXES_UNIT
        };

        // raf loop for capturing player actions
        this.loop = new __WEBPACK_IMPORTED_MODULE_15__lib_loop__["a" /* default */](this.loopCallback.bind(this));

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.handleGamepadConnected = this.handleGamepadConnected.bind(this);
        this.handleGamepadDisconnected = this.handleGamepadDisconnected.bind(this);

        this.setGameStateStart = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* START */]);
        this.setGameStatePlay = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* PLAY */]);
        this.setGameStateWin = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["c" /* WIN */]);
        this.setGameStateLoose = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["d" /* LOOSE */]);

        this.cacheAssetData = this.cacheAssetData.bind(this);
    }

    getChildContext() {
        return {
            audioCtx: this.audioCtx,
            masterGain: this.masterGain,
            assets: this.assets,
            controls: this.controls
        };
    }

    componentDidMount() {
        this.gamepadPolling = setInterval(() => {
            const gamepads = navigator.getGamepads();
            if (gamepads[0]) {
                this.handleGamepadConnected({ gamepad: gamepads[0] });
            } else {
                this.handleGamepadDisconnected({ gamepad: { index: 0 } });
            }
        }, 1000);
        window.addEventListener('gamepadconnected', this.handleGamepadConnected);
        window.addEventListener('gamepaddisconnected', this.handleGamepadDisconnected);
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('keydown', this.onKeyDown);
        this.loop.start();
    }

    componentWillUnmount() {
        window.removeEventListener('gamepadconnected', this.handleGamepadConnected);
        window.removeEventListener('gamepaddisconnected', this.handleGamepadDisconnected);
        document.removeEventListener('keyup', this.onKeyUp);
        document.removeEventListener('keydown', this.onKeyDown);
        clearInterval(this.gamepadPolling);
        this.loop.stop();
    }

    componentWillReceiveProps(nextProps) {
        this.masterGain.gain.value = nextProps.settings.soundVolume;
    }

    render() {
        const { gameState, hints, gamepadState, settings } = this.props;
        if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["_6" /* LOADING */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_screens_loading_loadingScreen__["a" /* default */], {
                onLoaded: this.setGameStateStart,
                cacheAssetData: this.cacheAssetData
            });
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* START */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_screens_start_startScreen__["a" /* default */], {
                onStart: this.setGameStatePlay,
                gamepadState: gamepadState,
                settings: settings
            });
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* PLAY */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10__viewport_viewport__["a" /* default */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_patterns_patterns__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_hints_hints__["a" /* default */], { hints: hints }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_14__gameLoop__["a" /* default */],
                    {
                        onWin: this.setGameStateWin,
                        onLoose: this.setGameStateLoose,
                        onExit: this.setGameStateStart
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_11__camera_camera__["a" /* default */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_12__player_player__["a" /* default */],
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__scene__["a" /* default */], null)
                        )
                    )
                )
            );
        } else if ([__WEBPACK_IMPORTED_MODULE_3__constants_constants__["c" /* WIN */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["d" /* LOOSE */]].includes(gameState)) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_screens_end_endScreen__["a" /* default */], {
                gameState: gameState,
                onEnd: this.setGameStateStart,
                gamepadState: gamepadState });
        }
    }

    handleGamepadConnected(event) {
        if (this.gamepad.index === -1) {
            if (navigator.getGamepads()[event.gamepad.index] === null) {
                console.log('No gamepad found');
            } else {
                this.gamepad.index = event.gamepad.index;
                this.gamepad.id = event.gamepad.id;
                this.props.setGamepadState(this.gamepad.index);
                console.log('Gamepad %s connected', event.gamepad.id);
            }
        }
    }

    handleGamepadDisconnected(event) {
        if (this.gamepad.index === event.gamepad.index) {
            console.log('Gamepad %s disconnected', this.gamepad.id);
            this.gamepad.index = -1;
            this.gamepad.id = 'unknown';
            this.props.setGamepadState(-1);
            this.controls.gamepadButtons = DEFAULT_GAMEPAD_BUTTONS;
            this.controls.gamepadAxesUnit = DEFAULT_GAMEPAD_AXES_UNIT;
        }
    }

    onKeyDown(event) {
        if (event.keyCode in this.controls.keyPressed && this.controls.keyPressed[event.keyCode][0] === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
            this.controls.keyPressed[event.keyCode] = [0.5, 0];
        }
    }

    onKeyUp(event) {
        if (event.keyCode in this.controls.keyPressed) {
            this.controls.keyPressed[event.keyCode] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0];
        }
    }

    setGameState(state) {
        this.props.setGameState(state);
    }

    cacheAssetData(assetSrc, data) {
        this.assets[assetSrc] = data;
    }

    loopCallback() {
        const now = Date.now();

        // keyboard buttons
        Object.keys(this.controls.keyPressed).forEach(keyCode => {
            const [state, timestamp] = this.controls.keyPressed[keyCode];
            if (state !== __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
                if (timestamp <= now) {
                    this.controls.keyPressed[keyCode] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN, now + BUTTON_REPEAT_DELAY];
                } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
                    this.controls.keyPressed[keyCode][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].DOWN;
                }
            }
        });

        // gamepad
        if (this.gamepad.index === -1) {
            return;
        }
        const gamepadSnapshot = navigator.getGamepads()[this.gamepad.index];
        if (!gamepadSnapshot) {
            return;
        }

        // console.log(gamepadSnapshot.buttons.reduce((r, b, i) => {
        //     if (b.pressed) {
        //         r.push(i);
        //     }
        //     return r;
        // }, []));

        // gamepad buttons
        Object.keys(this.controls.gamepadButtons).forEach(button => {
            const [state, timestamp] = this.controls.gamepadButtons[button];
            if (gamepadSnapshot.buttons[button].pressed) {
                if (timestamp <= now) {
                    this.controls.gamepadButtons[button] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN, now + BUTTON_REPEAT_DELAY];
                } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
                    this.controls.gamepadButtons[button][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].DOWN;
                }
            } else if (state !== __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
                this.controls.gamepadButtons[button] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0];
            }
        });

        // gamepad axes
        Object.keys(this.controls.gamepadAxesUnit).forEach(axis => {
            let curAxisValue = 0;
            if (Math.abs(gamepadSnapshot.axes[axis]) > GAMEPAD_AXIS_UNIT_THRESHOLD) {
                curAxisValue = Math.sign(gamepadSnapshot.axes[axis]);
            }
            const [state, timestamp, value] = this.controls.gamepadAxesUnit[axis];
            if (curAxisValue !== 0) {
                if (curAxisValue !== value || timestamp <= now) {
                    this.controls.gamepadAxesUnit[axis] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN, now + BUTTON_REPEAT_DELAY, curAxisValue];
                } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
                    this.controls.gamepadAxesUnit[axis][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].DOWN;
                }
            } else if (state !== __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
                this.controls.gamepadAxesUnit[axis] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].UNUSED, 0, curAxisValue];
            }
        });
    }
}

Game.propTypes = {
    gameState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    hints: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].instanceOf(Map).isRequired,
    setGameState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    setGamepadState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
Game.childContextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    controls: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
function mapStateToProps(state) {
    return {
        gameState: state.gameState,
        hints: state.hints,
        gamepadState: state.gamepad.state,
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
        setGameState: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["b" /* game */].setGameState,
        setGamepadState: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["h" /* gamepad */].setGamepadState
    }, dispatch);
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Game);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameState__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pointerDelta__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewAngle__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playerPosition__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playerState__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__doorsState__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hints__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gamepad__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__enemy__ = __webpack_require__(143);














/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    gameState: __WEBPACK_IMPORTED_MODULE_1__gameState__["a" /* default */],
    pointerDelta: __WEBPACK_IMPORTED_MODULE_2__pointerDelta__["a" /* default */],
    viewAngle: __WEBPACK_IMPORTED_MODULE_3__viewAngle__["a" /* default */],
    pos: __WEBPACK_IMPORTED_MODULE_4__playerPosition__["a" /* default */],
    playerState: __WEBPACK_IMPORTED_MODULE_5__playerState__["a" /* default */],
    objects: __WEBPACK_IMPORTED_MODULE_6__objects__["a" /* default */],
    doorsState: __WEBPACK_IMPORTED_MODULE_7__doorsState__["a" /* default */],
    hints: __WEBPACK_IMPORTED_MODULE_8__hints__["a" /* default */],
    gamepad: __WEBPACK_IMPORTED_MODULE_9__gamepad__["a" /* default */],
    settings: __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */],
    enemy: __WEBPACK_IMPORTED_MODULE_11__enemy__["a" /* default */]
});

/***/ },
/* 106 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = [["dist/0e58b004362d2cecaf96358cf5fa9f50.png", "image"], ["dist/12d4067df2155b204defac46c41c89d3.png", "image"], ["dist/151b6411d53b17de82d882485fcbaaf5.jpg", "image"], ["dist/1c1430572300aa82719312e3483d80d9.png", "image"], ["dist/3628ed55158b5a413097584e7fd8a725.jpg", "image"], ["dist/4db9414e7ca808670cbc9b15dc0eaa74.jpg", "image"], ["dist/6d73a1850ac64474712210aa8f34f818.png", "image"], ["dist/83f558afad0f8b176e361b3f574ccb42.jpg", "image"], ["dist/8b3a4e276e0a424265cc0c55fa95360d.svg", "image"], ["dist/a0a62fe89c1eb6ec77f414a77fdb4a92.jpg", "image"], ["dist/abcc39d175e2f5f6ad0df4cc14457193.jpg", "image"], ["dist/bad58d3de10ed478b28908a2380b31f8.png", "image"], ["dist/c161dc30a1bcbfb0ea16c3740f6189c3.jpg", "image"], ["dist/c3e2941f8e7e3eb4fa9f378466ad0a0b.jpg", "image"], ["dist/dc4aaa700984f97ca90dea2ec61957fc.png", "image"], ["dist/e2128edeeefcfd54119c659e1313a548.png", "image"], ["src/components/box/breakBox.m4a", "audio"], ["src/components/box/breathing.m4a", "audio"], ["src/components/box/clawsOnWood.m4a", "audio"], ["src/components/door/mixdown.m4a", "audio"], ["src/components/enemy/attack.m4a", "audio"], ["src/components/enemy/roar01.m4a", "audio"], ["src/components/enemy/roar02.m4a", "audio"], ["src/components/enemy/roar03.m4a", "audio"], ["src/components/screens/start/theme.m4a", "audio"], ["src/containers/player/scream.m4a", "audio"], ["src/containers/player/steps-running.m4a", "audio"], ["src/containers/player/steps-walking.m4a", "audio"]];

/***/ },
/* 108 */
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setPosition"] = setPosition;
/* harmony export (immutable) */ exports["setTarget"] = setTarget;
/* harmony export (immutable) */ exports["setState"] = setState;
/* harmony export (immutable) */ exports["setDirection"] = setDirection;
/* harmony export (immutable) */ exports["setVisibility"] = setVisibility;


function setPosition(position) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["y" /* SET_ENEMY_POSITION */],
        position
    };
}

function setTarget(target) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["z" /* SET_ENEMY_TARGET */],
        target
    };
}

function setState(state) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["A" /* SET_ENEMY_STATE */],
        state
    };
}

function setDirection(direction) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["B" /* SET_ENEMY_DIRECTION */],
        direction
    };
}

function setVisibility(isVisible) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["C" /* SET_ENEMY_VISIBILITY */],
        isVisible
    };
}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setGameState"] = setGameState;
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
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["c" /* WIN */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["c" /* SET_GAME_WIN */]
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["d" /* LOOSE */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["d" /* SET_GAME_LOOSE */]
            };
    }
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setGamepadState"] = setGamepadState;


function setGamepadState(index) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["t" /* SET_GAMEPAD_STATE */],
        index
    };
}

/***/ },
/* 112 */
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
/* 113 */
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
/* 114 */
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["setVolume"] = setVolume;
/* harmony export (immutable) */ exports["setGraphicsQuality"] = setGraphicsQuality;
/* harmony export (immutable) */ exports["setMouseSensitivity"] = setMouseSensitivity;
/* harmony export (immutable) */ exports["setStickSensitivity"] = setStickSensitivity;


function setVolume(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["u" /* SET_SETTINGS_VOLUME */],
        value
    };
}

function setGraphicsQuality(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["v" /* SET_SETTINGS_GRAPHICS_QUALITY */],
        value
    };
}

function setMouseSensitivity(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["w" /* SET_SETTINGS_MOUSE_SENSITIVITY */],
        value
    };
}

function setStickSensitivity(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["x" /* SET_SETTINGS_STICK_SENSITIVITY */],
        value
    };
}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_css__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__box_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Audio__ = __webpack_require__(36);






const INHABITED_MODE = {
    1: 'clawsOnWood',
    2: 'breathing'
};

class Box extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props, context) {
        super(props, context);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: this.posWithInvertedY });

        if (props.inhabited) {
            this.inhabitedAutioBuffer = this.context.assets[`src/components/box/${ INHABITED_MODE[props.inhabited] }.m4a`];
            this.breakAudioBuffer = this.context.assets['src/components/box/breakBox.m4a'];

            this.audioSource = null;

            this.inhabitedPanner = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].createPanner({
                audioCtx: this.context.audioCtx,
                distanceModel: 'linear',
                refDistance: props.size[0] / 2,
                maxDistance: props.size[0] * 3,
                pos: props.pos
            });
            this.inhabitedPanner.connect(this.context.masterGain);

            this.breakPanner = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].createPanner({
                audioCtx: this.context.audioCtx,
                pos: props.pos
            });
            this.breakPanner.connect(this.context.masterGain);

            this.audioSource = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStart({
                audioCtx: this.context.audioCtx,
                buffer: this.inhabitedAutioBuffer,
                destination: this.inhabitedPanner,
                loop: true
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isBroken && nextProps.isBroken) {
            this.audioSource = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStart({
                audioSource: this.audioSource,
                audioCtx: this.context.audioCtx,
                buffer: this.breakAudioBuffer,
                destination: this.breakPanner
            });
        }
    }

    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStop(this.audioSource);
    }

    render() {
        const { isVisible, isBroken, name, pos, playerPos, size, mode, graphicsQuality } = this.props;
        if (!isVisible) {
            return null;
        }

        const className = ['obj', __WEBPACK_IMPORTED_MODULE_0__box_css___default.a['mode-' + mode], __WEBPACK_IMPORTED_MODULE_0__box_css___default.a['quality-' + graphicsQuality], isBroken ? __WEBPACK_IMPORTED_MODULE_0__box_css___default.a.broken : ''].join(' ');

        // Front-Back-Left-Right-Top
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: className, style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-0',
                pos: [0, 0, size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 0, 0],
                patternId: 'box0' + mode,
                graphicsQuality: graphicsQuality
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-1',
                pos: [0, 0, -size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 180, 0],
                patternId: 'box0' + mode,
                graphicsQuality: graphicsQuality
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-2',
                pos: [-size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, -90, 0],
                patternId: 'box0' + mode,
                graphicsQuality: graphicsQuality
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-3',
                pos: [size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, 90, 0],
                patternId: 'box0' + mode,
                graphicsQuality: graphicsQuality
            }),
            playerPos[1] > pos[1] + size[1] / 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-4',
                pos: [0, -size[1] / 2, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[0], size[2]],
                angle: [90, 0, 0],
                patternId: 'box0' + mode,
                graphicsQuality: graphicsQuality
            }) : null,
            isBroken ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                className: __WEBPACK_IMPORTED_MODULE_0__box_css___default.a.bottom,
                id: name + '-5',
                pos: [0, size[1] / 2 - 1, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[0], size[2]],
                angle: [90, 0, 0],
                patternId: 'box0' + mode,
                graphicsQuality: graphicsQuality
            }) : null
        );
    }
}

Box.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired,
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    mode: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
Box.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = Box;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ceiling_css__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ceiling_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ceiling_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
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

Ceiling.propTypes = {
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired
};
/* harmony default export */ exports["a"] = Ceiling;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_door_door_css__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_door_door_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_simple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









const BARS_GAP = 25;
const DOOR_STATES = [__WEBPACK_IMPORTED_MODULE_5__constants_constants__["u" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["v" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["w" /* DOOR_CLOSE */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["x" /* DOOR_CLOSING */]];

class Door extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props, context) {
        super(props, context);

        const { pos, size } = props;

        this.posWithInvertedY = [pos[0], -pos[1], pos[2]];
        this.rootStyleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: this.posWithInvertedY });
        this.doorStyleRules = {
            transitionDuration: __WEBPACK_IMPORTED_MODULE_5__constants_constants__["y" /* DOOR_OPEN_TIME */] + 'ms',
            height: size[1]
        };

        this.audioSource = null;
        this.decodedAudioBuffer = this.context.assets['src/components/door/mixdown.m4a'];

        this.panner = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].createPanner({
            audioCtx: this.context.audioCtx,
            pos: [pos[0], pos[1] + size[1], pos[2]]
        });
        this.panner.connect(this.context.masterGain);
    }

    componentWillUpdate(nextProps) {
        if ([__WEBPACK_IMPORTED_MODULE_5__constants_constants__["x" /* DOOR_CLOSING */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["v" /* DOOR_OPENING */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.audioSource = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStart({
                audioSource: this.audioSource,
                audioCtx: this.context.audioCtx,
                destination: this.panner,
                buffer: this.decodedAudioBuffer
            });
        } else if ([__WEBPACK_IMPORTED_MODULE_5__constants_constants__["u" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["w" /* DOOR_CLOSE */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStop(this.audioSource);
        }
    }

    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStop(this.audioSource);
    }

    render() {
        const { isVisible, viewAngle, state, size } = this.props;
        const isOpen = [__WEBPACK_IMPORTED_MODULE_5__constants_constants__["v" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["u" /* DOOR_OPEN */]].includes(state);
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
        const { size, playerPos, graphicsQuality } = this.props;
        const bars = [];
        const maxDimension = size[0] > size[2] ? 0 : 2;
        const barClassName = [__WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default.a.bar, __WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default.a['quality-' + graphicsQuality]].join(' ');
        let key = 0;
        for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i = i + BARS_GAP) {
            const pos = maxDimension === 0 ? [-size[0] / 2 + i, -size[1] / 2, 0] : [0, -size[1] / 2, -size[2] / 2 + i];
            const relativePos = [pos].concat(parentPos).reduce(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["c" /* vectorsAdd3D */]);
            bars.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: key,
                    className: barClassName,
                    style: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos, angle }), {
                        height: size[1]
                    })
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__light_simple__["a" /* default */], {
                    relativePos: relativePos,
                    playerPos: playerPos
                })
            ));
            key = key + 1;
        }
        return bars;
    }
}

Door.propTypes = {
    isVisible: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].bool,
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    viewAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    state: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].oneOf(DOOR_STATES).isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
Door.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
Door.defaultProps = {
    isVisible: true
};
/* harmony default export */ exports["a"] = Door;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enemy_css__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enemy_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__enemy_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_Audio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(6);







const ENEMY_ROARING_PERIOD = 4;
const ENEMY_SOUNDS_GAIN = 1;

class Enemy extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props, context) {
        super(props, context);

        this.roaringTimeout = null;

        const gainNode = this.context.audioCtx.createGain();
        gainNode.gain.value = ENEMY_SOUNDS_GAIN;
        gainNode.connect(this.context.masterGain);

        this.panner = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].createPanner({
            audioCtx: this.context.audioCtx,
            pos: this.props.pos,
            coneInnerAngle: 60,
            coneOuterAngle: 160,
            coneOuterGain: 0.1,
            rolloffFactor: 4
        });
        this.panner.connect(gainNode);

        this.audioSource = null;
        this.roarAudioBuffers = [this.context.assets['src/components/enemy/roar01.m4a'], this.context.assets['src/components/enemy/roar02.m4a'], this.context.assets['src/components/enemy/roar03.m4a']];
        this.attackAudioBuffer = this.context.assets['src/components/enemy/attack.m4a'];

        this.updatePannerPosition(this.props.pos);
        this.updatePannerOrientation(this.props.direction);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.pos && this.props.pos !== nextProps.pos) {
            this.updatePannerPosition(nextProps.pos);
        }
        if (nextProps.direction && this.props.direction !== nextProps.direction) {
            this.updatePannerOrientation(nextProps.direction);
        }
        if (nextProps.state && this.props.state !== nextProps.state) {
            if (nextProps.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].ATTACK) {
                this.stopRoaring();
                this.soundStart(this.attackAudioBuffer);
            } else if (!this.roaringTimeout && [__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].WANDER, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].STOP].includes(nextProps.state)) {
                this.startRoaring();
            }
        }
    }

    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStop(this.audioSource);
        this.stopRoaring();
    }

    render() {
        const { pos, state, direction, isVisible, graphicsQuality } = this.props;
        if (!isVisible) {
            return null;
        }
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["a" /* getTransformRule */])({ pos: [pos[0], -pos[1], pos[2]] });
        this.rotationRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["a" /* getTransformRule */])({
            angle: [0, -Math.round(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["d" /* convertRadToDegree */])(direction)), 0]
        });
        const className = ['obj', __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.root, __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a['state-' + state] || '', __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a['quality-' + graphicsQuality]].join(' ');

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: className, style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'obj ' + __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.direction, style: this.rotationRules },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.noise }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.noise }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.noise }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.noise }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.eyes },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.eye }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.eye })
                )
            )
        );
    }

    startRoaring() {
        this.roaringTimeout = setTimeout(() => {
            this.soundStart(this.roarAudioBuffers[Enemy.random(this.roarAudioBuffers.length)]);
            this.startRoaring();
        }, (Enemy.random(3) + ENEMY_ROARING_PERIOD) * 1000);
    }

    stopRoaring() {
        if (this.roaringTimeout) {
            clearTimeout(this.roaringTimeout);
            this.roaringTimeout = null;
        }
    }

    soundStart(buffer) {
        this.audioSource = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStart({
            audioSource: this.audioSource,
            audioCtx: this.context.audioCtx,
            buffer,
            destination: this.panner
        });
    }

    updatePannerPosition(pos) {
        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].setPannerPosition(this.panner, pos);
    }

    updatePannerOrientation(direction) {
        const x = Math.sin(direction);
        let z = -Math.cos(direction);
        if (this.panner.orientationX) {
            this.panner.orientationX.value = x;
            this.panner.orientationY.value = 0;
            this.panner.orientationZ.value = z;
        } else {
            this.panner.setOrientation([x, 0, z]);
        }
    }

    static random(max) {
        return Math.floor(Math.random() * max);
    }
}

Enemy.propTypes = {
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    direction: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired,
    state: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
Enemy.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = Enemy;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floor_css__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__floor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);





class Floor extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    render() {
        const { name, pos, playerPos, size, graphicsQuality } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
            id: name,
            className: __WEBPACK_IMPORTED_MODULE_0__floor_css___default.a['quality-' + graphicsQuality],
            pos: pos,
            size: [size[0], size[2]],
            angle: [90, 0, 0],
            playerPos: playerPos,
            patternId: 'floor',
            graphicsQuality: graphicsQuality
        });
    }
}

Floor.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired,
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
/* harmony default export */ exports["a"] = Floor;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hints_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hints_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__hints_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const Z_LIGHT_COEFFICIENT = 0.125;

class DiffuseLight extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    render() {
        const {
            id,
            relativePos,
            relativeAngle,
            size,
            playerPos
        } = this.props;

        let lightRelativeCoords;

        // front
        if (relativeAngle[0] === 0 && relativeAngle[1] % 360 === 0 && relativeAngle[2] === 0) {
            if (playerPos[2] > relativePos[2]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[2] - relativePos[2]
                });
            }
            // back
        } else if (relativeAngle[0] === 0 && Math.abs(relativeAngle[1] % 360) === 180 && relativeAngle[2] === 0) {
            if (playerPos[2] < relativePos[2]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [relativePos[0] + size[0] / 2 - playerPos[0], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[2] - playerPos[2]
                });
            }
            // left
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === -90 || relativeAngle[1] % 360 === 270) && relativeAngle[2] === 0) {
            if (playerPos[0] < relativePos[0]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[2] - (relativePos[2] - size[0] / 2), -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: relativePos[0] - playerPos[0]
                });
            }
            // right
        } else if (relativeAngle[0] === 0 && (relativeAngle[1] % 360 === 90 || relativeAngle[1] % 360 === -270) && relativeAngle[2] === 0) {
            if (playerPos[0] > relativePos[0]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [relativePos[2] + size[0] / 2 - playerPos[2], -relativePos[1] + size[1] / 2 - playerPos[1]],
                    distance: playerPos[0] - relativePos[0]
                });
            }
            // top
        } else if ((relativeAngle[0] % 360 === 90 || relativeAngle[0] % 360 === -270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] > -relativePos[1]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), playerPos[2] - (relativePos[2] - size[1] / 2)],
                    distance: playerPos[1] + relativePos[1]
                });
            }
            // bottom
        } else if ((relativeAngle[0] % 360 === -90 || relativeAngle[0] % 360 === 270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] < -relativePos[1]) {
                lightRelativeCoords = DiffuseLight.getLightRelativeCoords({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), relativePos[2] + size[1] / 2 - playerPos[2]],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        }

        if (!lightRelativeCoords) {
            return null;
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'filter',
            { id: id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('feGaussianBlur', { stdDeviation: '3', result: 'blurred' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('feColorMatrix', { 'in': 'blurred', type: 'luminanceToAlpha', result: 'bumpMap' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'feDiffuseLighting',
                { 'in': 'bumpMap', result: 'light',
                    surfaceScale: '3'
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('fePointLight', {
                    x: lightRelativeCoords.x,
                    y: lightRelativeCoords.y,
                    z: lightRelativeCoords.z
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('feComposite', { 'in': 'light', in2: 'SourceGraphic',
                operator: 'arithmetic',
                k1: '1', k2: '0', k3: '0', k4: '0'
            })
        );
    }

    static getLightRelativeCoords({ pos, distance }) {
        return {
            x: pos[0],
            y: pos[1],
            z: Math.round(distance * Z_LIGHT_COEFFICIENT)
        };
    }
}

DiffuseLight.propTypes = {
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    relativePos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    relativeAngle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number).isRequired
};
/* harmony default export */ exports["a"] = DiffuseLight;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(6);





const DEFAULT_STYLE_RULES = {
    backgroundImage: 'none',
    backgroundColor: '#000'
};

class Light extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    render() {
        const {
            relativePos,
            relativeAngle,
            size,
            playerPos
        } = this.props;

        let styleRules = DEFAULT_STYLE_RULES;

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
            // bottom
        } else if ((relativeAngle[0] % 360 === -90 || relativeAngle[0] % 360 === 270) && relativeAngle[1] === 0 && relativeAngle[2] === 0) {
            if (playerPos[1] < -relativePos[1]) {
                styleRules = Light.getPlayerSpotLightBackground({
                    pos: [playerPos[0] - (relativePos[0] - size[0] / 2), relativePos[2] + size[1] / 2 - playerPos[2]],
                    distance: playerPos[1] + relativePos[1]
                });
            }
        }

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__light_css___default.a.root, style: styleRules });
    }

    static getPlayerSpotLightBackground({ pos, distance }) {
        const ratio = Math.max(0, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["t" /* SPOTLIGHT_RADIUS */] - distance) / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["t" /* SPOTLIGHT_RADIUS */];
        if (ratio) {
            const size = (2 + ratio) * __WEBPACK_IMPORTED_MODULE_2__constants_constants__["t" /* SPOTLIGHT_RADIUS */] / 2 * 10;
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

Light.propTypes = {
    relativePos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    relativeAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired
};
/* harmony default export */ exports["a"] = Light;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_css__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__logo_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



function Logo() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h1',
        { className: __WEBPACK_IMPORTED_MODULE_0__logo_css___default.a.root },
        'Doors & levers'
    );
}

/* harmony default export */ exports["a"] = Logo;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__painting_css__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__painting_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__painting_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);





class Painting extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    render() {
        const { pos, playerPos, size, angle, alias } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
            light: 'none',
            className: __WEBPACK_IMPORTED_MODULE_0__painting_css___default.a.root + ' ' + __WEBPACK_IMPORTED_MODULE_0__painting_css___default.a[alias],
            pos: [pos[0], -pos[1], pos[2]],
            playerPos: playerPos,
            size: size,
            angle: angle
        });
    }
}

Painting.propTypes = {
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    angle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    alias: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired
};
/* harmony default export */ exports["a"] = Painting;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__patterns_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (immutable) */ exports["a"] = Patterns;



const PATTERNS = [['wall01', 'src/components/wall/wall01.jpg'], ['wall02', 'src/components/wall/wall02.jpg'], ['wall03', 'src/components/wall/wall03.jpg'], ['floor', 'src/components/floor/floor.jpg'], ['box01', 'src/components/box/box01.jpg', 240, 160], ['box02', 'src/components/box/box02.jpg', 120, 80], ['box03', 'src/components/box/box03.jpg', 120, 80], ['wood', 'src/components/switcher/wood.jpg', 90, 60]];

function Patterns() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        { className: __WEBPACK_IMPORTED_MODULE_0__patterns_css___default.a.root },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            PATTERNS.map(([name, imageSrc, width = 450, height = 300]) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'pattern',
                {
                    key: name,
                    id: name,
                    width: width, height: height,
                    patternUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('image', { xlinkHref: imageSrc, width: width, height: height })
            ))
        )
    );
}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endScreen_css__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__endScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(6);





const ENDING_TIME = 3000;

class EndScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        // raf loop for capturing gamepad buttons
        this.loop = new __WEBPACK_IMPORTED_MODULE_2__lib_loop__["a" /* default */](this.loopCallback.bind(this));

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.endingTimer = setTimeout(() => {
            this.setState({
                showAnyKeyMessage: true
            });
        }, ENDING_TIME);
        this.loop.start();
    }

    componentWillUnmount() {
        clearTimeout(this.endingTimer);
        this.endingTimer = null;
        this.loop.stop();
    }

    render() {
        const { gameState, gamepadState } = this.props;
        const className = [__WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a.root, __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a['state-' + gameState]].join(' ');

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                className: className,
                onClick: this.handleClick
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a.message },
                gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["c" /* WIN */] ? 'You escaped' : 'You died. The monster got you'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default.a.key },
                gamepadState === -1 ? '[[ Press `Enter` ]]' : '[[ Press `X` button ]]'
            )
        );
    }

    loopCallback() {
        if (!this.state.showAnyKeyMessage) {
            return;
        }
        // keyboard
        if (this.context.controls.keyPressed[__WEBPACK_IMPORTED_MODULE_3__constants_constants__["j" /* KEY_ENTER */]][0] === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
            this.context.controls.keyPressed[__WEBPACK_IMPORTED_MODULE_3__constants_constants__["j" /* KEY_ENTER */]][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].DOWN;
            this.props.onEnd();
        }

        // gamepad
        if (this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_3__constants_constants__["p" /* XBOX_BUTTON_X */]][0] === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
            this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_3__constants_constants__["p" /* XBOX_BUTTON_X */]][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* CONTROL_STATE */].DOWN;
            this.props.onEnd();
        }
    }

    handleClick() {
        this.props.onEnd();
    }
}

EndScreen.propTypes = {
    onEnd: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    gamepadState: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
EndScreen.contextTypes = {
    controls: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = EndScreen;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loadingScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloadAssetsList__ = __webpack_require__(107);
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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credits_css__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credits_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__credits_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__ = __webpack_require__(130);
/* harmony export (immutable) */ exports["a"] = Credits;




function Credits() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'dl',
        { className: __WEBPACK_IMPORTED_MODULE_0__credits_css___default.a.creditsList },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dt',
            null,
            'Textures'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dd',
            { className: __WEBPACK_IMPORTED_MODULE_0__credits_css___default.a.creditsDescription },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */], { href: 'https://freestocktextures.com/' }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
            'by\xA0',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */],
                { href: 'https://twitter.com/pinkonhead' },
                '@PinkOnHead'
            ),
            '\xA0and\xA0',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */],
                { href: 'https://twitter.com/PawelWoz' },
                '@PawelWoz'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dt',
            null,
            'Sound effects'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dd',
            { className: __WEBPACK_IMPORTED_MODULE_0__credits_css___default.a.creditsDescription },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */], { href: 'http://www.littlerobotsoundfactory.com/' }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */], { href: 'http://www.bigsoundbank.com/' }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', null),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */], { href: 'http://opengameart.org/' })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dt',
            null,
            'Xbox controller driver for MacOs'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dd',
            { className: __WEBPACK_IMPORTED_MODULE_0__credits_css___default.a.creditsDescription },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */],
                { href: 'https://github.com/360Controller/360Controller' },
                '360Controller on GitHub'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dt',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__["a" /* default */],
                { href: 'https://github.com/alvov/doors-and-levers-game' },
                'Github Repo'
            )
        )
    );
}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__externalLink_css__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__externalLink_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__externalLink_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (immutable) */ exports["a"] = ExternalLink;



function ExternalLink({ href, children }) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        { href: href, target: '_blank', rel: 'noreferer noopener', className: __WEBPACK_IMPORTED_MODULE_0__externalLink_css___default.a.root },
        children ? children : href
    );
}
ExternalLink.propTypes = {
    href: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired
};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startScreen_css__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__startScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_logo__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credits_credits__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_settings_settings__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(6);









const MUSIC_VOLUME = 0.2;

const SCREEN_DEFAULT = 'default';
const SCREEN_SETTINGS = 'settings';
const SCREEN_CREDITS = 'credits';

class StartScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new __WEBPACK_IMPORTED_MODULE_4__lib_loop__["a" /* default */](this.loopCallback.bind(this));

        this.decodedAudioBuffer = this.context.assets['src/components/screens/start/theme.m4a'];
        this.gainNode = this.context.audioCtx.createGain();
        this.gainNode.gain.value = MUSIC_VOLUME;
        this.gainNode.connect(this.context.masterGain);

        this.handleStart = this.handleStart.bind(this);
        this.setScreenSettings = this.setScreen.bind(this, SCREEN_SETTINGS);
        this.setScreenCredits = this.setScreen.bind(this, SCREEN_CREDITS);
        this.setScreenDefault = function () {
            this.setActiveButton(0);
            this.setScreen(SCREEN_DEFAULT);
        }.bind(this);

        this.state = {
            screen: SCREEN_DEFAULT,
            menuItemActive: 0,
            menu: [{
                text: 'Play',
                action: this.handleStart
            }, {
                text: 'Settings',
                action: this.setScreenSettings
            }, {
                text: 'Credits',
                action: this.setScreenCredits
            }]
        };
    }

    componentDidMount() {
        this.startMusic();
        this.loop.start();
    }

    componentWillUnmount() {
        this.stopMusic();
        this.loop.stop();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.root },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.version },
                'v' + __WEBPACK_IMPORTED_MODULE_6__constants_constants__["h" /* GAME_VERSION */]
            ),
            this.renderDefaultScreen(),
            this.renderSettingsScreen(),
            this.renderCreditsScreen()
        );
    }

    renderDefaultScreen() {
        const { menu, menuItemActive } = this.state;
        if (this.state.screen === SCREEN_DEFAULT) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__logo_logo__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menu },
                    menu.map((item, index) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        { key: item.text,
                            className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menuButton + (menuItemActive === index ? ` ${ __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menuButtonActive }` : ''),
                            onClick: item.action,
                            onFocus: this.setActiveButton.bind(this, index),
                            tabIndex: index + 1
                        },
                        item.text
                    ))
                )
            );
        }
        return null;
    }

    renderSettingsScreen() {
        if (this.state.screen === SCREEN_SETTINGS) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                this.renderBackButton(),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h1',
                    { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.title },
                    'Settings'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_settings_settings__["a" /* default */], null)
            );
        }
        return null;
    }

    renderCreditsScreen() {
        if (this.state.screen === SCREEN_CREDITS) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                this.renderBackButton(),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h1',
                    { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.title },
                    'Credits'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__credits_credits__["a" /* default */], null)
            );
        }
        return null;
    }

    renderBackButton() {
        const { gamepadState } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.backButton, onClick: this.setScreenDefault },
            '\u2190 Back\xA0',
            gamepadState === -1 ? '[Esc]' : '(B)'
        );
    }

    loopCallback() {
        // keyboard
        if (this.state.screen !== SCREEN_DEFAULT && this.isKeyboardButtonPressed(__WEBPACK_IMPORTED_MODULE_6__constants_constants__["i" /* KEY_ESCAPE */])) {
            this.setScreenDefault();
        }
        if (this.state.screen === SCREEN_DEFAULT && this.isKeyboardButtonPressed(__WEBPACK_IMPORTED_MODULE_6__constants_constants__["j" /* KEY_ENTER */])) {
            this.launchActiveAction();
        }

        // gamepad
        const gamepadStickLeftMoved = this.getGamepadLeftStickMove();
        if (this.state.screen !== SCREEN_DEFAULT) {
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_6__constants_constants__["k" /* XBOX_BUTTON_B */])) {
                this.setScreenDefault();
            }
        } else {
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_6__constants_constants__["l" /* XBOX_BUTTON_A */])) {
                this.launchActiveAction();
            }
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_6__constants_constants__["m" /* XBOX_BUTTON_CROSS_UP */]) || gamepadStickLeftMoved === -1) {
                this.setState({ menuItemActive: Math.max(0, this.state.menuItemActive - 1) });
            }
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_6__constants_constants__["n" /* XBOX_BUTTON_CROSS_DOWN */]) || gamepadStickLeftMoved === 1) {
                this.setState({
                    menuItemActive: Math.min(this.state.menu.length - 1, this.state.menuItemActive + 1)
                });
            }
        }
    }

    handleStart() {
        this.props.onStart();
    }

    launchActiveAction() {
        const menuItemActive = this.state.menuItemActive;
        this.setState({ menuItemActive: 0 });
        this.state.menu[menuItemActive].action();
    }

    setActiveButton(index) {
        this.setState({ menuItemActive: index });
    }

    setScreen(screen) {
        this.setState({ screen });
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

    isKeyboardButtonPressed(keyCode) {
        const isPressed = this.context.controls.keyPressed[keyCode][0] === __WEBPACK_IMPORTED_MODULE_6__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.keyPressed[keyCode][0] = __WEBPACK_IMPORTED_MODULE_6__constants_constants__["o" /* CONTROL_STATE */].DOWN;
        }
        return isPressed;
    }

    isGamepadButtonPressed(button) {
        const isPressed = this.context.controls.gamepadButtons[button][0] === __WEBPACK_IMPORTED_MODULE_6__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.gamepadButtons[button][0] = __WEBPACK_IMPORTED_MODULE_6__constants_constants__["o" /* CONTROL_STATE */].DOWN;
        }
        return isPressed;
    }

    getGamepadLeftStickMove() {
        if (this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["f" /* XBOX_STICK_LEFT_AXIS_Y */]][0] === 1) {
            return this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["f" /* XBOX_STICK_LEFT_AXIS_Y */]][2];
        }
        return 0;
    }
}

StartScreen.propTypes = {
    onStart: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    gamepadState: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
StartScreen.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    controls: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = StartScreen;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);






const HANDLE_SIZE = [6, 40];

class Switcher extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({
            pos: this.posWithInvertedY,
            angle: props.angle
        });
    }

    render() {
        const { name, playerPos, size, angle, isReachable,
            isOn, isInteractive, graphicsQuality } = this.props;
        const classNames = ['obj', __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a['quality-' + graphicsQuality], isOn ? __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.on : __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.off];
        if (isInteractive && isReachable) {
            classNames.push(__WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.reachable);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: classNames.join(' '), style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name,
                className: __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.wood,
                size: [size[0], size[1]],
                pos: [0, 0, 0],
                playerPos: playerPos,
                parentPos: [this.posWithInvertedY],
                parentAngle: [angle],
                patternId: 'wood',
                graphicsQuality: graphicsQuality
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

Switcher.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    angle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    isReachable: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].bool,
    isInteractive: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].bool.isRequired,
    isOn: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].bool.isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
Switcher.defaultProps = {
    isReachable: false
};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wall_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wall_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wall_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(11);






// no support for rotated walls for now
class Wall extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["a" /* getTransformRule */])({ pos: this.posWithInvertedY });
    }

    render() {
        const { name, mode, size, playerPos, graphicsQuality } = this.props;
        const className = ['obj', __WEBPACK_IMPORTED_MODULE_0__wall_css___default.a['mode-' + mode], __WEBPACK_IMPORTED_MODULE_0__wall_css___default.a['quality-' + graphicsQuality]].join(' ');

        // Front-Back-Left-Right
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: className, style: this.styleRules },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-0',
                pos: [0, 0, size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 0, 0],
                patternId: 'wall0' + mode,
                graphicsQuality: graphicsQuality
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-1',
                pos: [0, 0, -size[2] / 2],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: size,
                angle: [0, 180, 0],
                patternId: 'wall0' + mode,
                graphicsQuality: graphicsQuality
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-2',
                pos: [-size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, -90, 0],
                patternId: 'wall0' + mode,
                graphicsQuality: graphicsQuality
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
                id: name + '-3',
                pos: [size[0] / 2, 0, 0],
                parentPos: [this.posWithInvertedY],
                playerPos: playerPos,
                size: [size[2], size[1]],
                angle: [0, 90, 0],
                patternId: 'wall0' + mode,
                graphicsQuality: graphicsQuality
            })
        );
    }
}

Wall.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired,
    pos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    size: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    mode: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
/* harmony default export */ exports["a"] = Wall;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const HINT_GOAL = '— Where am I? It\'s so dark here. I have to find the way out';
/* harmony export (immutable) */ exports["a"] = HINT_GOAL;

const HINT_FIRST_SWITCHER = '— What if I push this lever?';
/* harmony export (immutable) */ exports["h"] = HINT_FIRST_SWITCHER;

const HINT_DOOR = '— Sounds like the door opened somewhere';
/* harmony export (immutable) */ exports["i"] = HINT_DOOR;


const HINT_MOVE_KEYBOARD = '[[ Use `W`, `A`, `S`, `D` to move ]]';
/* harmony export (immutable) */ exports["d"] = HINT_MOVE_KEYBOARD;

const HINT_RUN_KEYBOARD = '[[ Hold `Shift` to run ]]';
/* harmony export (immutable) */ exports["e"] = HINT_RUN_KEYBOARD;

const HINT_INTERACT_KEYBOAD = '[[ Press `E` to interact ]]';
/* harmony export (immutable) */ exports["g"] = HINT_INTERACT_KEYBOAD;


const HINT_MOVE_GAMEPAD = '[[ Use left stick to move ]]';
/* harmony export (immutable) */ exports["b"] = HINT_MOVE_GAMEPAD;

const HINT_RUN_GAMEPAD = '[[ Hold right trigger to run ]]';
/* harmony export (immutable) */ exports["c"] = HINT_RUN_GAMEPAD;

const HINT_INTERACT_GAMEPAD = '[[ Press `X` on your gamepad to interact ]]';
/* harmony export (immutable) */ exports["f"] = HINT_INTERACT_GAMEPAD;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__camera_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(14);
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_hints__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_DelayedActions__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__level__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_collision__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actionCreators__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


















const EPSILON = 0.1;

class GameLoop extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.delayedActions = new __WEBPACK_IMPORTED_MODULE_6__lib_DelayedActions__["a" /* default */]();

        this.loop = new __WEBPACK_IMPORTED_MODULE_8__lib_loop__["a" /* default */](this.loopCallback.bind(this), __WEBPACK_IMPORTED_MODULE_4__constants_constants__["I" /* FPS */]);

        this.shownHints = {};
    }

    componentDidMount() {
        const gamepadIndex = this.context.store.getState().gamepad.state;
        let gamepadSnapshot;
        if (gamepadIndex !== -1) {
            gamepadSnapshot = navigator.getGamepads()[gamepadIndex];
        }
        if (gamepadSnapshot) {
            this.delayedActions.pushAction({
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["a" /* HINT_GOAL */], __WEBPACK_IMPORTED_MODULE_5__constants_hints__["b" /* HINT_MOVE_GAMEPAD */]], true),
                delay: 0
            });
            this.delayedActions.pushAction({
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["c" /* HINT_RUN_GAMEPAD */]], true, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* HINT_SHOW_TIME */]),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* HINT_SHOW_TIME */]
            });
        } else {
            this.delayedActions.pushAction({
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["a" /* HINT_GOAL */], __WEBPACK_IMPORTED_MODULE_5__constants_hints__["d" /* HINT_MOVE_KEYBOARD */]], true),
                delay: 0
            });
            this.delayedActions.pushAction({
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["e" /* HINT_RUN_KEYBOARD */]], true, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* HINT_SHOW_TIME */]),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* HINT_SHOW_TIME */]
            });
        }
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

        // check exit
        if (this.context.controls.keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["K" /* KEY_Q */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN || this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["L" /* XBOX_BUTTON_BACK */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
            this.props.onExit();
            return;
        }

        let gamepadSnapshot;
        if (currentStore.gamepad.state !== -1) {
            gamepadSnapshot = navigator.getGamepads()[currentStore.gamepad.state];
        }

        // get new view angle
        // try gamepad
        if (gamepadSnapshot) {
            const currentViewAngle = currentStore.viewAngle;
            const x = GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["g" /* XBOX_STICK_RIGHT_AXIS_X */]]);
            const y = GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["M" /* XBOX_STICK_RIGHT_AXIS_Y */]]);
            if (x || y) {
                const newViewAngle = [(currentViewAngle[0] + x * currentStore.settings.stickSensitivity) % 360, Math.min(Math.max(currentViewAngle[1] - y * currentStore.settings.stickSensitivity, -90), 90), 0];
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["c" /* player */].updateViewAngle(newViewAngle));
                newState.viewAngle = newViewAngle;
            }
        }

        // try mouse
        const pointerDelta = currentStore.pointerDelta;
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = newState.viewAngle || currentStore.viewAngle;
            const newViewAngle = [(currentViewAngle[0] - pointerDelta.x * currentStore.settings.mouseSensitivity) % 360, Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * currentStore.settings.mouseSensitivity, -90), 90), 0];
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["c" /* player */].updateViewAngle(newViewAngle));
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["b" /* game */].resetPointerDelta());
            newState.viewAngle = newViewAngle;
        }

        // get player position shift
        let angleShift = [];
        let step = 0;
        let isRunning = false;

        // try gamepad
        if (gamepadSnapshot) {
            const x = GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["N" /* XBOX_STICK_LEFT_AXIS_X */]]);
            // convert -0 to 0 by adding 0
            const z = -GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["f" /* XBOX_STICK_LEFT_AXIS_Y */]]) + 0;
            if (x || z) {
                if (gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["O" /* XBOX_TRIGGER_RIGHT_AXIS */]] >= 0.5) {
                    isRunning = true;
                }
                step = Math.sqrt(x ** 2 + z ** 2);
                if (z >= 0) {
                    angleShift.push(Math.atan(x / z));
                } else {
                    angleShift.push(Math.atan(x / z) + Math.PI);
                }
            }
        }

        const keyPressed = this.context.controls.keyPressed;
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["P" /* KEY_W */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
            angleShift.push(0);
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["Q" /* KEY_S */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
            angleShift.push(Math.PI);
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["R" /* KEY_D */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
            angleShift.push(Math.PI / 2);
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["S" /* KEY_A */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
            // hack for angles sum
            if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["P" /* KEY_W */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
                angleShift.push(-Math.PI / 2);
            } else {
                angleShift.push(3 * Math.PI / 2);
            }
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["T" /* KEY_SHIFT */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].UNUSED) {
            isRunning = true;
        }

        // get new player state
        if (angleShift.length) {
            if (isRunning) {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["c" /* player */].run());
            } else {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["c" /* player */].walk());
            }
        } else {
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["c" /* player */].stop());
        }

        // get new player position
        if (angleShift.length) {
            let angleShiftSum = 0;
            for (let i = 0; i < angleShift.length; i++) {
                angleShiftSum = angleShiftSum + angleShift[i];
            }
            angleShiftSum = angleShiftSum / angleShift.length;

            angleShiftSum = angleShiftSum + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["b" /* convertDegreeToRad */])(currentStore.viewAngle[0]);

            step = step * frameRateCoefficient * (isRunning ? __WEBPACK_IMPORTED_MODULE_4__constants_constants__["U" /* RUNNING_COEFF */] : 1) * __WEBPACK_IMPORTED_MODULE_4__constants_constants__["V" /* PLAYER_SPEED */];
            const shift = GameLoop.getShift2d(angleShiftSum, step);
            const newPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["c" /* vectorsAdd3D */])(currentStore.pos, shift);
            const objects = currentStore.objects;
            const collisions = __WEBPACK_IMPORTED_MODULE_10__lib_collision__["a" /* default */].getCollisions([currentStore.pos, newPos], objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* BROAD_CELL_SIZE */]);
            // get last collision result as new player position
            const newPosAfterCollisions = collisions[collisions.length - 1].newPos;
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["c" /* player */].updatePosition(newPosAfterCollisions));
            newState.pos = newPosAfterCollisions;
        }

        if (newState.pos) {
            // if out of bounds - win
            for (let i = 0; i < 3; i++) {
                if (__WEBPACK_IMPORTED_MODULE_9__level__["a" /* default */].boundaries[i]) {
                    if (newState.pos[i] < 0 || newState.pos[i] > __WEBPACK_IMPORTED_MODULE_9__level__["a" /* default */].boundaries[i]) {
                        this.props.onWin();
                        return;
                    }
                }
            }

            // render only visible objects
            const { addVisibleObjects, removeVisibleObjects } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["h" /* getVisibleObjects */])(newState.pos, currentStore.objects);
            if (Object.keys(addVisibleObjects).length || Object.keys(removeVisibleObjects).length) {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* objects */].setVisible({ addVisibleObjects, removeVisibleObjects }));
            }
        }

        // find interactive object which we can reach with a hand
        let reachableObject;
        if (newState.pos || newState.viewAngle) {
            const playerPosition = newState.pos || currentStore.pos;
            const viewAngle = newState.viewAngle || currentStore.viewAngle;
            const collisionView = __WEBPACK_IMPORTED_MODULE_10__lib_collision__["a" /* default */].getCollisionView([playerPosition, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["g" /* getPointPosition */])({ pos: playerPosition, distance: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["H" /* HAND_LENGTH */], angle: viewAngle })], currentStore.objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* BROAD_CELL_SIZE */]);
            if (collisionView && collisionView.obj.isInteractive) {
                reachableObject = collisionView.obj;
                if (!reachableObject.isReachable) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* objects */].setReachable(_extends({}, reachableObject)));
                    actions.push(this.showHints([gamepadSnapshot ? __WEBPACK_IMPORTED_MODULE_5__constants_hints__["f" /* HINT_INTERACT_GAMEPAD */] : __WEBPACK_IMPORTED_MODULE_5__constants_hints__["g" /* HINT_INTERACT_KEYBOAD */]], false));
                    actions.push(this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["h" /* HINT_FIRST_SWITCHER */]], true));
                }
            } else {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* objects */].setReachable(null));
            }
        } else {
            reachableObject = currentStore.objects.find(obj => obj.isReachable);
        }

        // perform interaction if key is pressed
        if (reachableObject && (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["W" /* KEY_E */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN || this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["p" /* XBOX_BUTTON_X */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* CONTROL_STATE */].FIRST_TIME_DOWN)) {
            if (reachableObject.type === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["F" /* SWITCHER_TYPE */]) {
                const door = currentStore.doorsState[reachableObject.props.id];
                if (![__WEBPACK_IMPORTED_MODULE_4__constants_constants__["v" /* DOOR_OPENING */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["x" /* DOOR_CLOSING */]].includes(door)) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["e" /* doorsState */][door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["u" /* DOOR_OPEN */] ? 'setClosing' : 'setOpening'](reachableObject.props.id));
                    this.delayedActions.pushAction({
                        action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["e" /* doorsState */][door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["u" /* DOOR_OPEN */] ? 'setClose' : 'setOpen'](reachableObject.props.id),
                        delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["y" /* DOOR_OPEN_TIME */]
                    });
                    if (door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["w" /* DOOR_CLOSE */]) {
                        this.delayedActions.pushAction({
                            action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["i" /* HINT_DOOR */]], false, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["y" /* DOOR_OPEN_TIME */]),
                            delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["y" /* DOOR_OPEN_TIME */]
                        });
                    }
                }
            }
        }

        // enemy
        if (currentStore.enemy.state !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].LIMBO) {
            const playerPosition = newState.pos || currentStore.pos;
            const distanceToPlayer = GameLoop.getDistance2d(currentStore.enemy.position, playerPosition);
            const directionToPlayer = GameLoop.getDirection2d(currentStore.enemy.position, playerPosition);
            const canSeeEachOther = __WEBPACK_IMPORTED_MODULE_10__lib_collision__["a" /* default */].getCollisionView([currentStore.enemy.position, playerPosition], currentStore.objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* BROAD_CELL_SIZE */]) === null;
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setVisibility(canSeeEachOther));
            if (canSeeEachOther && (
            // if player is too close
            distanceToPlayer < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["X" /* ENEMY_ATTACK_DISTANCE */] ||
            // if player id close and in sight
            distanceToPlayer < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["Y" /* ENEMY_ATTACK_DISTANCE_VISIBLE */] && Math.abs(directionToPlayer - currentStore.enemy.direction) < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["Z" /* ENEMY_VIEW_ANGLE_RAD */] / 2)) {
                // if enemy is not already attacking
                if ([__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].WANDER, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].STOP].includes(currentStore.enemy.state)) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].ATTACK));
                }
            } else if (currentStore.enemy.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].ATTACK) {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].WANDER));
                const newTarget = __WEBPACK_IMPORTED_MODULE_10__lib_collision__["a" /* default */].getRandomFreeCell({
                    pos: currentStore.enemy.position,
                    objects: currentStore.objects,
                    broadCellSize: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* BROAD_CELL_SIZE */],
                    boundaries: __WEBPACK_IMPORTED_MODULE_9__level__["a" /* default */].boundaries
                });
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setTarget(newTarget));
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setDirection(GameLoop.getDirection2d(currentStore.enemy.position, newTarget)));
            }
            if (currentStore.enemy.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].WANDER) {
                let directionToTarget;
                // if enemy reached it's current target
                if (GameLoop.getDistance2d(currentStore.enemy.position, currentStore.enemy.target) < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_0" /* ENEMY_TARGET_REACH_THRESHOLD */]) {
                    const newTarget = __WEBPACK_IMPORTED_MODULE_10__lib_collision__["a" /* default */].getRandomFreeCell({
                        pos: currentStore.enemy.position,
                        objects: currentStore.objects,
                        broadCellSize: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* BROAD_CELL_SIZE */],
                        boundaries: __WEBPACK_IMPORTED_MODULE_9__level__["a" /* default */].boundaries
                    });
                    directionToTarget = GameLoop.getDirection2d(currentStore.enemy.position, newTarget);
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setTarget(newTarget));
                    // stop for a while if direction has changed
                    if (!GameLoop.floatsEqual(directionToTarget, currentStore.enemy.direction)) {
                        actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].STOP));
                        actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setDirection(directionToTarget));
                        this.delayedActions.pushAction({
                            action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].WANDER),
                            delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_1" /* ENEMY_CHANGE_TARGET_TIME */]
                        });
                    }
                }
                if (!directionToTarget) {
                    directionToTarget = GameLoop.getDirection2d(currentStore.enemy.position, currentStore.enemy.target);
                }
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setDirection(directionToTarget));
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setPosition(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["c" /* vectorsAdd3D */])(currentStore.enemy.position, GameLoop.getShift2d(directionToTarget, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_2" /* ENEMY_SPEED */] * frameRateCoefficient))));
            } else if (currentStore.enemy.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["z" /* ENEMY_STATE */].ATTACK) {
                if (distanceToPlayer < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_3" /* ENEMY_KILL_DISTANCE */]) {
                    this.props.onLoose();
                    return;
                } else {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setDirection(directionToPlayer));
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* enemy */].setPosition(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["c" /* vectorsAdd3D */])(currentStore.enemy.position, GameLoop.getShift2d(directionToPlayer, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_4" /* ENEMY_SPEED_RUNNING */] * frameRateCoefficient))));
                }
            }
        }

        if (actions.length) {
            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__["batchActions"])(actions));
        }
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
                action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* hints */].removeHints(rawHints),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* HINT_SHOW_TIME */] + delay
            });
        }
        return __WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* hints */].addHints(rawHints);
    }

    static filterStickValue(value) {
        return Math.abs(value) >= __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_5" /* STICK_VALUE_THRESHOLD */] ? value : 0;
    }

    static getDistance2d(p1, p2) {
        return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[2] - p2[2]) ** 2);
    }

    static getDirection2d(p1, p2) {
        const xShift = p2[0] - p1[0];
        let zShift = p2[2] - p1[2];
        if (!xShift && !zShift) {
            return 0;
        }
        if (zShift) {
            zShift = -zShift;
        }
        let direction;
        if (zShift >= 0) {
            direction = Math.atan(xShift / zShift);
        } else {
            direction = Math.atan(xShift / zShift) + Math.PI;
        }
        if (direction < 0) {
            direction = direction + Math.PI * 2;
        }
        return direction;
    }

    static getShift2d(direction, distance) {
        return [distance * Math.sin(direction), 0, -distance * Math.cos(direction)];
    }

    static floatsEqual(f1, f2) {
        return Math.abs(f1 - f2) < EPSILON;
    }
}

GameLoop.propTypes = {
    onWin: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    onLoose: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    onExit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
GameLoop.contextTypes = {
    store: __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__["a" /* default */].isRequired,
    controls: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(GameLoop);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_css__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__player_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_Audio__ = __webpack_require__(36);








class Player extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.walkingAudioBuffer = this.context.assets['src/containers/player/steps-walking.m4a'];
        this.runnningAudioBuffer = this.context.assets['src/containers/player/steps-running.m4a'];

        this.panner = __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].createPanner({
            audioCtx: this.context.audioCtx
        });
        this.panner.connect(this.context.masterGain);

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
                case __WEBPACK_IMPORTED_MODULE_3__constants_constants__["r" /* PLAYER_WALK */]:
                    this.soundStart(this.walkingAudioBuffer);
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__constants_constants__["s" /* PLAYER_RUN */]:
                    this.soundStart(this.runnningAudioBuffer);
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
        const className = ['obj player-animation', playerState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["r" /* PLAYER_WALK */] ? __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.playerAnimationWalking : playerState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["s" /* PLAYER_RUN */] ? __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.playerAnimationRunning : ''].join(' ');

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: className },
            children
        );
    }

    soundStart(decodedAudioBuffer) {
        this.audioSource = __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].soundStart({
            audioSource: this.audioSource,
            audioCtx: this.context.audioCtx,
            destination: this.gainNode,
            buffer: decodedAudioBuffer,
            loop: true
        });
    }

    soundStop() {
        __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].soundStop(this.audioSource);
    }

    updatePannerPosition(pos) {
        __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].setPannerPosition(this.panner, [pos[0], 0, pos[2]]);
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

Player.propTypes = {
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    viewAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerState: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired
};
Player.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_painting_painting__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floor_floor__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ceiling_ceiling__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_wall_wall__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_box_box__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_switcher_switcher__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_door_door__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_enemy_enemy__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };















function Scene({ pos, viewAngle, enemy, doorsState, visibleObjects, graphicsQuality }) {
    const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_utils__["a" /* getTransformRule */])({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const renderedObjects = [];
    for (let i = 0; i < visibleObjects.length; i++) {
        const object = visibleObjects[i];
        switch (object.type) {
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["A" /* PAINTING_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_painting_painting__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    angle: object.angle,
                    size: object.size.filter(value => value !== 0).slice(0, 2),
                    alias: object.props.alias
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["B" /* FLOOR_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_floor_floor__["a" /* default */], {
                    key: object.name,
                    name: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size,
                    graphicsQuality: graphicsQuality
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["C" /* CEILING_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ceiling_ceiling__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    size: [object.size[0], object.size[2]]
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["D" /* WALL_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_wall_wall__["a" /* default */], {
                    key: object.name,
                    name: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size,
                    mode: object.props ? object.props.mode : 1,
                    graphicsQuality: graphicsQuality
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["E" /* BOX_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_box_box__["a" /* default */], _extends({
                    key: object.name,
                    name: object.name,
                    isVisible: object.isVisible,
                    isBroken: object.isBroken,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size,
                    graphicsQuality: graphicsQuality
                }, object.props)));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["F" /* SWITCHER_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_switcher_switcher__["a" /* default */], {
                    key: object.name,
                    name: object.name,
                    pos: object.pos,
                    size: object.size,
                    angle: object.angle,
                    playerPos: pos,
                    isReachable: object.isReachable,
                    isInteractive: [__WEBPACK_IMPORTED_MODULE_11__constants_constants__["u" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_11__constants_constants__["w" /* DOOR_CLOSE */]].includes(doorsState[object.props.id]),
                    isOn: [__WEBPACK_IMPORTED_MODULE_11__constants_constants__["u" /* DOOR_OPEN */], __WEBPACK_IMPORTED_MODULE_11__constants_constants__["v" /* DOOR_OPENING */]].includes(doorsState[object.props.id]),
                    graphicsQuality: graphicsQuality
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["G" /* DOOR_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_door_door__["a" /* default */], {
                    key: object.name,
                    isVisible: object.isVisible,
                    pos: object.pos,
                    playerPos: pos,
                    viewAngle: viewAngle,
                    size: object.size,
                    state: doorsState[object.props.id],
                    graphicsQuality: graphicsQuality
                }));
                break;
        }
    }
    if (enemy.state !== __WEBPACK_IMPORTED_MODULE_11__constants_constants__["z" /* ENEMY_STATE */].LIMBO) {
        renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_enemy_enemy__["a" /* default */], {
            key: 'enemy',
            pos: enemy.position,
            state: enemy.state,
            direction: enemy.direction,
            isVisible: enemy.isVisible,
            graphicsQuality: graphicsQuality
        }));
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
    enemy: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    visibleObjects: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object).isRequired,
    doorsState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        enemy: state.enemy,
        visibleObjects: state.objects.filter(obj => {
            if (obj.type === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["A" /* PAINTING_TYPE */] && state.graphicsQuality === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["e" /* GRAPHICS_QUALITY */].LOW) {
                return false;
            }
            return obj.isVisible || obj.type === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["G" /* DOOR_TYPE */] || obj.type === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["E" /* BOX_TYPE */];
        }),
        doorsState: state.doorsState,
        graphicsQuality: state.settings.graphicsQuality
    };
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Scene);

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_css__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__settings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(6);









class Settings extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new __WEBPACK_IMPORTED_MODULE_5__lib_loop__["a" /* default */](this.loopCallback.bind(this));

        this.onVolumeChange = this.onVolumeChange.bind(this);
        this.onGraphicsQualityChange = this.onGraphicsQualityChange.bind(this);
        this.onMouseSensChange = this.onMouseSensChange.bind(this);
        this.onStickSensChange = this.onStickSensChange.bind(this);

        this.state = {
            itemActive: 0
        };
        this.items = [{
            id: 'soundVolume',
            label: 'Sound volume',
            min: 0,
            max: 1,
            step: 0.2,
            onChange: this.onVolumeChange,
            action: this.props.setVolume
        }, {
            id: 'graphicsQuality',
            label: 'Graphics quality',
            min: 0,
            max: 2,
            step: 1,
            onChange: this.onGraphicsQualityChange,
            action: this.props.setGraphicsQuality
        }, {
            id: 'mouseSensitivity',
            label: 'Mouse sensitivity',
            min: 0,
            max: 2,
            step: 0.5,
            onChange: this.onMouseSensChange,
            action: this.props.setMouseSensitivity
        }, {
            id: 'stickSensitivity',
            disabled: this.props.gamepadState === -1,
            label: 'Stick sensitivity',
            min: 0,
            max: 4,
            step: 0.5,
            onChange: this.onStickSensChange,
            action: this.props.setStickSensitivity
        }];
    }

    componentWillUpdate(nextProps) {
        if (nextProps.gamepadState !== undefined) {
            this.items[3].disabled = nextProps.gamepadState === -1;
        }
    }

    componentDidMount() {
        this.loop.start();
    }

    componentWillUnmount() {
        this.loop.stop();
    }

    render() {
        const { itemActive } = this.state;
        const { settings } = this.props;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.root },
            this.items.map((item, index) => {
                let value = settings[item.id];
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        key: item.id,
                        className: __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.item + (itemActive === index ? ' ' + __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.itemActive : '') + (item.disabled ? ' ' + __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.itemDisabled : '')
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { className: __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.label, htmlFor: item.id },
                        item.label
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.inputContainer },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                            className: [__WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.range, __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.input].join(' '),
                            type: 'range',
                            min: item.min,
                            max: item.max,
                            step: item.step,
                            id: item.id,
                            value: value,
                            disabled: Boolean(item.disabled),
                            onChange: item.onChange,
                            onFocus: this.setActiveItem.bind(this, index)
                        }),
                        item.id === 'graphicsQuality' && value === __WEBPACK_IMPORTED_MODULE_6__constants_constants__["e" /* GRAPHICS_QUALITY */].ULTRA ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.warning },
                            'may cause low fps'
                        ) : null
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'output',
                        { className: __WEBPACK_IMPORTED_MODULE_0__settings_css___default.a.output },
                        value
                    )
                );
            })
        );
    }

    loopCallback() {
        // gamepad
        const gamepadStickLeftMoved = this.getGamepadLeftStickMove();
        const gamepadStickRightMoved = this.getGamepadRightStickMove();
        if (gamepadStickLeftMoved === -1) {
            this.setState({ itemActive: Math.max(0, this.state.itemActive - 1) });
        } else if (gamepadStickLeftMoved === 1) {
            this.setState({ itemActive: Math.min(this.items.length - 1, this.state.itemActive + 1) });
        }
        const curItem = this.items[this.state.itemActive];
        if (gamepadStickRightMoved === 1) {
            curItem.action(Settings.round(Math.min(curItem.max, Math.max(curItem.min, this.props.settings[curItem.id] + curItem.step))));
        }
        if (gamepadStickRightMoved === -1) {
            curItem.action(Settings.round(Math.min(curItem.max, Math.max(curItem.min, this.props.settings[curItem.id] - curItem.step))));
        }
    }

    onVolumeChange(event) {
        this.props.setVolume(Number(event.target.value));
    }

    onGraphicsQualityChange(event) {
        this.props.setGraphicsQuality(Number(event.target.value));
    }

    onMouseSensChange(event) {
        this.props.setMouseSensitivity(Number(event.target.value));
    }

    onStickSensChange(event) {
        this.props.setStickSensitivity(Number(event.target.value));
    }

    setActiveItem(id) {
        this.setState({ itemActive: id });
    }

    getGamepadLeftStickMove() {
        if (this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["f" /* XBOX_STICK_LEFT_AXIS_Y */]][0] === 1) {
            return this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["f" /* XBOX_STICK_LEFT_AXIS_Y */]][2];
        }
        return 0;
    }

    getGamepadRightStickMove() {
        if (this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["g" /* XBOX_STICK_RIGHT_AXIS_X */]][0] === 1) {
            return this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["g" /* XBOX_STICK_RIGHT_AXIS_X */]][2];
        }
        return 0;
    }

    static round(value) {
        return Math.round(value * 10) / 10;
    }
}

Settings.propTypes = {
    settings: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    gamepadState: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired,
    setVolume: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    setMouseSensitivity: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    setStickSensitivity: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired
};
Settings.contextTypes = {
    controls: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
function mapStateToProps(state) {
    return {
        settings: state.settings,
        gamepadState: state.gamepad.state
    };
}

function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({
        setVolume: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* settings */].setVolume,
        setGraphicsQuality: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* settings */].setGraphicsQuality,
        setMouseSensitivity: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* settings */].setMouseSensitivity,
        setStickSensitivity: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* settings */].setStickSensitivity
    }, dispatch);
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Settings);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__viewport_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(35);







class Viewport extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.viewportNode = null;
        this.pointerLocked = false;

        this.onMouseMove = this.onMouseMove.bind(this);
        this.requestPointerLock = this.requestPointerLock.bind(this);
        this.onPointerLockChange = this.onPointerLockChange.bind(this);
    }

    componentDidMount() {
        this.viewportNode.requestPointerLock();
        document.addEventListener('pointerlockchange', this.onPointerLockChange);
    }

    componentWillUnmount() {
        document.removeEventListener('pointerlockchange', this.onPointerLockChange);
        document.exitPointerLock();
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
    updatePointerDelta: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired
};
function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({
        updatePointerDelta: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["b" /* game */].updatePointerDelta
    }, dispatch);
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, mapDispatchToProps)(Viewport);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
/* harmony export (immutable) */ exports["a"] = DelayedActions;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = doorsState;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function getInitialState() {
    return JSON.parse(__WEBPACK_IMPORTED_MODULE_0__level__["a" /* default */].objects).filter(obj => obj.type === __WEBPACK_IMPORTED_MODULE_1__constants_constants__["G" /* DOOR_TYPE */]).reduce((result, obj) => {
        result[obj.props.id] = obj.props.state;
        return result;
    }, {});
}

function doorsState(state = {}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["n" /* DOOR_SET_CLOSING */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["x" /* DOOR_CLOSING */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["o" /* DOOR_SET_OPENING */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["v" /* DOOR_OPENING */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["p" /* DOOR_SET_CLOSE */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["w" /* DOOR_CLOSE */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["q" /* DOOR_SET_OPEN */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["u" /* DOOR_OPEN */]
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level__ = __webpack_require__(23);
/* harmony export (immutable) */ exports["a"] = enemy;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function getInitialState() {
    return _extends({}, __WEBPACK_IMPORTED_MODULE_2__level__["a" /* default */].enemy, {
        position: [...__WEBPACK_IMPORTED_MODULE_2__level__["a" /* default */].enemy.position],
        target: [...__WEBPACK_IMPORTED_MODULE_2__level__["a" /* default */].enemy.target]
    });
}

function enemy(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["A" /* SET_ENEMY_STATE */]:
            return _extends({}, state, {
                state: action.state
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["y" /* SET_ENEMY_POSITION */]:
            return _extends({}, state, {
                position: action.position
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["B" /* SET_ENEMY_DIRECTION */]:
            return _extends({}, state, {
                direction: action.direction
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["z" /* SET_ENEMY_TARGET */]:
            return _extends({}, state, {
                target: action.target
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["C" /* SET_ENEMY_VISIBILITY */]:
            return _extends({}, state, {
                isVisible: action.isVisible
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["q" /* DOOR_SET_OPEN */]:
            if (state.state === __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* ENEMY_STATE */].LIMBO && state.props.triggerDoorId === action.id) {
                return _extends({}, state, {
                    state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* ENEMY_STATE */].WANDER
                });
            }
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* SET_GAME_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ exports["a"] = gameState;



function gameState(state = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["_6" /* LOADING */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* SET_GAME_START */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["a" /* START */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["b" /* SET_GAME_PLAY */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["b" /* PLAY */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["c" /* SET_GAME_WIN */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["c" /* WIN */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["d" /* SET_GAME_LOOSE */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["d" /* LOOSE */];
        default:
            return state;
    }
}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);



function gamepadState(state = -1, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["t" /* SET_GAMEPAD_STATE */]:
            return action.index;
        default:
            return state;
    }
}

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    state: gamepadState
});

/***/ },
/* 146 */
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level__ = __webpack_require__(23);
/* harmony export (immutable) */ exports["a"] = objects;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function getInitialState() {
    return JSON.parse(__WEBPACK_IMPORTED_MODULE_2__level__["a" /* default */].objects);
}

function setDoorCollidable({ state, id, on }) {
    const objects = new Array(state.length);
    for (let i = 0; i < state.length; i++) {
        let object = state[i];
        if (object.type === __WEBPACK_IMPORTED_MODULE_0__constants_constants__["G" /* DOOR_TYPE */] && object.props.id === id) {
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
                const newState = setDoorCollidable({ state, id: action.id, on: false });
                const objects = new Array(newState.length);
                for (let i = 0; i < newState.length; i++) {
                    let object = newState[i];
                    if (object.type === __WEBPACK_IMPORTED_MODULE_0__constants_constants__["E" /* BOX_TYPE */] && object.props.triggerDoorId === action.id) {
                        object.collides = false;
                        object.isBroken = true;
                    }
                    objects[i] = object;
                }
                return objects;
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level__ = __webpack_require__(23);
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(8);
/* harmony export (immutable) */ exports["a"] = playerState;



function playerState(state = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["_7" /* PLAYER_STOP */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["k" /* PLAYER_STATE_STOP */]:
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* SET_GAME_START */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["_7" /* PLAYER_STOP */];
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["j" /* PLAYER_STATE_WALK */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["r" /* PLAYER_WALK */];
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["i" /* PLAYER_STATE_RUN */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["s" /* PLAYER_RUN */];
        default:
            return state;
    }
}

/***/ },
/* 150 */
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ exports["a"] = settings;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function settings(state = {
    soundVolume: 1,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["e" /* GRAPHICS_QUALITY */].NORMAL,
    mouseSensitivity: 0.5,
    stickSensitivity: 2
}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["u" /* SET_SETTINGS_VOLUME */]:
            return _extends({}, state, {
                soundVolume: action.value
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["v" /* SET_SETTINGS_GRAPHICS_QUALITY */]:
            return _extends({}, state, {
                graphicsQuality: action.value
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["w" /* SET_SETTINGS_MOUSE_SENSITIVITY */]:
            return _extends({}, state, {
                mouseSensitivity: action.value
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["x" /* SET_SETTINGS_STICK_SENSITIVITY */]:
            return _extends({}, state, {
                stickSensitivity: action.value
            });
        default:
            return state;
    }
}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level__ = __webpack_require__(23);
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
/* 153 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"box-quality-0-3Z4s3","mode-1":"box-mode-1-2_ljJ","mode-2":"box-mode-2-3XTO6","mode-3":"box-mode-3-ZvQ5H","quality-1":"box-quality-1-3NYWd","broken":"box-broken-1514h","bottom":"box-bottom-Ws9np"};

/***/ },
/* 154 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ceiling-root-oxGSS"};

/***/ },
/* 155 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"door-root-eMRzu","bar":"door-bar-eZp6B","quality-0":"door-quality-0-dsESl"};

/***/ },
/* 156 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"direction":"enemy-direction-1I8dN","animationWalkingY":"enemy-animationWalkingY-3zjx6","animationWalkingX":"enemy-animationWalkingX-2RaGh","noise":"enemy-noise-13-ze","white-noise":"enemy-white-noise-3-kZ8","eyes":"enemy-eyes-FCLJ1","eye":"enemy-eye-3_1bw","state-attack":"enemy-state-attack-2rWST","quality-0":"enemy-quality-0-3fbYD"};

/***/ },
/* 157 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"floor-quality-0-tETbt","quality-1":"floor-quality-1-2aZvZ"};

/***/ },
/* 158 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"hints-root-3NehV","hint":"hints-hint-2sBxI"};

/***/ },
/* 159 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"logo-root-4wLX_"};

/***/ },
/* 160 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"painting-root-1Y3pc","give-up":"painting-give-up-ypyAl","forever":"painting-forever-3qg45","easter":"painting-easter-A9-Ij","red-wall":"painting-red-wall-2hKAI","game":"painting-game-myk2f","escape":"painting-escape-32YAa"};

/***/ },
/* 161 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"patterns-root-1dTS5"};

/***/ },
/* 162 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"diffuse":"plain-diffuse-3riZM"};

/***/ },
/* 163 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"endScreen-root-HnQnd","state-win":"endScreen-state-win-1uVtt","win":"endScreen-win-1YKcl","state-loose":"endScreen-state-loose-MsRk7","loose":"endScreen-loose-u4Qtu","message":"endScreen-message-2QthM","key":"endScreen-key-3en1k"};

/***/ },
/* 164 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"loadingScreen-root-3w6aQ"};

/***/ },
/* 165 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"creditsList":"credits-creditsList-3MIgP","creditsDescription":"credits-creditsDescription-MWNxQ"};

/***/ },
/* 166 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"externalLink-root-1gOTc"};

/***/ },
/* 167 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"startScreen-root-2jYZG","menu":"startScreen-menu-wltxb","menuButton":"startScreen-menuButton-34XIz","menuButtonActive":"startScreen-menuButtonActive-2nMKx","version":"startScreen-version-1Ykby","title":"startScreen-title-12rPm","backButton":"startScreen-backButton-2uMuT"};

/***/ },
/* 168 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"switcher-quality-0-2BcaU","quality-1":"switcher-quality-1-3Cf5G","quality-2":"switcher-quality-2-1JM6X","handle":"switcher-handle-3j71N","off":"switcher-off-yQoql","on":"switcher-on-H20ki","reachable":"switcher-reachable-24rEd"};

/***/ },
/* 169 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"wall-quality-0-VPxJO","mode-1":"wall-mode-1-2Yh66","mode-2":"wall-mode-2-16wZg","mode-3":"wall-mode-3-3LM2a","quality-1":"wall-quality-1-29Z2_"};

/***/ },
/* 170 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"camera-root-3QZty"};

/***/ },
/* 171 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"playerAnimationWalking":"player-playerAnimationWalking-v-Wqe","playerAnimationRunning":"player-playerAnimationRunning-2Ehsc","playerAnimationWalkingY":"player-playerAnimationWalkingY-XdwCr","playerAnimationWalkingX":"player-playerAnimationWalkingX-rfzrE"};

/***/ },
/* 172 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"settings-root-1ReEm","item":"settings-item-2kxyx","label":"settings-label-2Xc-m","input":"settings-input-1wTW_","itemActive":"settings-itemActive-1t9I3","itemDisabled":"settings-itemDisabled-kjBA9","inputContainer":"settings-inputContainer-PK0l2","range":"settings-range-309Ga","warning":"settings-warning-a7ZHY","output":"settings-output-4rxkN"};

/***/ },
/* 173 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"viewport-root-goyag"};

/***/ },
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
/* 260 */,
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
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
});


/***/ },
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_game__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers__ = __webpack_require__(105);












const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__["enableBatching"])(__WEBPACK_IMPORTED_MODULE_7__reducers__["a" /* default */]));

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_game__["a" /* default */], null)
), document.getElementById('app'));

/***/ }
],[301]);