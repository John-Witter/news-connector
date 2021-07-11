import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../content.css'
import './saved.css'

const AddToSaved = ({ item }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    let userId = user['id']
    const content = useSelector(state => state)
    const [savedText, setSavedText] = useState('Add to Saved')    

    const handleAddToSaved = () => {
        let {title, url, imageURL, description} = item
        console.log('title:', title)
        console.log('url:', url)
        console.log('imageURL:', imageURL)
        console.log('description:', description)
        // if savedText === 'Add to Saved' dispatch(postToSaved(userId, itemURL))
        // else dispatch(deleteFromSaved)
        console.log('CLIKED: ', savedText)
        console.log('ITEM:', item)

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
