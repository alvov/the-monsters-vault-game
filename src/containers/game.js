import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LOADING, START, PLAY, END } from '../constants/constants'
import * as actionCreators from '../actionCreators';

import LoadingScreen from '../components/loadingScreen/loadingScreen';
import StartScreen from '../components/startScreen/startScreen';
import EndScreen from '../components/endScreen/endScreen';
import Hints from '../components/hints/hints';
import Viewport from './viewport/viewport';
import Camera from './camera/camera';
import Player from './player/player';
import Scene from './scene';
import GameLoop from './gameLoop';

class Game extends React.Component {
    static propTypes = {
        gameState: PropTypes.string.isRequired,
        hints: PropTypes.instanceOf(Map).isRequired,
        setGameState: PropTypes.func.isRequired,
        setGamepadState: PropTypes.func.isRequired
    };
    static childContextTypes = {
        audioCtx: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        if (window.AudioContext) {
            this.audioCtx = new window.AudioContext();
        } else {
            this.audioCtx = new window.webkitAudioContext();
        }
        this.assets = {};

        this.gamepad = {
            index: -1,
            id: 'unknown'
        };

        this.handleGamepadConnected = this.handleGamepadConnected.bind(this);
        this.handleGamepadDisconnected = this.handleGamepadDisconnected.bind(this);

        this.setGameStateStart = this.setGameState.bind(this, START);
        this.setGameStatePlay = this.setGameState.bind(this, PLAY);
        this.setGameStateEnd = this.setGameState.bind(this, END);

        this.cacheAssetData = this.cacheAssetData.bind(this);

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
    }

    getChildContext() {
        return {
            audioCtx: this.audioCtx,
            assets: this.assets
        };
    }

    componentWillUnmount() {
        window.removeEventListener('gamepadconnected', this.handleGamepadConnected);
        window.removeEventListener('gamepaddisconnected', this.handleGamepadDisconnected);
        clearInterval(this.gamepadPolling);
    }

    render() {
        const { gameState, hints } = this.props;
        if (gameState === LOADING) {
            return <LoadingScreen
                onLoaded={this.setGameStateStart}
                cacheAssetData={this.cacheAssetData}
            />;
        } else if (gameState === START) {
            return <StartScreen onStart={this.setGameStatePlay} />
        } else if (gameState === PLAY) {
            return <Viewport>
                <Hints hints={hints} />
                <GameLoop onWin={this.setGameStateEnd}>
                    <Camera>
                        <Player>
                            <Scene />
                        </Player>
                    </Camera>
                </GameLoop>
            </Viewport>;
        } else if (gameState === END) {
            return <EndScreen onEnd={this.setGameStateStart} />
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
        }
    }

    setGameState(state) {
        this.props.setGameState(state);
    }

    cacheAssetData(assetSrc, data) {
        this.assets[assetSrc] = data;
    }
}

function mapStateToProps(state) {
    return {
        gameState: state.gameState,
        hints: state.hints
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGameState: actionCreators.game.setGameState,
        setGamepadState: actionCreators.gamepadState.setGamepadState
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
