import { createStackNavigator } from 'react-navigation';

import Home from '../pages/Home.js'
import StoryList from '../pages/StoryList.js'
import Register from '../pages/Register.js'
import Login from '../pages/Login.js'
import InfoForm from '../pages/InfoForm.js'
import Glasses from '../pages/Glasses.js'
import Glasses_1 from '../pages/Glasses_1.js'

const RootStack = createStackNavigator(
  {
    Home: Home,
    StoryList: StoryList,
    Register: Register,
    Login: Login,
    InfoForm: InfoForm,
    Glasses: Glasses,
    Glasses_1: Glasses_1,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
    },
    headerMode: 'none',

  }
);

export default RootStack;