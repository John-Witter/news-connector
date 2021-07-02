// constants
const NEW_INTEREST = 'interests/NEW_INTEREST'

// actions 
const addNewInterest = (interest) => ({
    type:NEW_INTEREST,
    interest
})

// thunks
export const addInterest = (userId, title) => async (dispatch) => {
    const res = await fetch('/api/interests/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            title
        })
    })

    if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch(addNewInterest(data))
    }
}

// reducer
export default function InterestReducer(state={}, action) {
    let newState={}
    switch(action.type) {
        case NEW_INTEREST:
            newState = {...state}
            newState[action.interest.title] = action.interest
            return newState
        default:
            return state
    }
}