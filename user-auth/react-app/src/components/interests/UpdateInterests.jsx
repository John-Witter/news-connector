import React, { useState } from 'react'

const UpdateInterests = ({ interest }) => {
    const [showTitleEditor, setShowTitleEditor] = useState(false)
    const [selectedInterestTitle, setSelectedInterestTitle] = useState(interest.title)

    return (
        < form >
            <li
                key={interest.id}
                value={showTitleEditor}
                onDoubleClick={() => setShowTitleEditor(!showTitleEditor)}
            >
                {showTitleEditor === false && selectedInterestTitle}
                {showTitleEditor && (
                    <input
                        type="text"
                        value={selectedInterestTitle}
                        onChange={e => setSelectedInterestTitle(e.target.value)}
                    />
                )}
                {/* <button>Edit this Interest</button> */}
            </li>
        </form >
    )
}

export default UpdateInterests
