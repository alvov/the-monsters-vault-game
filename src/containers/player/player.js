import styles from './player.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { PLAYER_RUN, PLAYER_WALK } from '../../constants/constants';
import { convertDegreeToRad } from '../../lib/utils';

class Player extends React.Component {
    static propTypes = {
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired,
        viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerState: PropTypes.string.isRequired
    };
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        this.decodedAudioBufferWalking = this.context.assets['src/containers/player/steps-walking.m4a'];
        this.decodedAudioBufferRunning = this.context.assets['src/containers/player/steps-running.m4a'];

        this.panner = this.context.audioCtx.createPanner();
        this.panner.panningModel = 'HRTF';
        this.panner.distanceModel = 'inverse';
        this.panner.refDistance = 20;
        this.panner.rolloffFactor = 0.1;
        this.panner.coneInnerAngle = 360;
        this.panner.coneOuterAngle = 0;
        this.panner.coneOuterGain = 0;
        this.panner.connect(this.context.masterGain);

        this.gainNode = this.context.audioCtx.createGain();
        this.gainNode.gain.value = 1;
        this.gainNode.connect(this.panner);

        this.updateListenerPosition(this.props.playerPos);
        this.updateListenerOrientation(this.props.viewAngle);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.playerPos && this.props.playerPos !== nextProps.playerPos) {
            this.updatePannerPosition(nextProps.playerPos);
            this.updateListenerPosition(nextProps.playerPos);
        }

        if (nextProps.viewAngle && this.props.viewAngle !== nextProps.viewAngle) {
            this.updateListenerOrientation(nextProps.viewAngle);
        }

        if (nextProps.playerState && this.props.playerState !== nextProps.playerState) {
            switch (nextProps.playerState) {
                case PLAYER_WALK:
                    this.soundStop();
                    this.soundStart(this.decodedAudioBufferWalking);
                    break;
                case PLAYER_RUN:
                    this.soundStop();
                    this.soundStart(this.decodedAudioBufferRunning);
                    break;
                default:
                    this.soundStop();
            }
        }
    }

    componentWillUnmount() {
        this.soundStop();
    }

    render() {
        const { children, playerState } = this.props;
        const className = [
            'obj player-animation',
            playerState === PLAYER_WALK ? styles.playerAnimationWalking :
                playerState === PLAYER_RUN ? styles.playerAnimationRunning : ''
        ].join(' ');

        return <div className={className}>
            {children}
        </div>;
    }

    soundStart(decodedAudioBuffer) {
        this.audioSource = this.context.audioCtx.createBufferSource();
        this.audioSource.connect(this.gainNode);
        this.audioSource.buffer = decodedAudioBuffer;
        this.audioSource.loop = true;
        this.audioSource.start(0);
    }

    soundStop() {
        if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.disconnect(this.gainNode);
            this.audioSource = null;
        }
    }

    updatePannerPosition(pos) {
        if (this.panner.positionX) {
            this.panner.positionX.value = pos[0];
            this.panner.positionY.value = 0;
            this.panner.positionZ.value = pos[2];
        } else {
            this.panner.setPosition(pos[0], 0, pos[2]);
        }
    }

    /**
     * Updates audio listener position values
     * @param {Array} pos
     */
    updateListenerPosition(pos) {
        if (this.context.audioCtx.listener.positionX) {
            this.context.audioCtx.listener.positionX.value = pos[0];
            this.context.audioCtx.listener.positionY.value = pos[1];
            this.context.audioCtx.listener.positionZ.value = pos[2];
        } else {
            this.context.audioCtx.listener.setPosition(...pos);
        }
    }

    /**
     * Updates audio listener orientation values
     * @param {Array} angle
     */
    updateListenerOrientation(angle) {
        const [forwardX, forwardY, forwardZ] = Player.getVectorFromAngles(...angle);

        let upVerticalAngle;
        let upHorizontalAngle;
        if (angle[1] > 0) {
            upVerticalAngle = 90 - angle[1];
            upHorizontalAngle = (angle[0] - 180) % 360;
        } else {
            upVerticalAngle = 90 + angle[1];
            upHorizontalAngle = angle[0];
        }
        const [upX, upY, upZ] = Player.getVectorFromAngles(upHorizontalAngle, upVerticalAngle);

        if (this.context.audioCtx.listener.forwardX) {
            this.context.audioCtx.listener.forwardX.value = forwardX;
            this.context.audioCtx.listener.forwardY.value = forwardY;
            this.context.audioCtx.listener.forwardZ.value = forwardZ;
            this.context.audioCtx.listener.upX.value = upX;
            this.context.audioCtx.listener.upY.value = upY;
            this.context.audioCtx.listener.upZ.value = upZ;
        } else {
            this.context.audioCtx.listener.setOrientation(forwardX, forwardY, forwardZ, upX, upY, upZ);
        }
    }

    /**
     * Returns vector coordinates for given angles
     * @param {number} horizontalAngle (rad)
     * @param {number} verticalAngle (rad)
     * @returns {number[]}
     */
    static getVectorFromAngles(horizontalAngle, verticalAngle) {
        const y = Math.sin(convertDegreeToRad(verticalAngle));
        const xzProjectionDist = Math.sqrt(1 - y * y);
        const x = Math.sin(convertDegreeToRad(horizontalAngle)) * xzProjectionDist;
        let z = Math.sqrt(xzProjectionDist * xzProjectionDist - x * x);
        if (Math.abs(horizontalAngle) < 90 || Math.abs(horizontalAngle) > 270) {
            z = -z;
        }
        return [x, y, z];
    }
}

function mapStateToProps(state) {
    return {
        playerPos: state.pos,
        viewAngle: state.viewAngle,
        playerState: state.playerState
    };
}

export default connect(mapStateToProps)(Player);
