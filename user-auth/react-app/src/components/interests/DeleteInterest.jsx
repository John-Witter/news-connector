import React from 'react'
import { useDispatch } from "react-redux";
import { removeInterest } from "../../store/interests";

const DeleteInterest = ({ userId, interest}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeInterest(userId, interest.id, interest.title))
    }
    return (
        <button onClick={() => handleDelete()}>
            Delete
        </button>
    )
}

export default DeleteInterest
