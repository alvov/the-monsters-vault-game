import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Scene from '../components/scene/Scene';
import { getTransformRule } from '../lib/utils';

const Camera = ({ pos, playerState, viewAngle, objects}) => {
    const transformRule = getTransformRule({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return <div className="camera" style={transformRule}>
        <Scene
            pos={pos}
            playerState={playerState}
            objects={objects}
            getTransformRule={getTransformRule}
        />
    </div>;
};
Camera.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number).isRequired,
    playerState: PropTypes.string.isRequired,
    viewAngle: PropTypes.arrayOf(PropTypes.number).isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        playerState: state.playerState,
        viewAngle: state.viewAngle,
        objects: state.objects
    }
}

export default connect(mapStateToProps)(Camera);