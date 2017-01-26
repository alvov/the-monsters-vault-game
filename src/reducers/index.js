import { combineReducers } from 'redux';

import gameState from './gameState';
import pointerDelta from './pointerDelta';
import playerViewAngle from './playerViewAngle';
import playerPosition from './playerPosition';
import playerState from './playerState';
import objects from './objects';
import doorsState from './doorsState';
import hints from './hints';
import gamepad from './gamepad';
import settings from './settings';
import enemy from './enemy';

export default combineReducers({
    gameState,
    pointerDelta,
    playerViewAngle,
    pos: playerPosition,
    playerState,
    objects,
    doorsState,
    hints,
    gamepad,
    settings,
    enemy
});
