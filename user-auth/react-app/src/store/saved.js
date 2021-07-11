// constants
const READ_SAVED_ARTICLES = 'articles/READ_SAVED_ARTICLES'
const POST_SAVED_ARTICLE = 'articles/POST_SAVED_ARTICLE'
const DELETE_SAVED_ARTICLE = 'articles/DELETE_SAVED_ARTICLE'


// actions
const postSavedArticle = (article) => ({
    type: POST_SAVED_ARTICLE,
    article
})

const readSavedArticles = (articles) => ({
    type: READ_SAVED_ARTICLES,
    articles
})

const deleteSavedArticle = (article) => ({
    type: DELETE_SAVED_ARTICLE,
    article
})

// thunks 
export const addToSaved = (userId, itemURL, imageURL, title, description) => async (dispatch) => {
    console.log('inside addToSaved')
    const res = await fetch('/api/saved/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            userId,
            itemURL,
            imageURL,
            title,
            description
        })
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(postSavedArticle(data))
    }
}

export const loadSavedArticles = () => async (dispatch) => {
    const res = await fetch('/api/saved/')

    if (res.ok) {
        const data = await res.json()
        dispatch(readSavedArticles(data))
        return data
    }
}

export const removeFromSaved = (userId, itemURL, imageURL, title, description) => async (dispatch) => {
    console.log('insede removeFromSaved')
    const res = await fetch('/api/saved/', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            itemURL,
            imageURL,
            title,
            description
        })
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(deleteSavedArticle(data))
    }
}

// reducer
export default function SavedReducer (state={}, action) {
    let newState = {...state}

    switch (action.type) {
        case READ_SAVED_ARTICLES:
            console.log('READ_SAVED_ARTICLES action:', action)     
            const articles = action.articles.saved
            console.log('READ_SAVED_ARTICLES articles:', articles)
            articles.forEach(article => {
                newState[article.id] = article
            })
            return newState
        case POST_SAVED_ARTICLE:
            console.log("POST_SAVED_ARTICLE action:", action)
            newState[action.article.id] = action.article
            return newState
        case DELETE_SAVED_ARTICLE:
            console.log("DELETE_SAVED_ARTICLE action:", action)
            delete newState[action.article.id]
            console.log("AFTER DELETE_SAVED_ARTICLE action:", action)
            return newState
        default:
            return state
    }
}