import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInterest } from "../../store/interests";

const Interests = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => Object.values(state.session));
    const userId = user[0]["id"];

    useEffect(() => {
        dispatch(addInterest(userId, title))
    }, [dispatch, userId, title])

    const handleSubmit = (e) => {
        e.preventDefault()
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
