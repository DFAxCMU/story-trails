import { createStackNavigator } from 'react-navigation';

import Home from '../pages/Home.js'
import StoryList from '../pages/StoryList.js'
import Register from '../pages/Register.js'
import Login from '../pages/Login.js'

const RootStack = createStackNavigator(
  {
    Home: Home,
    StoryList: StoryList,
    Register: Register,
    Login: Login
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
    },
    headerMode: 'none',

  }
);

export default RootStack;