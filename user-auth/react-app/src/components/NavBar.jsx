import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './navbar.css'
import './content.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav className='navContainer'>
      <ul className='navbar'>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {!user && <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>}
       {!user && <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>}
        {user && <li>
          <LogoutButton />
        </li>}

      </ul>
    </nav>
  );
}

export default NavBar;
