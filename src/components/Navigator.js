import { createStackNavigator } from 'react-navigation';

import Home from '../pages/Home.js'
import StoryList from '../pages/StoryList.js'

const RootStack = createStackNavigator(
  {
    Home: Home,
    StoryList: StoryList

  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
    },
    headerMode: 'none',

  }
);

export default RootStack;