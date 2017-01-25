import {
    SET_ENEMY_STATE,
    SET_ENEMY_POSITION,
    SET_ENEMY_DIRECTION,
    SET_ENEMY_TARGET,
    SET_ENEMY_VISIBILITY
} from '../constants/actionNames';

export function setPosition(position) {
    return {
        type: SET_ENEMY_POSITION,
        position
    };
}

export function setTarget(target) {
    return {
        type: SET_ENEMY_TARGET,
        target
    };
}

export function setState(state) {
    return {
        type: SET_ENEMY_STATE,
        state
    };
}

export function setDirection(direction) {
    return {
        type: SET_ENEMY_DIRECTION,
        direction
    };
}

export function setVisibility(isVisible) {
    return {
        type: SET_ENEMY_VISIBILITY,
        isVisible
    };
}
