import React, { Component } from 'react'
import FormInput from '../../components/form-input/FormInput'
import './sign-up.styles.scss'

class SignUp extends Component {

  render() {
    return (
      <div className='group'>
        <h1 className='title'>Sign Up</h1>
        <FormInput />
      </div>
    )
  }
}

export default SignUp
