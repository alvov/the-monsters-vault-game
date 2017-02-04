/**
 * Creates loop instance that launches given <fn> callback in a rAF cycle
 * with a frame rate coefficient that shows the relation between the real and the required FPS
 */
export default class Loop {
    /**
     * @constructor
     * @param {Function} fn
     * @param {number} fps
     * @param {boolean} startImmediately
     */
    constructor(fn = () => {}, fps = 60, startImmediately = false) {
        this.fn = fn;
        this.fps = fps;
        this.oldTimestamp = null;
        this.rafId = null;
        if (startImmediately) {
            this.start();
        }
    }

    /**
     * Starts the loop
     * @param {number} timestamp
     */
    start(timestamp) {
        this.rafId = window.requestAnimationFrame(this.start.bind(this));
        let frameRateCoefficient = 1;
        if (timestamp) {
            if (this.oldTimestamp) {
                frameRateCoefficient = (timestamp - this.oldTimestamp) * this.fps / 1000;
            }
            this.oldTimestamp = timestamp;
        }
        this.fn(frameRateCoefficient);
    }

    /**
     * Stops the loop
     */
    stop() {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
    }
}