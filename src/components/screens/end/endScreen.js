import styles from './endScreen.css';
import React, { PropTypes } from 'react';
import Loop from '../../../lib/Loop';
import Audio from '../../../lib/Audio';
import {
    KEY_ENTER,
    XBOX_BUTTON_X,
    CONTROL_STATE,
    GAME_STATE_WIN
} from '../../../constants/constants';

const ENDING_TIME = 3000;

class EndScreen extends React.Component {
    static propTypes = {
        onEnd: PropTypes.func.isRequired,
        gamepadState: PropTypes.number.isRequired
    };
    static contextTypes = {
        controls: PropTypes.object.isRequired,
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing gamepad buttons
        this.loop = new Loop(this.loopCallback.bind(this));

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;

        this.audioSources = {
            scream: null
        };
        this.screamAudioBuffer = this.context.assets['src/containers/player/scream.m4a'];
        this.screamGainNode = this.context.audioCtx.createGain();
        this.screamGainNode.gain.value = 0.5;
        this.screamGainNode.connect(this.context.masterGain);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.endingTimer = setTimeout(() => {
            this.setState({
                showAnyKeyMessage: true
            });
        }, ENDING_TIME);
        this.loop.start();

        if (this.props.gameState !== GAME_STATE_WIN) {
            this.audioSources.scream = Audio.soundStart({
                audioSource: this.audioSources.scream,
                audioCtx: this.context.audioCtx,
                destination: this.screamGainNode,
                buffer: this.screamAudioBuffer
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.endingTimer);
        this.endingTimer = null;
        this.loop.stop();

        Audio.soundStop(this.audioSources.scream);
    }


    render() {
        const { gameState, gamepadState } = this.props;
        const className = [
            styles.root,
            styles['state-' + gameState]
        ].join(' ');

        return <div
            className={className}
            onClick={this.handleClick}
        >
            <div className={styles.message}>
                {gameState === GAME_STATE_WIN
                    ? 'You escaped'
                    : 'You died. The monster got you'
                }
            </div>
            <div className={styles.key}>
                {gamepadState === -1
                    ? '[[ Press `Enter` ]]'
                    : '[[ Press `X` button ]]'
                }
            </div>
        </div>;
    }

    loopCallback() {
        if (!this.state.showAnyKeyMessage) {
            return;
        }
        // keyboard
        if (this.context.controls.keyPressed[KEY_ENTER][0] === CONTROL_STATE.FIRST_TIME_DOWN) {
            this.context.controls.keyPressed[KEY_ENTER][0] = CONTROL_STATE.DOWN;
            this.props.onEnd();
        }

        // gamepad
        if (this.context.controls.gamepadButtons[XBOX_BUTTON_X][0] === CONTROL_STATE.FIRST_TIME_DOWN) {
            this.context.controls.gamepadButtons[XBOX_BUTTON_X][0] = CONTROL_STATE.DOWN;
            this.props.onEnd();
        }
    }

    handleClick() {
        this.props.onEnd();
    }
}

export default EndScreen;
