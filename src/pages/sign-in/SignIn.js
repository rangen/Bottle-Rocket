import React, { Component } from 'react'
import Input from '../../components/input/input'
import api from '../../services/api'

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

    api.auth.login(config)
      .then(resp=>resp.json())
      .then(json=>this.props.afterLogin(json))
  }


  render() {
    return (
      <div className='sign-in-container'>
        <form onSubmit={this.login} >
          {this.props.error ? <h3>{this.props.error}</h3> : null}
          <div className='row' />
          <div className='row' />
          <div className='row' />
          <div className='row' />
          <div className='row' />
          <div className='row'>
              <Input classOverRide='input-field col s4 offset-s4' icon='email' autoFocus type='email' name='email' value={this.state.email} handleChange={this.inputChanged} label={'Email'} />
              <Input classOverRide='input-field col s4 offset-s4' icon='enhanced_encryption' type='password' value={this.state.password} name={'password'} handleChange={this.inputChanged} label={'Password'} />
          </div>
                
          <div className='row buttons'>
            <button class = "btn waves-effect waves-light red lighten-3" type = "submit">Not Thirsty
              <i class = "material-icons right">cancel</i>
            </button>
            <button class = "btn waves-effect waves-light" type = "submit" >Login
              <i class = "material-icons right">login</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
