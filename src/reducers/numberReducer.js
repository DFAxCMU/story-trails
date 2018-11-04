export default function numberReducer(state, action) {
	switch(action.type) {
		case 'ADD': {
			return {
				number: state.number + 1,
			}
		}
		case 'SUBTRACT': {
			return {
				number: state.number - 1,
			}
		}
		default: {
			return state || { number: 0 }
		}
	}
}