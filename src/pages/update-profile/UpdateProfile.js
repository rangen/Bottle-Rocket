import React, { Component } from 'react'
import Input from '../../components/input/input'
import states from '../../states'

class UpdateProfile extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    shippingAddress1: '',
    shippingAddress2: '',
    city: '',
    zipcode: '',
    state: "CA"
  }

  componentDidMount() {
    fetch('http://localhost:3000/user/profile', {credentials: 'include'})
      .then(resp=>resp.json())
      .then(json=>this.loadForm(json.user.data.attributes))
  }

  loadForm = (user) => {
    this.setState(user)
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  updateUser = (e) => {
    e.preventDefault();
    console.dir(this.state)
    const data = JSON.stringify(this.state);

    const target = `http://localhost:3000/user/profile`
    
    const config = {
                  method: "DELETE",
                  credentials: 'include',
                  body: data,
                  headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                        }
                }
    fetch(target, config)
      .then(resp=>resp.json())
      .then(json=>console.log(json))
  }

  render() {
    return (
      <div className='group'>
        <form onSubmit={(e)=>this.updateUser(e)}>
          <Input name='firstName' value={this.state.firstName} label='First Name:' chg={this.inputChanged} />
          <Input name='lastName' value={this.state.lastName} label='Last Name:' chg={this.inputChanged} />
          <Input name='email' value={this.state.email} label='Email:' inputType='email' chg={this.inputChanged} />
          <Input name='mobileNumber' value={this.state.mobileNumber} label='Cell Phone:' inputType='tel' chg={this.inputChanged} />
          <Input name='shippingAddress1' value={this.state.shippingAddress1} label='Address:' chg={this.inputChanged} />
          <Input name='shippingAddress2' value={this.state.shippingAddress2} label='Apt / Other (revise this text):' chg={this.inputChanged} />
          <Input name='city' value={this.state.city} label='City:' chg={this.inputChanged} />
          <Input name='zipcode' value={this.state.zipcode} label='ZIP Code:' inputType='number' chg={this.inputChanged} />

            <select name='state' onChange={(e)=>this.inputChanged(e)} value={this.state.state} className='form-input'>
            {Object.entries(states).map(([abb, name])=>
                          (<option key={abb} value={abb}>{name}</option>)
                      )}
          </select>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default UpdateProfile
