import { BROAD_CELL_SIZE } from '../constants/constants';
const AXIS = ['X', 'Y', 'Z'];

/**
 * Returns css transform rule for given position and angle
 * @param {Object} data
 * @returns {{transform: string}}
 */
export function getTransformRule(data) {
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
export function getVisibleObjects(playerPos, objects) {
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
export function getPlayerCell(playerPos) {
    return [
        Math.floor(playerPos[0] / BROAD_CELL_SIZE),
        Math.floor(playerPos[2] / BROAD_CELL_SIZE)
    ];
}

/**
 * Returns true if the <object> is located close enough to the player
 * (which is on the same or the neighbour cell)
 * @param {number[]} playerCell
 * @param {Object} object
 * @returns {boolean}
 */
export function isObjectVisible(playerCell, object) {
    let isVisible = false;
    for (let k = 0; k < object.broadCells.length; k = k + 1) {
        if (
            Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 &&
            Math.abs(playerCell[1] - object.broadCells[k][1]) < 2
        ) {
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
export function getPointPosition({ pos, distance, angle }) {
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
export function vectorsAdd3D(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

/**
 * Returns radians for given degrees
 * @param {number} angle
 * @returns {number}
 */
export function convertDegreeToRad(angle) {
    return angle / 180 * Math.PI;
}

/**
 * Returns degrees for given radians
 * @param {number} angle
 * @returns {number}
 */
export function convertRadToDegree(angle) {
    return angle / Math.PI * 180;
}
