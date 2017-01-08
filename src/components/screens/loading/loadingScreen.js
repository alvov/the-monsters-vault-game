import styles from './loadingScreen.css';

import React, { PropTypes } from 'react';
import preloadAssetsList from '../../../../preloadAssetsList';

class LoadingScreen extends React.Component {
    static propTypes = {
        onLoaded: PropTypes.func.isRequired,
        cacheAssetData: PropTypes.func.isRequired
    };
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        this.totalAssets = preloadAssetsList.length;
        this.state = {
            assetsLoaded: 0,
            loadingFailed: false
        };

        preloadAssetsList.forEach(([assetSrc, assetType]) => {
            if (assetType === 'image') {
                const image = new Image();
                image.onload = () => {
                    this.handleAssetLoaded();
                };
                image.onerror = () => {
                    this.handleAssetError(`Couldn't load image ${assetSrc}`);
                };
                image.src = assetSrc;
            } else if (assetType === 'audio') {
                fetch(assetSrc)
                    .then(response => response.arrayBuffer())
                    .then(buffer => new Promise((resolve, reject) => {
                        this.context.audioCtx.decodeAudioData(buffer, decodedData => {
                            this.props.cacheAssetData(assetSrc, decodedData);
                            resolve();
                        }, reject);
                    }))
                    .then(() => {
                        this.handleAssetLoaded();
                    })
                    .catch(error => {
                        this.handleAssetError(error);
                    });
            }
        });
    }

    componentDidUpdate() {
        if (this.state.assetsLoaded === this.totalAssets) {
            this.props.onLoaded();
        }
    }

    render() {
        const percent = Math.ceil(100 * this.state.assetsLoaded / this.totalAssets);
        return <div className={styles.root}>
            { this.state.loadingFailed ? 'Loading failed, sorry' : `Loading assets ${percent} %` }
        </div>
    }

    handleAssetLoaded() {
        this.setState({ assetsLoaded: this.state.assetsLoaded + 1 });
    }

    handleAssetError(error) {
        this.setState({ loadingFailed: true });
        console.error(error);
    }
}

export default LoadingScreen;
