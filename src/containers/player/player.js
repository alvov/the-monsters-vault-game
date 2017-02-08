import styles from './player.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { PLAYER_STATE_RUN, PLAYER_STATE_WALK } from '../../constants/constants';
import { getTransformRule, convertDegreeToRad } from '../../lib/utils';
import Audio from '../../lib/Audio';

class Player extends React.Component {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
        state: PropTypes.string.isRequired,
        health: PropTypes.number.isRequired
    };
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        this.audioSources = {
            steps: null,
            scream: null
        };

        this.walkingAudioBuffer = this.context.assets['src/containers/player/steps-walking.m4a'];
        this.runnningAudioBuffer = this.context.assets['src/containers/player/steps-running.m4a'];
        this.screamAudioBuffer = this.context.assets['src/containers/player/scream.m4a'];

        this.stepsPanner = Audio.createPanner({
            audioCtx: this.context.audioCtx
        });
        this.stepsPanner.connect(this.context.masterGain);

        this.screamGainNode = this.context.audioCtx.createGain();
        this.screamGainNode.gain.value = 0.5;
        this.screamGainNode.connect(this.context.masterGain);

        this.updateListenerPosition(this.props.position);
        this.updateListenerOrientation(this.props.viewAngle);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.position && this.props.position !== nextProps.position) {
            this.updatePannerPosition(nextProps.position);
            this.updateListenerPosition(nextProps.position);
        }

        if (nextProps.viewAngle && this.props.viewAngle !== nextProps.viewAngle) {
            this.updateListenerOrientation(nextProps.viewAngle);
        }

        if (nextProps.state && this.props.state !== nextProps.state) {
            switch (nextProps.state) {
                case PLAYER_STATE_WALK:
                    this.soundStartSteps(this.walkingAudioBuffer, 'steps');
                    break;
                case PLAYER_STATE_RUN:
                    this.soundStartSteps(this.runnningAudioBuffer, 'steps');
                    break;
                default:
                    this.soundStopSteps();
            }
        }

        if (nextProps.health < this.props.health && nextProps.health !== 0) {
            this.audioSources.scream = Audio.soundStart({
                audioSource: this.audioSources.scream,
                audioCtx: this.context.audioCtx,
                destination: this.screamGainNode,
                buffer: this.screamAudioBuffer
            });
        }
    }

    componentWillUnmount() {
        this.soundStop();
    }

    render() {
        const { children, state, viewAngle } = this.props;
        const playerClassName = [
            'obj player-animation',
            state === PLAYER_STATE_WALK ? styles.playerAnimationWalking :
                state === PLAYER_STATE_RUN ? styles.playerAnimationRunning : ''
        ].join(' ');
        const cameraTransformRule = getTransformRule({
            pos: [0, 0, 600],
            angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
        });

        return <div className={styles.root} style={cameraTransformRule}>
            <div className={playerClassName}>
                {children}
            </div>
        </div>;
    }

    soundStartSteps(decodedAudioBuffer) {
        this.audioSources.steps = Audio.soundStart({
            audioSource: this.audioSources.steps,
            audioCtx: this.context.audioCtx,
            destination: this.stepsPanner,
            buffer: decodedAudioBuffer,
            loop: true
        });
    }

    soundStopSteps() {
        Audio.soundStop(this.audioSources.steps);
    }

    soundStop() {
        for (let audioSource in this.audioSources) {
            if (this.audioSources.hasOwnProperty(audioSource)) {
                Audio.soundStop(this.audioSources[audioSource]);
            }
        }
    }

    updatePannerPosition(pos) {
        Audio.setPannerPosition(this.stepsPanner, [pos[0], 0, pos[2]]);
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
        let z = Math.sqrt(xzProjectionDist ** 2 - x ** 2);
        if (Math.abs(horizontalAngle) < 90 || Math.abs(horizontalAngle) > 270) {
            z = -z;
        }
        return [x, y, z];
    }
}

function mapStateToProps(state) {
    return {
        position: state.pos,
        viewAngle: state.playerViewAngle,
        state: state.playerState,
        health: state.playerHealth
    };
}

export default connect(mapStateToProps)(Player);
