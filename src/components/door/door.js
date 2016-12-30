import styles from 'components/door/door.css';

import React, { PropTypes } from 'react';
import Plain from '../plain/plain';
import { DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING, DOOR_OPEN_TIME } from '../../constants/constants';

const BAR_WIDTH = 5;
const BARS_GAP = 25;
const BAR_BACKGROUND = 'linear-gradient(to right, #000 0%, #e0e0e0 50%, #000 100%)';

class Door extends React.Component {
    static contextTypes = {
        audioCtx: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };
    static defaultProps = {
        isVisible: true,
        isOpen: false
    };

    constructor(props, context) {
        super(props, context);

        const { pos, getTransformRule } = props;

        this.posWithInvertedY = [pos[0], -pos[1], pos[2]];
        this.rootStyleRules = getTransformRule({ pos: this.posWithInvertedY });
        this.doorStyleRules = { transitionDuration: DOOR_OPEN_TIME + 'ms' };

        this.audioSource = null;
        this.decodedAudioBuffer = this.context.assets['src/components/door/mixdown.ogg'];

        this.panner = this.context.audioCtx.createPanner();
        this.panner.panningModel = 'HRTF';
        this.panner.distanceModel = 'inverse';
        this.panner.refDistance = 20;
        this.panner.rolloffFactor = 0.1;
        this.panner.coneInnerAngle = 360;
        this.panner.coneOuterAngle = 0;
        this.panner.coneOuterGain = 0;
        this.panner.positionX.value = pos[0];
        // 2x higher, because the opening mechanism is somewhere high
        this.panner.positionY.value = 2 * pos[1];
        this.panner.positionZ.value = pos[2];
        this.panner.connect(this.context.audioCtx.destination);
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
        const { viewAngle, state, size } = this.props;
        const isOpen = [DOOR_OPENING, DOOR_OPEN].includes(state);
        const doorStyleRules = {
            ...this.doorStyleRules,
            transform: 'translateY(' + (isOpen ? -size[1] : 0) + 'px)'
        };
        const angle = [0, -viewAngle[0], 0];

        return <div className='obj' style={this.rootStyleRules}>
            <div className={[styles.door].join(' ')}
                style={doorStyleRules}>
                {this.renderBars({ parentPos: [this.posWithInvertedY], angle })}
            </div>
        </div>;
    }

    renderBars({ parentPos, angle }) {
        const { size, playerPos, getTransformRule } = this.props;
        const bars = [];
        const maxDimension = size[0] > size[2] ? 0 : 2;
        let key = 0;
        for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i = i + BARS_GAP) {
            bars.push(<Plain
                key={key}
                className="door-bar"
                pos={maxDimension === 0 ? [-size[0] / 2 + i, 0, 0] : [0, 0, -size[2] / 2 + i]}
                size={[BAR_WIDTH, size[1]]}
                angle={angle}
                parentPos={parentPos}
                playerPos={playerPos}
                simpleLight={true}
                background={BAR_BACKGROUND}
                getTransformRule={getTransformRule}
            />);
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
