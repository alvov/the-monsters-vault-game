import {
    PLAYER_UPDATE_VIEW_ANGLE,
    PLAYER_UPDATE_POSITION,
    PLAYER_SET_STATE_RUN,
    PLAYER_SET_STATE_WALK,
    PLAYER_SET_STATE_STOP,
    PLAYER_REDUCE_HEALTH
} from '../constants/actionNames';

export function updateViewAngle(viewAngle) {
    return {
        type: PLAYER_UPDATE_VIEW_ANGLE,
        viewAngle
    };
}

export function updatePosition(pos) {
    return {
        type: PLAYER_UPDATE_POSITION,
        pos
    };
}

export function reduceHealth(value) {
    return {
        type: PLAYER_REDUCE_HEALTH,
        value
    };
}

export function run() {
    return {
        type: PLAYER_SET_STATE_RUN
    };
}

export function walk() {
    return {
        type: PLAYER_SET_STATE_WALK
    };
}

export function stop() {
    return {
        type: PLAYER_SET_STATE_STOP
    };
}
