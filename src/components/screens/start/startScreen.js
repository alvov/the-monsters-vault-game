import styles from './startScreen.css';
import React, { PropTypes } from 'react';
import Logo from '../../logo/logo';
import Credits from './credits/credits';
import Loop from '../../../lib/loop';
import Settings from '../../../containers/settings/settings';

import {
    CONTROL_STATE,
    KEY_ESCAPE,
    KEY_ENTER,
    XBOX_BUTTON_A,
    XBOX_BUTTON_B,
    XBOX_BUTTON_CROSS_UP,
    XBOX_BUTTON_CROSS_DOWN,
    XBOX_STICK_LEFT_AXIS_Y
} from '../../../constants/constants';

const MUSIC_VOLUME = 0.2;

const SCREEN_DEFAULT = 'default';
const SCREEN_SETTINGS = 'settings';
const SCREEN_CREDITS = 'credits';

class StartScreen extends React.Component {
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired,
        controls: PropTypes.object.isRequired
    };
    static propTypes = {
        onStart: PropTypes.func.isRequired,
        gamepadState: PropTypes.number.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new Loop(this.loopCallback.bind(this));

        this.decodedAudioBuffer = this.context.assets['src/components/screens/start/theme.m4a'];
        this.gainNode = this.context.audioCtx.createGain();
        this.gainNode.gain.value = MUSIC_VOLUME;
        this.gainNode.connect(this.context.masterGain);

        this.handleStart = this.handleStart.bind(this);
        this.setScreenSettings = this.setScreen.bind(this, SCREEN_SETTINGS);
        this.setScreenCredits = this.setScreen.bind(this, SCREEN_CREDITS);
        this.setScreenDefault = function() {
            this.setActiveButton(0);
            this.setScreen(SCREEN_DEFAULT);
        }.bind(this);

        this.state = {
            screen: SCREEN_DEFAULT,
            menuItemActive: 0,
            menu: [
                {
                    text: 'Play',
                    action: this.handleStart
                },
                {
                    text: 'Settings',
                    action: this.setScreenSettings
                },
                {
                    text: 'Credits',
                    action: this.setScreenCredits
                }
            ]
        };
    }

    componentDidMount() {
        this.startMusic();
        this.loop.start();
    }

    componentWillUnmount() {
        this.stopMusic();
        this.loop.stop();
    }

    render() {
        return <div className={styles.root}>
            {this.renderDefaultScreen()}
            {this.renderSettingsScreen()}
            {this.renderCreditsScreen()}
        </div>;
    }

    renderDefaultScreen() {
        const { menu, menuItemActive } = this.state;
        if (this.state.screen === SCREEN_DEFAULT) {
            return <div>
                <Logo />
                <div className={styles.menu}>
                    {menu.map((item, index) =>
                        <button key={item.text}
                            className={styles.menuButton + (menuItemActive === index ? ` ${styles.menuButtonActive}` : '')}
                            onClick={item.action}
                            onFocus={this.setActiveButton.bind(this, index)}
                            tabIndex={index + 1}
                        >
                            {item.text}
                        </button>
                    )}
                </div>
            </div>;
        }
        return null;
    }

    renderSettingsScreen() {
        if (this.state.screen === SCREEN_SETTINGS) {
            return <div>
                {this.renderBackButton()}
                <h1 className={styles.title}>Settings</h1>
                <Settings />
            </div>;
        }
        return null;
    }

    renderCreditsScreen() {
        if (this.state.screen === SCREEN_CREDITS) {
            return <div>
                {this.renderBackButton()}
                <h1 className={styles.title}>Credits</h1>
                <Credits />
            </div>;
        }
        return null;
    }

    renderBackButton() {
        const { gamepadState } = this.props;
        return <button className={styles.backButton} onClick={this.setScreenDefault}>
            ← Back&nbsp;
            {gamepadState === -1 ? '[Esc]' : '(B)'}
        </button>;
    }

    loopCallback() {
        // keyboard
        if (this.state.screen !== SCREEN_DEFAULT && this.isKeyboardButtonPressed(KEY_ESCAPE)) {
            this.setScreenDefault();
        }
        if (this.state.screen === SCREEN_DEFAULT && this.isKeyboardButtonPressed(KEY_ENTER)) {
            this.launchActiveAction();
        }

        // gamepad
        const gamepadStickLeftMoved = this.getGamepadLeftStickMove();
        if (this.state.screen !== SCREEN_DEFAULT) {
            if (this.isGamepadButtonPressed(XBOX_BUTTON_B)) {
                this.setScreenDefault();
            }
        } else {
            if (this.isGamepadButtonPressed(XBOX_BUTTON_A)) {
                this.launchActiveAction();
            }
            if (
                this.isGamepadButtonPressed(XBOX_BUTTON_CROSS_UP) ||
                gamepadStickLeftMoved === -1
            ) {
                this.setState({ menuItemActive: Math.max(0, this.state.menuItemActive - 1) });
            }
            if (
                this.isGamepadButtonPressed(XBOX_BUTTON_CROSS_DOWN) ||
                gamepadStickLeftMoved === 1
            ) {
                this.setState({
                    menuItemActive: Math.min(
                        this.state.menu.length - 1,
                        this.state.menuItemActive + 1
                    )
                });
            }
        }
    }

    handleStart() {
        this.props.onStart();
    }

    launchActiveAction() {
        const menuItemActive = this.state.menuItemActive;
        this.setState({ menuItemActive: 0 });
        this.state.menu[menuItemActive].action();
    }

    setActiveButton(index) {
        this.setState({ menuItemActive: index });
    }

    setScreen(screen) {
        this.setState({ screen });
    }

    startMusic() {
        this.audioSource = this.context.audioCtx.createBufferSource();
        this.audioSource.connect(this.gainNode);
        this.audioSource.buffer = this.decodedAudioBuffer;
        this.audioSource.loop = true;
        this.audioSource.start(0);
    }

    stopMusic() {
        if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.disconnect(this.gainNode);
            this.audioSource = null;
        }
    }

    isKeyboardButtonPressed(keyCode) {
        const isPressed = this.context.controls.keyPressed[keyCode][0] === CONTROL_STATE.FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.keyPressed[keyCode][0] = CONTROL_STATE.DOWN;
        }
        return isPressed;
    }

    isGamepadButtonPressed(button) {
        const isPressed = this.context.controls.gamepadButtons[button][0] === CONTROL_STATE.FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.gamepadButtons[button][0] = CONTROL_STATE.DOWN;
        }
        return isPressed;
    }

    getGamepadLeftStickMove() {
        if (this.context.controls.gamepadAxesUnit[XBOX_STICK_LEFT_AXIS_Y][0] === 1) {
            return this.context.controls.gamepadAxesUnit[XBOX_STICK_LEFT_AXIS_Y][2];
        }
        return 0;
    }
}

export default StartScreen;
