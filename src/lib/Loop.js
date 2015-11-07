export default class Loop {
    constructor(fn, startImmediately = false) {
        this.fn = fn;
        this.rafId = null;
        if (startImmediately) {
            this.start();
        }
    }

    start() {
        this.rafId = window.requestAnimationFrame(this.start.bind(this));
        this.fn();
    }

    stop() {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }
}