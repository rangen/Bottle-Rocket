import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = ({ isAdmin, loggedIn, firstName }) => {
  return (
    <div className='header'>
      {loggedIn? `Welcome ${firstName}(${isAdmin? 'Admin':'User'})!`: null}
      <div className='nav-options'>
        <NavLink 
          className='option' 
          to='/wines'>
            {loggedIn ? (isAdmin ? 'Wines' : null) : null}
        </NavLink>
        <NavLink 
          className='option' 
          to='/offers'>
            {loggedIn ? (isAdmin ? 'Offers' : null) : null}
        </NavLink>
        <NavLink 
              className='option' 
              to='/'>
                {loggedIn ? (isAdmin ? 'Admin Home' : 'User Home') : 'Home'}
        </NavLink>
        
        <NavLink 
        className='option' 
        to={loggedIn ? '/user/profile' : '/signup'}>
        {loggedIn ? "Profile" : "Sign Up"}
        </NavLink>
        
        <NavLink 
              className='option' 
              to={loggedIn ? '/signout' : '/signin'}>
                {loggedIn ? "Sign Out" : "Sign In"}
        </NavLink>
      </div>
    </div>
  )
}

export default Header
