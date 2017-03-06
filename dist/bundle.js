webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GAME_SET_STATE_START = 'gameSetStateStart';
/* harmony export (immutable) */ __webpack_exports__["z"] = GAME_SET_STATE_START;

const GAME_SET_STATE_PLAY = 'gameSetStatePlay';
/* harmony export (immutable) */ __webpack_exports__["A"] = GAME_SET_STATE_PLAY;

const GAME_SET_STATE_WIN = 'gameSetStateWin';
/* harmony export (immutable) */ __webpack_exports__["B"] = GAME_SET_STATE_WIN;

const GAME_SET_STATE_LOOSE = 'gameSetStateLoose';
/* harmony export (immutable) */ __webpack_exports__["C"] = GAME_SET_STATE_LOOSE;


const GAME_UPDATE_POINTER_DELTA = 'gameUpdatePointerDelta';
/* harmony export (immutable) */ __webpack_exports__["D"] = GAME_UPDATE_POINTER_DELTA;

const GAME_RESET_POINTER_DELTA = 'gameResetPointerDelta';
/* harmony export (immutable) */ __webpack_exports__["E"] = GAME_RESET_POINTER_DELTA;


const PLAYER_UPDATE_VIEW_ANGLE = 'playerUpdateViewAngle';
/* harmony export (immutable) */ __webpack_exports__["t"] = PLAYER_UPDATE_VIEW_ANGLE;

const PLAYER_UPDATE_POSITION = 'playerUpdatePosition';
/* harmony export (immutable) */ __webpack_exports__["u"] = PLAYER_UPDATE_POSITION;

const PLAYER_SET_STATE_RUN = 'playerSetStateRun';
/* harmony export (immutable) */ __webpack_exports__["w"] = PLAYER_SET_STATE_RUN;

const PLAYER_SET_STATE_WALK = 'playerSetStateWalk';
/* harmony export (immutable) */ __webpack_exports__["x"] = PLAYER_SET_STATE_WALK;

const PLAYER_SET_STATE_STOP = 'playerSetStateStop';
/* harmony export (immutable) */ __webpack_exports__["y"] = PLAYER_SET_STATE_STOP;

const PLAYER_REDUCE_HEALTH = 'playerReduceHealth';
/* harmony export (immutable) */ __webpack_exports__["v"] = PLAYER_REDUCE_HEALTH;


const OBJECTS_SET_VISIBLE = 'objectsSetVisible';
/* harmony export (immutable) */ __webpack_exports__["r"] = OBJECTS_SET_VISIBLE;

const OBJECTS_SET_REACHABLE = 'objectsSetReachable';
/* harmony export (immutable) */ __webpack_exports__["s"] = OBJECTS_SET_REACHABLE;


const DOOR_SET_CLOSING = 'doorSetClosing';
/* harmony export (immutable) */ __webpack_exports__["n"] = DOOR_SET_CLOSING;

const DOOR_SET_CLOSE = 'doorSetClose';
/* harmony export (immutable) */ __webpack_exports__["p"] = DOOR_SET_CLOSE;

const DOOR_SET_OPENING = 'doorSetOpening';
/* harmony export (immutable) */ __webpack_exports__["o"] = DOOR_SET_OPENING;

const DOOR_SET_OPEN = 'doorSetOpen';
/* harmony export (immutable) */ __webpack_exports__["q"] = DOOR_SET_OPEN;


const HINTS_ADD = 'hintsAdd';
/* harmony export (immutable) */ __webpack_exports__["l"] = HINTS_ADD;

const HINTS_REMOVE = 'hintsRemove';
/* harmony export (immutable) */ __webpack_exports__["m"] = HINTS_REMOVE;


const GAMEPAD_SET_STATE = 'gamepadSetState';
/* harmony export (immutable) */ __webpack_exports__["k"] = GAMEPAD_SET_STATE;


const SETTINGS_SET_VOLUME = 'settingsSetVolume';
/* harmony export (immutable) */ __webpack_exports__["g"] = SETTINGS_SET_VOLUME;

const SETTINGS_SET_GRAPHICS_QUALITY = 'settingsSetGraphicsQuality';
/* harmony export (immutable) */ __webpack_exports__["h"] = SETTINGS_SET_GRAPHICS_QUALITY;

const SETTINGS_SET_MOUSE_SENSITIVITY = 'settingsSetMouseSensitivity';
/* harmony export (immutable) */ __webpack_exports__["i"] = SETTINGS_SET_MOUSE_SENSITIVITY;

const SETTINGS_SET_STICK_SENSITIVITY = 'settingsSetStickSensitivity';
/* harmony export (immutable) */ __webpack_exports__["j"] = SETTINGS_SET_STICK_SENSITIVITY;


const ENEMY_SET_STATE = 'enemySetState';
/* harmony export (immutable) */ __webpack_exports__["d"] = ENEMY_SET_STATE;

const ENEMY_SET_POSITION = 'enemySetPosition';
/* harmony export (immutable) */ __webpack_exports__["b"] = ENEMY_SET_POSITION;

const ENEMY_SET_DIRECTION = 'enemySetDirection';
/* harmony export (immutable) */ __webpack_exports__["e"] = ENEMY_SET_DIRECTION;

const ENEMY_SET_TARGET = 'enemySetTarget';
/* harmony export (immutable) */ __webpack_exports__["c"] = ENEMY_SET_TARGET;

const ENEMY_SET_VISIBILITY = 'enemySetVisibility';
/* harmony export (immutable) */ __webpack_exports__["f"] = ENEMY_SET_VISIBILITY;


const LEVEL_SET = 'levelSet';
/* harmony export (immutable) */ __webpack_exports__["a"] = LEVEL_SET;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GAME_VERSION = '1.6.0';
/* harmony export (immutable) */ __webpack_exports__["_10"] = GAME_VERSION;


const FPS = 60;
/* harmony export (immutable) */ __webpack_exports__["T"] = FPS;

const BROAD_CELL_SIZE = 250;
/* harmony export (immutable) */ __webpack_exports__["J"] = BROAD_CELL_SIZE;

const SPOTLIGHT_RADIUS = 1.5 * BROAD_CELL_SIZE;
/* harmony export (immutable) */ __webpack_exports__["Q"] = SPOTLIGHT_RADIUS;


const KEY_FORWARD = 'KeyW';
/* harmony export (immutable) */ __webpack_exports__["j"] = KEY_FORWARD;

const KEY_BACKWARD = 'KeyS';
/* harmony export (immutable) */ __webpack_exports__["k"] = KEY_BACKWARD;

const KEY_LEFT = 'KeyA';
/* harmony export (immutable) */ __webpack_exports__["l"] = KEY_LEFT;

const KEY_RIGHT = 'KeyD';
/* harmony export (immutable) */ __webpack_exports__["m"] = KEY_RIGHT;

const KEY_INTERACT = 'KeyE';
/* harmony export (immutable) */ __webpack_exports__["n"] = KEY_INTERACT;

const KEY_QUIT_GAME = 'KeyQ';
/* harmony export (immutable) */ __webpack_exports__["o"] = KEY_QUIT_GAME;

const KEY_RUN = 'ShiftLeft';
/* harmony export (immutable) */ __webpack_exports__["p"] = KEY_RUN;

const KEY_BACK = 'Escape';
/* harmony export (immutable) */ __webpack_exports__["r"] = KEY_BACK;

const KEY_ENTER = 'Enter';
/* harmony export (immutable) */ __webpack_exports__["q"] = KEY_ENTER;


const XBOX_BUTTON_A = 0;
/* harmony export (immutable) */ __webpack_exports__["a"] = XBOX_BUTTON_A;

const XBOX_BUTTON_X = 2;
/* harmony export (immutable) */ __webpack_exports__["d"] = XBOX_BUTTON_X;

const XBOX_BUTTON_B = 1;
/* harmony export (immutable) */ __webpack_exports__["c"] = XBOX_BUTTON_B;

const XBOX_BUTTON_CROSS_UP = 11;
/* harmony export (immutable) */ __webpack_exports__["f"] = XBOX_BUTTON_CROSS_UP;

const XBOX_BUTTON_CROSS_DOWN = 12;
/* harmony export (immutable) */ __webpack_exports__["g"] = XBOX_BUTTON_CROSS_DOWN;

const XBOX_BUTTON_BACK = 9;
/* harmony export (immutable) */ __webpack_exports__["e"] = XBOX_BUTTON_BACK;

const XBOX_STICK_LEFT_AXIS_X = 0;
/* harmony export (immutable) */ __webpack_exports__["W"] = XBOX_STICK_LEFT_AXIS_X;

const XBOX_STICK_LEFT_AXIS_Y = 1;
/* harmony export (immutable) */ __webpack_exports__["h"] = XBOX_STICK_LEFT_AXIS_Y;

const XBOX_STICK_RIGHT_AXIS_X = 3;
/* harmony export (immutable) */ __webpack_exports__["i"] = XBOX_STICK_RIGHT_AXIS_X;

const XBOX_STICK_RIGHT_AXIS_Y = 4;
/* harmony export (immutable) */ __webpack_exports__["V"] = XBOX_STICK_RIGHT_AXIS_Y;

const XBOX_TRIGGER_RIGHT_AXIS = 5;
/* harmony export (immutable) */ __webpack_exports__["X"] = XBOX_TRIGGER_RIGHT_AXIS;


const CONTROL_STATE = {
    UNUSED: 0,
    FIRST_TIME_DOWN: 1,
    DOWN: 2
};
/* harmony export (immutable) */ __webpack_exports__["b"] = CONTROL_STATE;


const PLAYER_SIZE = {
    WIDTH: 50,
    HEIGHT: 150,
    DEPTH: 50
};
/* harmony export (immutable) */ __webpack_exports__["x"] = PLAYER_SIZE;

const PLAYER_SPEED = 4;
/* harmony export (immutable) */ __webpack_exports__["_0"] = PLAYER_SPEED;

const PLAYER_RUNNING_COEFF = 1.5;
/* harmony export (immutable) */ __webpack_exports__["Z"] = PLAYER_RUNNING_COEFF;

const PLAYER_HAND_LENGTH = 150;
/* harmony export (immutable) */ __webpack_exports__["K"] = PLAYER_HAND_LENGTH;

const PLAYER_STATE_RUN = 'run';
/* harmony export (immutable) */ __webpack_exports__["S"] = PLAYER_STATE_RUN;

const PLAYER_STATE_WALK = 'walk';
/* harmony export (immutable) */ __webpack_exports__["R"] = PLAYER_STATE_WALK;

const PLAYER_STATE_STOP = 'stop';
/* harmony export (immutable) */ __webpack_exports__["_11"] = PLAYER_STATE_STOP;

const PLAYER_HEALTH_LOW = 50;
/* harmony export (immutable) */ __webpack_exports__["Y"] = PLAYER_HEALTH_LOW;


const HINT_SHOW_TIME = 5000;
/* harmony export (immutable) */ __webpack_exports__["U"] = HINT_SHOW_TIME;

const DOOR_OPEN_TIME = 3000;
/* harmony export (immutable) */ __webpack_exports__["P"] = DOOR_OPEN_TIME;


const ENEMY_STATE = {
    LIMBO: 'limbo',
    WANDER: 'wander',
    STOP: 'stop',
    ATTACK: 'attack',
    REST: 'rest'
};
/* harmony export (immutable) */ __webpack_exports__["A"] = ENEMY_STATE;

const ENEMY_SPEED = 1.5;
/* harmony export (immutable) */ __webpack_exports__["_6"] = ENEMY_SPEED;

const ENEMY_SPEED_RUNNING = 6;
/* harmony export (immutable) */ __webpack_exports__["_9"] = ENEMY_SPEED_RUNNING;

const ENEMY_ATTACK_DISTANCE = 200;
/* harmony export (immutable) */ __webpack_exports__["_1"] = ENEMY_ATTACK_DISTANCE;

// export const ENEMY_ATTACK_DISTANCE = -1;
const ENEMY_ATTACK_DISTANCE_VISIBLE = 400;
/* harmony export (immutable) */ __webpack_exports__["_2"] = ENEMY_ATTACK_DISTANCE_VISIBLE;

// export const ENEMY_ATTACK_DISTANCE_VISIBLE = -1;
const ENEMY_DAMAGE_DISTANCE = 50;
/* harmony export (immutable) */ __webpack_exports__["_7"] = ENEMY_DAMAGE_DISTANCE;

const ENEMY_DAMAGE = 80;
/* harmony export (immutable) */ __webpack_exports__["_8"] = ENEMY_DAMAGE;

const ENEMY_VIEW_ANGLE_DEG = 90;
/* unused harmony export ENEMY_VIEW_ANGLE_DEG */

const ENEMY_VIEW_ANGLE_RAD = ENEMY_VIEW_ANGLE_DEG / 180 * Math.PI;
/* harmony export (immutable) */ __webpack_exports__["_3"] = ENEMY_VIEW_ANGLE_RAD;

const ENEMY_TARGET_REACH_THRESHOLD = 50;
/* harmony export (immutable) */ __webpack_exports__["_4"] = ENEMY_TARGET_REACH_THRESHOLD;

const ENEMY_CHANGE_TARGET_TIME = 1000;
/* harmony export (immutable) */ __webpack_exports__["_5"] = ENEMY_CHANGE_TARGET_TIME;

const ENEMY_TRIGGER_DOOR_ID = 3;
/* harmony export (immutable) */ __webpack_exports__["B"] = ENEMY_TRIGGER_DOOR_ID;


const PAINTING_TYPE = 'painting';
/* harmony export (immutable) */ __webpack_exports__["z"] = PAINTING_TYPE;

const FLOOR_TYPE = 'floor';
/* harmony export (immutable) */ __webpack_exports__["C"] = FLOOR_TYPE;

const CEILING_TYPE = 'ceiling';
/* harmony export (immutable) */ __webpack_exports__["D"] = CEILING_TYPE;

const WALL_TYPE = 'wall';
/* harmony export (immutable) */ __webpack_exports__["E"] = WALL_TYPE;

const BOX_TYPE = 'box';
/* harmony export (immutable) */ __webpack_exports__["F"] = BOX_TYPE;

const SWITCHER_TYPE = 'switcher';
/* harmony export (immutable) */ __webpack_exports__["I"] = SWITCHER_TYPE;

const DOOR_TYPE = 'door';
/* harmony export (immutable) */ __webpack_exports__["G"] = DOOR_TYPE;


const PAINTINGS = {
    ESCAPE: {
        alias: 'escape',
        size: [187, 103, 0]
    },
    GIVE_UP: {
        alias: 'give-up',
        size: [205, 68, 0]
    },
    FOREVER: {
        alias: 'forever',
        size: [314, 193, 0]
    },
    EASTER: {
        alias: 'easter',
        size: [139, 150, 0]
    },
    RED_WALL: {
        alias: 'red-wall',
        size: [200, 114, 0]
    },
    GAME: {
        alias: 'game',
        size: [243, 51, 0]
    }
};
/* harmony export (immutable) */ __webpack_exports__["y"] = PAINTINGS;


const DOOR_STATE_OPEN = 'open';
/* harmony export (immutable) */ __webpack_exports__["L"] = DOOR_STATE_OPEN;

const DOOR_STATE_OPENING = 'opening';
/* harmony export (immutable) */ __webpack_exports__["M"] = DOOR_STATE_OPENING;

const DOOR_STATE_CLOSE = 'close';
/* harmony export (immutable) */ __webpack_exports__["H"] = DOOR_STATE_CLOSE;

const DOOR_STATE_CLOSING = 'closing';
/* harmony export (immutable) */ __webpack_exports__["O"] = DOOR_STATE_CLOSING;


const GAME_STATE_LOADING = 'loading';
/* harmony export (immutable) */ __webpack_exports__["v"] = GAME_STATE_LOADING;

const GAME_STATE_START = 'start';
/* harmony export (immutable) */ __webpack_exports__["s"] = GAME_STATE_START;

const GAME_STATE_PLAY = 'play';
/* harmony export (immutable) */ __webpack_exports__["w"] = GAME_STATE_PLAY;

const GAME_STATE_WIN = 'win';
/* harmony export (immutable) */ __webpack_exports__["t"] = GAME_STATE_WIN;

const GAME_STATE_LOOSE = 'loose';
/* harmony export (immutable) */ __webpack_exports__["u"] = GAME_STATE_LOOSE;


const GRAPHICS_QUALITY = {
    LOW: 0,
    NORMAL: 1,
    ULTRA: 2
};
/* harmony export (immutable) */ __webpack_exports__["N"] = GRAPHICS_QUALITY;


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["d"] = getTransformRule;
/* harmony export (immutable) */ __webpack_exports__["h"] = getVisibleObjects;
/* harmony export (immutable) */ __webpack_exports__["a"] = getPlayerCell;
/* harmony export (immutable) */ __webpack_exports__["b"] = isObjectVisible;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPointPosition;
/* harmony export (immutable) */ __webpack_exports__["f"] = vectorsAdd3D;
/* harmony export (immutable) */ __webpack_exports__["g"] = convertDegreeToRad;
/* harmony export (immutable) */ __webpack_exports__["e"] = convertRadToDegree;

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

/**
 * Returns indexes for the cell where the player is located
 * @param {number[]} playerPos
 * @returns {number[]}
 */
function getPlayerCell(playerPos) {
    return [Math.floor(playerPos[0] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["J" /* BROAD_CELL_SIZE */]), Math.floor(playerPos[2] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["J" /* BROAD_CELL_SIZE */])];
}

/**
 * Returns true if the <object> is located close enough to the player
 * (which is on the same or the neighbour cell)
 * @param {number[]} playerCell
 * @param {Object} object
 * @returns {boolean}
 */
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
 * Returns 3d vector sum
 * @param {number[]} v1
 * @param {number[]} v2
 * @returns {number[]}
 */
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

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A bunch of helper methods for web audio nodes
 */
class Audio {
    /**
     * Returns audio panner node with set position
     * @param {Object} audioCtx
     * @param {string} panningModel
     * @param {string} distanceModel
     * @param {number} refDistance
     * @param {number} rolloffFactor
     * @param {number} maxDistance
     * @param {number} coneInnerAngle
     * @param {number} coneOuterAngle
     * @param {number} coneOuterGain
     * @param {number[]} pos
     * @returns {PannerNode}
     */
    static createPanner({
        audioCtx,
        panningModel = 'HRTF',
        distanceModel = 'inverse',
        refDistance = 20,
        rolloffFactor = 0.1,
        maxDistance,
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
        } else {
            panner.rolloffFactor = rolloffFactor;
        }
        panner.coneInnerAngle = coneInnerAngle;
        panner.coneOuterAngle = coneOuterAngle;
        panner.coneOuterGain = coneOuterGain;
        if (pos) {
            Audio.setPannerPosition(panner, pos);
        }
        return panner;
    }

    /**
     * Sets panner position (with `setPosition` fallback)
     * @param {PannerNode} panner
     * @param {number[]} pos
     */
    static setPannerPosition(panner, pos) {
        if (panner.positionX) {
            panner.positionX.value = pos[0];
            panner.positionY.value = pos[1];
            panner.positionZ.value = pos[2];
        } else {
            panner.setPosition(...pos);
        }
    }

    /**
     * Stops playing existing audio source,
     * starts playing given audio buffer
     * and returns new audio source instance
     * @param {Object} audioSource
     * @param {Object} audioCtx
     * @param {Object} buffer
     * @param {Object} destination
     * @param {boolean} loop
     * @returns {Object}
     */
    static soundStart({ audioSource, audioCtx, buffer, destination, loop = false }) {
        Audio.soundStop(audioSource);

        audioSource = audioCtx.createBufferSource();
        audioSource.connect(destination);
        audioSource.buffer = buffer;
        audioSource.loop = loop;
        audioSource.start(0);
        return audioSource;
    }

    /**
     * Stops playing given audio source
     * @param {Object} audioSource
     */
    static soundStop(audioSource) {
        if (audioSource) {
            audioSource.stop();
            audioSource.disconnect();
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = Audio;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plain_css__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plain_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plain_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_diffuse__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__light_simple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










class Plain extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props) {
        super(props);

        this.styleRules = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_utils__["d" /* getTransformRule */])({ pos: props.pos, angle: props.angle }), {
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
        return parent ? [current].concat(parent).reduce(__WEBPACK_IMPORTED_MODULE_5__lib_utils__["f" /* vectorsAdd3D */]) : current;
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
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_6__constants_constants__["N" /* GRAPHICS_QUALITY */].NORMAL
};
/* harmony default export */ __webpack_exports__["a"] = Plain;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates loop instance that launches given <fn> callback in a rAF cycle
 * with a frame rate coefficient that shows the relation between the real and the required FPS
 */
class Loop {
    /**
     * @constructor
     * @param {Function} fn
     * @param {number} fps
     * @param {boolean} startImmediately
     */
    constructor(fn = () => {}, fps = 60, startImmediately = false) {
        this.fn = fn;
        this.fps = fps;
        this.oldTimestamp = null;
        this.rafId = null;
        if (startImmediately) {
            this.start();
        }
    }

    /**
     * Starts the loop
     * @param {number} timestamp
     */
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

    /**
     * Stops the loop
     */
    stop() {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loop;


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(113);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__game__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(118);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__player__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects__ = __webpack_require__(117);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__objects__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doorsState__ = __webpack_require__(111);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__doorsState__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hints__ = __webpack_require__(115);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__hints__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gamepad__ = __webpack_require__(114);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__gamepad__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__(119);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__settings__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enemy__ = __webpack_require__(112);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__enemy__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__level__ = __webpack_require__(116);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__level__; });



















/***/ }),
/* 36 */,
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(6);




class SimpleLight extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    render() {
        const { relativePos, playerPos } = this.props;
        const opacity = SimpleLight.getOpacity(
        // vector length
        Math.hypot(playerPos[0] - relativePos[0], playerPos[1] + relativePos[1], playerPos[2] - relativePos[2]));
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_0__light_css___default.a.overlay,
            style: { opacity }
        });
    }

    static getOpacity(distance) {
        const ratio = Math.max(0, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["Q" /* SPOTLIGHT_RADIUS */] - distance) / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["Q" /* SPOTLIGHT_RADIUS */];
        return 1 - ratio;
    }
}

SimpleLight.propTypes = {
    relativePos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    playerPos: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = SimpleLight;

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

    /**
     * Returns random next free neighbour cell position of given size for given position
     * @param {number[]} pos
     * @param {number} direction
     * @param {Object[]} objects
     * @param {number} broadCellSize
     * @param {number[]} boundaries
     * @returns {number[]}
     */
    static getRandomFreeCell({ pos, direction, objects, broadCellSize, boundaries }) {
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
        const availableVariantsWeights = [];
        for (let i = 0; i < allVariants.length; i++) {
            if (allVariants[i][0] < 0 || allVariants[i][0] > boundaries[0] || allVariants[i][2] < 0 || allVariants[i][2] > boundaries[2] || Collision.getCollisionView([pos, [allVariants[i][0], pos[1], allVariants[i][2]]], objects, broadCellSize / 2)) {
                continue;
            }
            availableVariants.push(allVariants[i]);
            availableVariantsWeights.push(Math.abs(1 - Math.abs(direction - Collision.getDirection2d(pos, allVariants[i])) / 2 / Math.PI));
        }
        let variantIndex;
        // locked in a room
        if (availableVariants.length === 0) {
            return currentCellCenter;
        } else if (availableVariants.length === 1) {
            variantIndex = 0;
        } else {
            variantIndex = Collision.getRandomIndexWithWeights(availableVariantsWeights);
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
     * Returns direction in radians from p1 towards p2
     * @param {number[]} p1
     * @param {number[]} p2
     * @returns {number}
     */
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

    /**
     * Returns random index considering given weights
     * @param {number[]} weights
     * @returns {number}
     */
    static getRandomIndexWithWeights(weights) {
        const weightsSum = weights.reduce((prev, cur) => prev + cur);
        weights[0] /= weightsSum;
        for (let i = 1; i < weights.length; i++) {
            weights[i] = weights[i] / weightsSum + weights[i - 1];
        }
        const randomValue = Math.random();
        for (let i = 0; i < weights.length; i++) {
            if (randomValue < weights[i]) {
                return i;
            }
        }
        return weights.length - 1;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collision;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collision__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(6);




const BOUNDARIES = [2500, null, 2500];

const WALL_WIDTH = 500;
const WALL_HEIGHT = 250;
const WALL_DEPTH = 50;
const WALL_DIRECTIONS = {
    HORIZONTAL: 0,
    VERTICAL: 1
};

const DOOR_WIDTH = 500;
const DOOR_HEIGHT = 250;
const DOOR_DEPTH = 20;

const SWITCHER_WIDTH = 40;
const SWITCHER_HEIGHT = 60;
const SWITCHER_DEPTH = 100;

const CELLS = 5;
const CELL_STATES = {
    EMPTY: 0,
    INDETERMINATE: 1,
    ROOM: 2
};
const MAX_ROOMS = 5;
const MAX_BOXES = 5;

const MIN_BOX_SIZE = 120;
const MAX_BOX_SIZE = 180;

/**
 * Returns wall object
 */
class Wall {
    /**
     * @constructor
     * @param {number} direction
     * @param {Object[]} cells
     * @param {number} mode
     * @param {boolean} isBorder
     */
    constructor({ direction, cells, mode = 1, isBorder = false }) {
        this.direction = direction;
        this.cells = cells;
        this.size = this.direction === WALL_DIRECTIONS.HORIZONTAL ? [WALL_WIDTH - (isBorder ? 0 : WALL_DEPTH), WALL_HEIGHT, WALL_DEPTH] : [WALL_DEPTH, WALL_HEIGHT, WALL_WIDTH - (isBorder ? 0 : WALL_DEPTH)];
        const { row, column } = this.getCoords();
        this.row = row;
        this.column = column;
        this.position = this.getPosition();
        this.mode = mode;
        this.slots = {};
        this.isBorder = isBorder;
    }

    /**
     * Returns row and column for the wall by the given cells
     * @returns {{row: number, column: number}}
     */
    getCoords() {
        const anyCellPosition = Object.keys(this.cells).find(position => this.cells[position]);
        const anyCell = this.cells[anyCellPosition];
        switch (anyCellPosition) {
            case 'bottom':
            case 'right':
                return {
                    row: anyCell.row,
                    column: anyCell.column
                };
            case 'top':
                return {
                    row: anyCell.row + 1,
                    column: anyCell.column
                };
            case 'left':
                return {
                    row: anyCell.row,
                    column: anyCell.column + 1
                };
        }
    }

    /**
     * Returns wall coordinates
     * @returns {number[]}
     */
    getPosition() {
        const result = [];
        if (this.direction === WALL_DIRECTIONS.HORIZONTAL) {
            result[0] = (0.5 + this.column) * 500;
            if (this.row === 0) {
                result[2] = WALL_DEPTH / 2;
            } else if (this.row === CELLS) {
                result[2] = BOUNDARIES[2] - WALL_DEPTH / 2;
            } else {
                result[2] = this.row * 500;
            }
        } else {
            if (this.column === 0) {
                result[0] = WALL_DEPTH / 2;
            } else if (this.column === CELLS) {
                result[0] = BOUNDARIES[0] - WALL_DEPTH / 2;
            } else {
                result[0] = this.column * 500;
            }
            result[2] = (0.5 + this.row) * 500;
        }
        result[1] = WALL_HEIGHT / 2;
        return result;
    }

    /**
     * Adds extra space to the wall to eliminate gaps between adjacent walls
     * @param {number} x
     * @param {number} z
     */
    addGap([x, z]) {
        if (this.direction === WALL_DIRECTIONS.HORIZONTAL) {
            if (this.position[0] > x) {
                // shift left
                this.position[0] -= WALL_DEPTH / 2;
            } else {
                // shift right
                this.position[0] += WALL_DEPTH / 2;
            }
            this.size[0] += WALL_DEPTH;
        } else {
            if (this.position[2] > z) {
                // shift top
                this.position[2] -= WALL_DEPTH / 2;
            } else {
                // shift bottom
                this.position[2] += WALL_DEPTH / 2;
            }
            this.size[2] += WALL_DEPTH;
        }
    }
}

/**
 * Returns door object
 */
class Door extends Wall {
    /**
     * @constructor
     * @param {number} direction
     * @param {Object[]} cells
     * @param {number} index
     */
    constructor({ direction, cells, index }) {
        super({ direction, cells });
        this.index = index;
    }
}

/**
 * Returns map cell object
 */
class Cell {
    /**
     * @constructor
     * @param {number} row
     * @param {number} column
     * @param {number} index - useful for linking to siblings
     * @param {Cell[]} siblings
     */
    constructor({ row, column, index, siblings }) {
        this.row = row;
        this.column = column;
        this.index = index;
        this.state = CELL_STATES.EMPTY;
        this.walls = {
            top: null,
            right: null,
            bottom: null,
            left: null
        };
        this.siblings = siblings;
        this.wallsCount = 0;
        this.box = null;
    }

    /**
     * Adds a wall object to the sibling walls list
     * @param {string} position
     * @param {Wall} wall
     */
    addWall(position, wall) {
        this.walls[position] = wall;
        this.wallsCount++;
        if (this.wallsCount === 3) {
            this.state = CELL_STATES.ROOM;
        }
    }

    /**
     * Removes wall from list
     * @param {string} position
     */
    removeWall(position) {
        this.walls[position] = null;
        this.wallsCount--;
    }
}

/**
 * Returns level object
 */
class LevelGenerator {
    constructor() {
        this.player = {
            size: [__WEBPACK_IMPORTED_MODULE_2__constants_constants__["x" /* PLAYER_SIZE */].WIDTH, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["x" /* PLAYER_SIZE */].HEIGHT, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["x" /* PLAYER_SIZE */].DEPTH],
            health: 100
        };
        this.cells = [];
        this.walls = [];
        this.doors = [];
        this.switchers = [];
        this.boxes = [];
        this.floor = [];
        this.ceiling = [];
        this.roomsCount = 0;

        this.paintings = [__WEBPACK_IMPORTED_MODULE_2__constants_constants__["y" /* PAINTINGS */].ESCAPE, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["y" /* PAINTINGS */].GIVE_UP, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["y" /* PAINTINGS */].FOREVER, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["y" /* PAINTINGS */].RED_WALL, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["y" /* PAINTINGS */].GAME].map(painting => ({
            name: 'painting_' + painting.alias,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["z" /* PAINTING_TYPE */],
            size: painting.size,
            props: {
                alias: painting.alias
            },
            collides: false
        }));

        this.enemy = {
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["A" /* ENEMY_STATE */].LIMBO,
            isVisible: false,
            direction: 0,
            props: {
                triggerDoorId: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["B" /* ENEMY_TRIGGER_DOOR_ID */]
            }
        };

        for (let i = 0; i < CELLS; i++) {
            for (let j = 0; j < CELLS; j++) {
                const index = this.cells.length;
                const cell = new Cell({
                    row: i,
                    column: j,
                    index
                });
                this.cells.push(cell);
            }
        }
        this.cells.forEach(cell => {
            cell.siblings = {
                top: cell.row ? this.cells[cell.index - CELLS] : null,
                right: cell.column === CELLS - 1 ? null : this.cells[cell.index + 1],
                bottom: cell.row === CELLS - 1 ? null : this.cells[cell.index + CELLS],
                left: cell.column ? this.cells[cell.index - 1] : null
            };

            // add border walls
            if (cell.row === 0) {
                this.addWall({
                    cells: [[cell, 'top']]
                });
            } else if (cell.row === CELLS - 1) {
                this.addWall({
                    cells: [[cell, 'bottom']]
                });
            }
            if (cell.column === 0) {
                this.addWall({
                    cells: [[cell, 'left']]
                });
            } else if (cell.column === CELLS - 1) {
                this.addWall({
                    cells: [[cell, 'right']]
                });
            }
        });

        // first walk
        this.cells.forEach(cell => {
            if (cell.walls.right || cell.walls.bottom) {
                return;
            }
            switch (getRandomValue(4)) {
                case 0:
                    this.addWall({
                        cells: [[cell, 'right'], [cell.siblings.right, 'left']]
                    });
                    break;
                case 1:
                    this.addWall({
                        cells: [[cell.siblings.right, 'bottom'], [cell.siblings.right.siblings.bottom, 'top']]
                    });
                    break;
                case 2:
                    this.addWall({
                        cells: [[cell.siblings.bottom, 'right'], [cell.siblings.bottom.siblings.right, 'left']]
                    });
                    break;
                case 3:
                    this.addWall({
                        cells: [[cell, 'bottom'], [cell.siblings.bottom, 'top']]
                    });
                    break;
            }
        });

        this.addIndeterminateCells();

        // add more walls for rooms
        while (this.roomsCount < MAX_ROOMS) {
            const cellsWithTwoWalls = this.cells.filter(cell => cell.state === CELL_STATES.EMPTY && cell.wallsCount === 2);
            const cellIndex = getRandomValue(cellsWithTwoWalls.length);
            const wallIndex = getRandomValue(2);
            const cell = cellsWithTwoWalls[cellIndex];
            const emptyWalls = Object.keys(cell.walls).filter(wallPosition => !cell.walls[wallPosition]);
            const wallPosition = emptyWalls[wallIndex];
            this.addWall({
                cells: [[cell, wallPosition], [cell.siblings[wallPosition], getOppositePosition(wallPosition)]]
            });
            this.addIndeterminateCells();
        }

        // adjust walls sizes to reduce gaps
        for (let i = 1; i < CELLS; i++) {
            for (let j = 1; j < CELLS; j++) {
                this.walls.find(wall => {
                    if (wall.direction === WALL_DIRECTIONS.HORIZONTAL) {
                        return wall.row === i && (wall.column === j || wall.column === j - 1);
                    } else {
                        return wall.column === j && (wall.row === i || wall.row === i - 1);
                    }
                }).addGap([j * 500, i * 500]);
            }
        }
        this.cells.forEach(cell => {
            Object.keys(cell.walls).forEach((wallPosition, i, walls) => {
                const wall = walls[wallPosition];
                const adjacentPosition = getAdjacentPosition(wallPosition);
                const adjacentWall = walls[adjacentPosition];
                if (!adjacentWall || wall.isBorder || adjacentWall.isBorder) {
                    return;
                }
                if (adjacentWall.isBorder) {
                    wall.move(getOppositePosition(adjacentPosition));
                } else {
                    adjacentWall.move(getOppositePosition(wallPosition));
                }
            });
        });

        // set doors and switchers
        let exitCell;
        const roomsShuffle = shuffle(this.cells.filter(cell => cell.state === CELL_STATES.ROOM));
        roomsShuffle.forEach((roomCell, index) => {
            const switcherWallPosition = Object.keys(roomCell.walls).filter(wallPosition => roomCell.walls[wallPosition])[getRandomValue(3)];
            this.addSwitcher({
                index: index + 1,
                wall: roomCell.walls[switcherWallPosition],
                position: getOppositePosition(switcherWallPosition)
            });
            if (index === 0) {
                // paint first room walls
                for (let wallPosition in roomCell.walls) {
                    if (roomCell.walls.hasOwnProperty(wallPosition) && roomCell.walls[wallPosition]) {
                        roomCell.walls[wallPosition].mode = 2;
                    }
                }

                // add exit door
                const emptyBorderCells = this.cells.filter(cell => cell.state === CELL_STATES.EMPTY && (cell.column === 0 || cell.column === CELLS - 1 || cell.row === 0 || cell.row === CELLS - 1));
                exitCell = getRandomElement(emptyBorderCells);
                let cells;
                if (exitCell.column === 0) {
                    cells = [[exitCell, 'left']];
                    this.player.angle = [-90, 0, 0];
                } else if (exitCell.column === CELLS - 1) {
                    cells = [[exitCell, 'right']];
                    this.player.angle = [90, 0, 0];
                } else if (exitCell.row === 0) {
                    cells = [[exitCell, 'top']];
                    this.player.angle = [0, 0, 0];
                } else if (exitCell.row === CELLS - 1) {
                    cells = [[exitCell, 'bottom']];
                    this.player.angle = [180, 0, 0];
                }
                this.removeWall({ cells });
                this.addDoor({
                    index: this.roomsCount,
                    cells
                });
                // place player
                this.player.pos = [exitCell.column * 500 + 250, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["x" /* PLAYER_SIZE */].HEIGHT, exitCell.row * 500 + 250];

                // place writing
                const writingWallPosition = Object.keys(roomCell.walls).filter(wallPosition => roomCell.walls[wallPosition])[getRandomValue(3)];
                this.addPainting({
                    painting: this.paintings.find(painting => painting.props.alias === __WEBPACK_IMPORTED_MODULE_2__constants_constants__["y" /* PAINTINGS */].RED_WALL.alias),
                    wall: roomCell.walls[writingWallPosition]
                });
            } else {
                let roomAreaCell = roomCell;
                while (roomAreaCell) {
                    const nextRoomAreaCell = roomAreaCell.siblings[roomAreaCell.roomArea.to];
                    // paint last rooms walls
                    if (index > 3) {
                        for (let wallPosition in roomAreaCell.walls) {
                            if (roomAreaCell.walls.hasOwnProperty(wallPosition) && roomAreaCell.walls[wallPosition] && roomAreaCell.walls[wallPosition].mode === 1) {
                                roomAreaCell.walls[wallPosition].mode = 3;
                            }
                        }
                    }
                    if (nextRoomAreaCell.state !== CELL_STATES.INDETERMINATE || getRandomValue(2) === 1) {
                        this.addDoor({
                            index,
                            cells: [[roomAreaCell, roomAreaCell.roomArea.to], [nextRoomAreaCell, getOppositePosition(roomAreaCell.roomArea.to)]]
                        });
                        roomAreaCell = null;
                    } else {
                        roomAreaCell = nextRoomAreaCell;
                    }
                }
            }
        });

        // add writings
        const wallsForPaintings = shuffle(this.walls.filter(wall => wall.mode !== 3));
        this.paintings.forEach((painting, i) => {
            if (painting.pos) {
                return;
            }
            this.addPainting({ painting, wall: wallsForPaintings[i] });
        });

        // add boxes
        while (this.boxes.length < MAX_BOXES) {
            const boxCell = getRandomElement(this.cells);
            if (boxCell.box || boxCell === exitCell) {
                continue;
            }
            this.addBox(boxCell);
        }
        let maxDistance = 0;
        let enemyBox;
        const triggerSwitcher = this.switchers.find(({ index }) => index === __WEBPACK_IMPORTED_MODULE_2__constants_constants__["B" /* ENEMY_TRIGGER_DOOR_ID */]);
        this.boxes.forEach(box => {
            const distance = __WEBPACK_IMPORTED_MODULE_0__Collision__["a" /* default */].getSquareDistance(box.position, triggerSwitcher.position);
            if (distance > maxDistance) {
                maxDistance = distance;
                enemyBox = box;
            }
        });
        enemyBox.triggerDoorId = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["B" /* ENEMY_TRIGGER_DOOR_ID */];

        // add enemy
        this.enemy.position = [enemyBox.position[0], 70, enemyBox.position[2]];
        this.enemy.target = [(enemyBox.cell.column + 0.5) * 500, 0, (enemyBox.cell.row + 0.5) * 500];

        // add floor and ceiling
        for (let z = 0; z < CELLS; z++) {
            for (let x = 0; x < CELLS; x++) {
                this.floor.push({
                    name: 'floor_tile_' + z + '_' + x,
                    type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["C" /* FLOOR_TYPE */],
                    size: [500, 0, 500],
                    pos: [x * 500 + 250, 0, z * 500 + 250],
                    collides: false
                });
                this.ceiling.push({
                    name: 'ceiling_tile_' + z + '_' + x,
                    type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["D" /* CEILING_TYPE */],
                    size: [500, 0, 500],
                    pos: [x * 500 + 250, 250, z * 500 + 250],
                    collides: false
                });
            }
        }

        // the main level object
        this.level = {
            boundaries: BOUNDARIES,
            player: this.player,
            enemy: this.enemy,
            objects: [...this.floor, ...this.ceiling, ...this.walls.map((wall, index) => ({
                name: 'wall_' + index,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["E" /* WALL_TYPE */],
                size: wall.size,
                pos: wall.position,
                props: { mode: wall.mode }
            })), ...this.paintings.filter(painting => painting.pos), ...this.boxes.map((box, i) => ({
                name: 'box_' + i,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["F" /* BOX_TYPE */],
                size: box.size,
                pos: box.position,
                props: {
                    mode: getRandomValue(3) + 1,
                    inhabited: getRandomValue(2) + 1,
                    triggerDoorId: box.triggerDoorId
                }
            })), ...this.doors.map(door => ({
                name: 'door_' + door.index,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["G" /* DOOR_TYPE */],
                size: [door.direction === WALL_DIRECTIONS.VERTICAL ? DOOR_DEPTH : DOOR_WIDTH, DOOR_HEIGHT, door.direction === WALL_DIRECTIONS.VERTICAL ? DOOR_WIDTH : DOOR_DEPTH],
                pos: door.position,
                props: {
                    id: door.index,
                    state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["H" /* DOOR_STATE_CLOSE */]
                }
            })), ...this.switchers.map(({ index, position, angle }) => ({
                name: 'switcher_' + index,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["I" /* SWITCHER_TYPE */],
                pos: position,
                size: [SWITCHER_WIDTH, SWITCHER_HEIGHT, SWITCHER_DEPTH],
                angle,
                props: {
                    id: index
                },
                isInteractive: true
            }))]
        };

        LevelGenerator.addHitbox(this.level);

        this.level.objects = JSON.stringify(this.level.objects);
    }

    /**
     * Adds a wall object to the all walls list
     * @param {Object[]} cells
     */
    addWall({ cells }) {
        const wall = new Wall({
            direction: ['left', 'right'].includes(cells[0][1]) ? WALL_DIRECTIONS.VERTICAL : WALL_DIRECTIONS.HORIZONTAL,
            cells: cells.reduce((result, [cell, position]) => {
                result[getOppositePosition(position)] = cell;
                return result;
            }, {}),
            isBorder: cells.length === 1
        });
        this.walls.push(wall);
        cells.forEach(([cell, position]) => {
            cell.addWall(position, wall);
            if (cell.state === CELL_STATES.ROOM) {
                this.roomsCount++;
            }
        });
    }

    /**
     * Removes a wall from the walls list
     * @param {Object[]} cells
     */
    removeWall({ cells }) {
        const cell = cells[0][0];
        const wallPosition = cells[0][1];
        const targetWall = cell.walls[wallPosition];
        this.walls = this.walls.filter(wall => wall !== targetWall);
        cell.removeWall(wallPosition);
    }

    /**
     * Adds a door object to the doors list
     * @param {number} index
     * @param {Object[]} cells
     */
    addDoor({ index, cells }) {
        this.doors.push(new Door({
            index,
            direction: ['left', 'right'].includes(cells[0][1]) ? WALL_DIRECTIONS.VERTICAL : WALL_DIRECTIONS.HORIZONTAL,
            cells: cells.reduce((result, [cell, position]) => {
                result[getOppositePosition(position)] = cell;
                return result;
            }, {})
        }));
    }

    /**
     * Ads a switcher object to the switcher list
     * @param {number} index
     * @param {Wall} wall
     * @param {string} position
     */
    addSwitcher({ index, wall, position }) {
        const switcher = {
            index,
            position: [wall.direction === WALL_DIRECTIONS.HORIZONTAL ? wall.position[0] : position === 'right' ? wall.position[0] + WALL_DEPTH / 2 + 1 : wall.position[0] - WALL_DEPTH / 2 - 1, 150, wall.direction === WALL_DIRECTIONS.VERTICAL ? wall.position[2] : position === 'bottom' ? wall.position[2] + WALL_DEPTH / 2 + 1 : wall.position[2] - WALL_DEPTH / 2 - 1],
            angle: [0, position === 'bottom' ? 0 : position === 'top' ? 180 : position === 'right' ? 90 : -90, 0]
        };
        this.switchers.push(switcher);
        wall.slots[position] = switcher;
    }

    /**
     * Adds a painting object to the list
     * @param {Object} painting
     * @param {Wall} wall
     */
    addPainting({ painting, wall }) {
        const wallFreeSlots = (wall.direction === WALL_DIRECTIONS.HORIZONTAL ? ['top', 'bottom'] : ['left', 'right']).filter(position => !wall.slots[position]);

        if (!wallFreeSlots.length) {
            return;
        }
        const wallSide = getRandomElement(wallFreeSlots);

        painting.pos = [wall.direction === WALL_DIRECTIONS.HORIZONTAL ? wall.position[0] : wallSide === 'left' ? wall.position[0] - WALL_DEPTH / 2 - 1 : wall.position[0] + WALL_DEPTH / 2 + 1, WALL_HEIGHT / 2, wall.direction === WALL_DIRECTIONS.VERTICAL ? wall.position[2] : wallSide === 'top' ? wall.position[2] - WALL_DEPTH / 2 - 1 : wall.position[2] + WALL_DEPTH / 2 + 1];
        // check if got out of the map
        if (painting.pos.some((axis, i) => axis < 0 || BOUNDARIES[i] && axis > BOUNDARIES[i])) {
            painting.pos = null;
            return;
        }
        if (wall.direction === WALL_DIRECTIONS.VERTICAL) {
            if (wallSide === 0) {
                painting.angle = [0, -90, 0];
            } else {
                painting.angle = [0, 90, 0];
            }
        } else {
            if (wallSide === 0) {
                painting.angle = [0, 180, 0];
            } else {
                painting.angle = [0, 0, 0];
            }
        }
        wall.slots[wallSide] = painting;
    }

    /**
     * Adds a box object to the list
     * @param {Cell} cell
     */
    addBox(cell) {
        const boxSize = new Array(3).fill(0).map(() => MIN_BOX_SIZE + getRandomValue(MAX_BOX_SIZE - MIN_BOX_SIZE));
        const minBoxX = cell.column * 500 + boxSize[0] / 2 + WALL_DEPTH + 1;
        const maxBoxX = (cell.column + 1) * 500 - boxSize[0] / 2 - WALL_DEPTH - 1;
        const minBoxZ = cell.row * 500 + boxSize[2] / 2 + WALL_DEPTH + 1;
        const maxBoxZ = (cell.row + 1) * 500 - boxSize[2] / 2 - WALL_DEPTH - 1;
        if (maxBoxX <= minBoxX || maxBoxZ <= minBoxZ) {
            return;
        }
        const box = {
            size: boxSize,
            position: [minBoxX + getRandomValue(maxBoxX - minBoxX), boxSize[1] / 2, minBoxZ + getRandomValue(maxBoxZ - minBoxZ)],
            cell
        };
        this.boxes.push(box);
        cell.box = box;
    }

    /**
     * Marks cells as indeterminate if they lead straight to the `room` cells
     */
    addIndeterminateCells() {
        this.cells.forEach(cell => {
            if (cell.state === CELL_STATES.ROOM) {
                const emptyWallPosition = Object.keys(cell.walls).find(wallPosition => !cell.walls[wallPosition]);
                let siblingCell = cell.siblings[emptyWallPosition];
                cell.roomArea = { to: emptyWallPosition };
                let prevCell = cell;
                let prevCellPosition = getOppositePosition(emptyWallPosition);
                while (siblingCell && siblingCell.state === CELL_STATES.EMPTY) {
                    if (siblingCell.wallsCount === 2) {
                        siblingCell.state = CELL_STATES.INDETERMINATE;
                        const emptyWallPositions = Object.keys(siblingCell.walls).filter(wallPosition => !siblingCell.walls[wallPosition]);
                        const emptyWallPosition = emptyWallPositions.find(position => siblingCell.siblings[position] !== prevCell);
                        siblingCell.roomArea = {
                            from: prevCellPosition,
                            to: emptyWallPosition
                        };
                        prevCell = siblingCell;
                        prevCellPosition = getOppositePosition(emptyWallPosition);
                        siblingCell = siblingCell.siblings[emptyWallPosition];
                    } else {
                        siblingCell = null;
                    }
                }
            }
        });
    }

    /**
     * Adds hitbox array to al collidable objects
     * @param {Object} level
     */
    static addHitbox(level) {
        const playerCell = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getPlayerCell */])(level.player.pos);
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
            const broadCellsXMax = Math.ceil(level.boundaries[0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */]) - 1;
            const broadCellsYMax = Math.ceil(level.boundaries[2] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */]) - 1;
            const topLeftCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */])));
            const topLeftCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */])));
            const bottomRightCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */])));
            const bottomRightCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */])));
            for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
                for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
                    obj.broadCells.push([i, j]);
                }
            }

            obj.isVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isObjectVisible */])(playerCell, obj);

            obj.isReachable = false;
        }

        const collisionView = __WEBPACK_IMPORTED_MODULE_0__Collision__["a" /* default */].getCollisionView([level.player.pos, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* getPointPosition */])({
            pos: level.player.pos,
            distance: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["K" /* PLAYER_HAND_LENGTH */],
            angle: level.player.angle
        })], level.objects, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["J" /* BROAD_CELL_SIZE */]);
        if (collisionView) {
            collisionView.obj.isReachable = true;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LevelGenerator;


/**
 * Returns array with the randomly shuffled elements
 * @param {Array} array
 * @returns {Array}
 */
function shuffle(array) {
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        const newIndex = getRandomValue(newArray.length);
        [newArray[i], newArray[newIndex]] = [newArray[newIndex], newArray[i]];
    }
    return newArray;
}

/**
 * Returns a random array element
 * @param {Array} array
 * @returns {*}
 */
function getRandomElement(array) {
    return array[getRandomValue(array.length)];
}

/**
 * Returns a random value between 0 and max - 1
 * @param {number} max
 * @returns {number}
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Returns opposite position to given position
 * @param {string} position
 * @returns {string}
 */
function getOppositePosition(position) {
    switch (position) {
        case 'top':
            return 'bottom';
        case 'right':
            return 'left';
        case 'bottom':
            return 'top';
        case 'left':
            return 'right';
    }
}

/**
 * Returns adjacent position to given position
 * @param {string} position
 * @returns {string}
 */
function getAdjacentPosition(position) {
    switch (position) {
        case 'top':
            return 'right';
        case 'right':
            return 'bottom';
        case 'bottom':
            return 'left';
        case 'left':
            return 'top';
    }
}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"light-root-3ic0q","overlay":"light-overlay-1kisp"};

/***/ }),
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
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_screens_loading_loadingScreen__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_screens_start_startScreen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_screens_end_endScreen__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hints_hints__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_playerHealth_playerHealth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_patterns_patterns__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewport_viewport__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__player_player__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__scene__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gameLoop_gameLoop__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib_Loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib_LevelGenerator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__level__ = __webpack_require__(145);




















const BUTTON_REPEAT_DELAY = 500;
const GAMEPAD_AXIS_UNIT_THRESHOLD = 0.5;
const DEFAULT_GAMEPAD_BUTTONS = {
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* XBOX_BUTTON_A */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["c" /* XBOX_BUTTON_B */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["d" /* XBOX_BUTTON_X */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["e" /* XBOX_BUTTON_BACK */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["f" /* XBOX_BUTTON_CROSS_UP */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["g" /* XBOX_BUTTON_CROSS_DOWN */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0]
};
const DEFAULT_GAMEPAD_AXES_UNIT = {
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["h" /* XBOX_STICK_LEFT_AXIS_Y */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0, 0],
    [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["i" /* XBOX_STICK_RIGHT_AXIS_X */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0, 0]
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
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["j" /* KEY_FORWARD */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["k" /* KEY_BACKWARD */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["l" /* KEY_LEFT */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["m" /* KEY_RIGHT */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["n" /* KEY_INTERACT */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["o" /* KEY_QUIT_GAME */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["p" /* KEY_RUN */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["q" /* KEY_ENTER */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0],
                [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["r" /* KEY_BACK */]]: [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0]
            },
            gamepadButtons: DEFAULT_GAMEPAD_BUTTONS,
            gamepadAxesUnit: DEFAULT_GAMEPAD_AXES_UNIT
        };

        // raf loop for capturing player actions
        this.loop = new __WEBPACK_IMPORTED_MODULE_15__lib_Loop__["a" /* default */](this.loopCallback.bind(this));

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.handleGamepadConnected = this.handleGamepadConnected.bind(this);
        this.handleGamepadDisconnected = this.handleGamepadDisconnected.bind(this);

        this.setGameStateStart = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["s" /* GAME_STATE_START */]);
        this.setGameStateWin = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["t" /* GAME_STATE_WIN */]);
        this.setGameStateLoose = this.setGameState.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_constants__["u" /* GAME_STATE_LOOSE */]);
        this.setGameStatePlay = this.setGameStatePlay.bind(this);
        this.setGameStatePlayRandom = this.setGameStatePlayRandom.bind(this);

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
        const { gameState, hints, playerHealth, gamepadState, settings } = this.props;
        if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["v" /* GAME_STATE_LOADING */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_screens_loading_loadingScreen__["a" /* default */], {
                onLoaded: this.setGameStateStart,
                cacheAssetData: this.cacheAssetData
            });
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["s" /* GAME_STATE_START */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_screens_start_startScreen__["a" /* default */], {
                onStart: this.setGameStatePlay,
                onStartRandom: this.setGameStatePlayRandom,
                gamepadState: gamepadState,
                settings: settings
            });
        } else if (gameState === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["w" /* GAME_STATE_PLAY */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11__viewport_viewport__["a" /* default */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_patterns_patterns__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_14__gameLoop_gameLoop__["a" /* default */],
                    {
                        onWin: this.setGameStateWin,
                        onLoose: this.setGameStateLoose,
                        onExit: this.setGameStateStart
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_12__player_player__["a" /* default */],
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__scene__["a" /* default */], null)
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_playerHealth_playerHealth__["a" /* default */], { health: playerHealth }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_hints_hints__["a" /* default */], { hints: hints })
            );
        } else if ([__WEBPACK_IMPORTED_MODULE_3__constants_constants__["t" /* GAME_STATE_WIN */], __WEBPACK_IMPORTED_MODULE_3__constants_constants__["u" /* GAME_STATE_LOOSE */]].includes(gameState)) {
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
        if (event.code in this.controls.keyPressed && this.controls.keyPressed[event.code][0] === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
            this.controls.keyPressed[event.code] = [0.5, 0];
        }
    }

    onKeyUp(event) {
        if (event.code in this.controls.keyPressed) {
            this.controls.keyPressed[event.code] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0];
        }
    }

    setGameState(state) {
        this.props.setGameState(state);
    }

    setGameStatePlay() {
        this.props.setLevel(__WEBPACK_IMPORTED_MODULE_17__level__["a" /* default */]);
        this.setGameState(__WEBPACK_IMPORTED_MODULE_3__constants_constants__["w" /* GAME_STATE_PLAY */]);
    }

    setGameStatePlayRandom() {
        this.props.setLevel(new __WEBPACK_IMPORTED_MODULE_16__lib_LevelGenerator__["a" /* default */]().level);
        this.setGameState(__WEBPACK_IMPORTED_MODULE_3__constants_constants__["w" /* GAME_STATE_PLAY */]);
    }

    cacheAssetData(assetSrc, data) {
        this.assets[assetSrc] = data;
    }

    loopCallback() {
        const now = Date.now();

        // keyboard buttons
        Object.keys(this.controls.keyPressed).forEach(code => {
            const [state, timestamp] = this.controls.keyPressed[code];
            if (state !== __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
                if (timestamp <= now) {
                    this.controls.keyPressed[code] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN, now + BUTTON_REPEAT_DELAY];
                } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
                    this.controls.keyPressed[code][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].DOWN;
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
                    this.controls.gamepadButtons[button] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN, now + BUTTON_REPEAT_DELAY];
                } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
                    this.controls.gamepadButtons[button][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].DOWN;
                }
            } else if (state !== __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
                this.controls.gamepadButtons[button] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0];
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
                    this.controls.gamepadAxesUnit[axis] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN, now + BUTTON_REPEAT_DELAY, curAxisValue];
                } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
                    this.controls.gamepadAxesUnit[axis][0] = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].DOWN;
                }
            } else if (state !== __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
                this.controls.gamepadAxesUnit[axis] = [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* CONTROL_STATE */].UNUSED, 0, curAxisValue];
            }
        });
    }
}

Game.propTypes = {
    gameState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    hints: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].instanceOf(Map).isRequired,
    playerHealth: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
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
        playerHealth: state.playerHealth,
        gamepadState: state.gamepad.state,
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
        setGameState: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* game */].setGameState,
        setLevel: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["b" /* level */].setLevel,
        setGamepadState: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["c" /* gamepad */].setGamepadState
    }, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Game);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameState__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pointerDelta__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playerViewAngle__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playerPosition__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playerState__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playerHealth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doorsState__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hints__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gamepad__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__enemy__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__level__ = __webpack_require__(152);
















/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    gameState: __WEBPACK_IMPORTED_MODULE_1__gameState__["a" /* default */],
    pointerDelta: __WEBPACK_IMPORTED_MODULE_2__pointerDelta__["a" /* default */],
    playerViewAngle: __WEBPACK_IMPORTED_MODULE_3__playerViewAngle__["a" /* default */],
    pos: __WEBPACK_IMPORTED_MODULE_4__playerPosition__["a" /* default */],
    playerState: __WEBPACK_IMPORTED_MODULE_5__playerState__["a" /* default */],
    playerHealth: __WEBPACK_IMPORTED_MODULE_6__playerHealth__["a" /* default */],
    objects: __WEBPACK_IMPORTED_MODULE_7__objects__["a" /* default */],
    doorsState: __WEBPACK_IMPORTED_MODULE_8__doorsState__["a" /* default */],
    hints: __WEBPACK_IMPORTED_MODULE_9__hints__["a" /* default */],
    gamepad: __WEBPACK_IMPORTED_MODULE_10__gamepad__["a" /* default */],
    settings: __WEBPACK_IMPORTED_MODULE_11__settings__["a" /* default */],
    enemy: __WEBPACK_IMPORTED_MODULE_12__enemy__["a" /* default */],
    level: __WEBPACK_IMPORTED_MODULE_13__level__["a" /* default */]
});

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

/* This script is auto-generated with `npm run build-assets-list` */

var RESOURCES = [["dist/0e58b004362d2cecaf96358cf5fa9f50.png", "image"], ["dist/12d4067df2155b204defac46c41c89d3.png", "image"], ["dist/151b6411d53b17de82d882485fcbaaf5.jpg", "image"], ["dist/1c1430572300aa82719312e3483d80d9.png", "image"], ["dist/3628ed55158b5a413097584e7fd8a725.jpg", "image"], ["dist/4db9414e7ca808670cbc9b15dc0eaa74.jpg", "image"], ["dist/6d73a1850ac64474712210aa8f34f818.png", "image"], ["dist/83f558afad0f8b176e361b3f574ccb42.jpg", "image"], ["dist/8b3a4e276e0a424265cc0c55fa95360d.svg", "image"], ["dist/a0a62fe89c1eb6ec77f414a77fdb4a92.jpg", "image"], ["dist/abcc39d175e2f5f6ad0df4cc14457193.jpg", "image"], ["dist/bad58d3de10ed478b28908a2380b31f8.png", "image"], ["dist/c161dc30a1bcbfb0ea16c3740f6189c3.jpg", "image"], ["dist/c3e2941f8e7e3eb4fa9f378466ad0a0b.jpg", "image"], ["dist/dc4aaa700984f97ca90dea2ec61957fc.png", "image"], ["dist/e2128edeeefcfd54119c659e1313a548.png", "image"], ["src/components/box/breakBox.m4a", "audio"], ["src/components/box/breathing.m4a", "audio"], ["src/components/box/clawsOnWood.m4a", "audio"], ["src/components/door/mixdown.m4a", "audio"], ["src/components/enemy/attack.m4a", "audio"], ["src/components/enemy/noise.m4a", "audio"], ["src/components/enemy/roar01.m4a", "audio"], ["src/components/enemy/roar02.m4a", "audio"], ["src/components/enemy/roar03.m4a", "audio"], ["src/components/screens/start/theme.m4a", "audio"], ["src/containers/gameLoop/game-loop.m4a", "audio"], ["src/containers/player/scream.m4a", "audio"], ["src/containers/player/steps-running.m4a", "audio"], ["src/containers/player/steps-walking.m4a", "audio"]];
if (true) module.exports = RESOURCES;

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setClosing"] = setClosing;
/* harmony export (immutable) */ __webpack_exports__["setOpening"] = setOpening;
/* harmony export (immutable) */ __webpack_exports__["setClose"] = setClose;
/* harmony export (immutable) */ __webpack_exports__["setOpen"] = setOpen;


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

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setPosition"] = setPosition;
/* harmony export (immutable) */ __webpack_exports__["setTarget"] = setTarget;
/* harmony export (immutable) */ __webpack_exports__["setState"] = setState;
/* harmony export (immutable) */ __webpack_exports__["setDirection"] = setDirection;
/* harmony export (immutable) */ __webpack_exports__["setVisibility"] = setVisibility;


function setPosition(position) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["b" /* ENEMY_SET_POSITION */],
        position
    };
}

function setTarget(target) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["c" /* ENEMY_SET_TARGET */],
        target
    };
}

function setState(state) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["d" /* ENEMY_SET_STATE */],
        state
    };
}

function setDirection(direction) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["e" /* ENEMY_SET_DIRECTION */],
        direction
    };
}

function setVisibility(isVisible) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["f" /* ENEMY_SET_VISIBILITY */],
        isVisible
    };
}

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setGameState"] = setGameState;
/* harmony export (immutable) */ __webpack_exports__["updatePointerDelta"] = updatePointerDelta;
/* harmony export (immutable) */ __webpack_exports__["resetPointerDelta"] = resetPointerDelta;



function setGameState(state) {
    switch (state) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["s" /* GAME_STATE_START */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["z" /* GAME_SET_STATE_START */]
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["w" /* GAME_STATE_PLAY */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["A" /* GAME_SET_STATE_PLAY */]
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["t" /* GAME_STATE_WIN */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["B" /* GAME_SET_STATE_WIN */]
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["u" /* GAME_STATE_LOOSE */]:
            return {
                type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["C" /* GAME_SET_STATE_LOOSE */]
            };
    }
}

function updatePointerDelta(x, y) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["D" /* GAME_UPDATE_POINTER_DELTA */],
        x, y
    };
}

function resetPointerDelta() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["E" /* GAME_RESET_POINTER_DELTA */]
    };
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setGamepadState"] = setGamepadState;


function setGamepadState(index) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["k" /* GAMEPAD_SET_STATE */],
        index
    };
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["addHints"] = addHints;
/* harmony export (immutable) */ __webpack_exports__["removeHints"] = removeHints;


function addHints(hints) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["l" /* HINTS_ADD */],
        hints
    };
}

function removeHints(hints) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["m" /* HINTS_REMOVE */],
        hints
    };
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setLevel"] = setLevel;


function setLevel(level) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* LEVEL_SET */],
        level
    };
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setVisible"] = setVisible;
/* harmony export (immutable) */ __webpack_exports__["setReachable"] = setReachable;


function setVisible({ addVisibleObjects, removeVisibleObjects }) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["r" /* OBJECTS_SET_VISIBLE */],
        addVisibleObjects,
        removeVisibleObjects
    };
}

function setReachable(reachableObject) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["s" /* OBJECTS_SET_REACHABLE */],
        reachableObject
    };
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["updateViewAngle"] = updateViewAngle;
/* harmony export (immutable) */ __webpack_exports__["updatePosition"] = updatePosition;
/* harmony export (immutable) */ __webpack_exports__["reduceHealth"] = reduceHealth;
/* harmony export (immutable) */ __webpack_exports__["run"] = run;
/* harmony export (immutable) */ __webpack_exports__["walk"] = walk;
/* harmony export (immutable) */ __webpack_exports__["stop"] = stop;


function updateViewAngle(viewAngle) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["t" /* PLAYER_UPDATE_VIEW_ANGLE */],
        viewAngle
    };
}

function updatePosition(pos) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["u" /* PLAYER_UPDATE_POSITION */],
        pos
    };
}

function reduceHealth(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["v" /* PLAYER_REDUCE_HEALTH */],
        value
    };
}

function run() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["w" /* PLAYER_SET_STATE_RUN */]
    };
}

function walk() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["x" /* PLAYER_SET_STATE_WALK */]
    };
}

function stop() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["y" /* PLAYER_SET_STATE_STOP */]
    };
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["setVolume"] = setVolume;
/* harmony export (immutable) */ __webpack_exports__["setGraphicsQuality"] = setGraphicsQuality;
/* harmony export (immutable) */ __webpack_exports__["setMouseSensitivity"] = setMouseSensitivity;
/* harmony export (immutable) */ __webpack_exports__["setStickSensitivity"] = setStickSensitivity;


function setVolume(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["g" /* SETTINGS_SET_VOLUME */],
        value
    };
}

function setGraphicsQuality(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["h" /* SETTINGS_SET_GRAPHICS_QUALITY */],
        value
    };
}

function setMouseSensitivity(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["i" /* SETTINGS_SET_MOUSE_SENSITIVITY */],
        value
    };
}

function setStickSensitivity(value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["j" /* SETTINGS_SET_STICK_SENSITIVITY */],
        value
    };
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_css__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__box_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Audio__ = __webpack_require__(20);






const INHABITED_MODE = {
    1: 'clawsOnWood',
    2: 'breathing'
};

class Box extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props, context) {
        super(props, context);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["d" /* getTransformRule */])({ pos: this.posWithInvertedY });

        if (props.inhabited) {
            this.inhabitedAutioBuffer = this.context.assets[`src/components/box/${INHABITED_MODE[props.inhabited]}.m4a`];
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
            !isBroken && playerPos[1] > pos[1] + size[1] / 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__plain_plain__["a" /* default */], {
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
/* harmony default export */ __webpack_exports__["a"] = Box;

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ceiling_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ceiling_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ceiling_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class Ceiling extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(props) {
        super(props);

        this.styleRules = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["d" /* getTransformRule */])({
            pos: [props.pos[0], -props.pos[1], props.pos[2]],
            angle: [-90, 0, 0]
        }), {
            width: props.size[0],
            height: props.size[1],
            margin: `-${props.size[1] / 2}px 0 0 -${props.size[0] / 2}px`
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
/* harmony default export */ __webpack_exports__["a"] = Ceiling;

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_door_door_css__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_door_door_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_door_door_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light_simple__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Audio__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









const BARS_GAP = 25;
const DOOR_STATES = [__WEBPACK_IMPORTED_MODULE_5__constants_constants__["L" /* DOOR_STATE_OPEN */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["M" /* DOOR_STATE_OPENING */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["H" /* DOOR_STATE_CLOSE */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["O" /* DOOR_STATE_CLOSING */]];

class Door extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props, context) {
        super(props, context);

        const { pos, size } = props;

        this.posWithInvertedY = [pos[0], -pos[1], pos[2]];
        this.rootStyleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["d" /* getTransformRule */])({ pos: this.posWithInvertedY });
        this.doorStyleRules = {
            transitionDuration: __WEBPACK_IMPORTED_MODULE_5__constants_constants__["P" /* DOOR_OPEN_TIME */] + 'ms',
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
        if ([__WEBPACK_IMPORTED_MODULE_5__constants_constants__["O" /* DOOR_STATE_CLOSING */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["M" /* DOOR_STATE_OPENING */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.audioSource = __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStart({
                audioSource: this.audioSource,
                audioCtx: this.context.audioCtx,
                destination: this.panner,
                buffer: this.decodedAudioBuffer
            });
        } else if ([__WEBPACK_IMPORTED_MODULE_5__constants_constants__["L" /* DOOR_STATE_OPEN */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["H" /* DOOR_STATE_CLOSE */]].includes(nextProps.state) && nextProps.state !== this.props.state) {
            __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStop(this.audioSource);
        }
    }

    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_4__lib_Audio__["a" /* default */].soundStop(this.audioSource);
    }

    render() {
        const { isVisible, viewAngle, state, size } = this.props;
        const isOpen = [__WEBPACK_IMPORTED_MODULE_5__constants_constants__["M" /* DOOR_STATE_OPENING */], __WEBPACK_IMPORTED_MODULE_5__constants_constants__["L" /* DOOR_STATE_OPEN */]].includes(state);
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
            const relativePos = [pos].concat(parentPos).reduce(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["f" /* vectorsAdd3D */]);
            bars.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: key,
                    className: barClassName,
                    style: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["d" /* getTransformRule */])({ pos, angle }), {
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
/* harmony default export */ __webpack_exports__["a"] = Door;

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enemy_css__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enemy_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__enemy_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_Audio__ = __webpack_require__(20);
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

        this.noisePanner = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].createPanner({
            audioCtx: this.context.audioCtx,
            rolloffFactor: 0.5
        });
        this.noisePanner.connect(gainNode);

        this.noiseAudioBuffer = this.context.assets['src/components/enemy/noise.m4a'];
        this.noiseAudioSource = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStart({
            audioCtx: this.context.audioCtx,
            destination: this.noisePanner,
            buffer: this.noiseAudioBuffer,
            loop: true
        });

        this.roarPanner = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].createPanner({
            audioCtx: this.context.audioCtx,
            pos: this.props.pos,
            coneInnerAngle: 60,
            coneOuterAngle: 160,
            coneOuterGain: 0.3
        });
        this.roarPanner.connect(gainNode);

        this.roarAudioSource = null;
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
            if (nextProps.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].ATTACK) {
                this.stopRoaring();
                this.soundStart(this.attackAudioBuffer);
            } else if (!this.roaringTimeout && [__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].WANDER, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].STOP].includes(nextProps.state)) {
                this.startRoaring();
            }
        }
    }

    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStop(this.roarAudioSource);
        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStop(this.noiseAudioSource);
        this.stopRoaring();
    }

    render() {
        const { pos, state, direction, isVisible, graphicsQuality } = this.props;
        if (!isVisible) {
            return null;
        }
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["d" /* getTransformRule */])({ pos: [pos[0], -pos[1], pos[2]] });
        this.rotationRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["d" /* getTransformRule */])({
            angle: [0, -Math.round(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_utils__["e" /* convertRadToDegree */])(direction)), 0]
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
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.eye }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_0__enemy_css___default.a.eye }),
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
        this.roarAudioSource = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStart({
            audioSource: this.roarAudioSource,
            audioCtx: this.context.audioCtx,
            buffer,
            destination: this.roarPanner
        });
    }

    updatePannerPosition(pos) {
        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].setPannerPosition(this.roarPanner, pos);
        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].setPannerPosition(this.noisePanner, pos);
    }

    updatePannerOrientation(direction) {
        const x = Math.sin(direction);
        let z = -Math.cos(direction);
        if (this.roarPanner.orientationX) {
            this.roarPanner.orientationX.value = x;
            this.roarPanner.orientationY.value = 0;
            this.roarPanner.orientationZ.value = z;
        } else {
            this.roarPanner.setOrientation(x, 0, z);
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
/* harmony default export */ __webpack_exports__["a"] = Enemy;

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__floor_css__ = __webpack_require__(164);
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
/* harmony default export */ __webpack_exports__["a"] = Floor;

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hints_css__ = __webpack_require__(165);
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
/* harmony default export */ __webpack_exports__["a"] = Hints;

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["a"] = DiffuseLight;

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_css__ = __webpack_require__(69);
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
        const ratio = Math.max(0, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["Q" /* SPOTLIGHT_RADIUS */] - distance) / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["Q" /* SPOTLIGHT_RADIUS */];
        if (ratio) {
            const size = (2 + ratio) * __WEBPACK_IMPORTED_MODULE_2__constants_constants__["Q" /* SPOTLIGHT_RADIUS */] / 2 * 10;
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
/* harmony default export */ __webpack_exports__["a"] = Light;

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_css__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__logo_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



function Logo() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h1',
        { className: __WEBPACK_IMPORTED_MODULE_0__logo_css___default.a.root },
        'The monster\'s vault'
    );
}

/* harmony default export */ __webpack_exports__["a"] = Logo;

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__painting_css__ = __webpack_require__(167);
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
/* harmony default export */ __webpack_exports__["a"] = Painting;

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_css__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__patterns_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall_wall01_jpg__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall_wall01_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wall_wall01_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wall_wall02_jpg__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wall_wall02_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wall_wall02_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wall_wall03_jpg__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wall_wall03_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wall_wall03_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__floor_floor_jpg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__floor_floor_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__floor_floor_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__box_box01_jpg__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__box_box01_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__box_box01_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__box_box02_jpg__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__box_box02_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__box_box02_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__box_box03_jpg__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__box_box03_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__box_box03_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__switcher_wood_jpg__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__switcher_wood_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__switcher_wood_jpg__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Patterns;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };












const PATTERNS = [{ name: 'wall01', url: __WEBPACK_IMPORTED_MODULE_2__wall_wall01_jpg___default.a }, { name: 'wall02', url: __WEBPACK_IMPORTED_MODULE_3__wall_wall02_jpg___default.a }, { name: 'wall03', url: __WEBPACK_IMPORTED_MODULE_4__wall_wall03_jpg___default.a }, { name: 'floor', url: __WEBPACK_IMPORTED_MODULE_5__floor_floor_jpg___default.a }, {
    name: 'box01',
    url: __WEBPACK_IMPORTED_MODULE_6__box_box01_jpg___default.a,
    width: 240,
    height: 160
}, {
    name: 'box02',
    url: __WEBPACK_IMPORTED_MODULE_7__box_box02_jpg___default.a,
    width: 120,
    height: 80
}, {
    name: 'box03',
    url: __WEBPACK_IMPORTED_MODULE_8__box_box03_jpg___default.a,
    width: 120,
    height: 80
}, {
    name: 'wood',
    url: __WEBPACK_IMPORTED_MODULE_9__switcher_wood_jpg___default.a,
    width: 90,
    height: 60
}];

function Patterns() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'svg',
        { className: __WEBPACK_IMPORTED_MODULE_0__patterns_css___default.a.root },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'defs',
            null,
            PATTERNS.map(pattern => _extends({}, pattern, {
                url: pattern.url.replace('./', './dist/')
            })).map(({ name, url, width = 450, height = 300 }) => __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'pattern',
                {
                    key: name,
                    id: name,
                    width: width, height: height,
                    patternUnits: 'userSpaceOnUse'
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('image', { xlinkHref: url, width: width, height: height })
            ))
        )
    );
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerHealth_css__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerHealth_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__playerHealth_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



const PLAYER_HEALTH_STATES = [30, 60, 100];

class PlayerHealth extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(...args) {
        super(...args);

        this.state = {
            healthState: PlayerHealth.getPlayerHealthState(this.props.health)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.health < this.props.health) {
            this.setState({ healthState: PlayerHealth.getPlayerHealthState(nextProps.health) });
        }
    }

    render() {
        const { healthState } = this.state;

        const className = [__WEBPACK_IMPORTED_MODULE_0__playerHealth_css___default.a.root, __WEBPACK_IMPORTED_MODULE_0__playerHealth_css___default.a['health-state-' + healthState]].join(' ');

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: className });
    }

    static getPlayerHealthState(health) {
        for (let i = 0; i < PLAYER_HEALTH_STATES.length; i++) {
            if (health <= PLAYER_HEALTH_STATES[i]) {
                return i;
            }
        }
        return PLAYER_HEALTH_STATES.length - 1;
    }
}

PlayerHealth.propTypes = {
    health: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = PlayerHealth;

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endScreen_css__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__endScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_Audio__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(6);






const ENDING_TIME = 3000;

class EndScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        // raf loop for capturing gamepad buttons
        this.loop = new __WEBPACK_IMPORTED_MODULE_2__lib_Loop__["a" /* default */](this.loopCallback.bind(this));

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;

        this.audioSources = {
            scream: null
        };
        this.screamAudioBuffer = this.context.assets['src/containers/player/scream.m4a'];
        this.screamGainNode = this.context.audioCtx.createGain();
        this.screamGainNode.gain.value = 0.5;
        this.screamGainNode.connect(this.context.masterGain);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.endingTimer = setTimeout(() => {
            this.setState({
                showAnyKeyMessage: true
            });
        }, ENDING_TIME);
        this.loop.start();

        if (this.props.gameState !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["t" /* GAME_STATE_WIN */]) {
            this.audioSources.scream = __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStart({
                audioSource: this.audioSources.scream,
                audioCtx: this.context.audioCtx,
                destination: this.screamGainNode,
                buffer: this.screamAudioBuffer
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.endingTimer);
        this.endingTimer = null;
        this.loop.stop();

        __WEBPACK_IMPORTED_MODULE_3__lib_Audio__["a" /* default */].soundStop(this.audioSources.scream);
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
                gameState === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["t" /* GAME_STATE_WIN */] ? 'You escaped' : 'You died. The monster got you'
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
        if (this.context.controls.keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* KEY_ENTER */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
            this.context.controls.keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["q" /* KEY_ENTER */]][0] = __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].DOWN;
            this.props.onEnd();
        }

        // gamepad
        if (this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["d" /* XBOX_BUTTON_X */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
            this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["d" /* XBOX_BUTTON_X */]][0] = __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].DOWN;
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
    controls: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = EndScreen;

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadingScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loadingScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloadAssetsList__ = __webpack_require__(110);
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
                    this.handleAssetError(`Couldn't load image ${assetSrc}`);
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
            this.state.loadingFailed ? 'Loading failed, sorry' : `Loading assets ${percent} %`
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
/* harmony default export */ __webpack_exports__["a"] = LoadingScreen;

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credits_css__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credits_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__credits_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__externalLink_externalLink__ = __webpack_require__(135);
/* harmony export (immutable) */ __webpack_exports__["a"] = Credits;




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
                { href: 'https://github.com/alvov/the-monsters-vault-game' },
                'Github Repo'
            )
        )
    );
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__externalLink_css__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__externalLink_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__externalLink_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = ExternalLink;



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

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startScreen_css__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__startScreen_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_logo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credits_credits__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_settings_settings__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_Audio__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_constants__ = __webpack_require__(6);










const MUSIC_VOLUME = 0.2;

const SCREEN_DEFAULT = 'default';
const SCREEN_SETTINGS = 'settings';
const SCREEN_CREDITS = 'credits';

class StartScreen extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new __WEBPACK_IMPORTED_MODULE_4__lib_Loop__["a" /* default */](this.loopCallback.bind(this));

        this.audioSources = {
            theme: null
        };
        this.themeAudioBuffer = this.context.assets['src/components/screens/start/theme.m4a'];
        this.themeGainNode = this.context.audioCtx.createGain();
        this.themeGainNode.gain.value = MUSIC_VOLUME;
        this.themeGainNode.connect(this.context.masterGain);

        this.handleStart = this.handleStart.bind(this);
        this.handleStartRandom = this.handleStartRandom.bind(this);
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
                text: 'Random level',
                action: this.handleStartRandom
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
        this.audioSources.theme = __WEBPACK_IMPORTED_MODULE_6__lib_Audio__["a" /* default */].soundStart({
            audioSource: this.audioSources.theme,
            audioCtx: this.context.audioCtx,
            destination: this.themeGainNode,
            buffer: this.themeAudioBuffer,
            loop: true
        });
        this.loop.start();
    }

    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_6__lib_Audio__["a" /* default */].soundStop(this.audioSources.theme);
        this.loop.stop();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.root },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.version },
                'v' + __WEBPACK_IMPORTED_MODULE_7__constants_constants__["_10" /* GAME_VERSION */]
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
                            className: __WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menuButton + (menuItemActive === index ? ` ${__WEBPACK_IMPORTED_MODULE_0__startScreen_css___default.a.menuButtonActive}` : ''),
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

    handleStart() {
        this.props.onStart();
    }

    handleStartRandom() {
        this.props.onStartRandom();
    }

    loopCallback() {
        // keyboard
        if (this.state.screen !== SCREEN_DEFAULT && this.isKeyboardButtonPressed(__WEBPACK_IMPORTED_MODULE_7__constants_constants__["r" /* KEY_BACK */])) {
            this.setScreenDefault();
        }
        if (this.state.screen === SCREEN_DEFAULT && this.isKeyboardButtonPressed(__WEBPACK_IMPORTED_MODULE_7__constants_constants__["q" /* KEY_ENTER */])) {
            this.launchActiveAction();
        }

        // gamepad
        const gamepadStickLeftMoved = this.getGamepadLeftStickMove();
        if (this.state.screen !== SCREEN_DEFAULT) {
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_7__constants_constants__["c" /* XBOX_BUTTON_B */])) {
                this.setScreenDefault();
            }
        } else {
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_7__constants_constants__["a" /* XBOX_BUTTON_A */])) {
                this.launchActiveAction();
            }
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_7__constants_constants__["f" /* XBOX_BUTTON_CROSS_UP */]) || gamepadStickLeftMoved === -1) {
                this.setState({ menuItemActive: Math.max(0, this.state.menuItemActive - 1) });
            }
            if (this.isGamepadButtonPressed(__WEBPACK_IMPORTED_MODULE_7__constants_constants__["g" /* XBOX_BUTTON_CROSS_DOWN */]) || gamepadStickLeftMoved === 1) {
                this.setState({
                    menuItemActive: Math.min(this.state.menu.length - 1, this.state.menuItemActive + 1)
                });
            }
        }
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

    isKeyboardButtonPressed(code) {
        const isPressed = this.context.controls.keyPressed[code][0] === __WEBPACK_IMPORTED_MODULE_7__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.keyPressed[code][0] = __WEBPACK_IMPORTED_MODULE_7__constants_constants__["b" /* CONTROL_STATE */].DOWN;
        }
        return isPressed;
    }

    isGamepadButtonPressed(button) {
        const isPressed = this.context.controls.gamepadButtons[button][0] === __WEBPACK_IMPORTED_MODULE_7__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.gamepadButtons[button][0] = __WEBPACK_IMPORTED_MODULE_7__constants_constants__["b" /* CONTROL_STATE */].DOWN;
        }
        return isPressed;
    }

    getGamepadLeftStickMove() {
        if (this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_7__constants_constants__["h" /* XBOX_STICK_LEFT_AXIS_Y */]][0] === 1) {
            return this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_7__constants_constants__["h" /* XBOX_STICK_LEFT_AXIS_Y */]][2];
        }
        return 0;
    }
}

StartScreen.propTypes = {
    onStart: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    onStartRandom: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].func.isRequired,
    gamepadState: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
StartScreen.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    controls: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = StartScreen;

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(12);






const HANDLE_SIZE = [6, 40];

class Switcher extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["d" /* getTransformRule */])({
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
                { className: `${__WEBPACK_IMPORTED_MODULE_0_components_switcher_switcher_css___default.a.handle} obj` },
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Switcher;

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

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wall_css__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wall_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wall_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plain_plain__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_utils__ = __webpack_require__(12);






// no support for rotated walls for now
class Wall extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent {

    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_utils__["d" /* getTransformRule */])({ pos: this.posWithInvertedY });
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
/* harmony default export */ __webpack_exports__["a"] = Wall;

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const HINT_GOAL = '— Where am I? It\'s so dark here. I have to find the way out';
/* harmony export (immutable) */ __webpack_exports__["a"] = HINT_GOAL;

const HINT_FIRST_SWITCHER = '— What if I push this lever?';
/* harmony export (immutable) */ __webpack_exports__["h"] = HINT_FIRST_SWITCHER;

const HINT_DOOR = '— Sounds like the door opened somewhere';
/* harmony export (immutable) */ __webpack_exports__["i"] = HINT_DOOR;


const HINT_MOVE_KEYBOARD = '[[ Use `W`, `A`, `S`, `D` to move ]]';
/* harmony export (immutable) */ __webpack_exports__["d"] = HINT_MOVE_KEYBOARD;

const HINT_RUN_KEYBOARD = '[[ Hold `Shift` to run ]]';
/* harmony export (immutable) */ __webpack_exports__["e"] = HINT_RUN_KEYBOARD;

const HINT_INTERACT_KEYBOAD = '[[ Press `E` to interact ]]';
/* harmony export (immutable) */ __webpack_exports__["g"] = HINT_INTERACT_KEYBOAD;


const HINT_MOVE_GAMEPAD = '[[ Use left stick to move ]]';
/* harmony export (immutable) */ __webpack_exports__["b"] = HINT_MOVE_GAMEPAD;

const HINT_RUN_GAMEPAD = '[[ Hold right trigger to run ]]';
/* harmony export (immutable) */ __webpack_exports__["c"] = HINT_RUN_GAMEPAD;

const HINT_INTERACT_GAMEPAD = '[[ Press `X` on your gamepad to interact ]]';
/* harmony export (immutable) */ __webpack_exports__["f"] = HINT_INTERACT_GAMEPAD;


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_src_utils_storeShape__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_hints__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_DelayedActions__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_Loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_Collision__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_Audio__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actionCreators__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

















const EPSILON = 0.1;
const STICK_VALUE_THRESHOLD = 0.3;

class GameLoop extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.delayedActions = new __WEBPACK_IMPORTED_MODULE_6__lib_DelayedActions__["a" /* default */]();

        this.loop = new __WEBPACK_IMPORTED_MODULE_8__lib_Loop__["a" /* default */](this.loopCallback.bind(this), __WEBPACK_IMPORTED_MODULE_4__constants_constants__["T" /* FPS */]);

        this.shownHints = {};

        this.audioSources = {
            music: null
        };

        this.musicAudioBuffer = this.context.assets['src/containers/gameLoop/game-loop.m4a'];
        this.musicGainNode = this.context.audioCtx.createGain();
        this.musicGainNode.gain.value = 0.1;
        this.musicGainNode.connect(this.context.masterGain);
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
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["c" /* HINT_RUN_GAMEPAD */]], true, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["U" /* HINT_SHOW_TIME */]),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["U" /* HINT_SHOW_TIME */]
            });
        } else {
            this.delayedActions.pushAction({
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["a" /* HINT_GOAL */], __WEBPACK_IMPORTED_MODULE_5__constants_hints__["d" /* HINT_MOVE_KEYBOARD */]], true),
                delay: 0
            });
            this.delayedActions.pushAction({
                action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["e" /* HINT_RUN_KEYBOARD */]], true, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["U" /* HINT_SHOW_TIME */]),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["U" /* HINT_SHOW_TIME */]
            });
        }
        this.loop.start();
        this.soundStartMusic();
    }

    componentWillUnmount() {
        this.loop.stop();
        this.delayedActions.clear();
        this.shownHints = {};
        this.soundStopMusic();
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
    }

    loopCallback(frameRateCoefficient) {
        const actions = this.delayedActions.getActualActions();

        const newState = {};
        const currentStore = this.context.store.getState();

        // check exit
        if (this.context.controls.keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["o" /* KEY_QUIT_GAME */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN || this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["e" /* XBOX_BUTTON_BACK */]][0] === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].FIRST_TIME_DOWN) {
            this.props.onExit();
            return;
        }
        if (currentStore.playerHealth === 0) {
            this.props.onLoose();
            return;
        }

        let gamepadSnapshot;
        if (currentStore.gamepad.state !== -1) {
            gamepadSnapshot = navigator.getGamepads()[currentStore.gamepad.state];
        }

        // get new view angle
        // try gamepad
        if (gamepadSnapshot) {
            const currentViewAngle = currentStore.playerViewAngle;
            const x = GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["i" /* XBOX_STICK_RIGHT_AXIS_X */]]);
            const y = GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["V" /* XBOX_STICK_RIGHT_AXIS_Y */]]);
            if (x || y) {
                const newViewAngle = [(currentViewAngle[0] + x * currentStore.settings.stickSensitivity) % 360, Math.min(Math.max(currentViewAngle[1] - y * currentStore.settings.stickSensitivity, -90), 90), 0];
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].updateViewAngle(newViewAngle));
                newState.viewAngle = newViewAngle;
            }
        }

        // try mouse
        const pointerDelta = currentStore.pointerDelta;
        if (pointerDelta.x || pointerDelta.y) {
            const currentViewAngle = newState.viewAngle || currentStore.playerViewAngle;
            const newViewAngle = [(currentViewAngle[0] - pointerDelta.x * currentStore.settings.mouseSensitivity) % 360, Math.min(Math.max(currentViewAngle[1] + pointerDelta.y * currentStore.settings.mouseSensitivity, -90), 90), 0];
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].updateViewAngle(newViewAngle));
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["a" /* game */].resetPointerDelta());
            newState.viewAngle = newViewAngle;
        }

        // get player position shift
        let angleShift = [];
        let step = 0;
        let isRunning = false;

        // try gamepad
        if (gamepadSnapshot) {
            const x = GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["W" /* XBOX_STICK_LEFT_AXIS_X */]]);
            // convert -0 to 0 by adding 0
            const z = -GameLoop.filterStickValue(gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["h" /* XBOX_STICK_LEFT_AXIS_Y */]]) + 0;
            if (x || z) {
                if (gamepadSnapshot.axes[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["X" /* XBOX_TRIGGER_RIGHT_AXIS */]] >= 0.5) {
                    isRunning = true;
                }
                step = Math.hypot(x, z);
                if (z >= 0) {
                    angleShift.push(Math.atan(x / z));
                } else {
                    angleShift.push(Math.atan(x / z) + Math.PI);
                }
            }
        }

        const keyPressed = this.context.controls.keyPressed;
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["j" /* KEY_FORWARD */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
            angleShift.push(0);
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["k" /* KEY_BACKWARD */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
            angleShift.push(Math.PI);
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["m" /* KEY_RIGHT */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
            angleShift.push(Math.PI / 2);
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["l" /* KEY_LEFT */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
            // hack for angles sum
            if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["j" /* KEY_FORWARD */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
                angleShift.push(-Math.PI / 2);
            } else {
                angleShift.push(3 * Math.PI / 2);
            }
            step = Math.max(step, 1);
        }
        if (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["p" /* KEY_RUN */]][0] !== __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED) {
            isRunning = true;
        }

        // can't run if health level is too low
        if (currentStore.playerHealth < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["Y" /* PLAYER_HEALTH_LOW */]) {
            isRunning = false;
        }

        // get new player state
        if (angleShift.length) {
            if (isRunning) {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].run());
            } else {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].walk());
            }
        } else {
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].stop());
        }

        // get new player position
        if (angleShift.length) {
            let angleShiftSum = 0;
            for (let i = 0; i < angleShift.length; i++) {
                angleShiftSum = angleShiftSum + angleShift[i];
            }
            angleShiftSum = angleShiftSum / angleShift.length;

            angleShiftSum = angleShiftSum + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["g" /* convertDegreeToRad */])(currentStore.playerViewAngle[0]);

            step = step * frameRateCoefficient * (isRunning ? __WEBPACK_IMPORTED_MODULE_4__constants_constants__["Z" /* PLAYER_RUNNING_COEFF */] : 1) * __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_0" /* PLAYER_SPEED */];
            const shift = GameLoop.getShift2d(angleShiftSum, step);
            const newPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["f" /* vectorsAdd3D */])(currentStore.pos, shift);
            const objects = currentStore.objects;
            const collisions = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getCollisions([currentStore.pos, newPos], objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* BROAD_CELL_SIZE */]);
            // get last collision result as new player position
            const newPosAfterCollisions = collisions[collisions.length - 1].newPos;
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].updatePosition(newPosAfterCollisions));
            newState.pos = newPosAfterCollisions;
        }

        if (newState.pos) {
            // if out of bounds - win
            for (let i = 0; i < 3; i++) {
                if (currentStore.level.boundaries[i]) {
                    if (newState.pos[i] < 0 || newState.pos[i] > currentStore.level.boundaries[i]) {
                        this.props.onWin();
                        return;
                    }
                }
            }

            // render only visible objects
            const { addVisibleObjects, removeVisibleObjects } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["h" /* getVisibleObjects */])(newState.pos, currentStore.objects);
            if (Object.keys(addVisibleObjects).length || Object.keys(removeVisibleObjects).length) {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["e" /* objects */].setVisible({ addVisibleObjects, removeVisibleObjects }));
            }
        }

        // find interactive object which we can reach with a hand
        let reachableObject;
        if (newState.pos || newState.viewAngle) {
            const playerPosition = newState.pos || currentStore.pos;
            const viewAngle = newState.viewAngle || currentStore.playerViewAngle;
            const collisionView = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getCollisionView([playerPosition, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["c" /* getPointPosition */])({ pos: playerPosition, distance: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["K" /* PLAYER_HAND_LENGTH */], angle: viewAngle })], currentStore.objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* BROAD_CELL_SIZE */]);
            if (collisionView && collisionView.obj.isInteractive) {
                reachableObject = collisionView.obj;
                if (!reachableObject.isReachable) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["e" /* objects */].setReachable(_extends({}, reachableObject)));
                    actions.push(this.showHints([gamepadSnapshot ? __WEBPACK_IMPORTED_MODULE_5__constants_hints__["f" /* HINT_INTERACT_GAMEPAD */] : __WEBPACK_IMPORTED_MODULE_5__constants_hints__["g" /* HINT_INTERACT_KEYBOAD */]], false));
                    actions.push(this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["h" /* HINT_FIRST_SWITCHER */]], true));
                }
            } else {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["e" /* objects */].setReachable(null));
            }
        } else {
            reachableObject = currentStore.objects.find(obj => obj.isReachable);
        }

        // perform interaction if key is pressed
        if (reachableObject && (keyPressed[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["n" /* KEY_INTERACT */]][0] > __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED || this.context.controls.gamepadButtons[__WEBPACK_IMPORTED_MODULE_4__constants_constants__["d" /* XBOX_BUTTON_X */]][0] > __WEBPACK_IMPORTED_MODULE_4__constants_constants__["b" /* CONTROL_STATE */].UNUSED)) {
            if (reachableObject.type === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["I" /* SWITCHER_TYPE */]) {
                const door = currentStore.doorsState[reachableObject.props.id];
                if (![__WEBPACK_IMPORTED_MODULE_4__constants_constants__["M" /* DOOR_STATE_OPENING */], __WEBPACK_IMPORTED_MODULE_4__constants_constants__["O" /* DOOR_STATE_CLOSING */]].includes(door)) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* doorsState */][door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["L" /* DOOR_STATE_OPEN */] ? 'setClosing' : 'setOpening'](reachableObject.props.id));
                    this.delayedActions.pushAction({
                        action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["f" /* doorsState */][door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["L" /* DOOR_STATE_OPEN */] ? 'setClose' : 'setOpen'](reachableObject.props.id),
                        delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["P" /* DOOR_OPEN_TIME */]
                    });
                    if (door === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["H" /* DOOR_STATE_CLOSE */]) {
                        this.delayedActions.pushAction({
                            action: this.showHints([__WEBPACK_IMPORTED_MODULE_5__constants_hints__["i" /* HINT_DOOR */]], false, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["P" /* DOOR_OPEN_TIME */]),
                            delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["P" /* DOOR_OPEN_TIME */]
                        });
                    }
                }
            }
        }

        // enemy
        if (![__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].LIMBO, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].REST].includes(currentStore.enemy.state)) {
            const playerPosition = newState.pos || currentStore.pos;
            const distanceToPlayer = GameLoop.getDistance2d(currentStore.enemy.position, playerPosition);
            const directionToPlayer = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getDirection2d(currentStore.enemy.position, playerPosition);
            const canSeeEachOther = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getCollisionView([currentStore.enemy.position, playerPosition], currentStore.objects, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* BROAD_CELL_SIZE */]) === null;
            actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setVisibility(canSeeEachOther));
            if (canSeeEachOther && (
            // if player is too close
            distanceToPlayer < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_1" /* ENEMY_ATTACK_DISTANCE */] ||
            // if player is close and in sight
            distanceToPlayer < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_2" /* ENEMY_ATTACK_DISTANCE_VISIBLE */] && Math.abs(directionToPlayer - currentStore.enemy.direction) < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_3" /* ENEMY_VIEW_ANGLE_RAD */] / 2)) {
                // if enemy is not already attacking
                if ([__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].WANDER, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].STOP].includes(currentStore.enemy.state)) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].ATTACK));
                }
            } else if (currentStore.enemy.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].ATTACK) {
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].WANDER));
                const newTarget = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getRandomFreeCell({
                    pos: currentStore.enemy.position,
                    direction: currentStore.enemy.direction,
                    objects: currentStore.objects,
                    broadCellSize: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* BROAD_CELL_SIZE */],
                    boundaries: currentStore.level.boundaries,
                    previous: currentStore.enemy.target.from
                });
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setTarget(newTarget));
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setDirection(__WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getDirection2d(currentStore.enemy.position, newTarget)));
            }
            if (currentStore.enemy.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].WANDER) {
                let directionToTarget;
                // if enemy reached it's current target
                if (GameLoop.getDistance2d(currentStore.enemy.position, currentStore.enemy.target) < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_4" /* ENEMY_TARGET_REACH_THRESHOLD */]) {
                    const newTarget = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getRandomFreeCell({
                        pos: currentStore.enemy.position,
                        direction: currentStore.enemy.direction,
                        objects: currentStore.objects,
                        broadCellSize: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["J" /* BROAD_CELL_SIZE */],
                        boundaries: currentStore.level.boundaries
                    });
                    directionToTarget = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getDirection2d(currentStore.enemy.position, newTarget);
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setTarget(newTarget));
                    // stop for a while if direction has changed
                    if (!GameLoop.floatsEqual(directionToTarget, currentStore.enemy.direction)) {
                        actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].STOP));
                        actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setDirection(directionToTarget));
                        this.delayedActions.pushAction({
                            action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].WANDER),
                            delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_5" /* ENEMY_CHANGE_TARGET_TIME */]
                        });
                    }
                }
                if (!directionToTarget) {
                    directionToTarget = __WEBPACK_IMPORTED_MODULE_9__lib_Collision__["a" /* default */].getDirection2d(currentStore.enemy.position, currentStore.enemy.target);
                }
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setDirection(directionToTarget));
                actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setPosition(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["f" /* vectorsAdd3D */])(currentStore.enemy.position, GameLoop.getShift2d(directionToTarget, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_6" /* ENEMY_SPEED */] * frameRateCoefficient))));
            } else if (currentStore.enemy.state === __WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].ATTACK) {
                if (distanceToPlayer < __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_7" /* ENEMY_DAMAGE_DISTANCE */]) {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["d" /* player */].reduceHealth(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["_8" /* ENEMY_DAMAGE */]));
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].REST));
                    this.delayedActions.pushAction({
                        action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setState(__WEBPACK_IMPORTED_MODULE_4__constants_constants__["A" /* ENEMY_STATE */].WANDER),
                        delay: 3000
                    });
                } else {
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setDirection(directionToPlayer));
                    actions.push(__WEBPACK_IMPORTED_MODULE_11__actionCreators__["g" /* enemy */].setPosition(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_utils__["f" /* vectorsAdd3D */])(currentStore.enemy.position, GameLoop.getShift2d(directionToPlayer, __WEBPACK_IMPORTED_MODULE_4__constants_constants__["_9" /* ENEMY_SPEED_RUNNING */] * frameRateCoefficient))));
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
                action: __WEBPACK_IMPORTED_MODULE_11__actionCreators__["h" /* hints */].removeHints(rawHints),
                delay: __WEBPACK_IMPORTED_MODULE_4__constants_constants__["U" /* HINT_SHOW_TIME */] + delay
            });
        }
        return __WEBPACK_IMPORTED_MODULE_11__actionCreators__["h" /* hints */].addHints(rawHints);
    }

    soundStartMusic() {
        this.audioSources.music = __WEBPACK_IMPORTED_MODULE_10__lib_Audio__["a" /* default */].soundStart({
            audioSource: this.audioSources.music,
            audioCtx: this.context.audioCtx,
            destination: this.musicGainNode,
            buffer: this.musicAudioBuffer,
            loop: true
        });
    }

    soundStopMusic() {
        __WEBPACK_IMPORTED_MODULE_10__lib_Audio__["a" /* default */].soundStop(this.audioSources.music);
    }

    static filterStickValue(value) {
        return Math.abs(value) >= STICK_VALUE_THRESHOLD ? value : 0;
    }

    static getDistance2d(p1, p2) {
        return Math.hypot(p1[0] - p2[0], p1[2] - p2[2]);
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
    controls: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    audioCtx: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(GameLoop);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_css__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__player_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_Audio__ = __webpack_require__(20);








class Player extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        this.audioSources = {
            steps: null,
            scream: null
        };

        this.walkingAudioBuffer = this.context.assets['src/containers/player/steps-walking.m4a'];
        this.runnningAudioBuffer = this.context.assets['src/containers/player/steps-running.m4a'];
        this.screamAudioBuffer = this.context.assets['src/containers/player/scream.m4a'];

        this.stepsPanner = __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].createPanner({
            audioCtx: this.context.audioCtx
        });
        this.stepsPanner.connect(this.context.masterGain);

        this.screamGainNode = this.context.audioCtx.createGain();
        this.screamGainNode.gain.value = 0.5;
        this.screamGainNode.connect(this.context.masterGain);

        this.updateListenerPosition(this.props.position);
        this.updateListenerOrientation(this.props.viewAngle);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.position && this.props.position !== nextProps.position) {
            this.updatePannerPosition(nextProps.position);
            this.updateListenerPosition(nextProps.position);
        }

        if (nextProps.viewAngle && this.props.viewAngle !== nextProps.viewAngle) {
            this.updateListenerOrientation(nextProps.viewAngle);
        }

        if (nextProps.state && this.props.state !== nextProps.state) {
            switch (nextProps.state) {
                case __WEBPACK_IMPORTED_MODULE_3__constants_constants__["R" /* PLAYER_STATE_WALK */]:
                    this.soundStartSteps(this.walkingAudioBuffer, 'steps');
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__constants_constants__["S" /* PLAYER_STATE_RUN */]:
                    this.soundStartSteps(this.runnningAudioBuffer, 'steps');
                    break;
                default:
                    this.soundStopSteps();
            }
        }

        if (nextProps.health < this.props.health && nextProps.health !== 0) {
            this.audioSources.scream = __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].soundStart({
                audioSource: this.audioSources.scream,
                audioCtx: this.context.audioCtx,
                destination: this.screamGainNode,
                buffer: this.screamAudioBuffer
            });
        }
    }

    componentWillUnmount() {
        this.soundStop();
    }

    render() {
        const { children, state, viewAngle } = this.props;
        const playerClassName = ['obj player-animation', state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["R" /* PLAYER_STATE_WALK */] ? __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.playerAnimationWalking : state === __WEBPACK_IMPORTED_MODULE_3__constants_constants__["S" /* PLAYER_STATE_RUN */] ? __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.playerAnimationRunning : ''].join(' ');
        const cameraTransformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_utils__["d" /* getTransformRule */])({
            pos: [0, 0, 600],
            angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
        });

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_0__player_css___default.a.root, style: cameraTransformRule },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: playerClassName },
                children
            )
        );
    }

    soundStartSteps(decodedAudioBuffer) {
        this.audioSources.steps = __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].soundStart({
            audioSource: this.audioSources.steps,
            audioCtx: this.context.audioCtx,
            destination: this.stepsPanner,
            buffer: decodedAudioBuffer,
            loop: true
        });
    }

    soundStopSteps() {
        __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].soundStop(this.audioSources.steps);
    }

    soundStop() {
        for (let audioSource in this.audioSources) {
            if (this.audioSources.hasOwnProperty(audioSource)) {
                __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].soundStop(this.audioSources[audioSource]);
            }
        }
    }

    updatePannerPosition(pos) {
        __WEBPACK_IMPORTED_MODULE_5__lib_Audio__["a" /* default */].setPannerPosition(this.stepsPanner, [pos[0], 0, pos[2]]);
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
        const y = Math.sin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_utils__["g" /* convertDegreeToRad */])(verticalAngle));
        const xzProjectionDist = Math.sqrt(1 - y * y);
        const x = Math.sin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_utils__["g" /* convertDegreeToRad */])(horizontalAngle)) * xzProjectionDist;
        let z = Math.sqrt(xzProjectionDist ** 2 - x ** 2);
        if (Math.abs(horizontalAngle) < 90 || Math.abs(horizontalAngle) > 270) {
            z = -z;
        }
        return [x, y, z];
    }
}

Player.propTypes = {
    position: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    viewAngle: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number).isRequired,
    state: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].string.isRequired,
    health: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].number.isRequired
};
Player.contextTypes = {
    audioCtx: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    masterGain: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired,
    assets: __WEBPACK_IMPORTED_MODULE_1_react__["PropTypes"].object.isRequired
};
function mapStateToProps(state) {
    return {
        position: state.pos,
        viewAngle: state.playerViewAngle,
        state: state.playerState,
        health: state.playerHealth
    };
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Player);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_painting_painting__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_floor_floor__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ceiling_ceiling__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_wall_wall__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_box_box__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_switcher_switcher__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_door_door__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_enemy_enemy__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };















function Scene({ pos, viewAngle, enemy, doorsState, visibleObjects, graphicsQuality }) {
    const transformRule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_utils__["d" /* getTransformRule */])({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const renderedObjects = [];
    for (let i = 0; i < visibleObjects.length; i++) {
        const object = visibleObjects[i];
        switch (object.type) {
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["z" /* PAINTING_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_painting_painting__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    angle: object.angle,
                    size: object.size.filter(value => value !== 0).slice(0, 2),
                    alias: object.props.alias
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["C" /* FLOOR_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_floor_floor__["a" /* default */], {
                    key: object.name,
                    name: object.name,
                    pos: object.pos,
                    playerPos: pos,
                    size: object.size,
                    graphicsQuality: graphicsQuality
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["D" /* CEILING_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ceiling_ceiling__["a" /* default */], {
                    key: object.name,
                    pos: object.pos,
                    size: [object.size[0], object.size[2]]
                }));
                break;
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["E" /* WALL_TYPE */]:
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
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["F" /* BOX_TYPE */]:
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
            case __WEBPACK_IMPORTED_MODULE_11__constants_constants__["I" /* SWITCHER_TYPE */]:
                renderedObjects.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_switcher_switcher__["a" /* default */], {
                    key: object.name,
                    name: object.name,
                    pos: object.pos,
                    size: object.size,
                    angle: object.angle,
                    playerPos: pos,
                    isReachable: object.isReachable,
                    isInteractive: [__WEBPACK_IMPORTED_MODULE_11__constants_constants__["L" /* DOOR_STATE_OPEN */], __WEBPACK_IMPORTED_MODULE_11__constants_constants__["H" /* DOOR_STATE_CLOSE */]].includes(doorsState[object.props.id]),
                    isOn: [__WEBPACK_IMPORTED_MODULE_11__constants_constants__["L" /* DOOR_STATE_OPEN */], __WEBPACK_IMPORTED_MODULE_11__constants_constants__["M" /* DOOR_STATE_OPENING */]].includes(doorsState[object.props.id]),
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
    if (enemy.state !== __WEBPACK_IMPORTED_MODULE_11__constants_constants__["A" /* ENEMY_STATE */].LIMBO) {
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
        viewAngle: state.playerViewAngle,
        enemy: state.enemy,
        visibleObjects: state.objects.filter(obj => {
            if (obj.type === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["z" /* PAINTING_TYPE */] && state.graphicsQuality === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["N" /* GRAPHICS_QUALITY */].LOW) {
                return false;
            }
            return obj.isVisible || obj.type === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["G" /* DOOR_TYPE */] || obj.type === __WEBPACK_IMPORTED_MODULE_11__constants_constants__["F" /* BOX_TYPE */];
        }),
        doorsState: state.doorsState,
        graphicsQuality: state.settings.graphicsQuality
    };
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Scene);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_css__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__settings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_Loop__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(6);









class Settings extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new __WEBPACK_IMPORTED_MODULE_5__lib_Loop__["a" /* default */](this.loopCallback.bind(this));

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
                        item.id === 'graphicsQuality' && value === __WEBPACK_IMPORTED_MODULE_6__constants_constants__["N" /* GRAPHICS_QUALITY */].ULTRA ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
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
        if (this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["h" /* XBOX_STICK_LEFT_AXIS_Y */]][0] === 1) {
            return this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["h" /* XBOX_STICK_LEFT_AXIS_Y */]][2];
        }
        return 0;
    }

    getGamepadRightStickMove() {
        if (this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["i" /* XBOX_STICK_RIGHT_AXIS_X */]][0] === 1) {
            return this.context.controls.gamepadAxesUnit[__WEBPACK_IMPORTED_MODULE_6__constants_constants__["i" /* XBOX_STICK_RIGHT_AXIS_X */]][2];
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
        setVolume: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["i" /* settings */].setVolume,
        setGraphicsQuality: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["i" /* settings */].setGraphicsQuality,
        setMouseSensitivity: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["i" /* settings */].setMouseSensitivity,
        setStickSensitivity: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["i" /* settings */].setStickSensitivity
    }, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Settings);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_css__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__viewport_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(16);
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
        updatePointerDelta: __WEBPACK_IMPORTED_MODULE_4__actionCreators__["a" /* game */].updatePointerDelta
    }, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, mapDispatchToProps)(Viewport);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_LevelGenerator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);



const level = {
    boundaries: [2500, null, 2500],
    player: {
        pos: [1250, __WEBPACK_IMPORTED_MODULE_1__constants_constants__["x" /* PLAYER_SIZE */].HEIGHT, 250],
        size: [__WEBPACK_IMPORTED_MODULE_1__constants_constants__["x" /* PLAYER_SIZE */].WIDTH, __WEBPACK_IMPORTED_MODULE_1__constants_constants__["x" /* PLAYER_SIZE */].HEIGHT, __WEBPACK_IMPORTED_MODULE_1__constants_constants__["x" /* PLAYER_SIZE */].DEPTH],
        angle: [0, 0, 0],
        health: 100
    },
    enemy: {
        state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["A" /* ENEMY_STATE */].LIMBO,
        isVisible: false,
        position: [1250, 70, 750],
        target: [1250, 0, 750],
        direction: 0,
        props: {
            triggerDoorId: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["B" /* ENEMY_TRIGGER_DOOR_ID */]
        }
    },
    objects: [{
        name: 'wall_001',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [2000, 125, 250]
    }, {
        name: 'wall_002',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [250, 125, 500]
    }, {
        name: 'wall_003',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [750, 125, 500]
    }, {
        name: 'wall_004',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [1750, 125, 500]
    }, {
        name: 'wall_005',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 750]
    }, {
        name: 'wall_006',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [2000, 125, 750]
    }, {
        name: 'wall_007',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1250, 125, 1000],
        props: {
            mode: 2
        }
    }, {
        name: 'wall_008',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 450],
        pos: [1000, 125, 1250],
        props: {
            mode: 2
        }
    }, {
        name: 'wall_009',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1250, 125, 1500],
        props: {
            mode: 2
        }
    }, {
        name: 'wall_010',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [2225, 125, 1500],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_011',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 1750],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_012',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 450],
        pos: [2000, 125, 1750],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_013',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [500, 250, 50],
        pos: [750, 125, 2000],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_014',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [550, 250, 50],
        pos: [1750, 125, 2000],
        props: {
            mode: 3
        }
    }, {
        name: 'wall_015',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
        size: [50, 250, 500],
        pos: [500, 125, 2250],
        props: {
            mode: 3
        }
    }, {
        name: 'box_001',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [200, 75, 200],
        props: {
            mode: 1,
            inhabited: 1
        }
    }, {
        name: 'box_002',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [50, 50, 50],
        pos: [175, 175, 175],
        props: {
            mode: 2
        }
    }, {
        name: 'box_003',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [2100, 75, 500],
        props: {
            mode: 3,
            inhabited: 2
        }
    }, {
        name: 'box_004',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [1300, 75, 899],
        props: {
            mode: 2,
            inhabited: 1,
            triggerDoorId: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["B" /* ENEMY_TRIGGER_DOOR_ID */]
        }
    }, {
        name: 'box_005',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [150, 150, 150],
        pos: [2110, 75, 1975],
        props: {
            mode: 1,
            inhabited: 2
        }
    }, {
        name: 'box_006',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [100, 150, 100],
        pos: [900, 75, 2400],
        props: {
            mode: 2
        }
    }, {
        name: 'box_007',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["F" /* BOX_TYPE */],
        size: [90, 70, 90],
        pos: [900, 185, 2390],
        props: {
            mode: 3
        }
    }, {
        name: 'painting_' + __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].ESCAPE.alias,
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* PAINTING_TYPE */],
        size: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].ESCAPE.size,
        pos: [350, 125, 51],
        angle: [0, 0, 0],
        props: {
            alias: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].ESCAPE.alias
        },
        collides: false
    }, {
        name: 'painting_' + __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].GIVE_UP.alias,
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* PAINTING_TYPE */],
        size: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].GIVE_UP.size,
        pos: [1974, 125, 250],
        angle: [0, -90, 0],
        props: {
            alias: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].GIVE_UP.alias
        },
        collides: false
    }, {
        name: 'painting_' + __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].FOREVER.alias,
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* PAINTING_TYPE */],
        size: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].FOREVER.size,
        pos: [1250, 125, 1474],
        angle: [0, 180, 0],
        props: {
            alias: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].FOREVER.alias
        },
        collides: false
    }, {
        name: 'painting_' + __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].EASTER.alias,
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* PAINTING_TYPE */],
        size: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].EASTER.size,
        pos: [51, 90, 200],
        angle: [0, 90, 0],
        props: {
            alias: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].EASTER.alias
        },
        collides: false
    }, {
        name: 'painting_' + __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].RED_WALL.alias,
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* PAINTING_TYPE */],
        size: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].RED_WALL.size,
        pos: [974, 130, 1300],
        angle: [0, -90, 0],
        props: {
            alias: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].RED_WALL.alias
        },
        collides: false
    }, {
        name: 'painting_' + __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].GAME.alias,
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["z" /* PAINTING_TYPE */],
        size: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].GAME.size,
        pos: [2449, 150, 1250],
        angle: [0, -90, 0],
        props: {
            alias: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["y" /* PAINTINGS */].GAME.alias
        },
        collides: false
    }, {
        name: 'switcher_01',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["I" /* SWITCHER_TYPE */],
        pos: [1027, 150, 1250],
        size: [40, 60, 100],
        angle: [0, 90, 0],
        props: {
            id: 1
        },
        isInteractive: true
    }, {
        name: 'door_01',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [250, 125, 975],
        props: {
            id: 1,
            state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["H" /* DOOR_STATE_CLOSE */]
        }
    }, {
        name: 'switcher_02',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["I" /* SWITCHER_TYPE */],
        pos: [250, 150, 526],
        size: [40, 60, 100],
        angle: [0, 0, 0],
        props: {
            id: 2
        },
        isInteractive: true
    }, {
        name: 'door_02',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [2250, 125, 975],
        props: {
            id: 2,
            state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["H" /* DOOR_STATE_CLOSE */]
        }
    }, {
        name: 'switcher_03',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["I" /* SWITCHER_TYPE */],
        pos: [2026, 150, 250],
        size: [40, 60, 100],
        angle: [0, 90, 0],
        props: {
            id: 3
        },
        isInteractive: true
    }, {
        name: 'door_03',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [250, 125, 1525],
        props: {
            id: 3,
            state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["H" /* DOOR_STATE_CLOSE */]
        }
    }, {
        name: 'switcher_04',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["I" /* SWITCHER_TYPE */],
        pos: [250, 150, 2449],
        size: [40, 60, 100],
        angle: [0, 180, 0],
        props: {
            id: 4
        },
        isInteractive: true
    }, {
        name: 'door_04',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["G" /* DOOR_TYPE */],
        size: [20, 250, 500],
        pos: [1500, 125, 2250],
        props: {
            id: 4,
            state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["H" /* DOOR_STATE_CLOSE */]
        }
    }, {
        name: 'switcher_05',
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["I" /* SWITCHER_TYPE */],
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
        type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["G" /* DOOR_TYPE */],
        size: [500, 250, 20],
        pos: [1250, 125, 25],
        props: {
            id: 5,
            state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["H" /* DOOR_STATE_CLOSE */]
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
            type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
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
            type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["E" /* WALL_TYPE */],
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

// generate floor and ceiling panels
for (let z = 0; z < level.boundaries[2]; z += 500) {
    for (let x = 0; x < level.boundaries[0]; x += 500) {
        level.objects.push({
            name: 'floor_tile_' + z + '_' + x,
            type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["C" /* FLOOR_TYPE */],
            size: [500, 0, 500],
            pos: [x + 250, 0, z + 250],
            collides: false
        });
        level.objects.push({
            name: 'ceiling_tile_' + z + '_' + x,
            type: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["D" /* CEILING_TYPE */],
            size: [500, 0, 500],
            pos: [x + 250, 250, z + 250],
            collides: false
        });
    }
}

// calculate 2d points coordinates for objects hitboxes
__WEBPACK_IMPORTED_MODULE_0__lib_LevelGenerator__["a" /* default */].addHitbox(level);

level.objects = JSON.stringify(level.objects);

/* harmony default export */ __webpack_exports__["a"] = level;

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

    /**
     * Clears delayed actions list
     */
    clear() {
        this.delayedActions = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DelayedActions;


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = doorsState;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function doorsState(state = {}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["n" /* DOOR_SET_CLOSING */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_0__constants_constants__["O" /* DOOR_STATE_CLOSING */]
            });
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["o" /* DOOR_SET_OPENING */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_0__constants_constants__["M" /* DOOR_STATE_OPENING */]
            });
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["p" /* DOOR_SET_CLOSE */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_0__constants_constants__["H" /* DOOR_STATE_CLOSE */]
            });
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["q" /* DOOR_SET_OPEN */]:
            return _extends({}, state, {
                [action.id]: __WEBPACK_IMPORTED_MODULE_0__constants_constants__["L" /* DOOR_STATE_OPEN */]
            });
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* LEVEL_SET */]:
            return JSON.parse(action.level.objects).filter(obj => obj.type === __WEBPACK_IMPORTED_MODULE_0__constants_constants__["G" /* DOOR_TYPE */]).reduce((result, obj) => {
                result[obj.props.id] = obj.props.state;
                return result;
            }, {});
        default:
            return state;
    }
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = enemy;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function enemy(state = {}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["d" /* ENEMY_SET_STATE */]:
            return _extends({}, state, {
                state: action.state
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["b" /* ENEMY_SET_POSITION */]:
            return _extends({}, state, {
                position: action.position
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["e" /* ENEMY_SET_DIRECTION */]:
            return _extends({}, state, {
                direction: action.direction
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["c" /* ENEMY_SET_TARGET */]:
            return _extends({}, state, {
                target: action.target
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["f" /* ENEMY_SET_VISIBILITY */]:
            return _extends({}, state, {
                isVisible: action.isVisible
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["q" /* DOOR_SET_OPEN */]:
            if (state.state === __WEBPACK_IMPORTED_MODULE_1__constants_constants__["A" /* ENEMY_STATE */].LIMBO && state.props.triggerDoorId === action.id) {
                return _extends({}, state, {
                    state: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["A" /* ENEMY_STATE */].WANDER
                });
            }
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* LEVEL_SET */]:
            return _extends({}, action.level.enemy, {
                position: [...action.level.enemy.position],
                target: [...action.level.enemy.target]
            });
        default:
            return state;
    }
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = gameState;



function gameState(state = __WEBPACK_IMPORTED_MODULE_1__constants_constants__["v" /* GAME_STATE_LOADING */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["z" /* GAME_SET_STATE_START */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["s" /* GAME_STATE_START */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["A" /* GAME_SET_STATE_PLAY */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["w" /* GAME_STATE_PLAY */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["B" /* GAME_SET_STATE_WIN */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["t" /* GAME_STATE_WIN */];
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["C" /* GAME_SET_STATE_LOOSE */]:
            return __WEBPACK_IMPORTED_MODULE_1__constants_constants__["u" /* GAME_STATE_LOOSE */];
        default:
            return state;
    }
}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(17);



function gamepadState(state = -1, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["k" /* GAMEPAD_SET_STATE */]:
            return action.index;
        default:
            return state;
    }
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    state: gamepadState
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = hints;


function hints(state = new Map(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["l" /* HINTS_ADD */]:
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
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["m" /* HINTS_REMOVE */]:
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
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["z" /* GAME_SET_STATE_START */]:
            return new Map();
        default:
            return state;
    }
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = level;


function level(state = {}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* LEVEL_SET */]:
            return action.level;
        default:
            return state;
    }
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = objects;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




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

function objects(state = [], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["r" /* OBJECTS_SET_VISIBLE */]:
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
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["s" /* OBJECTS_SET_REACHABLE */]:
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
                    if (object.type === __WEBPACK_IMPORTED_MODULE_0__constants_constants__["F" /* BOX_TYPE */] && object.props.triggerDoorId === action.id) {
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
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["a" /* LEVEL_SET */]:
            {
                return JSON.parse(action.level.objects);
            }
        default:
            return state;
    }
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = playerHealth;


function playerHealth(state = 100, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["v" /* PLAYER_REDUCE_HEALTH */]:
            return Math.max(0, state - action.value);
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* LEVEL_SET */]:
            return action.level.player.health;
        default:
            return state;
    }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = playerPosition;


function playerPosition(state = [0, 0, 0], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["u" /* PLAYER_UPDATE_POSITION */]:
            return action.pos;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* LEVEL_SET */]:
            return [...action.level.player.pos];
        default:
            return state;
    }
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = playerState;



function playerState(state = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["_11" /* PLAYER_STATE_STOP */], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["y" /* PLAYER_SET_STATE_STOP */]:
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["z" /* GAME_SET_STATE_START */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["_11" /* PLAYER_STATE_STOP */];
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["x" /* PLAYER_SET_STATE_WALK */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["R" /* PLAYER_STATE_WALK */];
        case __WEBPACK_IMPORTED_MODULE_1__constants_actionNames__["w" /* PLAYER_SET_STATE_RUN */]:
            return __WEBPACK_IMPORTED_MODULE_0__constants_constants__["S" /* PLAYER_STATE_RUN */];
        default:
            return state;
    }
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = playerViewAngle;


function playerViewAngle(state = [0, 0, 0], action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["t" /* PLAYER_UPDATE_VIEW_ANGLE */]:
            return action.viewAngle;
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["a" /* LEVEL_SET */]:
            return [...action.level.player.angle];
        default:
            return state;
    }
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = pointerDelta;


function getInitialState() {
    return { x: 0, y: 0 };
}

function pointerDelta(state = getInitialState(), action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["D" /* GAME_UPDATE_POINTER_DELTA */]:
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["E" /* GAME_RESET_POINTER_DELTA */]:
            return getInitialState();
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["z" /* GAME_SET_STATE_START */]:
            return getInitialState();
        default:
            return state;
    }
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = settings;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function settings(state = {
    soundVolume: 1,
    graphicsQuality: __WEBPACK_IMPORTED_MODULE_1__constants_constants__["N" /* GRAPHICS_QUALITY */].NORMAL,
    mouseSensitivity: 0.5,
    stickSensitivity: 2
}, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["g" /* SETTINGS_SET_VOLUME */]:
            return _extends({}, state, {
                soundVolume: action.value
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["h" /* SETTINGS_SET_GRAPHICS_QUALITY */]:
            return _extends({}, state, {
                graphicsQuality: action.value
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["i" /* SETTINGS_SET_MOUSE_SENSITIVITY */]:
            return _extends({}, state, {
                mouseSensitivity: action.value
            });
        case __WEBPACK_IMPORTED_MODULE_0__constants_actionNames__["j" /* SETTINGS_SET_STICK_SENSITIVITY */]:
            return _extends({}, state, {
                stickSensitivity: action.value
            });
        default:
            return state;
    }
}

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"box-quality-0-3Z4s3","mode-1":"box-mode-1-2_ljJ","mode-2":"box-mode-2-3XTO6","mode-3":"box-mode-3-ZvQ5H","quality-1":"box-quality-1-3NYWd","broken":"box-broken-1514h","bottom":"box-bottom-Ws9np"};

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"ceiling-root-oxGSS"};

/***/ }),
/* 162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"door-root-eMRzu","bar":"door-bar-eZp6B","quality-0":"door-quality-0-dsESl"};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"direction":"enemy-direction-1I8dN","animationWalkingY":"enemy-animationWalkingY-3zjx6","animationWalkingX":"enemy-animationWalkingX-2RaGh","noise":"enemy-noise-13-ze","white-noise":"enemy-white-noise-3-kZ8","eyes":"enemy-eyes-FCLJ1","eye":"enemy-eye-3_1bw","blink":"enemy-blink-1OJ0w","state-attack":"enemy-state-attack-2rWST","state-rest":"enemy-state-rest-5SOpw","quality-0":"enemy-quality-0-3fbYD"};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"floor-quality-0-tETbt","quality-1":"floor-quality-1-2aZvZ"};

/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"hints-root-3NehV","hint":"hints-hint-2sBxI"};

/***/ }),
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"logo-root-4wLX_"};

/***/ }),
/* 167 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"painting-root-1Y3pc","give-up":"painting-give-up-ypyAl","forever":"painting-forever-3qg45","easter":"painting-easter-A9-Ij","red-wall":"painting-red-wall-2hKAI","game":"painting-game-myk2f","escape":"painting-escape-32YAa"};

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"patterns-root-1dTS5"};

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"diffuse":"plain-diffuse-3riZM"};

/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"playerHealth-root-2pJey","health-state-1":"playerHealth-health-state-1-3cIOU","health-state-0":"playerHealth-health-state-0-1MYZx"};

/***/ }),
/* 171 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"endScreen-root-HnQnd","state-win":"endScreen-state-win-1uVtt","win":"endScreen-win-1YKcl","state-loose":"endScreen-state-loose-MsRk7","loose":"endScreen-loose-u4Qtu","message":"endScreen-message-2QthM","key":"endScreen-key-3en1k"};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"loadingScreen-root-3w6aQ"};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"creditsList":"credits-creditsList-3MIgP","creditsDescription":"credits-creditsDescription-MWNxQ"};

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"externalLink-root-1gOTc"};

/***/ }),
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"startScreen-root-2jYZG","menu":"startScreen-menu-wltxb","menuButton":"startScreen-menuButton-34XIz","menuButtonActive":"startScreen-menuButtonActive-2nMKx","version":"startScreen-version-1Ykby","title":"startScreen-title-12rPm","backButton":"startScreen-backButton-2uMuT"};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"switcher-quality-0-2BcaU","quality-1":"switcher-quality-1-3Cf5G","quality-2":"switcher-quality-2-1JM6X","handle":"switcher-handle-3j71N","off":"switcher-off-yQoql","on":"switcher-on-H20ki","reachable":"switcher-reachable-24rEd"};

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"quality-0":"wall-quality-0-VPxJO","mode-1":"wall-mode-1-2Yh66","mode-2":"wall-mode-2-16wZg","mode-3":"wall-mode-3-3LM2a","quality-1":"wall-quality-1-29Z2_"};

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"player-root-12nVD","playerAnimationWalking":"player-playerAnimationWalking-v-Wqe","playerAnimationRunning":"player-playerAnimationRunning-2Ehsc","playerAnimationWalkingY":"player-playerAnimationWalkingY-XdwCr","playerAnimationWalkingX":"player-playerAnimationWalkingX-rfzrE"};

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"settings-root-1ReEm","item":"settings-item-2kxyx","label":"settings-label-2Xc-m","input":"settings-input-1wTW_","itemActive":"settings-itemActive-1t9I3","itemDisabled":"settings-itemDisabled-kjBA9","inputContainer":"settings-inputContainer-PK0l2","range":"settings-range-309Ga","warning":"settings-warning-a7ZHY","output":"settings-output-4rxkN"};

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"viewport-root-goyag"};

/***/ }),
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
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83f558afad0f8b176e361b3f574ccb42.jpg";

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c161dc30a1bcbfb0ea16c3740f6189c3.jpg";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3628ed55158b5a413097584e7fd8a725.jpg";

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "151b6411d53b17de82d882485fcbaaf5.jpg";

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "abcc39d175e2f5f6ad0df4cc14457193.jpg";

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a0a62fe89c1eb6ec77f414a77fdb4a92.jpg";

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4db9414e7ca808670cbc9b15dc0eaa74.jpg";

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c3e2941f8e7e3eb4fa9f378466ad0a0b.jpg";

/***/ }),
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
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
});


/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_batched_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_game__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers__ = __webpack_require__(108);












const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux_batched_actions__["enableBatching"])(__WEBPACK_IMPORTED_MODULE_7__reducers__["a" /* default */]));

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_game__["a" /* default */], null)
), document.getElementById('app'));

/***/ })
],[311]);