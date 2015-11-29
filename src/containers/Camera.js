import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Scene from 'components/scene/Scene';
import utils from 'lib/utils';

var Camera = ({ pos, viewAngle, objects }) => {
    var transformRule = utils.getTransformRule({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return <div className="camera" style={transformRule}><Scene pos={pos} objects={objects}/></div>;
};
Camera.propTypes = {
    viewAngle: PropTypes.arrayOf(PropTypes.number)
};

function select(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        objects: state.objects
    }
}

export default connect(select)(Camera);