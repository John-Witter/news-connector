import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { editInterestTitle } from "../../store/interests";

const UpdateInterests = ({ userId, interest }) => {
    const dispatch = useDispatch()
    const [showTitleEditor, setShowTitleEditor] = useState(false)
    const [selectedInterestTitle, setSelectedInterestTitle] = useState(interest.title)
    const [editButtonText, setEditButtonText] = useState('Edit')

    const handleEditConfirm = (e) => {
        e.preventDefault()
        setShowTitleEditor(true)
        dispatch(editInterestTitle(userId, interest.id, selectedInterestTitle))
        // console.log('updatedInterest:', updatedInterest)
        // setSelectedInterestTitle(updatedInterest.title)
    }

    return (
        < form onSubmit={handleEditConfirm}>
            <li>
                
                {showTitleEditor === false && selectedInterestTitle}
                {showTitleEditor && (                    
                    <>
                        <input
                            type="text"
                            value={selectedInterestTitle}
                            onChange={e => setSelectedInterestTitle(e.target.value)}
                        />
                        {interest.title !== selectedInterestTitle && 
                        <button 
                            // type="submit"
                            // value={showTitleEditor}
                            // onClick={e => setShowTitleEditor(true)}
                        >
                            Confirm
                        </button>
                        }
                    </>
                )}
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        editButtonText === 'Cancel' ? setEditButtonText('Edit') : setEditButtonText('Cancel')
                        setSelectedInterestTitle(interest.title)
                        setShowTitleEditor(!showTitleEditor)
                    }}
                >
                    {editButtonText}
                </button>
            </li>
        </form >
    )
}

export default UpdateInterests
