import { combineReducers } from 'redux';

import gameState from './gameState.js';
import keyPressed from './keyPressed.js';
import pointerDelta from './pointerDelta.js';
import viewAngle from './viewAngle.js';
import playerPosition from './playerPosition.js';
import playerState from './playerState.js';
import objects from './objects.js';
import doors from './doors.js';

export default combineReducers({
    gameState,
    keyPressed,
    pointerDelta,
    viewAngle,
    pos: playerPosition,
    playerState,
    objects,
    doors
});
