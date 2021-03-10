import { createStackNavigator } from 'react-navigation';

import StoryList from '../pages/StoryList.js'
import StoryPage from '../pages/StoryPage.js'
import BlanksForm from '../pages/BlanksForm.js'

const RootStack = createStackNavigator(
  {
    StoryList,
    StoryPage,
    BlanksForm,
  },
  {
    initialRouteName: 'StoryList',
    navigationOptions: {
    },
    headerMode: 'none',
  }
);

export default RootStack;
