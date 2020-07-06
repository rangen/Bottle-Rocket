import React, { Component } from 'react'
import Input from '../../components/input/input'
import './sign-in.styles.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  componentWillUnmount() {
    this.props.clearError()
  }

  login = (event) => {
    event.preventDefault();

    const config = {
            method: 'POST',
            credentials: 'include',
            headers: {
              "accept": "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/login', config)
      .then(resp=>resp.json())
      .then(json=>this.props.afterLogin(json))
  }


  render() {
    return (
      <div className='sign-in'>
        <h1 className='title'>Sign In</h1>
        <div className='group'>
          <form onSubmit={this.login} >
            {this.props.error ? <h3>{this.props.error}</h3> : null}
            <Input type='email'name='email' value={this.state.email} handleChange={this.inputChanged} label={'Email'} />
            <Input type='password' value={this.state.password} name={'password'} handleChange={this.inputChanged} label={'Password'} />
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn
