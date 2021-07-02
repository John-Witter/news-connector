import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addInterest } from "../../store/interests";

const Interests = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const user = useSelector((state) => Object.values(state.session));
    const userId = user[0]["id"];

    // useEffect(() => {
    //     console.log('!!!useEffect: userId:', userId, 'title:', title)
    //     dispatch(addInterest(userId, title))
    // }, [dispatch, userId, title])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('inside handleSubmit')
        dispatch(addInterest(userId, title))
        setTitle('')
    }

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
        </div>
    )
}

export default Interests
