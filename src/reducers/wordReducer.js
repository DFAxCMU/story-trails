export default function wordReducer(state, action) {
	switch(action.type) {
		case 'ADD_LETTER': {
			return {
				word: state.word + action.letter,
			}
		}
		default: {
			return state || { word: '' }
		}
	}
}