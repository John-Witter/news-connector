import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromSaved } from '../../store/saved'
import '../content.css'
import './saved.css'

const RemoveFromSaved = ({ item }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const userId = user['id']
    const savedArticles = useSelector(state => state.saved)
    const [savedText, setSavedText] = useState('Remove from Saved')

    const handleRemoveFromSaved = () => {
        const { title, itemURL, imageURL, description } = item
        
        if (savedText === 'Remove from Saved') {
            dispatch(removeFromSaved(userId, itemURL, imageURL, title, description))
        }
    }

    return (
        <div className='addToSavedContainer'>
            <div
                className='addToSavedText'
                onClick={() => handleRemoveFromSaved()}
            >
                {savedText}
            </div>
        </div>
    )
}

export default RemoveFromSaved
