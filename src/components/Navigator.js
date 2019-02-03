import { createStackNavigator } from 'react-navigation';

import Home from '../pages/Home.js'
import StoryList from '../pages/StoryList.js'
import Register from '../pages/Register.js'

const RootStack = createStackNavigator(
  {
    Home: Home,
    StoryList: StoryList,
    Register: Register

  },
  {
    initialRouteName: 'Register',
    navigationOptions: {
    },
    headerMode: 'none',

  }
);

export default RootStack;