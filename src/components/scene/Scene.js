require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import Plain from '../plain/Plain';
import Floor from '../floor/Floor';
import Wall from '../wall/Wall';
import Larch from '../tree/Larch';
import { BROAD_CELL_SIZE } from '../../constants';

const Scene = ({ pos, playerState, objects, getTransformRule, getPlayerSpotLightBackground }) => {
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
            case 'plain':
                renderedObjects.push(<Plain
                    key={i + object.name}
                    pos={[object.pos[0], -object.pos[1], object.pos[2]]}
                    size={object.size.filter(value => value !== 0).slice(0, 2)}
                    angle={object.angle}
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
                    getPlayerSpotLightBackground={getPlayerSpotLightBackground}
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
                    getPlayerSpotLightBackground={getPlayerSpotLightBackground}
                />);
                break;
            case 'larch':
                renderedObjects.push(<Larch
                    key={i + object.name}
                    pos={object.pos}
                    playerPos={pos}
                    isVisible={isVisible}
                    size={object.size}
                    angle={object.angle}
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
    objects: PropTypes.arrayOf(PropTypes.object).isRequired,
    getTransformRule: PropTypes.func.isRequired
};

export default Scene;
