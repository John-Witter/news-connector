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

const updateInterest = (title) => ({
    type: UPDATE_INTEREST,
    title
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
        console.log('userId:', userId, 'interestId:', interestId, 'title:', title)
        console.log('data:', data)
        const dataToDispatch = {
            userId,
            interestId,
            "title": data.title
        }
        console.log('dataToDispatch:', dataToDispatch)
        dispatch(updateInterest(dataToDispatch))
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
            return newState
        default:
            return state
    }
}