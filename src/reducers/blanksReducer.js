export default function blanksReducer(state, action) {
    switch(action.type) {
        case 'LOAD_BLANKS':
            return action.blanks.map(blank => {
                return { 
                    id: blank.id,
                    title: blank.title, 
                    placeholder: blank.placeholder,
                }
            })
        case 'LOAD_BLANK_ANSWERS':
            return state.map(blank => { 
                return { 
                    ...blank,
                    answer: action.answers[blank.id]
                }
            })
        case 'UPDATE_BLANK_ANSWER':
            return state.map(blank => { 
                if(blank.id == action.id) {
                    return { 
                        ...blank,
                        answer: action.answer,
                    }
                }
                return blank
            })
        default: 
            return state || []
    }
}
