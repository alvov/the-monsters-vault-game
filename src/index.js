require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enableBatching } from 'redux-batched-actions';

import Viewport from './containers/viewport';
import GameLoop from './containers/gameLoop';

import reducers from './reducers';

const store = createStore(enableBatching(reducers));

ReactDOM.render(
    <Provider store={store}>
        <Viewport>
            <GameLoop />
        </Viewport>
    </Provider>,
    document.getElementById('app')
);
