import React from 'react'
import Input from '../../components/input/input'
import states from '../../states'
import { Link } from 'react-router-dom'
import './ProfileForm.styles.scss'

const ProfileForm = ({ firstName, lastName, email, mobileNumber, shippingAddress1, shippingAddress2, city, state, zipcode, handleDelete, handleInputChange, handleEditSubmit }) => {
  if (firstName) {
  return (
    <div className='group'>
      <form onSubmit={(event) => handleEditSubmit(event)}>
        <Input
          className='active'
          type='text'
          name='firstName' 
          value={firstName}
          label={'First Name'}
          chg={handleInputChange} 
        />
        <Input
        type='text'
          name='lastName' 
          value={lastName}
          chg={handleInputChange} 
        />
        <Input 
          name='email' 
          value={email}
          label={'Email'} 
          inputType='email' 
          chg={handleInputChange} 
        />
        <Input 
          name='mobileNumber' 
          value={mobileNumber}
          label={'Mobile Number for SMS'} 
          inputType='tel' 
          chg={handleInputChange} 
        />
        <Input 
          name='shippingAddress1' 
          value={shippingAddress1}
          label={'Delivery Address'} 
          chg={handleInputChange}
          />
        <Input 
          name='shippingAddress2' 
          value={shippingAddress2}
          label={'Apt / Unit / Other (revise!)'}
          chg={handleInputChange} 
        />
        <Input 
          name='city' 
          value={city}
          label={'City'} 
          chg={handleInputChange} 
        />
        <Input 
          name='zipcode' 
          value={zipcode}
          label={'ZIP'} 
          chg={handleInputChange} 
        />

          <select 
            name='state' 
            onChange={(e)=>handleInputChange(e)} 
            value={state} 
            className='form-input'
          >
          {Object.entries(states).map(([abb, name]) => (<option key={abb} value={abb}>{name}</option>))}
          </select>
        <input type='submit' />
      </form>
      <Link to='/'>
        <button onClick={handleDelete}>Delete Profile</button>
      </Link>
    </div>
  )
  } else {
    return null
  }
}

export default ProfileForm
