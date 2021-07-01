import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

const Interests = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => Object.values(state.session));
    const userId = user[0]["id"];

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Category Name</label>
                <input type="text" id="titleInput" />
                <button type="submit">Add to Newsfeed</button>
            </form>
        </div>
    )
}

export default Interests
