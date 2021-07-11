import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadDefault } from '../../store/default'

const Default = () => {
    const dispatch = useDispatch()
    const defaults = useSelector(state => state.default)
console.log('defaults:', defaults)
    useEffect(() => {
        dispatch(loadDefault())
    }, [dispatch])

    return (
        <div>
            {defaults && Object.values(defaults).map(item => {
                return (
                    <div key={item.id}>
                        <h2><a href={item.url}>{item.title}</a></h2>
                        <a href={item.url}>
                            <img src={item.url} alt={item.title} />
                        </a>
                        {item.description && (<div>{item.description}</div>)}
                    </div>
                )
            })}
        </div>
    )
}

export default Default
