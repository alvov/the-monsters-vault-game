import styles from './enemy.css';
import React, { PropTypes } from 'react';
import { getTransformRule, convertRadToDegree } from '../../lib/utils';
import Audio from '../../lib/Audio';

import {
    ENEMY_STATE
} from '../../constants/constants';

const ENEMY_ROARING_PERIOD = 4;
const ENEMY_SOUNDS_GAIN = 1;

class Enemy extends React.PureComponent {
    static propTypes = {
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        direction: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        graphicsQuality: PropTypes.number.isRequired
    };
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);

        this.roaringTimeout = null;

        const gainNode = this.context.audioCtx.createGain();
        gainNode.gain.value = ENEMY_SOUNDS_GAIN;
        gainNode.connect(this.context.masterGain);

        this.noisePanner = Audio.createPanner({
            audioCtx: this.context.audioCtx,
            rolloffFactor: 0.5
        });
        this.noisePanner.connect(gainNode);

        this.noiseAudioBuffer = this.context.assets['src/components/enemy/noise.m4a'];
        this.noiseAudioSource = Audio.soundStart({
            audioCtx: this.context.audioCtx,
            destination: this.noisePanner,
            buffer: this.noiseAudioBuffer,
            loop: true
        });

        this.roarPanner = Audio.createPanner({
            audioCtx: this.context.audioCtx,
            pos: this.props.pos,
            coneInnerAngle: 60,
            coneOuterAngle: 160,
            coneOuterGain: 0.3
        });
        this.roarPanner.connect(gainNode);

        this.roarAudioSource = null;
        this.roarAudioBuffers = [
            this.context.assets['src/components/enemy/roar01.m4a'],
            this.context.assets['src/components/enemy/roar02.m4a'],
            this.context.assets['src/components/enemy/roar03.m4a']
        ];
        this.attackAudioBuffer = this.context.assets['src/components/enemy/attack.m4a'];

        this.updatePannerPosition(this.props.pos);
        this.updatePannerOrientation(this.props.direction);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.pos && this.props.pos !== nextProps.pos) {
            this.updatePannerPosition(nextProps.pos);
        }
        if (nextProps.direction && this.props.direction !== nextProps.direction) {
            this.updatePannerOrientation(nextProps.direction);
        }
        if (nextProps.state && this.props.state !== nextProps.state) {
            if (nextProps.state === ENEMY_STATE.ATTACK) {
                this.stopRoaring();
                this.soundStart(this.attackAudioBuffer);
            } else if (
                !this.roaringTimeout &&
                [ENEMY_STATE.WANDER, ENEMY_STATE.STOP].includes(nextProps.state)
            ) {
                this.startRoaring();
            }
        }
    }

    componentWillUnmount() {
        Audio.soundStop(this.roarAudioSource);
        Audio.soundStop(this.noiseAudioSource);
        this.stopRoaring();
    }

    render() {
        const { pos, state, direction, isVisible, graphicsQuality } = this.props;
        if (!isVisible) {
            return null;
        }
        this.styleRules = getTransformRule({ pos: [pos[0], -pos[1], pos[2]] });
        this.rotationRules = getTransformRule({
            angle: [0, -Math.round(convertRadToDegree(direction)), 0]
        });
        const className = [
            'obj',
            styles.root,
            styles['state-' + state] || '',
            styles['quality-' + graphicsQuality]
        ].join(' ');

        return <div className={className} style={this.styleRules}>
            <div className={'obj ' + styles.direction} style={this.rotationRules}>
                <div className={styles.noise} />
                <div className={styles.noise} />
                <div className={styles.noise} />
                <div className={styles.noise} />
                <div className={styles.eyes}>
                    <i className={styles.eye} />
                    <i className={styles.eye} />
                    <i className={styles.eye} />
                    <i className={styles.eye} />
                    <i className={styles.eye} />
                </div>
            </div>
        </div>;
    }

    startRoaring() {
        this.roaringTimeout = setTimeout(() => {
            this.soundStart(
                this.roarAudioBuffers[Enemy.random(this.roarAudioBuffers.length)]
            );
            this.startRoaring();
        }, (Enemy.random(3) + ENEMY_ROARING_PERIOD) * 1000);
    }

    stopRoaring() {
        if (this.roaringTimeout) {
            clearTimeout(this.roaringTimeout);
            this.roaringTimeout = null;
        }
    }

    soundStart(buffer) {
        this.roarAudioSource = Audio.soundStart({
            audioSource: this.roarAudioSource,
            audioCtx: this.context.audioCtx,
            buffer,
            destination: this.roarPanner
        });
    }

    updatePannerPosition(pos) {
        Audio.setPannerPosition(this.roarPanner, pos);
        Audio.setPannerPosition(this.noisePanner, pos);
    }

    updatePannerOrientation(direction) {
        const x = Math.sin(direction);
        let z = -Math.cos(direction);
        if (this.roarPanner.orientationX) {
            this.roarPanner.orientationX.value = x;
            this.roarPanner.orientationY.value = 0;
            this.roarPanner.orientationZ.value = z;
        } else {
            this.roarPanner.setOrientation(x, 0, z);
        }
    }

    static random(max) {
        return Math.floor(Math.random() * max);
    }
}

export default Enemy;
