export default function currentStory(state, action) {
  switch(action.type) {
    case 'START_STORY':
      return {
        id: action.id,
        page: 0,
      }
    case 'NEXT_PAGE':
      return {
        id: state.id,
        page: (state.page + 1),
      }
    case 'BACK_PAGE':
      return {
        id: state.id,
        page: (state.page - 1),
      }
    default:
      return {
        id: null,
      }
  }
}
