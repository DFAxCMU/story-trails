export default function currentStory(state, action) {
  switch(action.type) {
    case 'START_STORY':
      return {
        id: action.id,
        page: 0,
      }
    default:
      return {
        id: null,
      }
  }
}
