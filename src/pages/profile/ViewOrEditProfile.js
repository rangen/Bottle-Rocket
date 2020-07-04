import React from 'react'
import { Link } from 'react-router-dom'
import './view-or-edit-profile.styles.scss'

const ViewOrEditProfile = ({ user, handleDelete }) => {
  //trying to plug in user data within the p tags. After looking at console logs it looks like
  //fetch call is slow and when input user.data.attributes.firstName
  //I get returned cannot read property of undefined
  //don't know how to wait for fetch call to be done before being able to use props 
  console.log(user)
  return (
    <div>
      <p>{}</p>
      <p>last name</p>
      <p>mobile number</p>
      <p>address 1</p>
      <p>address2</p>
      <p>city</p>
      <p>state</p>
      <p>zip</p>
      <p>enable/disable notification</p>
      <Link to='/user/profile/edit'>
        <button>Edit</button>
      </Link>
      <Link to='/'>
        <button onClick={handleDelete}>Delete Profile</button>
      </Link>
    </div>
  )
}

export default ViewOrEditProfile
