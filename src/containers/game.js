import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    GAME_STATE_LOADING, GAME_STATE_START, GAME_STATE_PLAY, GAME_STATE_WIN, GAME_STATE_LOOSE,
    CONTROL_STATE,
    KEY_FORWARD, KEY_BACKWARD, KEY_LEFT, KEY_RIGHT, KEY_INTERACT,
    KEY_QUIT_GAME, KEY_RUN, KEY_ENTER, KEY_BACK,
    XBOX_BUTTON_A, XBOX_BUTTON_B, XBOX_BUTTON_X, XBOX_BUTTON_BACK, XBOX_BUTTON_CROSS_UP, XBOX_BUTTON_CROSS_DOWN,
    XBOX_STICK_LEFT_AXIS_Y, XBOX_STICK_RIGHT_AXIS_X
} from '../constants/constants'
import * as actionCreators from '../actionCreators';

import LoadingScreen from '../components/screens/loading/loadingScreen';
import StartScreen from '../components/screens/start/startScreen';
import EndScreen from '../components/screens/end/endScreen';
import Hints from '../components/hints/hints';
import PlayerHealth from '../components/playerHealth/playerHealth';
import Patterns from '../components/patterns/patterns';
import Viewport from './viewport/viewport';
import Player from './player/player';
import Scene from './scene';
import GameLoop from './gameLoop/gameLoop';
import Loop from '../lib/Loop';
import LevelGenerator from '../lib/LevelGenerator';
import level from '../level';

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
        playerHealth: PropTypes.number.isRequired,
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
                [KEY_FORWARD]: [CONTROL_STATE.UNUSED, 0],
                [KEY_BACKWARD]: [CONTROL_STATE.UNUSED, 0],
                [KEY_LEFT]: [CONTROL_STATE.UNUSED, 0],
                [KEY_RIGHT]: [CONTROL_STATE.UNUSED, 0],
                [KEY_INTERACT]: [CONTROL_STATE.UNUSED, 0],
                [KEY_QUIT_GAME]: [CONTROL_STATE.UNUSED, 0],
                [KEY_RUN]: [CONTROL_STATE.UNUSED, 0],
                [KEY_ENTER]: [CONTROL_STATE.UNUSED, 0],
                [KEY_BACK]: [CONTROL_STATE.UNUSED, 0]
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

        this.setGameStateStart = this.setGameState.bind(this, GAME_STATE_START);
        this.setGameStateWin = this.setGameState.bind(this, GAME_STATE_WIN);
        this.setGameStateLoose = this.setGameState.bind(this, GAME_STATE_LOOSE);
        this.setGameStatePlay = this.setGameStatePlay.bind(this);
        this.setGameStatePlayRandom = this.setGameStatePlayRandom.bind(this);

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
        const { gameState, hints, playerHealth, gamepadState, settings } = this.props;
        if (gameState === GAME_STATE_LOADING) {
            return <LoadingScreen
                onLoaded={this.setGameStateStart}
                cacheAssetData={this.cacheAssetData}
            />;
        } else if (gameState === GAME_STATE_START) {
            return <StartScreen
                onStart={this.setGameStatePlay}
                onStartRandom={this.setGameStatePlayRandom}
                gamepadState={gamepadState}
                settings={settings}
            />;
        } else if (gameState === GAME_STATE_PLAY) {
            return <Viewport>
                <Patterns />
                <GameLoop
                    onWin={this.setGameStateWin}
                    onLoose={this.setGameStateLoose}
                    onExit={this.setGameStateStart}
                >
                    <Player>
                        <Scene />
                    </Player>
                </GameLoop>
                <PlayerHealth health={playerHealth} />
                <Hints hints={hints} />
            </Viewport>;
        } else if ([GAME_STATE_WIN, GAME_STATE_LOOSE].includes(gameState)) {
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
            event.code in this.controls.keyPressed &&
            this.controls.keyPressed[event.code][0] === CONTROL_STATE.UNUSED
        ) {
            this.controls.keyPressed[event.code] = [0.5, 0];
        }
    }

    onKeyUp(event) {
        if (event.code in this.controls.keyPressed) {
            this.controls.keyPressed[event.code] = [CONTROL_STATE.UNUSED, 0];
        }
    }

    setGameState(state) {
        this.props.setGameState(state);
    }

    setGameStatePlay() {
        this.props.setLevel(level);
        this.setGameState(GAME_STATE_PLAY);
    }

    setGameStatePlayRandom() {
        this.props.setLevel(new LevelGenerator().level);
        this.setGameState(GAME_STATE_PLAY);
    }

    cacheAssetData(assetSrc, data) {
        this.assets[assetSrc] = data;
    }

    loopCallback() {
        const now = Date.now();

        // keyboard buttons
        Object.keys(this.controls.keyPressed).forEach(code => {
            const [state, timestamp] = this.controls.keyPressed[code];
            if (state !== CONTROL_STATE.UNUSED) {
                if (timestamp <= now) {
                    this.controls.keyPressed[code] = [
                        CONTROL_STATE.FIRST_TIME_DOWN,
                        now + BUTTON_REPEAT_DELAY
                    ];
                } else if (state === CONTROL_STATE.FIRST_TIME_DOWN) {
                    this.controls.keyPressed[code][0] = CONTROL_STATE.DOWN;
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
        playerHealth: state.playerHealth,
        gamepadState: state.gamepad.state,
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGameState: actionCreators.game.setGameState,
        setLevel: actionCreators.level.setLevel,
        setGamepadState: actionCreators.gamepad.setGamepadState
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
