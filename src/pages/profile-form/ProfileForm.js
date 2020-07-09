import React from 'react'
import Input from '../../components/input/input'
import states from '../../states'
import './ProfileForm.styles.scss'

const ProfileForm = (props) => {    
  const { firstName, lastName, email, city, shippingAddress1, shippingAddress2, mobileNumber, state, zipcode } = props.profile
  const { onChange, onDelete, onCancel, onSubmit } = props  
  

}

export default ProfileForm