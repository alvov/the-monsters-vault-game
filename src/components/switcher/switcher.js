import styles from 'components/switcher/switcher.css';

import React from 'react';
import Plain from '../plain/plain';

const HANDLE_SIZE = [6, 40];
const BACKGROUND = 'url(src/components/switcher/wood.jpg) 50% 50% / cover';
const meaningfulProps = ['playerPos', 'isReachable', 'isOn', 'isInteractive'];

export default class Switcher extends React.Component {
    constructor(props) {
        super(props);

        this.posWithInvertedY = [props.pos[0], -props.pos[1], props.pos[2]];
        this.styleRules = props.getTransformRule({
            pos: this.posWithInvertedY,
            angle: props.angle
        });
    }

    shouldComponentUpdate(nextProps) {
        for (let i = 0; i < meaningfulProps.length; i++) {
            if (nextProps[meaningfulProps[i]] !== this.props[meaningfulProps[i]]) {
                return true;
            }
        }
        return false;
    }

    render() {
        const { playerPos, size, angle, isReachable = false,
            isOn = false, isInteractive = true, getTransformRule } = this.props;
        const classNames = [
            'obj',
            isOn ? styles.switcherOn : styles.switcherOff
        ];
        if (isInteractive && isReachable) {
            classNames.push(styles.reachable);
        }
        return <div className={classNames.join(' ')} style={this.styleRules}>
            <Plain
                pos={[0, 0, 0]}
                parentAngle={[angle]}
                parentPos={[this.posWithInvertedY]}
                playerPos={playerPos}
                size={[size[0], size[1]]}
                getTransformRule={getTransformRule}
                background={BACKGROUND}
            />
            <div className={`${styles.handle} obj`}>
                {/*left*/}
                <Plain
                    pos={[-HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[1], HANDLE_SIZE[0]]}
                    angle={[0, -90, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*right*/}
                <Plain
                    pos={[HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[1], HANDLE_SIZE[0]]}
                    angle={[0, 90, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*top*/}
                <Plain
                    pos={[0, -HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[1]]}
                    angle={[90, 0, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*bottom*/}
                <Plain
                    pos={[0, HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[1]]}
                    angle={[-90, 0, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*front*/}
                <Plain
                    pos={[0, 0, HANDLE_SIZE[1]]}
                    parentPos={[this.posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[0]]}
                    angle={[0, 0, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
            </div>
        </div>
    }
}
