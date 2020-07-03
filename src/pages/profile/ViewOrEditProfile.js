import React from 'react'
import { Link } from 'react-router-dom'
import './view-or-edit-profile.styles.scss'

const ViewOrEditProfile = ({ user }) => {
  return (
    <div>
      <p>first name</p>
      <p>last name</p>
      <p>mobile number</p>
      <p>address 1</p>
      <p>address2</p>
      <p>city</p>
      <p>state</p>
      <p>zip</p>
      <p>enable/disable notification</p>
      <button><Link to='/user/profile/edit'>Edit</Link></button>
      <button>Delete Profile</button>
    </div>
  )
}

export default ViewOrEditProfile
