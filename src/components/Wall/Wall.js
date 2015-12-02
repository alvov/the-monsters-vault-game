require('components/obj/obj.css');

import React from 'react';
import utils from 'lib/utils';
import Plain from 'components/plain/Plain';

export default ({ pos, size, angle }) => {
    const bg = '#b2adb2';
    const transformRule = utils.getTransformRule({ pos, angle });
    // F-B-L-R-T-B
    return <div className="obj" style={transformRule}>
        <Plain pos={[0, -size[1] / 2, size[2] / 2]} size={size.slice(0, 2)} angle={[0, 0, 0]} background={bg}/>
        <Plain pos={[0, -size[1] / 2, -size[2] / 2]} size={size.slice(0, 2)} angle={[0, 0, 0]} background={bg}/>
        <Plain pos={[-size[0] / 2, -size[1] / 2, 0]} size={[size[2], size[1]]} angle={[0, 90, 0]} background={bg}/>
        <Plain pos={[size[0] / 2, -size[1] / 2, 0]} size={[size[2], size[1]]} angle={[0, -90, 0]} background={bg}/>
        <Plain pos={[0, -size[1], 0]} size={[size[0], size[2]]} angle={[90, 0, 0]} background={bg}/>
        <Plain pos={[0, 0, 0]} size={[size[0], size[2]]} angle={[-90, 0, 0]} background={bg}/>
    </div>;
}
