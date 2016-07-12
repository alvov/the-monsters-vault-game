require('components/obj/obj.css');
require('./scene.css');

import React, { PropTypes } from 'react';
import Plain from '../plain/Plain';
import Wall from '../wall/Wall';
import Larch from '../tree/Larch';

var Scene = ({ pos, objects, getTransformRule }) => {
    var transformRule = getTransformRule({
        pos: [-pos[0], pos[1], -pos[2]]
    });
    var renderedObjects = objects.map((object, i) => {
        switch(object.type) {
            case 'plain':
                return <Plain
                    key={i}
                    pos={object.pos}
                    size={[object.size[0], object.size[2]]}
                    angle={object.angle}
                    background={object.background}
                    getTransformRule={getTransformRule}
                />;
            case 'wall':
                return <Wall key={i} pos={object.pos} size={object.size} angle={object.angle} getTransformRule={getTransformRule}/>;
            case 'larch':
                return <Larch key={i} pos={object.pos} size={object.size} angle={object.angle} getTransformRule={getTransformRule}/>;
            default:
                return '';
        }
    });
    return <div className="scene obj" style={transformRule}>
        {renderedObjects}
    </div>;
};
Scene.propTypes = {
    pos: PropTypes.arrayOf(PropTypes.number),
    viewAngle: PropTypes.arrayOf(PropTypes.number),
    getTransformRule: PropTypes.func
};

export default Scene;
