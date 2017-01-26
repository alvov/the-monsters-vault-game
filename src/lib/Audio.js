class Audio {
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
            if (panner.positionX) {
                panner.positionX.value = pos[0];
                panner.positionY.value = pos[1];
                panner.positionZ.value = pos[2];
            } else {
                panner.setPosition(...pos);
            }
        }
        return panner;
    }

    static setPannerPosition(panner, pos) {
        if (panner.positionX) {
            panner.positionX.value = pos[0];
            panner.positionY.value = pos[1];
            panner.positionZ.value = pos[2];
        } else {
            panner.setPosition(pos);
        }
    }

    static soundStart({ audioSource, audioCtx, buffer, destination, loop = false }) {
        Audio.soundStop(audioSource);

        audioSource = audioCtx.createBufferSource();
        audioSource.connect(destination);
        audioSource.buffer = buffer;
        audioSource.loop = loop;
        audioSource.start(0);
        return audioSource;
    }

    static soundStop(audioSource) {
        if (audioSource) {
            audioSource.stop();
            audioSource.disconnect();
            audioSource = null;
        }
    }
}

export default Audio;
