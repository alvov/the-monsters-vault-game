import styles from './startScreen.css';
import React, { PropTypes } from 'react';
import Logo from '../Logo/Logo';

const MUSIC_VOLUME = 0.2;

class StartScreen extends React.Component {
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };
    static propTypes = {
        onStart: PropTypes.func.isRequired
    };

    constructor(...args) {
        super(...args);

        this.decodedAudioBuffer = this.context.assets['src/components/startScreen/theme.m4a'];
        this.gainNode = this.context.audioCtx.createGain();
        this.gainNode.gain.value = MUSIC_VOLUME;
        this.gainNode.connect(this.context.audioCtx.destination);

        this.handleStart = this.handleStart.bind(this);
    }

    componentDidMount() {
        this.startMusic();
    }

    componentWillUnmount() {
        this.stopMusic();
    }

    render() {
        return <div className={styles.root}>
            <Logo />
            <div className={styles.menuItem}>
                <button className={styles.menuItemButton} onClick={this.handleStart}>Start</button>
            </div>
        </div>;
    }

    handleStart() {
        this.props.onStart();
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
}

export default StartScreen;
