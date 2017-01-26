import styles from './endScreen.css';
import React, { PropTypes } from 'react';
import Loop from '../../../lib/Loop';
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
        controls: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing gamepad buttons
        this.loop = new Loop(this.loopCallback.bind(this));

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.endingTimer = setTimeout(() => {
            this.setState({
                showAnyKeyMessage: true
            });
        }, ENDING_TIME);
        this.loop.start();
    }

    componentWillUnmount() {
        clearTimeout(this.endingTimer);
        this.endingTimer = null;
        this.loop.stop();
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
