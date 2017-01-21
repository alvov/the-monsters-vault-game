webpackJsonp([0],{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_levelGenerator__ = __webpack_require__(90);
// import './index.css';
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { enableBatching } from 'redux-batched-actions';
//
// import Game from './containers/game';
//
// import reducers from './reducers';
//

//
// const store = createStore(enableBatching(reducers));

// ReactDOM.render(
//     <Provider store={store}>
//         <Game />
//     </Provider>,
//     document.getElementById('app')
// );

const level1 = new __WEBPACK_IMPORTED_MODULE_0__lib_levelGenerator__["a" /* default */]();
document.getElementById('app').appendChild(level1.canvas());

const level2 = new __WEBPACK_IMPORTED_MODULE_0__lib_levelGenerator__["a" /* default */]();
document.getElementById('app').appendChild(level2.canvas());

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(94);


const BOUNDARIES = [2500, null, 2500];
const CELLS = 5;
const WALL_WIDTH = 500;
const WALL_HEIGHT = 250;
const WALL_DEPTH = 50;
const CELL_STATES = {
    EMPTY: 0,
    INDETERMINATE: 1,
    ROOM: 2
};

class Wall {
    constructor({ position, cells }) {
        this.position = position;
        this.cells = cells;
        const { row, column } = this.getCoords();
        this.row = row;
        this.column = column;
    }

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

    getPosition() {
        const result = [];
        if (this.position === 'horizontal') {
            result[0] = this.column * 500 + WALL_WIDTH / 2;
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
                result[0] = BOUNDARIES[2] - WALL_DEPTH / 2;
            } else {
                result[0] = this.column * 500;
            }
            result[2] = this.row * 500 + WALL_WIDTH / 2;
        }
        result[1] = WALL_HEIGHT / 2;
        return result;
    }
}

class Cell {
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
    }

    addWall(position, wall) {
        this.walls[position] = wall;
        this.wallsCount++;
    }

    getOpensiblingIndex() {
        if (this.wallsCount < 3) {
            return null;
        }
        const position = Object.keys(this.walls).find(key => this.walls[key] === null);
        return this.siblings[position];
    }
}

class LevelGenerator {
    constructor() {
        this.cells = [];
        this.walls = [];
        this.roomsCount = 0;

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
        for (let i = 0; i < CELLS - 1; i++) {
            for (let j = 0; j < CELLS - 1; j++) {
                const cellIndex = i * CELLS + j;
                const cell = this.cells[cellIndex];
                if (cell.walls.right || cell.walls.bottom) {
                    continue;
                }
                switch (getRandomWallIndex()) {
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
            }
        }

        this.addIndeterminateCells();

        while (this.roomsCount < 6) {
            // todo add random wall
        }

        this.level = {
            boundaries: BOUNDARIES,
            objects: [...this.walls.map((wall, index) => ({
                name: 'wall_' + index,
                type: __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* WALL_TYPE */],
                size: [wall.position === 'vertical' ? WALL_DEPTH : WALL_WIDTH, WALL_HEIGHT, wall.position === 'vertical' ? WALL_WIDTH : WALL_DEPTH],
                pos: wall.getPosition()
            }))]
        };
    }

    addWall({ cells }) {
        const wall = new Wall({
            position: ['left', 'right'].includes(cells[0][1]) ? 'vertical' : 'horizontal',
            cells: cells.reduce((result, [cell, position]) => {
                result[getOppositePosition(position)] = cell;
                return result;
            }, {})
        });
        this.walls.push(wall);
        cells.forEach(([cell, position]) => {
            cell.addWall(position, wall);
            if (cell.wallsCount === 3) {
                cell.state = CELL_STATES.ROOM;
                this.roomsCount++;
            }
        });
    }

    addIndeterminateCells() {
        this.cells.forEach(cell => {
            if (cell.state === CELL_STATES.ROOM) {
                const emptyWallPosition = Object.keys(cell.walls).find(key => cell.walls[key] === null);
                let siblingCell = cell.siblings[emptyWallPosition];
                let prevCell = cell;
                while (siblingCell) {
                    if (siblingCell.wallsCount === 2) {
                        siblingCell.state = CELL_STATES.INDETERMINATE;
                        const emptyWallPositions = Object.keys(siblingCell.walls).filter(key => siblingCell.walls[key] === null);
                        const emptyWallPosition = emptyWallPositions.find(position => siblingCell.siblings[position] !== prevCell);
                        siblingCell = siblingCell.siblings[emptyWallPosition];
                    } else {
                        siblingCell = null;
                    }
                }
            }
        });
    }

    canvas() {
        const canvasNode = document.createElement('canvas');
        canvasNode.width = this.level.boundaries[0] / 10;
        canvasNode.height = this.level.boundaries[2] / 10;
        const ctx = canvasNode.getContext('2d');

        this.cells.forEach(cell => {
            if (cell.state === CELL_STATES.ROOM) {
                ctx.fillStyle = '#dbffdb';
            } else if (cell.state === CELL_STATES.INDETERMINATE) {
                ctx.fillStyle = '#ffdde2';
            } else {
                ctx.fillStyle = '#fff';
            }
            ctx.fillRect(cell.column * 50, cell.row * 50, 50, 50);
        });
        ctx.fillStyle = '#000';
        this.level.objects.forEach(obj => {
            ctx.fillRect((obj.pos[0] - obj.size[0] / 2) / 10, (obj.pos[2] - obj.size[2] / 2) / 10, obj.size[0] / 10, obj.size[2] / 10);
        });

        return canvasNode;
    }
}
/* harmony export (immutable) */ exports["a"] = LevelGenerator;


function getRandomWallIndex() {
    return Math.floor(Math.random() * 4);
}

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

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

"use strict";
const GAME_VERSION = '1.2.1-alpha';
/* unused harmony export GAME_VERSION */


const FPS = 60;
/* unused harmony export FPS */

const BROAD_CELL_SIZE = 250;
/* unused harmony export BROAD_CELL_SIZE */

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


const PLAYER_SPEED = 4;
/* unused harmony export PLAYER_SPEED */

const PLAYER_RUNNING_COEFF = 1.5;
/* unused harmony export PLAYER_RUNNING_COEFF */

const PLAYER_HAND_LENGTH = 150;
/* unused harmony export PLAYER_HAND_LENGTH */

const PLAYER_STATE_RUN = 'run';
/* unused harmony export PLAYER_STATE_RUN */

const PLAYER_STATE_WALK = 'walk';
/* unused harmony export PLAYER_STATE_WALK */

const PLAYER_STATE_STOP = 'stop';
/* unused harmony export PLAYER_STATE_STOP */


const HINT_SHOW_TIME = 5000;
/* unused harmony export HINT_SHOW_TIME */

const DOOR_OPEN_TIME = 3000;
/* unused harmony export DOOR_OPEN_TIME */


const ENEMY_STATE = {
    LIMBO: 'limbo',
    WANDER: 'wander',
    STOP: 'stop',
    ATTACK: 'attack'
};
/* unused harmony export ENEMY_STATE */

const ENEMY_SPEED = 1.5;
/* unused harmony export ENEMY_SPEED */

const ENEMY_SPEED_RUNNING = 6;
/* unused harmony export ENEMY_SPEED_RUNNING */

const ENEMY_ATTACK_DISTANCE = 400;
/* unused harmony export ENEMY_ATTACK_DISTANCE */

const ENEMY_ATTACK_DISTANCE_VISIBLE = 600;
/* unused harmony export ENEMY_ATTACK_DISTANCE_VISIBLE */

const ENEMY_KILL_DISTANCE = 100;
/* unused harmony export ENEMY_KILL_DISTANCE */

const ENEMY_VIEW_ANGLE_DEG = 120;
/* unused harmony export ENEMY_VIEW_ANGLE_DEG */

const ENEMY_VIEW_ANGLE_RAD = ENEMY_VIEW_ANGLE_DEG / 180 * Math.PI;
/* unused harmony export ENEMY_VIEW_ANGLE_RAD */

const ENEMY_TARGET_REACH_THRESHOLD = 50;
/* unused harmony export ENEMY_TARGET_REACH_THRESHOLD */

const ENEMY_CHANGE_TARGET_TIME = 1000;
/* unused harmony export ENEMY_CHANGE_TARGET_TIME */


const PAINTING_TYPE = 'painting';
/* unused harmony export PAINTING_TYPE */

const FLOOR_TYPE = 'floor';
/* unused harmony export FLOOR_TYPE */

const CEILING_TYPE = 'ceiling';
/* unused harmony export CEILING_TYPE */

const WALL_TYPE = 'wall';
/* harmony export (immutable) */ exports["a"] = WALL_TYPE;

const BOX_TYPE = 'box';
/* unused harmony export BOX_TYPE */

const SWITCHER_TYPE = 'switcher';
/* unused harmony export SWITCHER_TYPE */

const DOOR_TYPE = 'door';
/* unused harmony export DOOR_TYPE */


const DOOR_STATE_OPEN = 'open';
/* unused harmony export DOOR_STATE_OPEN */

const DOOR_STATE_OPENING = 'opening';
/* unused harmony export DOOR_STATE_OPENING */

const DOOR_STATE_CLOSE = 'close';
/* unused harmony export DOOR_STATE_CLOSE */

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


/***/ }

},[221]);