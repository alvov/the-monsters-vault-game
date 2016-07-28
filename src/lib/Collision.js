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
                Math.max(0, Math.floor(obj.hitbox[0][1] / BROAD_CELL_SIZE))
            );
            const bottomRightCellX = Math.min(
                this.broadCells[0].length - 1,
                Math.max(0, Math.floor(obj.hitbox[2][0] / BROAD_CELL_SIZE))
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
        const objectsSet = this.getRelativeObjectsSet(line2d, BROAD_CELL_SIZE);

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
                    add: [
                        line2d[1][0] >= intersectionPoint[0] ? 1 : -1,
                        line2d[1][1] >= intersectionPoint[1] ? 1 : -1
                    ]
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
        const relativeBroadCells = [
            [
                Math.floor(line2d[0][0] / broadCellSize),
                Math.floor(line2d[0][1] / broadCellSize)
            ], [
                Math.floor(line2d[1][0] / broadCellSize),
                Math.floor(line2d[1][1] / broadCellSize)
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
        return point[0] >= obj.hitbox[0][0] && point[0] <= obj.hitbox[1][0] &&
            point[1] >= obj.hitbox[0][1] && point[1] <= obj.hitbox[3][1];
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
}
