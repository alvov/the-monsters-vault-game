import { BROAD_CELL_SIZE } from '../constants';

/**
 * Returns collision detection object instance
 * @param {Object} level - level description object
 */
export default class Collision {
    constructor(level) {
        this.broadCells = Collision.getBroadCells(level.boundaries, BROAD_CELL_SIZE);

        // fill broad cells with corresponding objects
        for (let k = 0; k < level.objects.length; k++) {
            const obj = level.objects[k];
            if (obj.collides === false) {
                continue;
            }
            obj.broadCells = [];
            const topLeftCellX = Math.min(
                this.broadCells[0].length - 1,
                Math.max(0, Math.floor(obj.hitbox[0][0] / BROAD_CELL_SIZE))
            );
            const topLeftCellZ = Math.min(
                this.broadCells.length - 1,
                Math.max(0, Math.floor(obj.hitbox[2][0] / BROAD_CELL_SIZE))
            );
            const bottomRightCellX = Math.min(
                this.broadCells[0].length - 1,
                Math.max(0, Math.floor(obj.hitbox[0][1] / BROAD_CELL_SIZE))
            );
            const bottomRightCellZ = Math.min(
                this.broadCells.length - 1,
                Math.max(0, Math.floor(obj.hitbox[2][1] / BROAD_CELL_SIZE))
            );
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
                return [
                    firstCollision,
                    Object.assign(secondCollision, { newPos: secondCollision.collisionPoint })
                ];
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
        const objectsSet = this.getRelativeObjectsSet(line, BROAD_CELL_SIZE);

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
                if (direction && (
                    i === 0 && collisionCoords[2] >= obj.hitbox[2][0] && collisionCoords[2] <= obj.hitbox[2][1] ||
                    i === 2 && collisionCoords[0] >= obj.hitbox[0][0] && collisionCoords[0] <= obj.hitbox[0][1]
                )) {
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
                    add: [
                        line[1][0] >= intersectionPoint[0] ? 1 : -1,
                        0,
                        line[1][2] >= intersectionPoint[2] ? 1 : -1
                    ]
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
        const objectsSet = this.getRelativeObjectsSet(line, BROAD_CELL_SIZE);
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
                if (
                    collisionCoords.length &&
                    collisionCoords.every((axisValue, i) =>
                        axisValue >= obj.pos[i] - obj.size[i] / 2 &&
                        axisValue <= obj.pos[i] + obj.size[i] / 2
                    )
                ) {
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
        const relativeBroadCells = [
            [
                Math.floor(line[0][0] / broadCellSize),
                Math.floor(line[0][2] / broadCellSize)
            ], [
                Math.floor(line[1][0] / broadCellSize),
                Math.floor(line[1][2] / broadCellSize)
            ]
        ];
        // if subject moved to diagonal cell, include two adjacent cells
        if (
            relativeBroadCells[0][0] !== relativeBroadCells[1][0] &&
            relativeBroadCells[0][1] !== relativeBroadCells[1][1]
        ) {
            relativeBroadCells.push(
                [relativeBroadCells[0][0], relativeBroadCells[1][1]],
                [relativeBroadCells[1][0], relativeBroadCells[0][1]]
            );
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
                    coords: [
                        [x, y],
                        [nextX, y],
                        [nextX, nextY],
                        [x, nextY]
                    ]
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
                result.push(
                    point1[i] === point2[i] ? point1[i] : tempValue * (point2[i] - point1[i]) + point1[i]
                );
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
        return Math.sqrt(
            Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2) + Math.pow(point1[2] - point2[2], 2)
        );
    }

    /**
     * Returns true if point lies inside given object
     * @param {Object} obj
     * @param {Array} point
     * @returns {boolean}
     */
    static contains(obj, point) {
        return point[0] >= obj.hitbox[0][0] &&
            point[0] <= obj.hitbox[0][1] &&
            point[2] >= obj.hitbox[2][0] &&
            point[2] <= obj.hitbox[2][1];
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
