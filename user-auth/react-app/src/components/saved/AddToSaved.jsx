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
    const [savedText, setSavedText] = useState('Add to Saved')


    useEffect(() => {
        //if item is in store, set text to Remove from Saved
        Object.values(savedArticles).forEach(article => {
            if (article['itemURL'] === item['url']) {
                setSavedText('Remove from Saved')
            }
        })
    }, [])

    const handleAddToSaved = () => {
        //todo
        //check if article is already saved first
        let { title, url, imageURL, description } = item
        if (savedText === 'Remove from Saved') {
            dispatch(removeFromSaved(userId, url, imageURL, title, description))
            setSavedText('Add to Saved')
            return
        }

        if (savedText === 'Add to Saved') {
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