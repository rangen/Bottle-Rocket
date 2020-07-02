import React, { Component } from 'react'

class SignIn extends Component {

  render() {
    return (
      <div>
        <form>
          <label>Email: </label>
          <input type='email' /> 
          <label>Password: </label>
          <input type='password' /> 
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default SignIn
