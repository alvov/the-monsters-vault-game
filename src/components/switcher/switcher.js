require('components/obj/obj.css');
require('components/switcher/switcher.css');

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
        const styleRules = Object.assign(getTransformRule({ pos: posWithInvertedY }), {
            display: isVisible ? 'block' : 'none'
        });
        const classNames = [
            'switcher obj',
            isOn ? 'switcher_on' : 'switcher_off'
        ];
        if (isInteractive && isReachable) {
            classNames.push('switcher_reachable');
        }
        return <div className={classNames.join(' ')} style={styleRules}>
            <Plain
                className="switcher-plate"
                pos={[0, 0, 0]}
                parentPos={[posWithInvertedY]}
                playerPos={playerPos}
                size={[size[0], size[1]]}
                isVisible={isVisible}
                angle={angle}
                getTransformRule={getTransformRule}
                background={BACKGROUND}
            />
            <div className="switcher-handle obj">
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
