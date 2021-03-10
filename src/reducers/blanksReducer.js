export default function blanksReducer(state, action) {
    console.log("Actions from blanksRedcuer: ", action);
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
            return state || 
                [{ 
                    id: 0, 
                    title: "Test1", 
                    placeholder: "answer1", 
                    answer: undefined 
                },
                    { id: 1, title: "Test2", placeholder: "answer2" }]
    }
}
