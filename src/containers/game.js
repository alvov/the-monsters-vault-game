import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LOADING, START, PLAY, END } from '../constants'

import LoadingScreen from '../components/loadingScreen/loadingScreen';
import StartScreen from '../components/startScreen/startScreen';
import EndScreen from '../components/endScreen/endScreen';
import Viewport from './viewport/viewport';
import GameLoop from './gameLoop';

class Game extends React.Component {
    static propTypes = {
        gameState: PropTypes.string.isRequired,
        setGameState: PropTypes.func.isRequired
    };
    static childContextTypes = {
        audioCtx: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        this.audioCtx = new window.AudioContext();
        this.assets = {};

        this.setGameStateStart = this.setGameState.bind(this, START);
        this.setGameStatePlay = this.setGameState.bind(this, PLAY);
        this.setGameStateEnd = this.setGameState.bind(this, END);

        this.cacheAssetData = this.cacheAssetData.bind(this);
        this.viewportNode = null;
    }

    getChildContext() {
        return {
            audioCtx: this.audioCtx,
            assets: this.assets
        };
    }

    render() {
        const { gameState } = this.props;
        if (gameState === LOADING) {
            return <LoadingScreen
                onLoaded={this.setGameStateStart}
                cacheAssetData={this.cacheAssetData}
            />;
        } else if (gameState === START) {
            return <StartScreen onStart={this.setGameStatePlay} />
        } else if (gameState === PLAY) {
            return <Viewport>
                <GameLoop onWin={this.setGameStateEnd} />
            </Viewport>;
        } else if (gameState === END) {
            return <EndScreen onEnd={this.setGameStateStart} />
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
        gameState: state.gameState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setGameState(state) {
            switch(state) {
                case START:
                    return {
                        type: 'setGameStart'
                    };
                case PLAY:
                    return {
                        type: 'setGamePlay'
                    };
                case END:
                    return {
                        type: 'setGameEnd'
                    };
            }
        }
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
