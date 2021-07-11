import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToSaved, removeFromSaved } from '../../store/saved';
import '../content.css'
import './saved.css'

const AddToSaved = ({ item }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    let userId = user['id']
    const savedArticles = useSelector(state => state.saved)
    const content = useSelector(state => state)
    const [savedText, setSavedText] = useState('Add to Saved')    

    
    useEffect(() => {
        //if item is in store, set text to Remove from Saved
        Object.values(savedArticles).forEach(article => {
            console.log('article:', article)
            console.log('item:', item)
            if(article['itemURL'] === item['url']) {
                console.log('item is saved:', item)
                setSavedText('Remove from Saved')
            }
        })
    }, [])

    const handleAddToSaved = () => {
        //todo
        //check if article is already saved first
        let {title, url, imageURL, description} = item
        console.log('savedText:', savedText)
        if (savedText === 'Remove from Saved') {
            console.log('dispatch(removeFromSaved(userId, url, imageURL, title, description))')
            dispatch(removeFromSaved(userId, url, imageURL, title, description))
            setSavedText('Add to Saved')
            return
        }
        
        if (savedText === 'Add to Saved') {
            console.log('dispatch(addToSaved(userId, url, imageURL, title, description))')
            dispatch(addToSaved(userId, url, imageURL, title, description))
            setSavedText('Remove from Saved')
            return
        }

        return
        // change text to display if item is saved or not
        // savedText === 'Add to Saved' ? setSavedText('Remove from Saved') : setSavedText('Add to Saved')
    }
    return (
        <div className='addToSavedContainer'>
            <div 
                className='addToSavedText'
                onClick={() => handleAddToSaved()}                
            >
                {savedText}
            </div>
        </div>
    )
}

export default AddToSaved
