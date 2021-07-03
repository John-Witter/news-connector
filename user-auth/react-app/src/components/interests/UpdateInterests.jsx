import React, { useState } from 'react'

const UpdateInterests = ({ interest }) => {
    const [showTitleEditor, setShowTitleEditor] = useState(false)
    const [selectedInterestTitle, setSelectedInterestTitle] = useState(interest.title)
    const [editButtonText, setEditButtonText] = useState('Edit')

    return (
        < form >
            <li
                key={interest.id}
                value={showTitleEditor}
                // onDoubleClick={() => setShowTitleEditor(!showTitleEditor)}
            >
                
                {showTitleEditor === false && selectedInterestTitle}
                {showTitleEditor && (                    
                    <>
                        <input
                            type="text"
                            value={selectedInterestTitle}
                            onChange={e => setSelectedInterestTitle(e.target.value)}
                        />
                        <button type="submit">Confirm</button>
                    </>
                )}
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        editButtonText === 'Cancel' ? setEditButtonText('Edit') : setEditButtonText('Cancel')
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
