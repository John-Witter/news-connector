import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../content.css'
import './saved.css'

const AddToSaved = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    let userId = user['id']
    const content = useSelector(state => state)
    const [savedText, setSavedText] = useState('Add to Saved')

    // if (user) {
    //     userId = user['id']
    // }

    const handleAddToSaved = () => {
        // if savedText === 'Add to Saved' dispatch(postToSaved(userId, itemURL))
        // else dispatch(deleteFromSaved)
        console.log('CLIKED: ', savedText)

        if (savedText === 'Add to Saved') {
        }

        // change text to display if item is saved or not
        savedText === 'Add to Saved' ? setSavedText('Remove from Saved') : setSavedText('Add to Saved')
    }
    return (
        <div className='addToSavedContainer'>
            <div 
                className='addToSavedText'
                onClick={() => {handleAddToSaved()}}                
            >
                {savedText}
            </div>
        </div>
    )
}

export default AddToSaved
