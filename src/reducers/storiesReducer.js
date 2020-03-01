export default function storiesReducer(state, action) {
  switch(action.type) {
    case 'LOAD_STORIES':
      return { loading: false, data: action.stories }
    default:
      return state || { loading: true, data: null }
  }
}
