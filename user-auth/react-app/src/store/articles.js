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


// reducer
export default function ArticleReducer (state={}, action) {
    let newState = {...state}

    switch (action.type) {
        case READ_ARTICLES:            
            // news api articles
            let articles = action.articles.articles.articles
            let gifs = action.articles.gifs
            let gifs1 = []
            for (let i = 0; i < gifs.length; i++) {
                let iGifs = gifs[i].data
                for (let j = 0; j < iGifs.length; j++) {
                    let jGifs = iGifs[j]
                    gifs1.push(jGifs)           
                }
            }
            // console.log('!!!!!!READ_ARTICLES action', action)
            newState['articles'] = articles
            newState['gifs'] = gifs1
            newState['headlines'] = action.articles.headlines
            return newState
        default:
            return state
    }
}