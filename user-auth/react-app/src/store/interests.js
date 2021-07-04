// constants
const CREATE_INTEREST = 'interests/CREATE_INTEREST'
const READ_INTERESTS = 'interests/READ_INTERESTS'
const READ_ONE_INTEREST = 'interests/READ_ONE_INTEREST'  // REMOVE THIS?
const UPDATE_INTEREST = 'interests/UPDATE_INTEREST'
const DELETE_INTEREST = 'interests/DELETE_INTEREST'

// actions 
const createNewInterest = (interest) => ({
    type: CREATE_INTEREST,
    interest
})

const readAllInterests = (interests) => ({
    type: READ_INTERESTS,
    interests
})

const readOneInterest = (interest) => ({
    type: READ_ONE_INTEREST,
    interest
})

const updateInterest = (interest) => ({
    type: UPDATE_INTEREST,
    interest
})

const deleteInterest = (interest) => ({
    type: DELETE_INTEREST,
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
        dispatch(createNewInterest(data))
    }
}

export const getAllInterests = (userId) => async (dispatch) => {
    const res = await fetch('/api/interests/')

    if (res.ok) {
        const data = await res.json()
        dispatch(readAllInterests(data))
    }
}

export const getOneInterest = (interestId) => async (dispatch) => {
    const res = await fetch(`/api/interest/${interestId}/`)

    if (res.ok) {
        const data = await res.json()
        dispatch(readAllInterests(data))
    }

    if (res.ok) {
        const data = await res.json()
        dispatch(readOneInterest(data))
    }
}

export const editInterestTitle = (userId, interestId, title) => async (dispatch) => {
    const res = await fetch(`/api/interests/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            interestId,
            title
        })
    })
    if (res.ok) {
        const data = await res.json()
        const dataToDispatch = {
            userId,
            interestId,
            "title": data.title
        }
        dispatch(updateInterest(dataToDispatch))
        return(dataToDispatch)
    }
}

export const removeInterest = (userId, interestId, title) => async (dispatch) => {
    const res = await fetch(`/api/interests/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId, 
            interestId,
            title
        })
    })
    if (res.ok) {
        const data = await res.json()
        const dataToDispatch = {
            userId,
            interestId,
            "title": data.title
        }
        dispatch(deleteInterest(dataToDispatch))
    }
}

// reducer
export default function InterestReducer(state={}, action) {
    let newState={...state}
    switch(action.type) {
        case CREATE_INTEREST:
            newState[action.interest.title] = action.interest
            return newState
        case READ_INTERESTS:
            action.interests.interests.forEach(interest => {
                newState[interest.id] = interest
            })
            return newState
        case READ_ONE_INTEREST:
            newState[action.interest.interests.id] = action.interest.interests
            return newState
        case UPDATE_INTEREST:
            console.log('UPDATE_INTEREST action:', action)
            const interest = {
                "id": action.interest.interestId,
                "tite": action.interest.title,
                "userId": action.interest.userId
            }
            newState[interest.id] = interest
            return newState
        case DELETE_INTEREST:
            console.log('DELETE_INTEREST action:', action)
            const interestToDelete = {
                "id": action.interest.interestId,
                "tite": action.interest.title,
                "userId": action.interest.userId
            }
            const id = interestToDelete['id']
            newState.pop(id)
            return newState
        default:
            return state
    }
}