import styles from 'components/door/door.css';

import React, { PropTypes } from 'react';
import SimpleLight from '../light/simple';
import { getTransformRule, vectorsAdd3D } from '../../lib/utils';
import Audio from '../../lib/Audio';
import { DOOR_STATE_OPEN, DOOR_STATE_OPENING, DOOR_STATE_CLOSE, DOOR_STATE_CLOSING, DOOR_OPEN_TIME } from '../../constants/constants';

const BARS_GAP = 25;
const DOOR_STATES = [DOOR_STATE_OPEN, DOOR_STATE_OPENING, DOOR_STATE_CLOSE, DOOR_STATE_CLOSING];

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

        this.panner = Audio.createPanner({
            audioCtx: this.context.audioCtx,
            pos: [pos[0], pos[1] + size[1], pos[2]]
        });
        this.panner.connect(this.context.masterGain);
    }

    componentWillUpdate(nextProps) {
        if ([DOOR_STATE_CLOSING, DOOR_STATE_OPENING].includes(nextProps.state) && nextProps.state !== this.props.state) {
            this.audioSource = Audio.soundStart({
                audioSource: this.audioSource,
                audioCtx: this.context.audioCtx,
                destination: this.panner,
                buffer: this.decodedAudioBuffer
            });
        } else if ([DOOR_STATE_OPEN, DOOR_STATE_CLOSE].includes(nextProps.state) && nextProps.state !== this.props.state) {
            Audio.soundStop(this.audioSource);
        }
    }

    componentWillUnmount() {
        Audio.soundStop(this.audioSource);
    }

    render() {
        const { isVisible, viewAngle, state, size } = this.props;
        const isOpen = [DOOR_STATE_OPENING, DOOR_STATE_OPEN].includes(state);
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
}

export default Door;
