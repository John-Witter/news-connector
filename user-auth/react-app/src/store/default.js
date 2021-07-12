// constants
const READ_DEFAULT = 'default/READ_DEFAULT'

// actions
const readDefault = (articles) => ({
    type:  READ_DEFAULT,
    articles
})

// thunks
export const loadDefault = () => async (dispatch) => {
    const res = await fetch ('/api/homeData/')

    if (res.ok) {
        const data = await res.json()
        dispatch(readDefault(data))
    }
}

// reducer
export default function DefaultReducer (state={}, action) {
    let newState = {...state}

    switch (action.type) {
        case READ_DEFAULT:
            console.log('READ_DEFAULT action:', action)
            action.articles.defaults.forEach(article => {
                newState[article.id] = article
            })
            return newState
        default:
            return state
    }
}