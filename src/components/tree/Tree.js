require('components/obj/obj.css');

import React from 'react';
import utils from 'lib/utils';
import Plain from 'components/plain/Plain';

export default ({ pos, size, angle }) => {
    const stemBg = '#816b5e';
    const crownBg = '#428b41';
    const crownSize = size[1] * 2;
    const transformRule = utils.getTransformRule({ pos, angle });
    return <div className="obj" style={transformRule}>
        <Plain pos={[0, -size[1] / 2, 0]} size={size} angle={[0, 0, 0]} background={stemBg}/>
        <Plain pos={[0, -size[1] / 2, 0]} size={size} angle={[0, -90, 0]} background={stemBg}/>
        <Plain pos={[0, -size[1] - crownSize / 2, 0]} size={[crownSize, crownSize]} angle={[0, 10, 0]} background={crownBg}/>
        <Plain pos={[0, -size[1] - crownSize / 2, 0]} size={[crownSize, crownSize]} angle={[0, -40, 0]} background={crownBg}/>
        <Plain pos={[0, -size[1] - crownSize / 2, 0]} size={[crownSize, crownSize]} angle={[0, 100, 0]} background={crownBg}/>
    </div>;
}
