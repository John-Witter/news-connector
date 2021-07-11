import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadDefault } from '../../store/default'
import '../content.css'
import '../articles/articles.css'

const Default = () => {
    const dispatch = useDispatch()
    const defaults = useSelector(state => state.default)

    useEffect(() => {
        dispatch(loadDefault())
    }, [dispatch])

    return (
        <div className='parent'>
            {defaults && Object.values(defaults).map(item => {
                return (
                    <div key={item.id} className='content-container'>
                        <h2><a href={item.itemURL}>{item.title}</a></h2>
                        <a href={item.url}>
                            <img src={item.imageURL} alt={item.title} />
                        </a>
                        {item.description && (<div className='description'>{item.description}</div>)}
                    </div>
                )
            })}
        </div>
    )
}

export default Default
