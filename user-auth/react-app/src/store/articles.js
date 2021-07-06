// constants
const READ_ARTICLES = 'articles/LOAD_ARTICLES'

// actions
const readArticles = (articles) => {
    type: READ_ARTICLES,
    articles
}

// thunks
export const loadArticles = (userId) => async (dispatch) => {
    const res = await fetch('/api/articles/')

    if (res.ok) {
        const data = await res.json()
        dispatch(readArticles(data))
    }
}

//reducer