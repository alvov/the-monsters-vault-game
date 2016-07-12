require('./index.css');

import { FPS, G, KEY_C, KEY_W, KEY_S, KEY_A, KEY_D, STEP } from './constants';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Controls from './lib/Controls';
import Loop from './lib/Loop';
import utils from './lib/utils';
import Camera from './containers/Camera';
import viewportApp from './reducers';

var store = createStore(viewportApp);

var controls = new Controls();

new Loop(frameRateCoefficient => {
    const pointerDelta = controls.getPointerDelta();
    if (pointerDelta.x || pointerDelta.y) {
        store.dispatch({
            type: 'updateViewAngle',
            pointerDelta
        });
    }

    let angleShift = [];
    if (controls.keyPressed[KEY_W]) {
        angleShift.push(Math.PI);
    }
    if (controls.keyPressed[KEY_S]) {
        angleShift.push(0);
    }
    if (controls.keyPressed[KEY_A]) {
        angleShift.push(Math.PI / 2);
    }
    if (controls.keyPressed[KEY_D]) {
        // hack for angles sum
        if (controls.keyPressed[KEY_W]) {
            angleShift.push(3 * Math.PI / 2);
        } else {
            angleShift.push(-Math.PI / 2);
        }
    }
    if (angleShift.length) {
        let reducedAngleShift = 0;
        for (let i = 0; i < angleShift.length; i++) {
            reducedAngleShift += angleShift[i];
        }
        reducedAngleShift /= angleShift.length;

        reducedAngleShift += utils.toRad(store.getState().viewAngle[0]);

        let step = frameRateCoefficient * STEP;
        store.dispatch({
            type: 'updatePos',
            shift: [-step * Math.sin(reducedAngleShift), 0, step * Math.cos(reducedAngleShift)]
        });
    }
}, FPS, true);

render(<Provider store={store}><Camera/></Provider>, document.querySelector('.viewport'));
