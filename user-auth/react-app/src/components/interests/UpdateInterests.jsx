import React, { useState } from 'react'

const UpdateInterests = ({ interest }) => {
    const [showTitleEditor, setShowTitleEditor] = useState(false)
    const [selectedInterestTitle, setSelectedInterestTitle] = useState('')

    return (
        < div >
            <li
                key={interest.id}
                value={showTitleEditor}
                onDoubleClick={() => setShowTitleEditor(!showTitleEditor)}
            >
                {interest.title}
                {showTitleEditor && (
                    <input
                        type="text"
                        value={selectedInterestTitle}
                        onChange={e => setSelectedInterestTitle(e.target.value)}
                    />
                )}
                <button>Edit this Interest</button>
            </li>
        </div >
    )
}

export default UpdateInterests
