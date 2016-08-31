require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Painting from '../../components/painting/Painting';
import Floor from '../../components/floor/Floor';
import Wall from '../../components/wall/Wall';
import Box from '../../components/box/Box';
import Switcher from '../../components/switcher/Switcher';
import { getTransformRule } from '../../lib/utils';

class Scene extends React.Component {
    render() {
        const { pos, playerState, doors, objects } = this.props;
        const transformRule = getTransformRule({
            pos: [-pos[0], pos[1], -pos[2]]
        });
        const renderedObjects = [];
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            switch(object.type) {
                case 'painting':
                    renderedObjects.push(<Painting
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        angle={object.angle}
                        size={object.size.filter(value => value !== 0).slice(0, 2)}
                        isVisible={object.isVisible}
                        background={object.background}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case 'floor':
                    renderedObjects.push(<Floor
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        isVisible={object.isVisible}
                        size={object.size}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case 'wall':
                    renderedObjects.push(<Wall
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        isVisible={object.isVisible}
                        size={object.size}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case 'box':
                    renderedObjects.push(<Box
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        isVisible={object.isVisible}
                        size={object.size}
                        mode={object.mode}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case 'switcher': {
                    renderedObjects.push(<Switcher
                        key={object.name}
                        pos={object.pos}
                        size={object.size}
                        angle={object.angle}
                        playerPos={pos}
                        isVisible={object.isVisible}
                        isReachable={object.isReachable}
                        isOn={Boolean(doors[object.props.id])}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                }
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
}
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    playerState: PropTypes.string.isRequired,
    doors: PropTypes.object.isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        playerState: state.playerState,
        objects: state.objects,
        doors: state.doors
    }
}

export default connect(mapStateToProps)(Scene);
