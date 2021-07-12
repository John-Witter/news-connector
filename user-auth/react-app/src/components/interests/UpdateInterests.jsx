import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { editInterestTitle } from "../../store/interests";
import DeleteInterest from "./DeleteInterest";

const UpdateInterests = ({ userId, interest }) => {
    const dispatch = useDispatch()
    const [showTitleEditor, setShowTitleEditor] = useState(false)
    const [selectedInterestTitle, setSelectedInterestTitle] = useState('')
    const [editButtonText, setEditButtonText] = useState('Edit')

    useEffect(() => {
        if (selectedInterestTitle === '') {
            setSelectedInterestTitle(interest.title)
        } else {
            interest.title = selectedInterestTitle
        }
    }, [interest, selectedInterestTitle])

    const handleEditConfirm = (e) => {
        e.preventDefault()
        setShowTitleEditor(false)
        dispatch(editInterestTitle(userId, interest.id, selectedInterestTitle))
        interest.title = selectedInterestTitle
        editButtonText === 'Cancel' ? setEditButtonText('Edit') : setEditButtonText('Cancel')
        window.location.reload()
    }

    if (!selectedInterestTitle) {
        return null
    }

    return (
        <div className='interestForm'>
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
                    className='editBtn'
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
            <DeleteInterest userId={userId} interest={interest} />
        </div>
    )
}

export default UpdateInterests
