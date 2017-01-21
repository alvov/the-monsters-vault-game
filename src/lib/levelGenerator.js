import {
    BROAD_CELL_SIZE,
    HAND_LENGTH,
    DOOR_CLOSE,
    PAINTING_TYPE,
    FLOOR_TYPE,
    CEILING_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE
} from '../constants/constants';

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

export default class LevelGenerator {
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
                    cells: [
                        [cell, 'top']
                    ]
                });
            } else if (cell.row === CELLS - 1) {
                this.addWall({
                    cells: [
                        [cell, 'bottom']
                    ]
                });
            }
            if (cell.column === 0) {
                this.addWall({
                    cells: [
                        [cell, 'left']
                    ]
                });
            } else if (cell.column === CELLS - 1) {
                this.addWall({
                    cells: [
                        [cell, 'right']
                    ]
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
                            cells: [
                                [cell, 'right'],
                                [cell.siblings.right, 'left']
                            ]
                        });
                        break;
                    case 1:
                        this.addWall({
                            cells: [
                                [cell.siblings.right, 'bottom'],
                                [cell.siblings.right.siblings.bottom, 'top']
                            ]
                        });
                        break;
                    case 2:
                        this.addWall({
                            cells: [
                                [cell.siblings.bottom, 'right'],
                                [cell.siblings.bottom.siblings.right, 'left']
                            ]
                        });
                        break;
                    case 3:
                        this.addWall({
                            cells: [
                                [cell, 'bottom'],
                                [cell.siblings.bottom, 'top']
                            ]
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
            objects: [
                ...this.walls.map((wall, index) => ({
                    name: 'wall_' + index,
                    type: WALL_TYPE,
                    size: [
                        wall.position === 'vertical' ? WALL_DEPTH : WALL_WIDTH,
                        WALL_HEIGHT,
                        wall.position === 'vertical' ? WALL_WIDTH : WALL_DEPTH
                    ],
                    pos: wall.getPosition()
                }))
            ]
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
                        const emptyWallPositions = Object.keys(siblingCell.walls)
                            .filter(key => siblingCell.walls[key] === null);
                        const emptyWallPosition = emptyWallPositions.find(position =>
                            siblingCell.siblings[position] !== prevCell
                        );
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
            ctx.fillRect(
                cell.column * 50,
                cell.row * 50,
                50,
                50
            );
        });
        ctx.fillStyle = '#000';
        this.level.objects.forEach(obj => {
            ctx.fillRect(
                (obj.pos[0] - obj.size[0] / 2) / 10,
                (obj.pos[2] - obj.size[2] / 2) / 10,
                obj.size[0] / 10,
                obj.size[2] / 10
            );
        });

        return canvasNode;
    }
}

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