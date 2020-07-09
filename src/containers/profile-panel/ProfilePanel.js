import React, { PureComponent } from 'react'
import './profile-panel.styles.scss'
import Input from '../../components/input/input'
import states from '../../states'
import api from '../../services/api'


export class ProfilePanel extends PureComponent {

  state = {
    state: null        //work-around as defaultValue of <select> is screw-y
  }
  handleDelete = () => {
    const config = {
                  method: "DELETE",
                  credentials: 'include'
    }
    api.user.destroy(config)
      .then(()=>this.props.afterDestroy())  //check for successful delete!
      
    }

  handleEditSubmit = (event) => {
    event.preventDefault();
    
    const values = new FormData(event.target)
    
    const config = {
      method: "PATCH",
      credentials: 'include',
      body: values
    };

    api.user.update(config)
      .then(res => res.json())
      .then(console.log)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })  
  }

  revert = () => {
    console.log('cancelled')
    //hook back to UserPanel default screen somehow
  }

  render() {
    const { firstName, lastName, email, mobileNumber, city, zipcode, state, shippingAddress1, shippingAddress2 } = this.props.profile
    return (
      <div className='group'>
        <form onSubmit={(e) => this.handleEditSubmit(e)}>
          <Input 
            name='firstName' 
            defaultValue={firstName}
            label={'First Name'}
            type='text'
            prefilled
            handleChange={this.handleChange} 
          />
          <Input 
            name='lastName' 
            defaultValue={lastName}
            label={'Last Name'}
            type='text'
            prefilled 
            handleChange={this.handleChange} 
          />
          <Input 
            name='email' 
            defaultValue={email}
            label={'Email'} 
            type='email'
            prefilled 
            handleChange={this.handleChange} 
          />
          <Input 
            name='mobileNumber' 
            defaultValue={mobileNumber}
            label={'Mobile Number for SMS'} 
            type='tel'
            prefilled 
            handleChange={this.handleChange} 
          />
          <Input 
            name='shippingAddress1' 
            defaultValue={shippingAddress1}
            type='text'
            prefilled
            label={'Delivery Address'} 
            handleChange={this.handleChange}
            />
          <Input 
            name='shippingAddress2' 
            defaultValue={shippingAddress2}
            type='text'
            prefilled
            label={'Apt / Unit / Other (revise!)'}
            handleChange={this.handleChange} 
          />
          <Input 
            name='city' 
            defaultValue={city}
            type='text'
            prefilled
            label={'City'} 
            handleChange={this.handleChange} 
          />
          <Input 
            name='zipcode' 
            defaultValue={zipcode}
            type='text'
            prefilled
            label={'ZIP'} 
            handleChange={this.handleChange} 
          />

            <select
              className='browser-default' 
              name='state' 
              onChange={this.handleChange}
              value={this.state.state || state}  
            >
            {Object.entries(states).map(([abb, name]) => (<option key={abb} value={abb}>{name}</option>))}
            </select>
          <input type='submit' />
        </form>
          <button onClick={this.revert}>Cancel</button>
          <button onClick={this.handleDelete}>Delete Profile</button>
      </div>
    )
  }
}

export default ProfilePanel

