import React from 'react'
import Input from '../../components/input/input'
import states from '../../states'
import { Link } from 'react-router-dom'
import './view-or-edit-profile.styles.scss'

const ViewOrEditProfile = ({ firstName, lastName, email, mobileNumber, shippingAddress1, shippingAddress2, city, state, zipcode, handleDelete, handleInputChange, handleEditSubmit }) => {
  //trying to plug in user data within the p tags. After looking at console logs it looks like
  //fetch call is slow and when input firstName
  //I get returned cannot read property of undefined
  //don't know how to wait for fetch call to be done before being able to use props 
  return (
    <div>
      <form onSubmit={(event) => handleEditSubmit(event)}>
        <Input 
          name='firstName' 
          value={firstName}
          label={firstName} 
          chg={handleInputChange} 
        />
        <Input 
          name='lastName' 
          value={lastName} 
          label={lastName} 
          chg={handleInputChange} 
        />
        <Input 
          name='email' 
          value={email} 
          label={email} 
          inputType='email' 
          chg={handleInputChange} 
        />
        <Input 
          name='mobileNumber' 
          value={mobileNumber} 
          label={mobileNumber} 
          inputType='tel' 
          chg={handleInputChange} 
        />
        <Input 
          name='shippingAddress1' 
          value={shippingAddress1} 
          label={shippingAddress1}
          chg={handleInputChange}
        />
        <Input 
          name='shippingAddress2' 
          value={shippingAddress2} 
          label={shippingAddress2}
          chg={handleInputChange} 
        />
        <Input 
          name='city' 
          value={city} 
          label={city} 
          chg={handleInputChange} 
        />
        <Input 
          name='zipcode' 
          value={zipcode} 
          label={zipcode} 
          inputType='number' 
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
}

export default ViewOrEditProfile
