export default class Loop {
    constructor(fn, fps = 60, startImmediately = false) {
        this.fn = fn;
        this.fps = fps;
        this.oldTimestamp = null;
        this.rafId = null;
        if (startImmediately) {
            this.start();
        }
    }

    start(timestamp) {
        this.rafId = window.requestAnimationFrame(this.start.bind(this));
        var frameRateCoefficient = 1;
        if (timestamp) {
            if (this.oldTimestamp) {
                frameRateCoefficient = (timestamp - this.oldTimestamp) * this.fps / 1000;
            }
            this.oldTimestamp = timestamp;
        }
        this.fn(frameRateCoefficient);
    }

    stop() {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }
}