import { KEY_W, KEY_S, KEY_A, KEY_D } from '../constants';

export default class Controls {
    constructor() {
        this.keyPressed = {
            [KEY_W]: false,
            [KEY_S]: false,
            [KEY_A]: false,
            [KEY_D]: false
        };
        this.stack = new Set();
        let lastCursorPos = null;
        this.pointerDelta = { x: 0, y: 0 };

        document.addEventListener('keydown', e => {
            if (e.keyCode in this.keyPressed) {
                this.keyPressed[e.keyCode] = true;
                this.stack.add(e.keyCode);
            }
        });

        document.addEventListener('keyup', e => {
            if (e.keyCode in this.keyPressed) {
                this.keyPressed[e.keyCode] = false;
            }
        });

        document.addEventListener('mousemove', e => {
            if (lastCursorPos) {
                this.pointerDelta.x += lastCursorPos.x - e.clientX;
                this.pointerDelta.y += lastCursorPos.y - e.clientY;
            }
            lastCursorPos = {
                x: e.clientX,
                y: e.clientY
            };
        });
    }

    getPointerDelta() {
        const pointerDelta = this.pointerDelta;
        this.pointerDelta = { x: 0, y: 0 };
        return pointerDelta;
    }
}
