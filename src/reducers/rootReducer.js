import { combineReducers } from 'redux';

import stories from './storiesReducer.js'
import currentStory from './currentStoryReducer.js'

export default combineReducers({
  stories,
  currentStory,
})
