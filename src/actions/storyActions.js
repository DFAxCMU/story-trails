import data from '../data/story1.json'
export function loadStories() {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_STORIES',
      stories: data,
    })
  }
}

export function startStory(id) {
  return {
    type: 'START_STORY',
    id: id,
  }
}

export function nextPage() {
  return {
    type: 'NEXT_PAGE',
  }
}

export function backPage() {
  return {
    type: 'BACK_PAGE',
  }
}