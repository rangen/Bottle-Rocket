import React, { Component } from 'react'
import Input from '../../components/input/input'
import states from '../../states'
import './edit-profile.styles.scss'

class EditProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    shippingAddress1: "",
    shippingAddress2: "",
    city: "",
    state: "",
    zipcode: ""
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleEditSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: "PATCH",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "credentials": 'include'
      },
      body: JSON.stringify(this.state)
    };

    fetch('http://localhost:3000/user/profile', config)
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
      <h1>Edit Profile</h1>
        <form onSubmit={(event) => this.handleEditSubmit(event)}>
          <Input 
            name='firstName' 
            value={this.state.firstName} 
            label='First Name:' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='lastName' 
            value={this.state.lastName} 
            label='Last Name:' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='email' 
            value={this.state.email} 
            label='Email:' 
            inputType='email' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='password' 
            value={this.state.password} 
            label='Password (consider alternate method):' 
            inputType='password' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='mobileNumber' 
            value={this.state.mobileNumber} 
            label='Cell Phone:' 
            inputType='tel' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='shippingAddress1' 
            value={this.state.shippingAddress1} 
            label='Address:' 
            chg={this.handleInputChange}
          />
          <Input 
            name='shippingAddress2' 
            value={this.state.shippingAddress2} 
            label='Apt / Other (revise this text):' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='city' 
            value={this.state.city} 
            label='City:' 
            chg={this.handleInputChange} 
          />
          <Input 
            name='zipcode' 
            value={this.state.zipcode} 
            label='ZIP Code:' 
            inputType='number' 
            chg={this.handleInputChange} 
          />

            <select 
              name='state' 
              onChange={(e)=>this.handleInputChange(e)} 
              value={this.state.state} 
              className='form-input'
            >
            {Object.entries(states).map(([abb, name]) => (<option key={abb} value={abb}>{name}</option>))}
            </select>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default EditProfile
