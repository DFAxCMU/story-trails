import data from '../data/story1.json'
export function loadStories() {
  return {
    type: 'LOAD_STORIES',
    stories: data,
  }
}
