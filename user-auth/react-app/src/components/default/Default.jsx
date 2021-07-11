import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadDefault } from '../../store/default'

const Default = () => {
    const dispatch = useDispatch()
    const defaults = useSelector(state => state.default)

    useEffect(() => {
        dispatch(loadDefault())
    }, [dispatch])

    return (
        <div>
            Default
        </div>
    )
}

export default Default
