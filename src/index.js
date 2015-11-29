require('./index.css');

import { FPS, G, KEY_C, KEY_W, KEY_S, KEY_A, KEY_D, STEP } from 'constants';
import Controls from 'lib/Controls';
import Loop from 'lib/Loop';
import utils from 'lib/utils';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Camera from 'containers/Camera';
import viewportApp from 'reducers';

var store = createStore(viewportApp);

var controls = new Controls();

new Loop((frameRateCoefficient) => {
    store.dispatch({
        type: 'updateViewAngle',
        pointerDelta: controls.getPointerDelta()
    });

    var angleShift = [];
    if (controls.keyPressed.has(KEY_W)) {
        angleShift.push(0);
    }
    if (controls.keyPressed.has(KEY_S)) {
        if (controls.keyPressed.has(KEY_A)) {
            angleShift.push(-Math.PI);
        } else {
            angleShift.push(Math.PI);
        }
    }
    if (controls.keyPressed.has(KEY_A)) {
        angleShift.push(-Math.PI / 2);
    }
    if (controls.keyPressed.has(KEY_D)) {
        angleShift.push(Math.PI / 2);
    }
    if (angleShift.length) {
        angleShift = angleShift.reduce((prev, cur) => prev + cur) / angleShift.length;

        angleShift += utils.toRad(store.getState().viewAngle[0]);

        let step = frameRateCoefficient * STEP;
        store.dispatch({
            type: 'updatePos',
            shift: [-step * Math.sin(angleShift), 0, step * Math.cos(angleShift)]
        });
    }
}, FPS, true);

render(<Provider store={store}><Camera/></Provider>, document.querySelector('.viewport'));