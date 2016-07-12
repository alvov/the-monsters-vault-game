/**
 * Returns distance between two points in 2d space
 * @param {Array} point1 - coordinates of point 1
 * @param {Array} point2 - coordinates of point 2
 * @returns {number} - distance
 */
function getDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
}

/**
 * Returns an object with info about collision
 * @param {Array} line2d - coordinates of initial and final player positions
 * @param {Set} objectsSet - js set of objects
 * @returns {{newPos: Array}} - object with info about collision
 */
function getCollision(line2d, objectsSet) {
    let result = { newPos: line2d[1] };
    // if (line2d[1][0] > 975 || t) {
    //     debugger;
    // }
    // if moving line length is 0
    if (line2d[0][0] === line2d[1][0] && line2d[0][1] === line2d[1][1]) {
        return result;
    }
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
                const x = (z - line2d[0][1]) * (line2d[0][1] - line2d[1][1]) / (line2d[0][0] - line2d[1][0]) + line2d[0][0];
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
                const z = (x - line2d[0][0]) * (line2d[0][0] - line2d[1][0]) / (line2d[0][1] - line2d[1][1]) + line2d[0][1];
                // check if intersection point lies inside obstacleLine
                if ((obstacleLine[0][1] - z) * (obstacleLine[1][1] - z) > 0) {
                    continue;
                }
                lineIntersections.push({x, z, i});
                // positionAfterIntersection = [x, line2d[1][1]];
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
                    distanceFromPos: getDistance(line2d[0], [lineIntersections[0].x, lineIntersections[0].z])
                }));
            }
        } else if (lineIntersections.length === 2) {
            // check if initial position is in the corner
            if (
                lineIntersections[0].x !== lineIntersections[1].x ||
                lineIntersections[0].z !== lineIntersections[1].z
            ) {
                for (let j = 0; j < 2; j++) {
                    lineIntersections[j].distanceFromPos = getDistance(line2d[0], [lineIntersections[j].x, lineIntersections[j].z]);
                    intersections.push(Object.assign(lineIntersections[j], { obj }));
                }
            }
        }
    }
    if (intersections.length) {
        let minDistancePointIndex = null;
        if (intersections.length === 1) {
            minDistancePointIndex = 0;
        } else {
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
            newPos: positionAfterIntersection
        };
    }
    return result;
}

/**
 * Gets closest cells and counts collisions with objects on them
 * @param {number} broadCellSize - size for broad collision search cell
 * @param {Array} broadCells - array of all broad cells
 * @param {Array} line2d - coordinates of initial and final player positions
 * @returns {{newPos: Array}} - object with info about collision
 */
function getCollisionWrapper(broadCellSize, broadCells, line2d) {
    // get broad cells relative to players movement
    const relativeBroadCells = [
        [
            Math.floor(line2d[0][0] / broadCellSize),
            Math.floor(line2d[0][1] / broadCellSize)
        ], [
            Math.floor(line2d[1][0] / broadCellSize),
            Math.floor(line2d[1][1] / broadCellSize)
        ]
    ];
    // if player moved to diagonal cell, include two adjacent cells
    if (
        relativeBroadCells[0][0] !== relativeBroadCells[1][0] &&
        relativeBroadCells[0][1] !== relativeBroadCells[1][1]
    ) {
        relativeBroadCells.push(
            [relativeBroadCells[0][0], relativeBroadCells[1][1]],
            [relativeBroadCells[1][0], relativeBroadCells[0][1]]
        );
    }
    const objectsSet = new Set();
    for (let i = 0; i < relativeBroadCells.length; i++) {
        const broadCellObjects = broadCells[relativeBroadCells[i][1]][relativeBroadCells[i][0]].objects;
        for (let j = 0; j < broadCellObjects.length; j++) {
            objectsSet.add(broadCellObjects[j]);
        }
    }
    return getCollision(line2d, objectsSet);
}

/**
 * Links collision detection method to level object
 * @param {Object} level - level description object
 * @param {number} broadCellSize - size for broad collision search cell
 * @returns {Object} - level description object with collision detection method
 */
export default function collision(level, { broadCellSize }) {
    const broadCells = [];

    let y = 0;
    let j = 0;

    do {
        broadCells[j] = [];
        let nextY = Math.min(y + broadCellSize, level.boundaries[2]);
        let x = 0;
        let i = 0;
        do {
            let nextX = Math.min(x + broadCellSize, level.boundaries[0]);
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
        } while (x < level.boundaries[0]);
        y = nextY;
        j++;
    } while (y < level.boundaries[2]);

    for (let k = 0; k < level.objects.length; k++) {
        const obj = level.objects[k];
        if (obj.collides === false) {
            continue;
        }
        const topLeftCellX = Math.floor(obj.coords2d[0][0] / broadCellSize);
        const topLeftCellZ = Math.floor(obj.coords2d[0][1] / broadCellSize);
        const bottomRightCellX = Math.floor(obj.coords2d[2][0] / broadCellSize);
        const bottomRightCellZ = Math.floor(obj.coords2d[2][1] / broadCellSize);
        for (let j = topLeftCellZ; j <= bottomRightCellZ; j++) {
            for (let i = topLeftCellX; i <= bottomRightCellX; i++) {
                broadCells[j][i].objects.push(obj);
            }
        }
    }

    level.getCollision = getCollisionWrapper.bind(level, broadCellSize, broadCells);

    return level;
}
