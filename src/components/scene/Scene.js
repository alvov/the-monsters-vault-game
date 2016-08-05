require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import Painting from '../painting/Painting';
import Floor from '../floor/Floor';
import Wall from '../wall/Wall';
import Box from '../box/Box';
import { BROAD_CELL_SIZE } from '../../constants';

const Scene = ({ pos, playerState, objects, getTransformRule }) => {
    const transformRule = getTransformRule({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const playerCell = [Math.floor(pos[0] / BROAD_CELL_SIZE), Math.floor(pos[2] / BROAD_CELL_SIZE)];
    const renderedObjects = [];
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        let isVisible = false;
        if (object.collides !== false) {
            for (let k = 0; k < object.broadCells.length; k++) {
                if (
                    Math.abs(playerCell[0] - object.broadCells[k][0]) < 2 &&
                    Math.abs(playerCell[1] - object.broadCells[k][1]) < 2
                ) {
                    isVisible = true;
                    break;
                }
            }
        } else if (object.type === 'floor') {
            if (
                Math.abs(pos[0] - object.pos[0]) < 2 * BROAD_CELL_SIZE &&
                Math.abs(pos[2] - object.pos[2]) < 2 * BROAD_CELL_SIZE
            ) {
                isVisible = true;
            }
        }
        switch(object.type) {
            case 'painting':
                renderedObjects.push(<Painting
                    key={i + object.name}
                    pos={object.pos}
                    coords2d={object.coords2d}
                    playerPos={pos}
                    angle={object.angle}
                    size={object.size.filter(value => value !== 0).slice(0, 2)}
                    isVisible={isVisible}
                    background={object.background}
                    getTransformRule={getTransformRule}
                />);
                break;
            case 'floor':
                renderedObjects.push(<Floor
                    key={object.name}
                    coords2d={object.coords2d}
                    pos={object.pos}
                    playerPos={pos}
                    isVisible={isVisible}
                    size={object.size}
                    getTransformRule={getTransformRule}
                />);
                break;
            case 'wall':
                renderedObjects.push(<Wall
                    key={i + object.name}
                    coords2d={object.coords2d}
                    pos={object.pos}
                    playerPos={pos}
                    isVisible={isVisible}
                    size={object.size}
                    getTransformRule={getTransformRule}
                />);
                break;
            case 'box':
                renderedObjects.push(<Box
                    key={i + object.name}
                    pos={object.pos}
                    playerPos={pos}
                    isVisible={isVisible}
                    size={object.size}
                    mode={object.mode}
                    getTransformRule={getTransformRule}
                />);
                break;
        }
    }
    const className = 'player-animation obj' +
        (playerState === 'walk' ? ' player-animation_walking' : playerState === 'run' ? ' player-animation_running' : '');
    return <div className={className}>
        <div className="scene obj" style={transformRule}>
            {renderedObjects}
        </div>
    </div>;
};
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    playerState: PropTypes.string.isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired,
    getTransformRule: PropTypes.func.isRequired
};

export default Scene;
