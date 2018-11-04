import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import createStore from './src/store/createStore.js';

import Navigator from './src/components/Navigator.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();
    }

    render() {
        return <Provider store={ this.store }>
            <Navigator />
        </Provider>
    }
}





