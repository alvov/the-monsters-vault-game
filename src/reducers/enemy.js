import {
    ENEMY_SET_STATE,
    ENEMY_SET_POSITION,
    ENEMY_SET_DIRECTION,
    ENEMY_SET_TARGET,
    ENEMY_SET_VISIBILITY,
    GAME_SET_STATE_START,
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
        case ENEMY_SET_STATE:
            return {
                ...state,
                state: action.state
            };
        case ENEMY_SET_POSITION:
            return {
                ...state,
                position: action.position
            };
        case ENEMY_SET_DIRECTION:
            return {
                ...state,
                direction: action.direction
            };
        case ENEMY_SET_TARGET:
            return {
                ...state,
                target: action.target
            };
        case ENEMY_SET_VISIBILITY:
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
        case GAME_SET_STATE_START:
            return getInitialState();
        default:
            return state;
    }
}
