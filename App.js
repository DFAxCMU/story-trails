import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import createStore from './src/store/createStore.js';

import Home from './src/pages/Home.js'
import StoryPage from './src/pages/StoryPage.js';
import StoryList from './src/pages/StoryList.js';
import BlanksForm from './src/pages/BlanksForm.js';
import Navigator from './src/components/Navigator.js';

import { loadStories } from './src/actions/storyActions.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();

        //Dispatching "loadStories" action (controller) to store (model) from App component (view)
        this.store.dispatch(loadStories())
        console.log(this.store.getState())
    }

    render() {
        return <Provider store={ this.store }>
            <Navigator />
        </Provider>
    }
}
