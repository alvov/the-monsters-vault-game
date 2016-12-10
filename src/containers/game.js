import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LOADING, START, PLAY, END } from '../constants'

import LoadingScreen from '../components/loadingScreen/loadingScreen';
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
                onLoaded={this.setGameStatePlay}
                cacheAssetData={this.cacheAssetData}
            />;
        } else if (gameState === PLAY) {
            return <Viewport
                onWin={this.setGameStateEnd}
                onEscape={this.setGameStateStart}
            >
                <GameLoop />
            </Viewport>;
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
                case PLAY:
                    return {
                        type: 'setGamePlay'
                    };
            }
        }
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
