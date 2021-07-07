// constants
const READ_ARTICLES = 'articles/LOAD_ARTICLES'

// actions
const readArticles = (articles) => ({
    type: READ_ARTICLES,
    articles
})

// thunks
export const loadArticles = (userId) => async (dispatch) => {
    const res = await fetch('/api/articles/')

    if (res.ok) {
        const data = await res.json()
        dispatch(readArticles(data))
        return data
    }
}

//reducer
export default function ArticleReducer (state={}, action) {
    let newState = {...state}

    switch (action.type) {
        case READ_ARTICLES:
            console.log('READ_ARTICLE action:', action.articles.articles.articles)
            // news api articles
            let articles = action.articles.articles.articles
            let gifs = action.articles.gifs.data
            newState['articles'] = articles
            newState['gifs'] = gifs
            return newState
        default:
            return state
    }
}