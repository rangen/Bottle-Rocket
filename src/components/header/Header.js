import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = ({ adminSignedIn, handleSignOut }) => {
  return (
    <div className='header'>
      <div className='nav-options'>
      <NavLink className='option' to='/'>HOME</NavLink>
        { adminSignedIn ? (
          <div>
            <NavLink className='option' to='/offers'>OFFERS</NavLink>
            <NavLink className='option' to='/wines'>WINES</NavLink>
            <NavLink  onClick={handleSignOut} className='option' to='/'>SIGN OUT</NavLink>
          </div>
        ) : (
        <div>
          <NavLink className='option' to='/signin'>SIGN IN</NavLink>
          <NavLink className='option' to='/signup'>SIGN UP</NavLink>
        </div>)
        }
      </div>
    </div>
  )
}

export default Header
