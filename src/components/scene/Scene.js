require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import Plain from '../plain/Plain';
import Wall from '../wall/Wall';
import Larch from '../tree/Larch';
import { BROAD_CELL_SIZE } from '../../constants';

const Scene = ({ pos, objects, getTransformRule }) => {
    const transformRule = getTransformRule({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const playerCell = [Math.floor(pos[0] / BROAD_CELL_SIZE), Math.floor(pos[2] / BROAD_CELL_SIZE)];
    const renderedObjects = objects.map((object, i) => {
        let isVisible = false;
        if (object.type !== 'plain') {
            for (let k = 0; k < object.broadCells.length; k++) {
                if (
                    Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 &&
                    Math.abs(playerCell[1] - object.broadCells[k][1]) < 2
                ) {
                    isVisible = true;
                    break;
                }
            }
        }
        switch(object.type) {
            case 'plain':
                return <Plain
                    key={i}
                    pos={object.pos}
                    playerPos={pos}
                    size={[object.size[0], object.size[2]]}
                    angle={object.angle}
                    background={object.background}
                    getTransformRule={getTransformRule}
                />;
            case 'wall':
                return <Wall
                    key={i}
                    coords2d={object.coords2d}
                    pos={object.pos}
                    playerPos={pos}
                    isVisible={isVisible}
                    size={object.size}
                    getTransformRule={getTransformRule}
                    getSpotLightBackground={getSpotLightBackground}
                />;
            case 'larch':
                return <Larch
                    key={i}
                    pos={object.pos}
                    playerPos={pos}
                    isVisible={isVisible}
                    size={object.size}
                    angle={object.angle}
                    getTransformRule={getTransformRule}
                />;
            default:
                return '';
        }
    });
    return <div className="scene obj" style={transformRule}>
        {renderedObjects}
    </div>;
};
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired,
    getTransformRule: PropTypes.number.isRequired
};

function getSpotLightBackground(pos, size) {
    if (size) {
        return `radial-gradient(${size}px at ${pos[0]}px ${pos[1]}px, transparent, black)`;
    } else {
        return '';
    }
}

export default Scene;
