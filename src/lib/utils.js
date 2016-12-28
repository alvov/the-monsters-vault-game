import { BROAD_CELL_SIZE } from '../constants/constants';
const AXIS = ['X', 'Y', 'Z'];

/**
 * Returns css transform rule for given position and angle
 * @param {Array} pos
 * @param {Array} angle
 * @returns {{transform: string}}
 */
export function getTransformRule({ pos, angle }) {
    let transform = '';
    if (pos) {
        transform = `translate3d(${pos[0]}px,${pos[1]}px,${pos[2]}px)`;
    }
    if (angle) {
        for (let axis = 0; axis < angle.length; axis++) {
            transform = `${transform} rotate${AXIS[axis]}(${angle[axis]}deg)`;
        }
    }
    return { transform };
}

/**
 * Returns array of objects to be shown on map
 * @param {Array} playerPos
 * @param {Array} objects
 * @returns {Array}
 */
export function getVisibleObjects(playerPos, objects) {
    const playerCell = [
        Math.floor(playerPos[0] / BROAD_CELL_SIZE),
        Math.floor(playerPos[2] / BROAD_CELL_SIZE)
    ];
    const visibleObjects = [];
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        for (let k = 0; k < object.broadCells.length; k++) {
            if (
                Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 &&
                Math.abs(playerCell[1] - object.broadCells[k][1]) < 2
            ) {
                visibleObjects.push(object);
                break;
            }
        }
    }
    return visibleObjects;
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
 * Stores an array of actions that should be dispatched at a certain time
 */
export class DelayedActions {
    constructor() {
        this.delayedActions = [];
    }

    /**
     * Returns an array of actions, that are to be dispatched
     * @returns {Array}
     */
    getActualActions() {
        const now = Date.now();
        let actualActions = [];
        let delayedActions = [];
        for (let i = 0; i < this.delayedActions.length; i++) {
            if (this.delayedActions[i].timestamp <= now) {
                actualActions.push(this.delayedActions[i].action);
            } else {
                delayedActions.push(this.delayedActions[i]);
            }
        }
        this.delayedActions = delayedActions;
        return actualActions;
    }

    /**
     * Adds a delayed action to the list
     * @param {Object} action
     * @param {number} delay
     */
    pushAction({ action, delay }) {
        this.delayedActions.push({
            action,
            timestamp: Date.now() + delay
        })
    }

    clear() {
        this.delayedActions = [];
    }
}
