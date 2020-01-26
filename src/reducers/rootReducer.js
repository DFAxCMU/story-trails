import { combineReducers } from 'redux';

import stories from './storiesReducer.js'
import currentStory from './currentStory.js'

export default combineReducers({
  stories,
  currentStory,
})
