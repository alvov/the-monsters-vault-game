import styles from 'components/switcher/switcher.css';

import React, { PropTypes } from 'react';
import Plain from '../plain/plain';
import { getTransformRule } from '../../lib/utils';

const HANDLE_SIZE = [6, 40];

export default class Switcher extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired,
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        angle: PropTypes.arrayOf(PropTypes.number).isRequired,
        playerPos: PropTypes.arrayOf(PropTypes.number).isRequired,
        isReachable: PropTypes.bool,
        isInteractive: PropTypes.bool.isRequired,
        isOn: PropTypes.bool.isRequired,
        graphicsQuality: PropTypes.number.isRequired
    };
    static defaultProps = {
        isReachable: false
    };

    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = getTransformRule({
            pos: this.posWithInvertedY,
            angle: props.angle
        });
    }

    render() {
        const { name, playerPos, size, angle, isReachable,
            isOn, isInteractive, graphicsQuality } = this.props;
        const classNames = [
            'obj',
            styles['quality-' + graphicsQuality],
            isOn ? styles.on : styles.off
        ];
        if (isInteractive && isReachable) {
            classNames.push(styles.reachable);
        }
        return <div className={classNames.join(' ')} style={this.styleRules}>
            <Plain
                id={name}
                className={styles.wood}
                size={[size[0], size[1]]}
                pos={[0, 0, 0]}
                playerPos={playerPos}
                parentPos={[this.posWithInvertedY]}
                parentAngle={[angle]}
                patternId='wood'
                graphicsQuality={graphicsQuality}
            />
            <div className={`${styles.handle} obj`}>
                {/*left*/}
                <Plain
                    light='simple'
                    size={[HANDLE_SIZE[1], HANDLE_SIZE[0]]}
                    pos={[-HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2]}
                    angle={[0, -90, 0]}
                    playerPos={playerPos}
                    parentPos={[this.posWithInvertedY]}
                    parentAngle={[angle]}
                />
                {/*right*/}
                <Plain
                    light='simple'
                    size={[HANDLE_SIZE[1], HANDLE_SIZE[0]]}
                    pos={[HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2]}
                    angle={[0, 90, 0]}
                    playerPos={playerPos}
                    parentPos={[this.posWithInvertedY]}
                    parentAngle={[angle]}
                />
                {/*top*/}
                <Plain
                    light='simple'
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[1]]}
                    pos={[0, -HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2]}
                    angle={[90, 0, 0]}
                    playerPos={playerPos}
                    parentPos={[this.posWithInvertedY]}
                    parentAngle={[angle]}
                />
                {/*bottom*/}
                <Plain
                    light='simple'
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[1]]}
                    pos={[0, HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2]}
                    angle={[-90, 0, 0]}
                    playerPos={playerPos}
                    parentPos={[this.posWithInvertedY]}
                    parentAngle={[angle]}
                />
                {/*front*/}
                <Plain
                    light='simple'
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[0]]}
                    pos={[0, 0, HANDLE_SIZE[1]]}
                    angle={[0, 0, 0]}
                    playerPos={playerPos}
                    parentPos={[this.posWithInvertedY]}
                    parentAngle={[angle]}
                />
            </div>
        </div>
    }
}
