import React, { Component } from 'react'
import Input from '../../components/input/input'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
      <div className='group'>
        <form onSubmit={this.login} >
          {this.props.error ? <h3>{this.props.error}</h3> : null}
          <Input name={'email'} chg={this.inputChanged} label={'Email'} />
          <Input name={'password'} chg={this.inputChanged} label={'Password'} inputType={'password'} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default SignIn
