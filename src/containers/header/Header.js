import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo/rocket-svgrepo-com.svg'
import './header.styles.scss'

const Header = ({ isAdmin, loggedIn, firstName, email }) => {
  if (loggedIn) {
    if (isAdmin) {
            // **Admin Nav Bar **
            return (
              <div className='header'>
                <NavLink className='logo-container' to="/">
                  <span className='logo-text'>bottlerocket</span>
                  <Logo className='logo'/>
                </NavLink>
                
                <div className='nav-options'>
                <NavLink 
                activeStyle={{ 'background-color': '#008E7E' }}
                className='option' 
                to='/wines'>
                Wines
                </NavLink>
                <NavLink 
                className='option' 
                activeStyle={{ 'background-color': '#008E7E' }} 
                to='/offers'>
                Offers
                </NavLink>
                
                <NavLink 
                className='option'
                to='/signout'>
                Sign Out
                </NavLink>
                <p className='user'>{email}</p>
                </div>
              </div>
            )  // **END Admin Nav Bar **
    } else {
      // ** User Nav Bar **
      return (
      <div className='header'>
      
      <NavLink className='logo-container' to="/">
        <span className='logo-text'>bottlerocket</span>
          <Logo className='logo'/>
      </NavLink>

      <div className='nav-options'>
        
        <NavLink 
          activeStyle={{ 'background-color': '#008E7E' }}
          className='option' 
          to='/user/transactions'>
        Purchases
        </NavLink>

        <NavLink 
          activeStyle={{ 'background-color': '#008E7E' }}
          className='option' 
          to='/profile'>
        Profile
        </NavLink>

        
        <NavLink 
          className='option' 
          to='/signout' >
        Logout
        </NavLink>
        <p className='user'>{email}</p>
      </div>
    </div>
      )   // END User Nav Bar **
  }
 } else {
   // ** Not Logged In Bar **
    return (
      <div className='header'>
      
      <NavLink className='logo-container' to="/">
      <span className='logo-text'>bottlerocket</span>
        <Logo className='logo'/>
        </NavLink>
      <div className='nav-options'>
        <NavLink 
          activeStyle={{ 'background-color': '#008E7E' }}
          className='option' 
          to='/signup' >
        Subscribe to BottleRocket
        </NavLink>
        {/* icon here maybe! */}
        <NavLink
          activeStyle={{ 'background-color': '#008E7E' }}  
          className='option' 
          to='/signin' >
        Login
        </NavLink>
        <p className='user'>bottles <i>rocketed</i></p>
      </div>
    </div>
    )
  }
}

export default Header
