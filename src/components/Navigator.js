import { createStackNavigator } from 'react-navigation';

import StoryList from '../pages/StoryList.js'
import StoryPage from '../pages/StoryPage.js'

const RootStack = createStackNavigator(
  {
    StoryList,
    StoryPage,
  },
  {
    initialRouteName: 'StoryList',
    navigationOptions: {
    },
    headerMode: 'none',

  }
);

export default RootStack;