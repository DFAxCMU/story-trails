import story1 from '../data/story1.json'

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
