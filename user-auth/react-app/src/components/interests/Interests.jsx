import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInterest, getAllInterests } from "../../store/interests";
import UpdateInterests from "./UpdateInterests";
import '../content.css'

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
        dispatch(getAllInterests(user['id']))
    }, [dispatch, user])

    // allInterests = useSelector(state => state.interest)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addInterest(userId, title))
        setTitle('')
    }    

    return (
        <div className='sidebar'>
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
                {viewInterests === 'Hide' && !user && (
                    <p>Log in to add interests to your newsfeed!</p>
                )}
                {viewInterests === 'Hide' && user &&(                    
                    <ul>
                        {Object.values(allInterests).map(interest => (
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
