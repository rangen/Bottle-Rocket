import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = ({ isAdmin, loggedIn, firstName }) => {
  if (loggedIn) {
    if (isAdmin) {
            // **Admin Nav Bar **
            return (
              <div className='header'>
                {`Welcome ${firstName}(Admin)!`}
                <div className='nav-options'>
                  <NavLink 
                    className='option' 
                    to='/wines'>
                  Wines
                  </NavLink>
                  <NavLink 
                    className='option' 
                    to='/offers'>
                  Offers
                  </NavLink>

                  <NavLink 
                    className='option' 
                    to='/signout'>
                  Sign Out
                  </NavLink>
                </div>
              </div>
            )  // **END Admin Nav Bar **
    } else {
      // ** User Nav Bar **
      return (
      <div className='header'>
      {`Welcome ${firstName}(User)!`}
      <div className='nav-options'>
        
        <NavLink 
          className='option' 
          to='/'>
        Home
        </NavLink>
        
        <NavLink 
          className='option' 
          to='/user/transactions'>
        Purchase History
        </NavLink>

        <NavLink 
          className='option' 
          to='/user/profile'>
        Profile
        </NavLink>

        
        <NavLink 
          className='option' 
          to='/signout' >
        Sign Out
        </NavLink>
      </div>
    </div>
      )   // END User Nav Bar **
  }
 } else {
   // ** Not Logged In Bar **
    return (
      <div className='header'>
      {loggedIn? `Welcome ${firstName}(${isAdmin? 'Admin':'User'})!`: null}
      <div className='nav-options'>
        
        <NavLink 
          className='option' 
          to='/signup' >
        Sign Up
        </NavLink>
        
        <NavLink 
          className='option' 
          to='/signin' >
        Log In
        </NavLink>
      </div>
    </div>
    )
  }
}

export default Header
