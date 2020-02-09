import { combineReducers } from 'redux';

import stories from './storiesReducer.js'
import currentStory from './currentStoryReducer.js'
import blanks from './blanksReducer.js'

export default combineReducers({
    stories,
    currentStory,
    blanks,
})
