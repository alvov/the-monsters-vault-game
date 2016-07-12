require('components/obj/obj.css');

import React from 'react';
import utils from '../../lib/utils';
import Plain from '../plain/Plain';

export default ({ pos, size, angle }) => {
    const stemBg = '#816b5e';
    const crownBg = '#428b41';
    const crownSize = size[1] * 2;
    const transformRule = utils.getTransformRule({ pos, angle });
    return <div className="obj" style={transformRule}>
        <Plain pos={[0, -size[1] / 2, 0]} size={size} angle={[0, 0, 0]} background={stemBg}/>
        <Plain pos={[0, -size[1] / 2, 0]} size={size} angle={[0, -90, 0]} background={stemBg}/>
    </div>;
}
