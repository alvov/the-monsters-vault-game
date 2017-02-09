/**
 * A bunch of helper methods for web audio nodes
 */
class Audio {
    /**
     * Returns audio panner node with set position
     * @param {Object} audioCtx
     * @param {string} panningModel
     * @param {string} distanceModel
     * @param {number} refDistance
     * @param {number} rolloffFactor
     * @param {number} maxDistance
     * @param {number} coneInnerAngle
     * @param {number} coneOuterAngle
     * @param {number} coneOuterGain
     * @param {number[]} pos
     * @returns {PannerNode}
     */
    static createPanner({
        audioCtx,
        panningModel = 'HRTF',
        distanceModel = 'inverse',
        refDistance = 20,
        rolloffFactor = 0.1,
        maxDistance,
        coneInnerAngle = 360,
        coneOuterAngle = 0,
        coneOuterGain = 0,
        pos
    }) {
        const panner = audioCtx.createPanner();
        panner.panningModel = panningModel;
        panner.distanceModel = distanceModel;
        panner.refDistance = refDistance;
        if (maxDistance) {
            panner.maxDistance = maxDistance;
        } else {
            panner.rolloffFactor = rolloffFactor;
        }
        panner.coneInnerAngle = coneInnerAngle;
        panner.coneOuterAngle = coneOuterAngle;
        panner.coneOuterGain = coneOuterGain;
        if (pos) {
            Audio.setPannerPosition(panner, pos);
        }
        return panner;
    }

    /**
     * Sets panner position (with `setPosition` fallback)
     * @param {PannerNode} panner
     * @param {number[]} pos
     */
    static setPannerPosition(panner, pos) {
        if (panner.positionX) {
            panner.positionX.value = pos[0];
            panner.positionY.value = pos[1];
            panner.positionZ.value = pos[2];
        } else {
            panner.setPosition(...pos);
        }
    }

    /**
     * Stops playing existing audio source,
     * starts playing given audio buffer
     * and returns new audio source instance
     * @param {Object} audioSource
     * @param {Object} audioCtx
     * @param {Object} buffer
     * @param {Object} destination
     * @param {boolean} loop
     * @returns {Object}
     */
    static soundStart({ audioSource, audioCtx, buffer, destination, loop = false }) {
        Audio.soundStop(audioSource);

        audioSource = audioCtx.createBufferSource();
        audioSource.connect(destination);
        audioSource.buffer = buffer;
        audioSource.loop = loop;
        audioSource.start(0);
        return audioSource;
    }

    /**
     * Stops playing given audio source
     * @param {Object} audioSource
     */
    static soundStop(audioSource) {
        if (audioSource) {
            audioSource.stop();
            audioSource.disconnect();
        }
    }
}

export default Audio;
