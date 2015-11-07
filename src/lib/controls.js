export default class Controls {
    constructor() {
        this.keyPressed = new Set();
        this.stack = new Set();
        var lastCursorPos = null;
        this.pointerDelta = { x: 0, y: 0 };

        document.addEventListener('keydown', e => {
            this.keyPressed.add(e.keyCode);
            this.stack.add(e.keyCode);
        });

        document.addEventListener('keyup', e => {
            this.keyPressed.delete(e.keyCode);
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

    getStack() {
        var result = this.stack.values();
        this.stack.clear();
        return result;
    }

    getPointerDelta() {
        var pointerDelta = Object.assign({}, this.pointerDelta);
        this.pointerDelta = { x: 0, y: 0 };
        return pointerDelta;
    }
}
