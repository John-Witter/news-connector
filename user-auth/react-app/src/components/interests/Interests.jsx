import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInterest, getAllInterests } from "../../store/interests";
import UpdateInterests from "./UpdateInterests";
import '../content.css'
import './interests.css'
import Weather from "../weather/Weather";

const Interests = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [viewInterests, setViewInterests] = useState('View')
    const user = useSelector((state) => state.session.user);
    let allInterests = useSelector(state => state.interest)
    let userId
    if (user) {
        userId = user["id"];
    }

    useEffect(() => {
        if (!userId) return
        dispatch(getAllInterests())
    }, [dispatch, user])

    // allInterests = useSelector(state => state.interest)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addInterest(userId, title))
        setTitle('')
        window.location.reload()
    }

    if (!user) {
        return null
    }

    return (
        <div className='interestsOuterMost'>
            <div className='interests'>
                <p
                    className='viewInterests'
                    value={viewInterests}
                    onClick={() => viewInterests === 'View' ? setViewInterests('Hide') : setViewInterests('View')}
                >
                    {viewInterests} Your Interests
                </p>
                {viewInterests === 'Hide' && !user && (
                    <p>Log in to add interests to your newsfeed!</p>
                )}
                {viewInterests === 'Hide' && user && (
                    <div className='interestsContainer'>
                        <form onSubmit={handleSubmit} className='inputHTMLForm'>
                            <input
                                type="text"
                                id="titleInput"
                                className="titleInput"
                                placeholder="add new interest"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <button type="submit">Add to Feed</button>
                        </form>
                        <ul className='interestFormListContainer'>
                            {Object.values(allInterests).map(interest => (
                                <UpdateInterests userId={userId} interest={interest} key={interest.id} />
                            )
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <Weather />
        </div>
    )
}

export default Interests
