export default function playerState(state = 'stop', action) {
    switch (action.type) {
        case 'playerStateStop':
            return 'stop';
        case 'playerStateWalk':
            return 'walk';
        case 'playerStateRun':
            return 'run';
        default:
            return state;
    }
}
