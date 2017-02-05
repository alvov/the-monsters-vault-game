export default class Collision {
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
                return [
                    firstCollision,
                    {
                        ...secondCollision,
                        newPos: secondCollision.collisionPoint
                    }
                ];
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
                if (direction && (
                    i === 0 && collisionCoords[2] >= obj.hitbox[2][0] && collisionCoords[2] <= obj.hitbox[2][1] ||
                    i === 2 && collisionCoords[0] >= obj.hitbox[0][0] && collisionCoords[0] <= obj.hitbox[0][1]
                )) {
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
            currentCellCenter.push(
                Math.floor(pos[i] / broadCellSize) * broadCellSize + broadCellSize / 2
            );
        }
        const allVariants = [
            [currentCellCenter[0] - broadCellSize, 0, currentCellCenter[1]],
            [currentCellCenter[0] + broadCellSize, 0, currentCellCenter[1]],
            [currentCellCenter[0], 0, currentCellCenter[1] - broadCellSize],
            [currentCellCenter[0], 0, currentCellCenter[1] + broadCellSize]
        ];
        const availableVariants = [];
        const availableVariantsWeights = [];
        for (let i = 0; i < allVariants.length; i++) {
            if (
                allVariants[i][0] < 0 ||
                allVariants[i][0] > boundaries[0] ||
                allVariants[i][2] < 0 ||
                allVariants[i][2] > boundaries[2] ||
                Collision.getCollisionView([
                    pos, [allVariants[i][0], pos[1], allVariants[i][2]]
                ], objects, broadCellSize / 2)
            ) {
                continue;
            }
            availableVariants.push(allVariants[i]);
            availableVariantsWeights.push(
                Math.abs(1 - Math.abs(direction - Collision.getDirection2d(pos, allVariants[i])) / 2 / Math.PI)
            );
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
        const involvedBroadCells = [
            [
                Math.floor(Math.min(line[0][0], line[1][0]) / broadCellSize),
                Math.floor(Math.min(line[0][2], line[1][2]) / broadCellSize)
            ], [
                Math.floor(Math.max(line[0][0], line[1][0]) / broadCellSize),
                Math.floor(Math.max(line[0][2], line[1][2]) / broadCellSize)
            ]
        ];
        const involvedObjects = [];
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].collides === false) {
                continue;
            }
            for (let k = 0; k < objects[i].broadCells.length; k++) {
                if (
                    objects[i].broadCells[k][0] >= involvedBroadCells[0][0] &&
                    objects[i].broadCells[k][0] <= involvedBroadCells[1][0] &&
                    objects[i].broadCells[k][1] >= involvedBroadCells[0][1] &&
                    objects[i].broadCells[k][1] <= involvedBroadCells[1][1]
                ) {
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
                result.push(
                    point1[i] === point2[i] ? point1[i] : tempValue * (point2[i] - point1[i]) + point1[i]
                );
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
        return Math.pow(point1[0] - point2[0], 2) +
            Math.pow(point1[1] - point2[1], 2) +
            Math.pow(point1[2] - point2[2], 2);
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
