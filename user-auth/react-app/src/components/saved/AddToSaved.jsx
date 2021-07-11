import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToSaved } from '../../store/saved';
import '../content.css'
import './saved.css'

const AddToSaved = ({ item }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    let userId = user['id']
    const content = useSelector(state => state)
    const [savedText, setSavedText] = useState('Add to Saved')    

    const handleAddToSaved = () => {
        
        if (savedText === 'Add to Saved') {
            let {title, url, imageURL, description} = item
            dispatch(addToSaved(userId, url, imageURL, title, description))
        }

        else if (savedText === 'Remove from Saved') {
            
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
