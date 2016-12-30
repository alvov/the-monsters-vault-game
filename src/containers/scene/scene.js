import styles from './scene.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Painting from '../../components/painting/painting';
import Floor from '../../components/floor/floor';
import Ceiling from '../../components/ceiling/ceiling';
import Wall from '../../components/wall/wall';
import Box from '../../components/box/box';
import Switcher from '../../components/switcher/switcher';
import Door from '../../components/door/door';
import { getTransformRule } from '../../lib/utils';
import {
    DOOR_OPEN,
    DOOR_OPENING,
    DOOR_CLOSE,
    PLAYER_RUN,
    PLAYER_WALK,
    PAINTING_TYPE,
    FLOOR_TYPE,
    CEILING_TYPE,
    WALL_TYPE,
    BOX_TYPE,
    SWITCHER_TYPE,
    DOOR_TYPE
} from '../../constants/constants';

class Scene extends React.Component {
    render() {
        const { pos, viewAngle, playerState, doorsState, visibleObjects } = this.props;
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
                        background={object.background}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case FLOOR_TYPE:
                    renderedObjects.push(<Floor
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        size={object.size}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case CEILING_TYPE:
                    renderedObjects.push(<Ceiling
                        key={object.name}
                        pos={object.pos}
                        size={[object.size[0], object.size[2]]}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case WALL_TYPE:
                    renderedObjects.push(<Wall
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        size={object.size}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case BOX_TYPE:
                    renderedObjects.push(<Box
                        key={object.name}
                        pos={object.pos}
                        playerPos={pos}
                        size={object.size}
                        mode={object.props.mode}
                        getTransformRule={getTransformRule}
                    />);
                    break;
                case SWITCHER_TYPE:
                    renderedObjects.push(<Switcher
                        key={object.name}
                        pos={object.pos}
                        size={object.size}
                        angle={object.angle}
                        playerPos={pos}
                        isReachable={object.isReachable}
                        isInteractive={[DOOR_OPEN, DOOR_CLOSE].includes(doorsState[object.props.id])}
                        isOn={[DOOR_OPEN, DOOR_OPENING].includes(doorsState[object.props.id])}
                        getTransformRule={getTransformRule}
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
                        getTransformRule={getTransformRule}
                    />);
                    break;
            }
        }
        const className = [
            'obj',
            playerState === PLAYER_WALK ? styles.playerAnimationWalking :
                playerState === PLAYER_RUN ? styles.playerAnimationRunning : ''
        ].join(' ');
        return <div className={className}>
            <div className="obj" style={transformRule}>
                {renderedObjects}
            </div>
        </div>;
    }
}
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
    playerState: PropTypes.string.isRequired,
    doorsState: PropTypes.object.isRequired,
    visibleObjects: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        playerState: state.playerState,
        visibleObjects: state.objects.filter(obj => obj.isVisible || obj.type === DOOR_TYPE),
        doorsState: state.doorsState
    }
}

export default connect(mapStateToProps)(Scene);
