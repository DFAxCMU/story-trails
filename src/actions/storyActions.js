import story1 from '../data/story1.json'

//generalize function
function findBlanks(acc, pages) {
    for (var i = 0; i < pages.length; i++) {
        var currPage = page[i];
        const entries = Object.entries(currPage)
        for (const entry of entries) {
            const key = entry[0]
            const value = entry[1]
            //base case
            if (!Array.isArray(value)) {
                //returns list of blanks
                var blanks = parseString(value)
                acc = acc.concat(blanks)
            }
            //recursive case
            else {
                //incomplete
            }
        }
    
    }
}

export function loadStories() {
    return function(dispatch) {
        const stories = [story1]
        dispatch({
            type: 'LOAD_STORIES',
            stories: stories,
        })
        const blanks = stories.reduce((blanks, story) => {
          return []
        }, [])
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
