require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';

import Painting from '../painting/Painting';
import Floor from '../floor/Floor';
import Wall from '../wall/Wall';
import Box from '../box/Box';
import Switcher from '../switcher/Switcher';
import { BROAD_CELL_SIZE, HAND_LENGTH } from '../../constants';
import level from '../../levels/level';

export default function Scene({ pos, playerState, viewAngle, objects, getTransformRule }) {
    const transformRule = getTransformRule({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const collisionView = level.collision.getCollisionView([pos, getPointPosition({ pos, distance: HAND_LENGTH, angle: viewAngle })]);

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
        } else {
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
            case 'switcher':
                renderedObjects.push(<Switcher
                    key={i + object.name}
                    pos={object.pos}
                    size={object.size}
                    angle={object.angle}
                    playerPos={pos}
                    isVisible={isVisible}
                    isInteractive={collisionView && collisionView[0].obj === object}
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
}
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    playerState: PropTypes.string.isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired,
    getTransformRule: PropTypes.func.isRequired
};

/**
 * Returns coordinates of a point which is `distance` away from `pos` in the direction `angle`
 * @param {Array} pos
 * @param {number} distance
 * @param {Array} angle
 * @returns {Array}
 */
function getPointPosition({ pos, distance, angle }) {
    const y = pos[1] + Math.round(distance * Math.sin(Math.PI / 180 * angle[1]));
    const tempDistance = distance * Math.cos(Math.PI / 180 * angle[1]);
    const x = pos[0] + Math.round(tempDistance * Math.sin(Math.PI / 180 * angle[0]));
    const z = pos[2] - Math.round(tempDistance * Math.cos(Math.PI / 180 * angle[0]));
    return [x, y, z];
}
