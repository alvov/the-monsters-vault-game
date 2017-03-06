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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GAME_VERSION = '1.6.0';
/* unused harmony export GAME_VERSION */


const FPS = 60;
/* unused harmony export FPS */

const BROAD_CELL_SIZE = 250;
/* harmony export (immutable) */ __webpack_exports__["m"] = BROAD_CELL_SIZE;

const SPOTLIGHT_RADIUS = 1.5 * BROAD_CELL_SIZE;
/* unused harmony export SPOTLIGHT_RADIUS */


const KEY_FORWARD = 'KeyW';
/* unused harmony export KEY_FORWARD */

const KEY_BACKWARD = 'KeyS';
/* unused harmony export KEY_BACKWARD */

const KEY_LEFT = 'KeyA';
/* unused harmony export KEY_LEFT */

const KEY_RIGHT = 'KeyD';
/* unused harmony export KEY_RIGHT */

const KEY_INTERACT = 'KeyE';
/* unused harmony export KEY_INTERACT */

const KEY_QUIT_GAME = 'KeyQ';
/* unused harmony export KEY_QUIT_GAME */

const KEY_RUN = 'ShiftLeft';
/* unused harmony export KEY_RUN */

const KEY_BACK = 'Escape';
/* unused harmony export KEY_BACK */

const KEY_ENTER = 'Enter';
/* unused harmony export KEY_ENTER */


const XBOX_BUTTON_A = 0;
/* unused harmony export XBOX_BUTTON_A */

const XBOX_BUTTON_X = 2;
/* unused harmony export XBOX_BUTTON_X */

const XBOX_BUTTON_B = 1;
/* unused harmony export XBOX_BUTTON_B */

const XBOX_BUTTON_CROSS_UP = 11;
/* unused harmony export XBOX_BUTTON_CROSS_UP */

const XBOX_BUTTON_CROSS_DOWN = 12;
/* unused harmony export XBOX_BUTTON_CROSS_DOWN */

const XBOX_BUTTON_BACK = 9;
/* unused harmony export XBOX_BUTTON_BACK */

const XBOX_STICK_LEFT_AXIS_X = 0;
/* unused harmony export XBOX_STICK_LEFT_AXIS_X */

const XBOX_STICK_LEFT_AXIS_Y = 1;
/* unused harmony export XBOX_STICK_LEFT_AXIS_Y */

const XBOX_STICK_RIGHT_AXIS_X = 3;
/* unused harmony export XBOX_STICK_RIGHT_AXIS_X */

const XBOX_STICK_RIGHT_AXIS_Y = 4;
/* unused harmony export XBOX_STICK_RIGHT_AXIS_Y */

const XBOX_TRIGGER_RIGHT_AXIS = 5;
/* unused harmony export XBOX_TRIGGER_RIGHT_AXIS */


const CONTROL_STATE = {
    UNUSED: 0,
    FIRST_TIME_DOWN: 1,
    DOWN: 2
};
/* unused harmony export CONTROL_STATE */


const PLAYER_SIZE = {
    WIDTH: 50,
    HEIGHT: 150,
    DEPTH: 50
};
/* harmony export (immutable) */ __webpack_exports__["f"] = PLAYER_SIZE;

const PLAYER_SPEED = 4;
/* unused harmony export PLAYER_SPEED */

const PLAYER_RUNNING_COEFF = 1.5;
/* unused harmony export PLAYER_RUNNING_COEFF */

const PLAYER_HAND_LENGTH = 150;
/* harmony export (immutable) */ __webpack_exports__["n"] = PLAYER_HAND_LENGTH;

const PLAYER_STATE_RUN = 'run';
/* unused harmony export PLAYER_STATE_RUN */

const PLAYER_STATE_WALK = 'walk';
/* unused harmony export PLAYER_STATE_WALK */

const PLAYER_STATE_STOP = 'stop';
/* unused harmony export PLAYER_STATE_STOP */

const PLAYER_HEALTH_LOW = 50;
/* unused harmony export PLAYER_HEALTH_LOW */


const HINT_SHOW_TIME = 5000;
/* unused harmony export HINT_SHOW_TIME */

const DOOR_OPEN_TIME = 3000;
/* unused harmony export DOOR_OPEN_TIME */


const ENEMY_STATE = {
    LIMBO: 'limbo',
    WANDER: 'wander',
    STOP: 'stop',
    ATTACK: 'attack',
    REST: 'rest'
};
/* harmony export (immutable) */ __webpack_exports__["h"] = ENEMY_STATE;

const ENEMY_SPEED = 1.5;
/* unused harmony export ENEMY_SPEED */

const ENEMY_SPEED_RUNNING = 6;
/* unused harmony export ENEMY_SPEED_RUNNING */

const ENEMY_ATTACK_DISTANCE = 200;
/* unused harmony export ENEMY_ATTACK_DISTANCE */

// export const ENEMY_ATTACK_DISTANCE = -1;
const ENEMY_ATTACK_DISTANCE_VISIBLE = 400;
/* unused harmony export ENEMY_ATTACK_DISTANCE_VISIBLE */

// export const ENEMY_ATTACK_DISTANCE_VISIBLE = -1;
const ENEMY_DAMAGE_DISTANCE = 50;
/* unused harmony export ENEMY_DAMAGE_DISTANCE */

const ENEMY_DAMAGE = 80;
/* unused harmony export ENEMY_DAMAGE */

const ENEMY_VIEW_ANGLE_DEG = 90;
/* unused harmony export ENEMY_VIEW_ANGLE_DEG */

const ENEMY_VIEW_ANGLE_RAD = ENEMY_VIEW_ANGLE_DEG / 180 * Math.PI;
/* unused harmony export ENEMY_VIEW_ANGLE_RAD */

const ENEMY_TARGET_REACH_THRESHOLD = 50;
/* unused harmony export ENEMY_TARGET_REACH_THRESHOLD */

const ENEMY_CHANGE_TARGET_TIME = 1000;
/* unused harmony export ENEMY_CHANGE_TARGET_TIME */

const ENEMY_TRIGGER_DOOR_ID = 3;
/* harmony export (immutable) */ __webpack_exports__["i"] = ENEMY_TRIGGER_DOOR_ID;


const PAINTING_TYPE = 'painting';
/* harmony export (immutable) */ __webpack_exports__["d"] = PAINTING_TYPE;

const FLOOR_TYPE = 'floor';
/* harmony export (immutable) */ __webpack_exports__["j"] = FLOOR_TYPE;

const CEILING_TYPE = 'ceiling';
/* harmony export (immutable) */ __webpack_exports__["k"] = CEILING_TYPE;

const WALL_TYPE = 'wall';
/* harmony export (immutable) */ __webpack_exports__["a"] = WALL_TYPE;

const BOX_TYPE = 'box';
/* harmony export (immutable) */ __webpack_exports__["e"] = BOX_TYPE;

const SWITCHER_TYPE = 'switcher';
/* harmony export (immutable) */ __webpack_exports__["c"] = SWITCHER_TYPE;

const DOOR_TYPE = 'door';
/* harmony export (immutable) */ __webpack_exports__["b"] = DOOR_TYPE;


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
/* harmony export (immutable) */ __webpack_exports__["g"] = PAINTINGS;


const DOOR_STATE_OPEN = 'open';
/* unused harmony export DOOR_STATE_OPEN */

const DOOR_STATE_OPENING = 'opening';
/* unused harmony export DOOR_STATE_OPENING */

const DOOR_STATE_CLOSE = 'close';
/* harmony export (immutable) */ __webpack_exports__["l"] = DOOR_STATE_CLOSE;

const DOOR_STATE_CLOSING = 'closing';
/* unused harmony export DOOR_STATE_CLOSING */


const GAME_STATE_LOADING = 'loading';
/* unused harmony export GAME_STATE_LOADING */

const GAME_STATE_START = 'start';
/* unused harmony export GAME_STATE_START */

const GAME_STATE_PLAY = 'play';
/* unused harmony export GAME_STATE_PLAY */

const GAME_STATE_WIN = 'win';
/* unused harmony export GAME_STATE_WIN */

const GAME_STATE_LOOSE = 'loose';
/* unused harmony export GAME_STATE_LOOSE */


const GRAPHICS_QUALITY = {
    LOW: 0,
    NORMAL: 1,
    ULTRA: 2
};
/* unused harmony export GRAPHICS_QUALITY */


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collision__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_constants__ = __webpack_require__(0);




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
            size: [__WEBPACK_IMPORTED_MODULE_2__constants_constants__["f" /* PLAYER_SIZE */].WIDTH, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["f" /* PLAYER_SIZE */].HEIGHT, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["f" /* PLAYER_SIZE */].DEPTH],
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

        this.paintings = [__WEBPACK_IMPORTED_MODULE_2__constants_constants__["g" /* PAINTINGS */].ESCAPE, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["g" /* PAINTINGS */].GIVE_UP, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["g" /* PAINTINGS */].FOREVER, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["g" /* PAINTINGS */].RED_WALL, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["g" /* PAINTINGS */].GAME].map(painting => ({
            name: 'painting_' + painting.alias,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["d" /* PAINTING_TYPE */],
            size: painting.size,
            props: {
                alias: painting.alias
            },
            collides: false
        }));

        this.enemy = {
            state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["h" /* ENEMY_STATE */].LIMBO,
            isVisible: false,
            direction: 0,
            props: {
                triggerDoorId: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["i" /* ENEMY_TRIGGER_DOOR_ID */]
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
                this.player.pos = [exitCell.column * 500 + 250, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["f" /* PLAYER_SIZE */].HEIGHT, exitCell.row * 500 + 250];

                // place writing
                const writingWallPosition = Object.keys(roomCell.walls).filter(wallPosition => roomCell.walls[wallPosition])[getRandomValue(3)];
                this.addPainting({
                    painting: this.paintings.find(painting => painting.props.alias === __WEBPACK_IMPORTED_MODULE_2__constants_constants__["g" /* PAINTINGS */].RED_WALL.alias),
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
        const triggerSwitcher = this.switchers.find(({ index }) => index === __WEBPACK_IMPORTED_MODULE_2__constants_constants__["i" /* ENEMY_TRIGGER_DOOR_ID */]);
        this.boxes.forEach(box => {
            const distance = __WEBPACK_IMPORTED_MODULE_0__Collision__["a" /* default */].getSquareDistance(box.position, triggerSwitcher.position);
            if (distance > maxDistance) {
                maxDistance = distance;
                enemyBox = box;
            }
        });
        enemyBox.triggerDoorId = __WEBPACK_IMPORTED_MODULE_2__constants_constants__["i" /* ENEMY_TRIGGER_DOOR_ID */];

        // add enemy
        this.enemy.position = [enemyBox.position[0], 70, enemyBox.position[2]];
        this.enemy.target = [(enemyBox.cell.column + 0.5) * 500, 0, (enemyBox.cell.row + 0.5) * 500];

        // add floor and ceiling
        for (let z = 0; z < CELLS; z++) {
            for (let x = 0; x < CELLS; x++) {
                this.floor.push({
                    name: 'floor_tile_' + z + '_' + x,
                    type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["j" /* FLOOR_TYPE */],
                    size: [500, 0, 500],
                    pos: [x * 500 + 250, 0, z * 500 + 250],
                    collides: false
                });
                this.ceiling.push({
                    name: 'ceiling_tile_' + z + '_' + x,
                    type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["k" /* CEILING_TYPE */],
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
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["a" /* WALL_TYPE */],
                size: wall.size,
                pos: wall.position,
                props: { mode: wall.mode }
            })), ...this.paintings.filter(painting => painting.pos), ...this.boxes.map((box, i) => ({
                name: 'box_' + i,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["e" /* BOX_TYPE */],
                size: box.size,
                pos: box.position,
                props: {
                    mode: getRandomValue(3) + 1,
                    inhabited: getRandomValue(2) + 1,
                    triggerDoorId: box.triggerDoorId
                }
            })), ...this.doors.map(door => ({
                name: 'door_' + door.index,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["b" /* DOOR_TYPE */],
                size: [door.direction === WALL_DIRECTIONS.VERTICAL ? DOOR_DEPTH : DOOR_WIDTH, DOOR_HEIGHT, door.direction === WALL_DIRECTIONS.VERTICAL ? DOOR_WIDTH : DOOR_DEPTH],
                pos: door.position,
                props: {
                    id: door.index,
                    state: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["l" /* DOOR_STATE_CLOSE */]
                }
            })), ...this.switchers.map(({ index, position, angle }) => ({
                name: 'switcher_' + index,
                type: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["c" /* SWITCHER_TYPE */],
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
            const broadCellsXMax = Math.ceil(level.boundaries[0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */]) - 1;
            const broadCellsYMax = Math.ceil(level.boundaries[2] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */]) - 1;
            const topLeftCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */])));
            const topLeftCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][0] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */])));
            const bottomRightCellX = Math.min(broadCellsXMax, Math.max(0, Math.floor(obj.hitbox[0][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */])));
            const bottomRightCellZ = Math.min(broadCellsYMax, Math.max(0, Math.floor(obj.hitbox[2][1] / __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */])));
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
            distance: __WEBPACK_IMPORTED_MODULE_2__constants_constants__["n" /* PLAYER_HAND_LENGTH */],
            angle: level.player.angle
        })], level.objects, __WEBPACK_IMPORTED_MODULE_2__constants_constants__["m" /* BROAD_CELL_SIZE */]);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = getLevelCanvas;


const CANVAS_SCALE = 10;

/**
 * Returns the canvas node with a drawn map of the current level
 * @param {Cell[]} cells
 * @param {Object} level
 * @returns {Element}
 */
function getLevelCanvas(cells, level) {
    const canvasNode = document.createElement('canvas');
    canvasNode.width = level.boundaries[0] / CANVAS_SCALE;
    canvasNode.height = level.boundaries[2] / CANVAS_SCALE;
    const ctx = canvasNode.getContext('2d');

    cells.forEach(cell => {
        if (cell.state === 2) {
            ctx.fillStyle = '#dbffdb';
        } else if (cell.state === 1) {
            ctx.fillStyle = '#ffdde2';
        } else {
            ctx.fillStyle = '#fff';
        }
        ctx.fillRect(cell.column * 500 / CANVAS_SCALE, cell.row * 500 / CANVAS_SCALE, 500 / CANVAS_SCALE, 500 / CANVAS_SCALE);
    });
    JSON.parse(level.objects).forEach(obj => {
        ctx.font = '14px sans-serif';
        switch (obj.type) {
            case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* WALL_TYPE */]:
                if (obj.props.mode === 2) {
                    ctx.strokeStyle = '#ff655b';
                } else if (obj.props.mode === 3) {
                    ctx.strokeStyle = '#804f36';
                } else {
                    ctx.strokeStyle = '#000';
                }
                ctx.beginPath();
                ctx.rect((obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE, (obj.pos[2] - obj.size[2] / 2) / CANVAS_SCALE, obj.size[0] / CANVAS_SCALE, obj.size[2] / CANVAS_SCALE);
                ctx.stroke();
                ctx.strokeStyle = '#000';
                // ctx.fillStyle = '#aacbff';
                // ctx.fillText(i, obj.pos[0] / CANVAS_SCALE, obj.pos[2] / CANVAS_SCALE);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["b" /* DOOR_TYPE */]:
                ctx.fillStyle = '#d4d4d4';
                ctx.fillRect((obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE, (obj.pos[2] - obj.size[2] / 2) / CANVAS_SCALE, obj.size[0] / CANVAS_SCALE, obj.size[2] / CANVAS_SCALE);
                ctx.fillStyle = '#000';
                ctx.fillText(obj.props.id, obj.pos[0] / CANVAS_SCALE, obj.pos[2] / CANVAS_SCALE);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["c" /* SWITCHER_TYPE */]:
                ctx.fillStyle = '#d6a372';
                ctx.fillRect((obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE, (obj.pos[2] - obj.size[0] / 2) / CANVAS_SCALE, obj.size[0] / CANVAS_SCALE, obj.size[0] / CANVAS_SCALE);
                ctx.fillText(obj.props.id, obj.pos[0] / CANVAS_SCALE, obj.pos[2] / CANVAS_SCALE);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["d" /* PAINTING_TYPE */]:
                ctx.fillStyle = '#b33fac';
                ctx.fillRect((obj.pos[0] - 25) / CANVAS_SCALE, (obj.pos[2] - 25) / CANVAS_SCALE, 50 / CANVAS_SCALE, 50 / CANVAS_SCALE);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__constants_constants__["e" /* BOX_TYPE */]:
                if (obj.props.triggerDoorId) {
                    ctx.fillStyle = '#8a5252';
                } else {
                    ctx.fillStyle = '#7b8a7b';
                }
                ctx.fillRect((obj.pos[0] - obj.size[0] / 2) / CANVAS_SCALE, (obj.pos[2] - obj.size[2] / 2) / CANVAS_SCALE, obj.size[0] / CANVAS_SCALE, obj.size[2] / CANVAS_SCALE);
                ctx.fillStyle = '#fff';
                ctx.font = '6px sans-serif';
                ctx.fillText(`${obj.props.mode}${obj.props.inhabited}`, obj.pos[0] / CANVAS_SCALE, obj.pos[2] / CANVAS_SCALE);
                break;
        }
    });
    // player
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.fillRect((level.player.pos[0] - level.player.size[0] / 2) / CANVAS_SCALE, (level.player.pos[2] - level.player.size[2] / 2) / CANVAS_SCALE, level.player.size[0] / CANVAS_SCALE, level.player.size[2] / CANVAS_SCALE);
    if (level.player.angle[0] === 0) {
        ctx.fillRect(level.player.pos[0] / CANVAS_SCALE - 1, level.player.pos[2] / CANVAS_SCALE - 20, 2, 20);
    } else if (level.player.angle[0] === 180) {
        ctx.fillRect(level.player.pos[0] / CANVAS_SCALE - 1, level.player.pos[2] / CANVAS_SCALE, 2, 20);
    } else if (level.player.angle[0] === -90) {
        ctx.fillRect(level.player.pos[0] / CANVAS_SCALE - 20, level.player.pos[2] / CANVAS_SCALE - 1, 20, 2);
    } else if (level.player.angle[0] === 90) {
        ctx.fillRect(level.player.pos[0] / CANVAS_SCALE, level.player.pos[2] / CANVAS_SCALE - 1, 20, 2);
    }

    return canvasNode;
}

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(0);
/* unused harmony export getTransformRule */
/* unused harmony export getVisibleObjects */
/* harmony export (immutable) */ __webpack_exports__["a"] = getPlayerCell;
/* harmony export (immutable) */ __webpack_exports__["b"] = isObjectVisible;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPointPosition;
/* unused harmony export vectorsAdd3D */
/* unused harmony export convertDegreeToRad */
/* unused harmony export convertRadToDegree */

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
    return [Math.floor(playerPos[0] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["m" /* BROAD_CELL_SIZE */]), Math.floor(playerPos[2] / __WEBPACK_IMPORTED_MODULE_0__constants_constants__["m" /* BROAD_CELL_SIZE */])];
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_LevelGenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_levelCanvas__ = __webpack_require__(2);



const { cells, level } = new __WEBPACK_IMPORTED_MODULE_0__lib_LevelGenerator__["a" /* default */]();
document.getElementById('app').appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_levelCanvas__["a" /* default */])(cells, level));

/***/ })
/******/ ]);