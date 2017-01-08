import styles from './endScreen.css';
import React, { PropTypes } from 'react';
import Loop from '../../../lib/loop';
import {
    KEY_ENTER,
    XBOX_BUTTON_X,
    CONTROL_STATE
} from '../../../constants/constants';

const ENDING_TIME = 3000;

class EndScreen extends React.Component {
    static contextTypes = {
        controls: PropTypes.object.isRequired
    };
    static propTypes = {
        onEnd: PropTypes.func.isRequired,
        gamepadState: PropTypes.number.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing gamepad buttons
        this.loop = new Loop(this.loopCallback.bind(this));

        this.state = {
            showAnyKeyMessage: false
        };
        this.endingTimer = null;
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
        const { gamepadState } = this.props;
        return <div
            className={styles.root}
            onClick={this.handleKeyDown}
        >
            <div className={styles.message}>
                You escaped
            </div>
            <div className={styles.anyKey}>
                {gamepadState === -1 ? '[[ Press `Enter` ]]' : '[[ Press `X` button ]]'}
            </div>
        </div>;
    }

    loopCallback() {
        if (!this.state.showAnyKeyMessage) {
            return;
        }
        // keyboard
        if (this.context.controls.keyPressed[KEY_ENTER][0] === CONTROL_STATE.FIRST_TIME_DOWN) {
            this.props.onEnd();
        }

        // gamepad
        if (this.context.controls.gamepadButtons[XBOX_BUTTON_X][0] === CONTROL_STATE.FIRST_TIME_DOWN) {
            this.props.onEnd();
        }
    }
}

export default EndScreen;
