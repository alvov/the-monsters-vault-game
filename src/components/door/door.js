import styles from 'components/door/door.css';

import React, { PropTypes } from 'react';
import SimpleLight from '../light/simple';
import { getTransformRule, vectorsAdd3D } from '../../lib/utils';
import { DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING, DOOR_OPEN_TIME } from '../../constants/constants';

const BARS_GAP = 25;
const DOOR_STATES = [DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING];

class Door extends React.PureComponent {
    static propTypes = {
        isVisible: PropTypes.bool,
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired,
        viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired,
        state: PropTypes.oneOf(DOOR_STATES).isRequired,
        graphicsQuality: PropTypes.number.isRequired
    };
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        masterGain: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };
    static defaultProps = {
        isVisible: true
    };

    constructor(props, context) {
        super(props, context);

        const { pos, size } = props;

        this.posWithInvertedY = [pos[0], -pos[1], pos[2]];
        this.rootStyleRules = getTransformRule({ pos: this.posWithInvertedY });
        this.doorStyleRules = {
            transitionDuration: DOOR_OPEN_TIME + 'ms',
            height: size[1]
        };

        this.audioSource = null;
        this.decodedAudioBuffer = this.context.assets['src/components/door/mixdown.m4a'];

        this.panner = this.context.audioCtx.createPanner();
        this.panner.panningModel = 'HRTF';
        this.panner.distanceModel = 'inverse';
        this.panner.refDistance = 20;
        this.panner.rolloffFactor = 0.1;
        this.panner.coneInnerAngle = 360;
        this.panner.coneOuterAngle = 0;
        this.panner.coneOuterGain = 0;
        if (this.panner.positionX) {
            this.panner.positionX.value = pos[0];
            this.panner.positionY.value = pos[1] + size[1];
            this.panner.positionZ.value = pos[2];
        } else {
            this.panner.setPosition(pos[0], pos[1] + size[1], pos[2]);
        }
        this.panner.connect(this.context.masterGain);
    }

    componentWillUpdate(nextProps) {
        if ([DOOR_CLOSING, DOOR_OPENING].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.startSound();
        } else if ([DOOR_OPEN, DOOR_CLOSE].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.stopSound();
        }
    }

    componentWillUnmount() {
        this.stopSound();
    }

    render() {
        const { isVisible, viewAngle, state, size } = this.props;
        const isOpen = [DOOR_OPENING, DOOR_OPEN].includes(state);
        const doorStyleRules = {
            ...this.doorStyleRules,
            transform: 'translateY(' + (isOpen ? -size[1] * 0.9 : 0) + 'px)'
        };
        const angle = [0, -viewAngle[0], 0];

        return <div className='obj door-container' style={this.rootStyleRules}>
            <div className={styles.root}
                style={doorStyleRules}>
                {isVisible ? this.renderBars({ parentPos: [this.posWithInvertedY], angle }) : null}
            </div>
        </div>;
    }

    renderBars({ parentPos, angle }) {
        const { size, playerPos, graphicsQuality } = this.props;
        const bars = [];
        const maxDimension = size[0] > size[2] ? 0 : 2;
        const barClassName = [styles.bar, styles['quality-' + graphicsQuality]].join(' ');
        let key = 0;
        for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i = i + BARS_GAP) {
            const pos = maxDimension === 0 ? [-size[0] / 2 + i, -size[1] / 2, 0] : [0, -size[1] / 2, -size[2] / 2 + i];
            const relativePos = [pos].concat(parentPos).reduce(vectorsAdd3D);
            bars.push(
                <div key={key}
                    className={barClassName}
                    style={{
                        ...getTransformRule({ pos, angle }),
                        height: size[1]
                    }}
                >
                    <SimpleLight
                        relativePos={relativePos}
                        playerPos={playerPos}
                    />
                </div>
            );
            key = key + 1;
        }
        return bars;
    }

    startSound() {
        this.audioSource = this.context.audioCtx.createBufferSource();
        this.audioSource.connect(this.panner);
        this.audioSource.buffer = this.decodedAudioBuffer;
        this.audioSource.start(0);
    }

    stopSound() {
        if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.disconnect(this.panner);
            this.audioSource = null;
        }
    }
}

export default Door;
