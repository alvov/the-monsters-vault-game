import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Scene from '../components/scene/Scene';
import { getTransformRule, getSpotLightBackground } from '../lib/utils';

const Camera = ({ pos, viewAngle, objects}) => {
    const transformRule = getTransformRule({
        pos: [0, 0, 600],
        angle: [viewAngle[1], viewAngle[0], viewAngle[2]]
    });
    return <div className="camera" style={transformRule}>
        <Scene pos={pos} objects={objects} getTransformRule={getTransformRule} getSpotLightBackground={getSpotLightBackground}/>
    </div>;
};
Camera.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number),
    viewAngle: PropTypes.arrayOf(PropTypes.number)
};

function mapStateToProps(state) {
    return {
        pos: state.pos,
        viewAngle: state.viewAngle,
        objects: state.objects
    }
}

export default connect(mapStateToProps)(Camera);