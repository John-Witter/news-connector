import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInterest, getAllInterests } from "../../store/interests";
import UpdateInterests from "./UpdateInterests";

const Interests = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [viewInterests, setViewInterests] = useState('View')
    const user = useSelector((state) => state.session.user);
    let allInterests
    let userId
    if (user) {
        userId = user["id"];
    }

    useEffect(() => {
        console.log('userId:', userId)
        if (!userId) return
        dispatch(getAllInterests(userId))
    }, [dispatch, userId])

    allInterests = useSelector(state => Object.values(state.interest))

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addInterest(userId, title))
        setTitle('')
    }
    console.log('allInterests:', allInterests)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Category Name</label>
                <input
                    type="text"
                    id="titleInput"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add to Newsfeed</button>
            </form>

            <div>
                <p
                    value={viewInterests}
                    onClick={() => viewInterests === 'View' ? setViewInterests('Hide') : setViewInterests('View')}
                >
                    {viewInterests} Your Interests
                </p>
                {viewInterests === 'Hide' && !userId && (
                    <p>Log in to add interests to your newsfeed!</p>
                )}
                {viewInterests === 'Hide' && userId &&(                    
                    <ul>
                        {allInterests.map(interest => (
                           <UpdateInterests userId={userId} interest={interest} key={interest.id} />
                        )
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Interests
