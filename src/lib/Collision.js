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
            const topLeftCellX = Math.floor(obj.coords2d[0][0] / BROAD_CELL_SIZE);
            const topLeftCellZ = Math.floor(obj.coords2d[0][1] / BROAD_CELL_SIZE);
            const bottomRightCellX = Math.floor(obj.coords2d[2][0] / BROAD_CELL_SIZE);
            const bottomRightCellZ = Math.floor(obj.coords2d[2][1] / BROAD_CELL_SIZE);
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
        if (firstCollision.obj) {
            // if collision was registered check if rebound also collides with smth (literally, corner cases)
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
                // break, if we've already found maximum number of possible intersections
                if (lineIntersections.length === 2) {
                    break;
                }
                const obstacleLine = [obj.coords2d[i], obj.coords2d[i < 3 ? i + 1 : 0]];
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
                        x = (z - line2d[0][1]) * (line2d[0][1] - line2d[1][1]) / (line2d[0][0] - line2d[1][0]) + line2d[0][0];
                    }
                    // check if intersection point lies inside obstacleLine
                    if ((obstacleLine[0][0] - x) * (obstacleLine[1][0] - x) > 0) {
                        continue;
                    }
                    lineIntersections.push({ x, z, i });
                    // positionAfterIntersection = [line2d[1][0], z];
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
                        z = (x - line2d[0][0]) * (line2d[0][0] - line2d[1][0]) / (line2d[0][1] - line2d[1][1]) + line2d[0][1];
                    }
                    // check if intersection point lies inside obstacleLine
                    if ((obstacleLine[0][1] - z) * (obstacleLine[1][1] - z) > 0) {
                        continue;
                    }
                    lineIntersections.push({x, z, i});
                }
            }
            if (lineIntersections.length === 1) {
                // check if end position is inside object
                if (
                    line2d[1][0] >= obj.coords2d[0][0] && line2d[1][0] <= obj.coords2d[1][0] &&
                    line2d[1][1] >= obj.coords2d[0][1] && line2d[1][1] <= obj.coords2d[3][1]
                ) {
                    intersections.push(Object.assign(lineIntersections[0], {
                        obj,
                        distanceFromPos: Collision.getDistance(line2d[0], [lineIntersections[0].x, lineIntersections[0].z])
                    }));
                }
            } else if (lineIntersections.length === 2) {
                // check if initial position is in the corner
                if (
                    lineIntersections[0].x !== lineIntersections[1].x ||
                    lineIntersections[0].z !== lineIntersections[1].z
                ) {
                    for (let j = 0; j < 2; j++) {
                        lineIntersections[j].distanceFromPos = Collision.getDistance(line2d[0], [lineIntersections[j].x, lineIntersections[j].z]);
                        intersections.push(Object.assign(lineIntersections[j], { obj }));
                    }
                }
            }
        }
        if (intersections.length) {
            let minDistancePointIndex = 0;
            if (intersections.length !== 1) {
                let minDistance = Infinity;
                for (let j = 0; j < intersections.length; j++) {
                    if (intersections[j].distanceFromPos < minDistance) {
                        minDistance = intersections[j].distanceFromPos;
                        minDistancePointIndex = j;
                    }
                }
            }
            const intersectionPoint = intersections[minDistancePointIndex];
            let positionAfterIntersection = null;
            // if obstacle line lies along axis X (has constant Z-coord)
            if (intersectionPoint.i === 0 || intersectionPoint.i === 2) {
                positionAfterIntersection = [line2d[1][0], intersectionPoint.z];
            } else {
                positionAfterIntersection = [intersectionPoint.x, line2d[1][1]];
            }
            result = {
                obj: intersectionPoint.obj,
                collisionPoint: [intersectionPoint.x, intersectionPoint.z],
                newPos: positionAfterIntersection
            };
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
     * @param {Array} point1 - coordinates of point 1
     * @param {Array} point2 - coordinates of point 2
     * @returns {number} - distance
     */
    static getDistance(point1, point2) {
        return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
    }
}
