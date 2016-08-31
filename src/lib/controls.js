import { KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_SHIFT } from '../constants';

export default class Controls {
    constructor({ pointerLockerNode }) {
        this.keyPressed = {
            [KEY_W]: false,
            [KEY_S]: false,
            [KEY_A]: false,
            [KEY_D]: false,
            [KEY_E]: false,
            [KEY_SHIFT]: false
        };

        document.addEventListener('keydown', e => {
            if (e.keyCode in this.keyPressed) {
                this.keyPressed[e.keyCode] = true;
            }
        });

        document.addEventListener('keyup', e => {
            if (e.keyCode in this.keyPressed) {
                this.keyPressed[e.keyCode] = false;
            }
        });

        this.pointerDelta = { x: 0, y: 0 };

        if (pointerLockerNode.requestPointerLock) {
            this.updatePointerDelta = function(e) {
                this.pointerDelta.x -= e.movementX;
                this.pointerDelta.y -= e.movementY;
            }.bind(this);

            document.addEventListener('pointerlockchange', () => {
                if (document.pointerLockElement === pointerLockerNode) {
                    pointerLockerNode.addEventListener('mousemove', this.updatePointerDelta);
                } else {
                    pointerLockerNode.removeEventListener('mousemove', this.updatePointerDelta);
                }
            });

            pointerLockerNode.addEventListener('click', e => {
                pointerLockerNode.requestPointerLock();
            });

        } else {
            let lastCursorPos = null;

            this.updatePointerDelta = function() {
                if (lastCursorPos) {
                    this.pointerDelta.x += lastCursorPos.x - e.clientX;
                    this.pointerDelta.y += lastCursorPos.y - e.clientY;
                }
                lastCursorPos = {
                    x: e.clientX,
                    y: e.clientY
                };
            }.bind(this);

            document.addEventListener('mousemove', this.updatePointerDelta);
        }
    }

    getPointerDelta() {
        const pointerDelta = this.pointerDelta;
        this.pointerDelta = { x: 0, y: 0 };
        return pointerDelta;
    }
}
