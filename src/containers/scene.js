import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Painting from '../components/painting/painting';
import Floor from '../components/floor/floor';
import Ceiling from '../components/ceiling/ceiling';
import Wall from '../components/wall/wall';
import Box from '../components/box/box';
import Switcher from '../components/switcher/switcher';
import Door from '../components/door/door';
import { getTransformRule } from '../lib/utils';
import {
    DOOR_OPEN,
    DOOR_OPENING,
    DOOR_CLOSE,
    PAINTING_TYPE,
    FLOOR_TYPE,
    CEILING_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE,
    GRAPHICS_QUALITY
} from '../constants/constants';

function Scene({ pos, viewAngle, doorsState, visibleObjects, graphicsQuality }) {
    const transformRule = getTransformRule({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    const renderedObjects = [];
    for (let i = 0; i < visibleObjects.length; i++) {
        const object = visibleObjects[i];
        switch(object.type) {
            case PAINTING_TYPE:
                renderedObjects.push(<Painting
                    key={object.name}
                    pos={object.pos}
                    playerPos={pos}
                    angle={object.angle}
                    size={object.size.filter(value => value !== 0).slice(0, 2)}
                    alias={object.props.alias}
                />);
                break;
            case FLOOR_TYPE:
                renderedObjects.push(<Floor
                    key={object.name}
                    name={object.name}
                    pos={object.pos}
                    playerPos={pos}
                    size={object.size}
                    graphicsQuality={graphicsQuality}
                />);
                break;
            case CEILING_TYPE:
                renderedObjects.push(<Ceiling
                    key={object.name}
                    pos={object.pos}
                    size={[object.size[0], object.size[2]]}
                />);
                break;
            case WALL_TYPE:
                renderedObjects.push(<Wall
                    key={object.name}
                    name={object.name}
                    pos={object.pos}
                    playerPos={pos}
                    size={object.size}
                    mode={object.props ? object.props.mode: 1}
                    graphicsQuality={graphicsQuality}
                />);
                break;
            case BOX_TYPE:
                renderedObjects.push(<Box
                    key={object.name}
                    name={object.name}
                    pos={object.pos}
                    playerPos={pos}
                    size={object.size}
                    mode={object.props.mode}
                    graphicsQuality={graphicsQuality}
                />);
                break;
            case SWITCHER_TYPE:
                renderedObjects.push(<Switcher
                    key={object.name}
                    name={object.name}
                    pos={object.pos}
                    size={object.size}
                    angle={object.angle}
                    playerPos={pos}
                    isReachable={object.isReachable}
                    isInteractive={[DOOR_OPEN, DOOR_CLOSE].includes(doorsState[object.props.id])}
                    isOn={[DOOR_OPEN, DOOR_OPENING].includes(doorsState[object.props.id])}
                    graphicsQuality={graphicsQuality}
                />);
                break;
            case DOOR_TYPE:
                renderedObjects.push(<Door
                    key={object.name}
                    isVisible={object.isVisible}
                    pos={object.pos}
                    playerPos={pos}
                    viewAngle={viewAngle}
                    size={object.size}
                    state={doorsState[object.props.id]}
                    graphicsQuality={graphicsQuality}
                />);
                break;
        }
    }
    return <div className="obj scene" style={transformRule}>
        {renderedObjects}
    </div>;
}
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
    doorsState: PropTypes.object.isRequired,
    visibleObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
    graphicsQuality: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        visibleObjects: state.objects.filter(obj => {
            if (obj.type === PAINTING_TYPE && state.graphicsQuality === GRAPHICS_QUALITY.LOW) {
                return false;
            }
            return obj.isVisible || obj.type === DOOR_TYPE
        }),
        doorsState: state.doorsState,
        graphicsQuality: state.settings.graphicsQuality
    }
}

export default connect(mapStateToProps)(Scene);
