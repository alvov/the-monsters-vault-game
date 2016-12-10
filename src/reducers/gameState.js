import { LOADING, START, PLAY, END } from '../constants';

export default function gameState(state = LOADING, action) {
    switch (action.type) {
        case 'setGameLoading':
            return LOADING;
        case 'setGameStart':
            return START;
        case 'setGamePlay':
            return PLAY;
        case 'setGameEnd':
            return END;
        default:
            return state;
    }
}
