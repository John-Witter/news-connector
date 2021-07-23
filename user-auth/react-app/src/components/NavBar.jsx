import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from '../store/session';
import './navbar.css'
import './content.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  
  const demoUser = async (e) => {
    e.preventDefault()
    const email = 'demo@aa.io'
    const password = 'password'
    await dispatch(login(email, password))
    window.location.reload()
  }

  return (
    <nav className='navContainer'>
      <ul className='navbar'>
        {!user && <li>
          <NavLink className='authLink' to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>}
       {!user && <li>
          <NavLink className='authLink' to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>}
        {user && <li>
          <LogoutButton />
        </li>}
        {!user && <li onClick={e => demoUser(e)} className='demoBtn'>
          Demo User
        </li>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
