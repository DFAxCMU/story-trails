import data from '../data/story1.json'
export function loadStories() {
  return function(dispatch) {
    setTimeout(function() {
      dispatch({
        type: 'LOAD_STORIES',
        stories: data,
      })
    }, 3000)
  }
}
