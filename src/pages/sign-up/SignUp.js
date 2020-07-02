import React, { Component } from 'react'
import './sign-up.styles.scss'

class SignUp extends Component {

  render() {
    return (
      <div className='group'>
        <form>
          <label>Email: </label>
          <input className='form-input' type='email' /> 
          <label>Password: </label>
          <input className='form-input' type='password' /> 
          <label>Mobile: </label>
          <input className='form-input' type='tel' />
          <label>Address: </label>
          <input className='form-input' type='text' />
          <label>Address2: </label>
          <input className='form-input' type='text' />
          <label>Address: </label>
          <input className='form-input' type='text' />
          <label>City: </label>
          <input className='form-input' type='text' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default SignUp
