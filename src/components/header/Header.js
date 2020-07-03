import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = ({ isAdmin, loggedIn, firstName, email }) => {
  return (
    <div className='header'>
      {loggedIn? `Welcome ${firstName}(${isAdmin? 'Admin':'User'})!`: null}
      <div className='nav-options'>
        <NavLink 
              className='option' 
              to='/'>
                {loggedIn ? (isAdmin ? 'Admin Home' : 'User Home') : 'Home'}
        </NavLink>
        <NavLink 
              className='option' 
              to={loggedIn ? '/signout' : '/signin'}>
                {loggedIn ? "Sign Out" : "Sign In"}
        </NavLink>

        <NavLink 
              className='option' 
              to={loggedIn ? '/home' : '/signup'}>
                {loggedIn ? "My Account" : "Sign Up"}
        </NavLink>
      </div>
    </div>
  )
}

export default Header
