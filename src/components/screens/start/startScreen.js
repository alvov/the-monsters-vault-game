import styles from './startScreen.css';
import React, { PropTypes } from 'react';
import Logo from '../../logo/logo';
import Credits from './credits/credits';
import Loop from '../../../lib/Loop';
import Settings from '../../../containers/settings/settings';
import Audio from '../../../lib/Audio';

import {
    CONTROL_STATE,
    KEY_BACK,
    KEY_ENTER,
    XBOX_BUTTON_A,
    XBOX_BUTTON_B,
    XBOX_BUTTON_CROSS_UP,
    XBOX_BUTTON_CROSS_DOWN,
    XBOX_STICK_LEFT_AXIS_Y,
    GAME_VERSION
} from '../../../constants/constants';

const MUSIC_VOLUME = 0.2;

const SCREEN_DEFAULT = 'default';
const SCREEN_SETTINGS = 'settings';
const SCREEN_CREDITS = 'credits';

class StartScreen extends React.Component {
    static propTypes = {
        onStart: PropTypes.func.isRequired,
        onStartRandom: PropTypes.func.isRequired,
        gamepadState: PropTypes.number.isRequired
    };
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired,
        controls: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        // raf loop for capturing player actions
        this.loop = new Loop(this.loopCallback.bind(this));

        this.audioSources = {
            theme: null
        };
        this.themeAudioBuffer = this.context.assets['src/components/screens/start/theme.m4a'];
        this.themeGainNode = this.context.audioCtx.createGain();
        this.themeGainNode.gain.value = MUSIC_VOLUME;
        this.themeGainNode.connect(this.context.masterGain);

        this.handleStart = this.handleStart.bind(this);
        this.handleStartRandom = this.handleStartRandom.bind(this);
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
                    text: 'Random level',
                    action: this.handleStartRandom
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
        this.audioSources.theme = Audio.soundStart({
            audioSource: this.audioSources.theme,
            audioCtx: this.context.audioCtx,
            destination: this.themeGainNode,
            buffer: this.themeAudioBuffer,
            loop: true
        });
        this.loop.start();
    }

    componentWillUnmount() {
        Audio.soundStop(this.audioSources.theme);
        this.loop.stop();
    }

    render() {
        return <div className={styles.root}>
            <div className={styles.version}>{'v' + GAME_VERSION}</div>
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

    handleStart() {
        this.props.onStart();
    }

    handleStartRandom() {
        this.props.onStartRandom();
    }

    loopCallback() {
        // keyboard
        if (this.state.screen !== SCREEN_DEFAULT && this.isKeyboardButtonPressed(KEY_BACK)) {
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

    isKeyboardButtonPressed(code) {
        const isPressed = this.context.controls.keyPressed[code][0] === CONTROL_STATE.FIRST_TIME_DOWN;
        if (isPressed) {
            this.context.controls.keyPressed[code][0] = CONTROL_STATE.DOWN;
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
