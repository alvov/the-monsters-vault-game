import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    LOADING, START, PLAY, WIN, LOOSE,
    CONTROL_STATE,
    KEY_W, KEY_S, KEY_A, KEY_D, KEY_E, KEY_Q, KEY_SHIFT, KEY_ENTER, KEY_ESCAPE,
    XBOX_BUTTON_A, XBOX_BUTTON_B, XBOX_BUTTON_X, XBOX_BUTTON_BACK, XBOX_BUTTON_CROSS_UP, XBOX_BUTTON_CROSS_DOWN,
    XBOX_STICK_LEFT_AXIS_Y, XBOX_STICK_RIGHT_AXIS_X
} from '../constants/constants'
import * as actionCreators from '../actionCreators';

import LoadingScreen from '../components/screens/loading/loadingScreen';
import StartScreen from '../components/screens/start/startScreen';
import EndScreen from '../components/screens/end/endScreen';
import Hints from '../components/hints/hints';
import Patterns from '../components/patterns/patterns';
import Viewport from './viewport/viewport';
import Camera from './camera/camera';
import Player from './player/player';
import Scene from './scene';
import GameLoop from './gameLoop';
import Loop from '../lib/loop';

const BUTTON_REPEAT_DELAY = 500;
const GAMEPAD_AXIS_UNIT_THRESHOLD = 0.5;
const DEFAULT_GAMEPAD_BUTTONS = {
    [XBOX_BUTTON_A]: [CONTROL_STATE.UNUSED, 0],
    [XBOX_BUTTON_B]: [CONTROL_STATE.UNUSED, 0],
    [XBOX_BUTTON_X]: [CONTROL_STATE.UNUSED, 0],
    [XBOX_BUTTON_BACK]: [CONTROL_STATE.UNUSED, 0],
    [XBOX_BUTTON_CROSS_UP]: [CONTROL_STATE.UNUSED, 0],
    [XBOX_BUTTON_CROSS_DOWN]: [CONTROL_STATE.UNUSED, 0]
};
const DEFAULT_GAMEPAD_AXES_UNIT = {
    [XBOX_STICK_LEFT_AXIS_Y]: [CONTROL_STATE.UNUSED, 0, 0],
    [XBOX_STICK_RIGHT_AXIS_X]: [CONTROL_STATE.UNUSED, 0, 0]
};

class Game extends React.Component {
    static propTypes = {
        gameState: PropTypes.string.isRequired,
        hints: PropTypes.instanceOf(Map).isRequired,
        setGameState: PropTypes.func.isRequired,
        setGamepadState: PropTypes.func.isRequired
    };
    static childContextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired,
        controls: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        if (window.AudioContext) {
            this.audioCtx = new window.AudioContext();
        } else {
            this.audioCtx = new window.webkitAudioContext();
        }
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.value = this.props.settings.soundVolume;
        this.masterGain.connect(this.audioCtx.destination);

        this.assets = {};

        this.gamepad = {
            index: -1,
            id: 'unknown'
        };

        this.controls = {
            keyPressed: {
                [KEY_W]: [CONTROL_STATE.UNUSED, 0],
                [KEY_S]: [CONTROL_STATE.UNUSED, 0],
                [KEY_A]: [CONTROL_STATE.UNUSED, 0],
                [KEY_D]: [CONTROL_STATE.UNUSED, 0],
                [KEY_E]: [CONTROL_STATE.UNUSED, 0],
                [KEY_Q]: [CONTROL_STATE.UNUSED, 0],
                [KEY_SHIFT]: [CONTROL_STATE.UNUSED, 0],
                [KEY_ENTER]: [CONTROL_STATE.UNUSED, 0],
                [KEY_ESCAPE]: [CONTROL_STATE.UNUSED, 0]
            },
            gamepadButtons: DEFAULT_GAMEPAD_BUTTONS,
            gamepadAxesUnit: DEFAULT_GAMEPAD_AXES_UNIT
        };

        // raf loop for capturing player actions
        this.loop = new Loop(this.loopCallback.bind(this));

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.handleGamepadConnected = this.handleGamepadConnected.bind(this);
        this.handleGamepadDisconnected = this.handleGamepadDisconnected.bind(this);

        this.setGameStateStart = this.setGameState.bind(this, START);
        this.setGameStatePlay = this.setGameState.bind(this, PLAY);
        this.setGameStateWin = this.setGameState.bind(this, WIN);
        this.setGameStateLoose = this.setGameState.bind(this, LOOSE);

        this.cacheAssetData = this.cacheAssetData.bind(this);
    }

    getChildContext() {
        return {
            audioCtx: this.audioCtx,
            masterGain: this.masterGain,
            assets: this.assets,
            controls: this.controls
        };
    }

    componentDidMount() {
        this.gamepadPolling = setInterval(() => {
            const gamepads = navigator.getGamepads();
            if (gamepads[0]) {
                this.handleGamepadConnected({ gamepad: gamepads[0] });
            } else {
                this.handleGamepadDisconnected({ gamepad: { index: 0 } });
            }
        }, 1000);
        window.addEventListener('gamepadconnected', this.handleGamepadConnected);
        window.addEventListener('gamepaddisconnected', this.handleGamepadDisconnected);
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('keydown', this.onKeyDown);
        this.loop.start();
    }

    componentWillUnmount() {
        window.removeEventListener('gamepadconnected', this.handleGamepadConnected);
        window.removeEventListener('gamepaddisconnected', this.handleGamepadDisconnected);
        document.removeEventListener('keyup', this.onKeyUp);
        document.removeEventListener('keydown', this.onKeyDown);
        clearInterval(this.gamepadPolling);
        this.loop.stop();
    }

    componentWillReceiveProps(nextProps) {
        this.masterGain.gain.value = nextProps.settings.soundVolume;
    }

    render() {
        const { gameState, hints, gamepadState, settings } = this.props;
        if (gameState === LOADING) {
            return <LoadingScreen
                onLoaded={this.setGameStateStart}
                cacheAssetData={this.cacheAssetData}
            />;
        } else if (gameState === START) {
            return <StartScreen
                onStart={this.setGameStatePlay}
                gamepadState={gamepadState}
                settings={settings}
            />;
        } else if (gameState === PLAY) {
            return <Viewport>
                <Patterns />
                <Hints hints={hints} />
                <GameLoop
                    onWin={this.setGameStateWin}
                    onLoose={this.setGameStateLoose}
                    onExit={this.setGameStateStart}
                >
                    <Camera>
                        <Player>
                            <Scene />
                        </Player>
                    </Camera>
                </GameLoop>
            </Viewport>;
        } else if ([WIN, LOOSE].includes(gameState)) {
            return <EndScreen
                gameState={gameState}
                onEnd={this.setGameStateStart}
                gamepadState={gamepadState} />
        }
    }

    handleGamepadConnected(event) {
        if (this.gamepad.index === -1) {
            if (navigator.getGamepads()[event.gamepad.index] === null) {
                console.log('No gamepad found');
            } else {
                this.gamepad.index = event.gamepad.index;
                this.gamepad.id = event.gamepad.id;
                this.props.setGamepadState(this.gamepad.index);
                console.log('Gamepad %s connected', event.gamepad.id);
            }
        }
    }

    handleGamepadDisconnected(event) {
        if (this.gamepad.index === event.gamepad.index) {
            console.log('Gamepad %s disconnected', this.gamepad.id);
            this.gamepad.index = -1;
            this.gamepad.id = 'unknown';
            this.props.setGamepadState(-1);
            this.controls.gamepadButtons = DEFAULT_GAMEPAD_BUTTONS;
            this.controls.gamepadAxesUnit = DEFAULT_GAMEPAD_AXES_UNIT;
        }
    }

    onKeyDown(event) {
        if (
            event.keyCode in this.controls.keyPressed &&
            this.controls.keyPressed[event.keyCode][0] === CONTROL_STATE.UNUSED
        ) {
            this.controls.keyPressed[event.keyCode] = [0.5, 0];
        }
    }

    onKeyUp(event) {
        if (event.keyCode in this.controls.keyPressed) {
            this.controls.keyPressed[event.keyCode] = [CONTROL_STATE.UNUSED, 0];
        }
    }

    setGameState(state) {
        this.props.setGameState(state);
    }

    cacheAssetData(assetSrc, data) {
        this.assets[assetSrc] = data;
    }

    loopCallback() {
        const now = Date.now();

        // keyboard buttons
        Object.keys(this.controls.keyPressed).forEach(keyCode => {
            const [state, timestamp] = this.controls.keyPressed[keyCode];
            if (state !== CONTROL_STATE.UNUSED) {
                if (timestamp <= now) {
                    this.controls.keyPressed[keyCode] = [
                        CONTROL_STATE.FIRST_TIME_DOWN,
                        now + BUTTON_REPEAT_DELAY
                    ];
                } else if (state === CONTROL_STATE.FIRST_TIME_DOWN) {
                    this.controls.keyPressed[keyCode][0] = CONTROL_STATE.DOWN;
                }
            }
        });

        // gamepad
        if (this.gamepad.index === -1) {
            return;
        }
        const gamepadSnapshot = navigator.getGamepads()[this.gamepad.index];
        if (!gamepadSnapshot) {
            return;
        }

        // console.log(gamepadSnapshot.buttons.reduce((r, b, i) => {
        //     if (b.pressed) {
        //         r.push(i);
        //     }
        //     return r;
        // }, []));

        // gamepad buttons
        Object.keys(this.controls.gamepadButtons).forEach(button => {
            const [state, timestamp] = this.controls.gamepadButtons[button];
            if (gamepadSnapshot.buttons[button].pressed) {
                if (timestamp <= now) {
                    this.controls.gamepadButtons[button] = [
                        CONTROL_STATE.FIRST_TIME_DOWN,
                        now + BUTTON_REPEAT_DELAY
                    ];
                } else if (state === CONTROL_STATE.FIRST_TIME_DOWN) {
                    this.controls.gamepadButtons[button][0] = CONTROL_STATE.DOWN;
                }
            } else if (state !== CONTROL_STATE.UNUSED) {
                this.controls.gamepadButtons[button] = [CONTROL_STATE.UNUSED, 0];
            }
        });

        // gamepad axes
        Object.keys(this.controls.gamepadAxesUnit).forEach(axis => {
            let curAxisValue = 0;
            if (Math.abs(gamepadSnapshot.axes[axis]) > GAMEPAD_AXIS_UNIT_THRESHOLD) {
                curAxisValue = Math.sign(gamepadSnapshot.axes[axis]);
            }
            const [state, timestamp, value] = this.controls.gamepadAxesUnit[axis];
            if (curAxisValue !== 0) {
                if (
                    curAxisValue !== value ||
                    timestamp <= now
                ) {
                    this.controls.gamepadAxesUnit[axis] = [
                        CONTROL_STATE.FIRST_TIME_DOWN,
                        now + BUTTON_REPEAT_DELAY,
                        curAxisValue
                    ];
                } else if (state === CONTROL_STATE.FIRST_TIME_DOWN) {
                    this.controls.gamepadAxesUnit[axis][0] = CONTROL_STATE.DOWN;
                }
            } else if (state !== CONTROL_STATE.UNUSED) {
                this.controls.gamepadAxesUnit[axis] = [CONTROL_STATE.UNUSED, 0, curAxisValue];
            }
        });
    }
}

function mapStateToProps(state) {
    return {
        gameState: state.gameState,
        hints: state.hints,
        gamepadState: state.gamepad.state,
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGameState: actionCreators.game.setGameState,
        setGamepadState: actionCreators.gamepad.setGamepadState
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
