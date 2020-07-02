import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='nav-options'>
        <NavLink className='option' to='/'>HOME</NavLink>
        <NavLink className='option' to='/signin'>SIGN IN</NavLink>
        <NavLink className='option' to='/signup'>SIGN UP</NavLink>
      </div>
    </div>
  )
}

export default Header
