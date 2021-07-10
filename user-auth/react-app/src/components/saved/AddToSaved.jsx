import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import '../content.css'
import './saved.css'

const AddToSaved = () => {
    const [savedText, setSavedText] = useState('Add to Saved')

    return (
        <div className='addToSavedContainer'>
            <div 
                className='addToSavedText'
                onClick={() => {
                    savedText === 'Add to Saved' ? setSavedText('Remove from Saved') : setSavedText('Add to Saved')
                }}                
            >
                {savedText}
            </div>
        </div>
    )
}

export default AddToSaved
