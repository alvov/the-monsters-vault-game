export default function pointerDelta(state = { x: 0, y: 0 }, action) {
    switch (action.type) {
        case 'updatePointerDelta':
            return {
                x: state.x + action.x,
                y: state.y + action.y
            };
        case 'resetPointerDelta':
            return { x: 0, y: 0 };
        default:
            return state;
    }
}
