import React from 'react'
import { NavLink } from 'react-router-dom'
import './title.css'

const Title = () => {
    return (
        <div className='titleContainer'>
            <NavLink to="/" exact={true} activeClassName="active">
                <h1 className='title'>news-connector</h1>
            </NavLink>
        </div>
    )
}

export default Title
