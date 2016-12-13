import styles from 'components/switcher/switcher.css';

import React from 'react';
import Plain from '../plain/plain';

const HANDLE_SIZE = [6, 40];
const BACKGROUND = 'url(src/components/switcher/wood.jpg) 50% 50% / cover';

export default class Switcher extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { pos, playerPos, size, angle, isVisible = true, isReachable = false,
            isOn = false, isInteractive = true, getTransformRule } = this.props;
        const posWithInvertedY = [pos[0], -pos[1], pos[2]];
        const styleRules = {
            ...getTransformRule({
                pos: posWithInvertedY,
                angle
            }),
            display: isVisible ? 'block' : 'none'
        };
        const classNames = [
            'obj',
            isOn ? styles.switcherOn : styles.switcherOff
        ];
        if (isInteractive && isReachable) {
            classNames.push(styles.reachable);
        }
        return <div className={classNames.join(' ')} style={styleRules}>
            <Plain
                pos={[0, 0, 0]}
                parentPos={[posWithInvertedY]}
                playerPos={playerPos}
                size={[size[0], size[1]]}
                isVisible={isVisible}
                getTransformRule={getTransformRule}
                background={BACKGROUND}
            />
            <div className={`${styles.handle} obj`}>
                {/*left*/}
                <Plain
                    pos={[-HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2]}
                    parentPos={[posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[1], HANDLE_SIZE[0]]}
                    isVisible={isVisible}
                    angle={[0, -90, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*right*/}
                <Plain
                    pos={[HANDLE_SIZE[0] / 2, 0, HANDLE_SIZE[1] / 2]}
                    parentPos={[posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[1], HANDLE_SIZE[0]]}
                    isVisible={isVisible}
                    angle={[0, 90, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*top*/}
                <Plain
                    pos={[0, -HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2]}
                    parentPos={[posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[1]]}
                    isVisible={isVisible}
                    angle={[90, 0, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*bottom*/}
                <Plain
                    pos={[0, HANDLE_SIZE[0] / 2, HANDLE_SIZE[1] / 2]}
                    parentPos={[posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[1]]}
                    isVisible={isVisible}
                    angle={[-90, 0, 0]}
                    parentAngle={[angle]}
                    background={BACKGROUND}
                    simpleLight={true}
                    getTransformRule={getTransformRule}
                />
                {/*front*/}
                <Plain
                    pos={[0, 0, HANDLE_SIZE[1]]}
                    parentPos={[posWithInvertedY]}
                    playerPos={playerPos}
                    size={[HANDLE_SIZE[0], HANDLE_SIZE[0]]}
                    isVisible={isVisible}
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
