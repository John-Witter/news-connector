import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton'
import './title.css'

const Title = () => {
    return (
        <div className='titleContainer'>
            <NavLink to="/" exact={true} activeClassName="active" className='title-link'>
                <h1 className='title'>news-connector</h1>
            </NavLink>
            {/* < LogoutButton /> */}
        </div>
    )
}

export default Title
