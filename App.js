import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import createStore from './src/store/createStore.js';

import Home from './src/pages/Home.js'
import StoryPage from './src/pages/StoryPage.js';
import StoryList from './src/pages/StoryList.js';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();
    }

    render() {
        return <Provider store={ this.store }>
            <StoryList />
        </Provider>
    }
}





