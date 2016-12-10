require('components/door/door.css');

import React, { PropTypes } from 'react';
import Plain from '../plain/plain';
import { DOOR_OPEN, DOOR_OPENING, DOOR_CLOSE, DOOR_CLOSING } from '../../constants';

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

        const { pos } = this.props;

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
        this.panner.positionY.value = -2 * pos[1];
        this.panner.positionZ.value = -pos[2];
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
        const { pos, viewAngle, isVisible, state, getTransformRule } = this.props;
        const posWithInvertedY = [
            pos[0],
            [DOOR_OPENING, DOOR_OPEN].includes(state) ? -pos[1] * 3 : -pos[1],
            pos[2]
        ];

        const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
            display: isVisible ? 'block' : 'none'
        });
        const angle = [0, -viewAngle[0], 0];

        return <div className="door obj" style={styleRules}>
            {this.renderBars({ parentPos: [posWithInvertedY], angle })}
        </div>;
    }

    renderBars({ parentPos, angle }) {
        const { size, playerPos, getTransformRule } = this.props;
        const bars = [];
        const maxDimension = size[0] > size[2] ? 0 : 2;
        let key = 0;
        for (let i = Math.floor(BARS_GAP / 2); i < size[maxDimension]; i += BARS_GAP) {
            bars.push(<Plain
                key={key}
                className="door-bar"
                pos={maxDimension === 0 ? [-size[0] / 2 + i, 0, 0] : [0, 0, size[2] - i]}
                size={[BAR_WIDTH, size[1]]}
                angle={angle}
                parentPos={parentPos}
                playerPos={playerPos}
                simpleLight={true}
                background={BAR_BACKGROUND}
                getTransformRule={getTransformRule}
            />);
            key++;
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
