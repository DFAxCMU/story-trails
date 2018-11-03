import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store/createStore.js';

import Home from './src/pages/Home.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();
    }

    render() {
        return <Provider store={ this.store }>
            <Home />
        </Provider>
    }
}
