import {
    ENEMY_SET_STATE,
    ENEMY_SET_POSITION,
    ENEMY_SET_DIRECTION,
    ENEMY_SET_TARGET,
    ENEMY_SET_VISIBILITY
} from '../constants/actionNames';

export function setPosition(position) {
    return {
        type: ENEMY_SET_POSITION,
        position
    };
}

export function setTarget(target) {
    return {
        type: ENEMY_SET_TARGET,
        target
    };
}

export function setState(state) {
    return {
        type: ENEMY_SET_STATE,
        state
    };
}

export function setDirection(direction) {
    return {
        type: ENEMY_SET_DIRECTION,
        direction
    };
}

export function setVisibility(isVisible) {
    return {
        type: ENEMY_SET_VISIBILITY,
        isVisible
    };
}
