import {
    ENEMY_SET_STATE,
    ENEMY_SET_POSITION,
    ENEMY_SET_DIRECTION,
    ENEMY_SET_TARGET,
    ENEMY_SET_VISIBILITY,
    LEVEL_SET,
    DOOR_SET_OPEN
} from '../constants/actionNames';

import { ENEMY_STATE } from '../constants/constants';

export default function enemy(state = {}, action) {
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
        case LEVEL_SET:
            return {
                ...action.level.enemy,
                position: [...action.level.enemy.position],
                target: [...action.level.enemy.target]
            };
        default:
            return state;
    }
}
