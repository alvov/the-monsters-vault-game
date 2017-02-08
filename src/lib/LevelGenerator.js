import Collision from './Collision';
import { isObjectVisible, getPlayerCell, getPointPosition } from './utils';
import {
    PLAYER_SIZE,
    PLAYER_HAND_LENGTH,
    BROAD_CELL_SIZE,
    ENEMY_STATE,
    DOOR_STATE_CLOSE,
    PAINTING_TYPE,
    FLOOR_TYPE,
    CEILING_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE,
    PAINTINGS,
    ENEMY_TRIGGER_DOOR_ID
} from '../constants/constants';

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
        this.size = this.direction === WALL_DIRECTIONS.HORIZONTAL
            ? [WALL_WIDTH - (isBorder ? 0 : WALL_DEPTH), WALL_HEIGHT, WALL_DEPTH]
            : [WALL_DEPTH, WALL_HEIGHT, WALL_WIDTH - (isBorder ? 0 : WALL_DEPTH)];
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
export default class LevelGenerator {
    constructor() {
        this.player = {
            size: [PLAYER_SIZE.WIDTH, PLAYER_SIZE.HEIGHT, PLAYER_SIZE.DEPTH],
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

        this.paintings = [
            PAINTINGS.ESCAPE,
            PAINTINGS.GIVE_UP,
            PAINTINGS.FOREVER,
            PAINTINGS.RED_WALL,
            PAINTINGS.GAME
        ].map(painting => ({
            name: 'painting_' + painting.alias,
            type: PAINTING_TYPE,
            size: painting.size,
            props: {
                alias: painting.alias
            },
            collides: false
        }));

        this.enemy = {
            state: ENEMY_STATE.LIMBO,
            isVisible: false,
            direction: 0,
            props: {
                triggerDoorId: ENEMY_TRIGGER_DOOR_ID
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
        this.cells.forEach(cell => {
            if (cell.walls.right || cell.walls.bottom) {
                return;
            }
            switch (getRandomValue(4)) {
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
        });

        this.addIndeterminateCells();

        // add more walls for rooms
        while (this.roomsCount < MAX_ROOMS) {
            const cellsWithTwoWalls = this.cells.filter(
                cell => cell.state === CELL_STATES.EMPTY && cell.wallsCount === 2
            );
            const cellIndex = getRandomValue(cellsWithTwoWalls.length);
            const wallIndex = getRandomValue(2);
            const cell = cellsWithTwoWalls[cellIndex];
            const emptyWalls = Object.keys(cell.walls).filter(wallPosition => !cell.walls[wallPosition]);
            const wallPosition = emptyWalls[wallIndex];
            this.addWall({
                cells: [
                    [cell, wallPosition],
                    [cell.siblings[wallPosition], getOppositePosition(wallPosition)]
                ]
            });
            this.addIndeterminateCells();
        }

        // adjust walls sizes to reduce gaps
        for (let i = 1; i < CELLS; i++) {
            for (let j = 1; j < CELLS; j++) {
                this.walls
                    .find(wall => {
                        if (wall.direction === WALL_DIRECTIONS.HORIZONTAL) {
                            return wall.row === i && (wall.column === j || wall.column === j - 1);
                        } else {
                            return wall.column === j && (wall.row === i || wall.row === i - 1);
                        }
                    })
                    .addGap([j * 500, i * 500]);
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
            const switcherWallPosition = Object.keys(roomCell.walls)
                .filter(wallPosition => roomCell.walls[wallPosition])[getRandomValue(3)];
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
                const emptyBorderCells = this.cells.filter(cell =>
                    cell.state === CELL_STATES.EMPTY && (
                        cell.column === 0 || cell.column === CELLS - 1 ||
                        cell.row === 0 || cell.row === CELLS - 1
                    )
                );
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
                this.player.pos = [
                    exitCell.column * 500 + 250,
                    PLAYER_SIZE.HEIGHT,
                    exitCell.row * 500 + 250
                ];

                // place writing
                const writingWallPosition = Object.keys(roomCell.walls)
                    .filter(wallPosition => roomCell.walls[wallPosition])[getRandomValue(3)];
                this.addPainting({
                    painting: this.paintings.find(painting => painting.props.alias === PAINTINGS.RED_WALL.alias),
                    wall: roomCell.walls[writingWallPosition]
                });
            } else {
                let roomAreaCell = roomCell;
                while (roomAreaCell) {
                    const nextRoomAreaCell = roomAreaCell.siblings[roomAreaCell.roomArea.to];
                    // paint last rooms walls
                    if (index > 3) {
                        for (let wallPosition in roomAreaCell.walls) {
                            if (
                                roomAreaCell.walls.hasOwnProperty(wallPosition) &&
                                roomAreaCell.walls[wallPosition] &&
                                roomAreaCell.walls[wallPosition].mode === 1
                            ) {
                                roomAreaCell.walls[wallPosition].mode = 3;
                            }
                        }
                    }
                    if (nextRoomAreaCell.state !== CELL_STATES.INDETERMINATE || getRandomValue(2) === 1) {
                        this.addDoor({
                            index,
                            cells: [
                                [roomAreaCell, roomAreaCell.roomArea.to],
                                [nextRoomAreaCell, getOppositePosition(roomAreaCell.roomArea.to)]
                            ]
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
        const triggerSwitcher = this.switchers.find(({ index }) => index === ENEMY_TRIGGER_DOOR_ID);
        this.boxes.forEach(box => {
            const distance = Collision.getSquareDistance(box.position, triggerSwitcher.position);
            if (distance > maxDistance) {
                maxDistance = distance;
                enemyBox = box;
            }
        });
        enemyBox.triggerDoorId = ENEMY_TRIGGER_DOOR_ID;

        // add enemy
        this.enemy.position = [enemyBox.position[0], 70, enemyBox.position[2]];
        this.enemy.target = [
            (enemyBox.cell.column + 0.5) * 500,
            0,
            (enemyBox.cell.row + 0.5) * 500
        ];

        // add floor and ceiling
        for (let z = 0; z < CELLS; z++) {
            for (let x = 0; x < CELLS; x++) {
                this.floor.push({
                    name: 'floor_tile_' + z + '_' + x,
                    type: FLOOR_TYPE,
                    size: [500, 0, 500],
                    pos: [x * 500 + 250, 0, z * 500 + 250],
                    collides: false
                });
                this.ceiling.push({
                    name: 'ceiling_tile_' + z + '_' + x,
                    type: CEILING_TYPE,
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
            objects: [
                ...this.floor,
                ...this.ceiling,
                ...this.walls.map((wall, index) => (
                    {
                        name: 'wall_' + index,
                        type: WALL_TYPE,
                        size: wall.size,
                        pos: wall.position,
                        props: { mode: wall.mode }
                    }
                )),
                ...this.paintings.filter(painting => painting.pos),
                ...this.boxes.map((box, i) => ({
                    name: 'box_' + i,
                    type: BOX_TYPE,
                    size: box.size,
                    pos: box.position,
                    props: {
                        mode: getRandomValue(3) + 1,
                        inhabited: getRandomValue(2) + 1,
                        triggerDoorId: box.triggerDoorId
                    }
                })),
                ...this.doors.map(door => (
                    {
                        name: 'door_' + door.index,
                        type: DOOR_TYPE,
                        size: [
                            door.direction === WALL_DIRECTIONS.VERTICAL ? DOOR_DEPTH : DOOR_WIDTH,
                            DOOR_HEIGHT,
                            door.direction === WALL_DIRECTIONS.VERTICAL ? DOOR_WIDTH : DOOR_DEPTH
                        ],
                        pos: door.position,
                        props: {
                            id: door.index,
                            state: DOOR_STATE_CLOSE
                        }
                    }
                )),
                ...this.switchers.map(({ index, position, angle }) => (
                    {
                        name: 'switcher_' + index,
                        type: SWITCHER_TYPE,
                        pos: position,
                        size: [SWITCHER_WIDTH, SWITCHER_HEIGHT, SWITCHER_DEPTH],
                        angle,
                        props: {
                            id: index
                        },
                        isInteractive: true
                    }
                ))
            ]
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
            position: [
                wall.direction === WALL_DIRECTIONS.HORIZONTAL
                    ? wall.position[0]
                    : position === 'right'
                        ? wall.position[0] + WALL_DEPTH / 2 + 1
                        : wall.position[0] - WALL_DEPTH / 2 - 1,
                150,
                wall.direction === WALL_DIRECTIONS.VERTICAL
                    ? wall.position[2]
                    : position === 'bottom'
                        ? wall.position[2] + WALL_DEPTH / 2 + 1
                        : wall.position[2] - WALL_DEPTH / 2 - 1
            ],
            angle: [
                0,
                position === 'bottom'
                    ? 0
                    : position === 'top'
                        ? 180
                        : position === 'right'
                            ? 90
                            : -90,
                0
            ]
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
        const wallFreeSlots = (
            wall.direction === WALL_DIRECTIONS.HORIZONTAL
                ? ['top', 'bottom']
                : ['left', 'right']
        ).filter(position => !wall.slots[position]);

        if (!wallFreeSlots.length) {
            return;
        }
        const wallSide = getRandomElement(wallFreeSlots);

        painting.pos = [
            wall.direction === WALL_DIRECTIONS.HORIZONTAL
                ? wall.position[0]
                : wallSide === 'left'
                    ? wall.position[0] - WALL_DEPTH / 2 - 1
                    : wall.position[0] + WALL_DEPTH / 2 + 1,
            WALL_HEIGHT / 2,
            wall.direction === WALL_DIRECTIONS.VERTICAL
                ? wall.position[2]
                : wallSide === 'top'
                    ? wall.position[2] - WALL_DEPTH / 2 - 1
                    : wall.position[2] + WALL_DEPTH / 2 + 1
        ];
        // check if got out of the map
        if (painting.pos.some((axis, i) =>
            axis < 0 ||
            BOUNDARIES[i] && axis > BOUNDARIES[i]
        )) {
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
            position: [
                minBoxX + getRandomValue(maxBoxX - minBoxX),
                boxSize[1] / 2,
                minBoxZ + getRandomValue(maxBoxZ - minBoxZ)
            ],
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
                        const emptyWallPositions = Object.keys(siblingCell.walls)
                            .filter(wallPosition => !siblingCell.walls[wallPosition]);
                        const emptyWallPosition = emptyWallPositions.find(position =>
                            siblingCell.siblings[position] !== prevCell
                        );
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
        const playerCell = getPlayerCell(level.player.pos);
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
            obj.hitbox = [
                [obj.pos[0] - sizeXHalf - playerXHalf, obj.pos[0] + sizeXHalf + playerXHalf],
                [obj.pos[1] - sizeYHalf - playerYHalf, obj.pos[1] + sizeYHalf + playerYHalf],
                [obj.pos[2] - sizeZHalf - playerZHalf, obj.pos[2] + sizeZHalf + playerZHalf]
            ];

            // define to which broad cells does an object belong
            obj.broadCells = [];
            const broadCellsXMax = Math.ceil(level.boundaries[0] / BROAD_CELL_SIZE) - 1;
            const broadCellsYMax = Math.ceil(level.boundaries[2] / BROAD_CELL_SIZE) - 1;
            const topLeftCellX = Math.min(
                broadCellsXMax,
                Math.max(0, Math.floor(obj.hitbox[0][0] / BROAD_CELL_SIZE))
            );
            const topLeftCellZ = Math.min(
                broadCellsYMax,
                Math.max(0, Math.floor(obj.hitbox[2][0] / BROAD_CELL_SIZE))
            );
            const bottomRightCellX = Math.min(
                broadCellsXMax,
                Math.max(0, Math.floor(obj.hitbox[0][1] / BROAD_CELL_SIZE))
            );
            const bottomRightCellZ = Math.min(
                broadCellsYMax,
                Math.max(0, Math.floor(obj.hitbox[2][1] / BROAD_CELL_SIZE))
            );
            for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
                for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
                    obj.broadCells.push([i, j]);
                }
            }

            obj.isVisible = isObjectVisible(playerCell, obj);

            obj.isReachable = false;
        }

        const collisionView = Collision.getCollisionView(
            [
                level.player.pos,
                getPointPosition({
                    pos: level.player.pos,
                    distance: PLAYER_HAND_LENGTH,
                    angle: level.player.angle
                })
            ],
            level.objects,
            BROAD_CELL_SIZE
        );
        if (collisionView) {
            collisionView.obj.isReachable = true;
        }
    }
}

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
