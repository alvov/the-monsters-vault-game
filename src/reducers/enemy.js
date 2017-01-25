import {
    SET_ENEMY_STATE,
    SET_ENEMY_POSITION,
    SET_ENEMY_DIRECTION,
    SET_ENEMY_TARGET,
    SET_ENEMY_VISIBILITY,
    SET_GAME_START,
    DOOR_SET_OPEN
} from '../constants/actionNames';

import { ENEMY_STATE } from '../constants/constants';

import level from '../level';

function getInitialState() {
    return {
        ...level.enemy,
        position: [...level.enemy.position],
        target: [...level.enemy.target]
    };
}

export default function enemy(state = getInitialState(), action) {
    switch (action.type) {
        case SET_ENEMY_STATE:
            return {
                ...state,
                state: action.state
            };
        case SET_ENEMY_POSITION:
            return {
                ...state,
                position: action.position
            };
        case SET_ENEMY_DIRECTION:
            return {
                ...state,
                direction: action.direction
            };
        case SET_ENEMY_TARGET:
            return {
                ...state,
                target: action.target
            };
        case SET_ENEMY_VISIBILITY:
            return {
                ...state,
                isVisible: action.isVisible
            };
        case DOOR_SET_OPEN:
            if (state.state === ENEMY_STATE.LIMBO && state.props.triggerDoorId === action.id) {
                return {
                    ...state,
                    state: ENEMY_STATE.WANDER
                };
            }
            return state;
        case SET_GAME_START:
            return getInitialState();
        default:
            return state;
    }
}
