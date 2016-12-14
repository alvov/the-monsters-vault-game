import {
    VIEW_ANGLE_UPDATE,
    PLAYER_POSITION_UPDATE,
    PLAYER_STATE_RUN,
    PLAYER_STATE_WALK,
    PLAYER_STATE_STOP
} from '../constants/actionNames';

export function updateViewAngle(viewAngle) {
    return {
        type: VIEW_ANGLE_UPDATE,
        viewAngle
    }
}

export function updatePosition(pos) {
    return {
        type: PLAYER_POSITION_UPDATE,
        pos
    }
}

export function run() {
    return {
        type: PLAYER_STATE_RUN
    };
}

export function walk() {
    return {
        type: PLAYER_STATE_WALK
    };
}

export function stop() {
    return {
        type: PLAYER_STATE_STOP
    };
}
