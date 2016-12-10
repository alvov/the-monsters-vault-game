require('./loadingScreen.css');

import React, { PropTypes } from 'react';
import preloadAssetsList from '../../preloadAssetsList';

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
            assetsLoaded: 0
        };
        Promise.all(preloadAssetsList.map(([assetSrc, assetType]) => {
            if (assetType === 'image') {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.onload = () => {
                        this.handleAssetLoaded();
                        resolve();
                    };
                    image.onerror = () => {
                        reject(`Couldn't load image ${assetSrc}`);
                    };
                    image.src = assetSrc;
                });
            } else if (assetType === 'audio') {
                return fetch(assetSrc)
                    .then(response => response.arrayBuffer())
                    .then(buffer => new Promise((resolve, reject) => {
                        this.context.audioCtx.decodeAudioData(buffer, decodedData => {
                            this.handleAssetLoaded();
                            this.props.cacheAssetData(assetSrc, decodedData);
                            resolve();
                        }, reject);
                    }));
            }
        }))
            .then(() => {
                this.props.onLoaded();
            })
            .catch(error => {
                alert('Loading failed, sorry');
                console.error(error);
            });
    }

    render() {
        const percent = Math.ceil(100 * this.state.assetsLoaded / this.totalAssets);
        return <div className="loading-screen">
            Loading assets {percent} %
        </div>
    }

    handleAssetLoaded() {
        this.setState({ assetsLoaded: this.state.assetsLoaded + 1 });
    }
}

export default LoadingScreen;
