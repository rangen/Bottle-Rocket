import React, { PureComponent } from 'react'
import './profile-panel.styles.scss'
import Input from '../../components/input/input'
import states from '../../states'
import api from '../../services/api'


export class ProfilePanel extends PureComponent {

  state = {
    state: null,        //work-around as defaultValue of <select> is screw-y
    formDirty: false,
    updateInProgress: false
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
    
    if (!this.state.formDirty || this.state.updateInProgress) {
      return //avoid submit if form NOT DIRTY or already PATCHing
    }

    this.setState({
      updateInProgress: true
    })

    const values = new FormData(event.target)
    const config = {
      method: "PATCH",
      credentials: 'include',
      body: values
    };

    api.user.update(config)
      .then(res => res.json())
      .then(json=>this.handleUpdate(json.profile.data.attributes))    // need to error check in front and back onUpdate!
  }

  handleUpdate = (profile) => {
    this.setState({
      formDirty: false,
      updateInProgress: false
    }, this.props.afterUpdate(profile))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value,
      formDirty:        true
    })  
  }

  revert = () => {
    console.log('cancelled')
    //hook back to UserPanel default screen somehow
  }

  render() {
    const { firstName, lastName, email, mobileNumber, city, zipcode, state, shippingAddress1, shippingAddress2 } = this.props.profile
    const uIP = this.state.updateInProgress

    return (
      <div className='group'>
        <form onSubmit={(e) => this.handleEditSubmit(e)}>
          <Input 
            name='firstName' 
            defaultValue={firstName}
            label={'First Name'}
            type='text'
            prefilled
            disabled={uIP}
            handleChange={this.handleChange} 
          />
          <Input 
            name='lastName' 
            defaultValue={lastName}
            label={'Last Name'}
            type='text'
            prefilled
            disabled={uIP} 
            handleChange={this.handleChange} 
          />
          <Input 
            name='email' 
            defaultValue={email}
            label={'Email'} 
            type='email'
            prefilled
            disabled={uIP} 
            handleChange={this.handleChange} 
          />
          <Input 
            name='mobileNumber' 
            defaultValue={mobileNumber}
            label={'Mobile Number for SMS'} 
            type='tel'
            prefilled
            disabled={uIP} 
            handleChange={this.handleChange} 
          />
          <Input 
            name='shippingAddress1' 
            defaultValue={shippingAddress1}
            type='text'
            prefilled            
            disabled={uIP}
            label={'Delivery Address'} 
            handleChange={this.handleChange}
            />
          <Input 
            name='shippingAddress2' 
            defaultValue={shippingAddress2}
            type='text'
            prefilled
            disabled={uIP}
            label={'Apt / Unit / Other (revise!)'}
            handleChange={this.handleChange} 
          />
          <Input 
            name='city' 
            defaultValue={city}
            type='text'
            prefilled
            disabled={uIP}
            label={'City'} 
            handleChange={this.handleChange} 
          />
          <Input 
            name='zipcode' 
            defaultValue={zipcode}
            type='text'
            prefilled
            disabled={uIP}
            label={'ZIP'} 
            handleChange={this.handleChange} 
          />

            <select
              className='browser-default' 
              name='state'
              disabled={uIP} 
              onChange={this.handleChange}
              value={this.state.state || state}  
            >
            {Object.entries(states).map(([abb, name]) => (<option key={abb} value={abb}>{name}</option>))}
            </select>
          <button disabled={!this.state.formDirty} type='submit'>{this.state.formDirty ? 'Update Profile' : 'Profile Saved'}</button>
          <button 
            disabled={uIP}
            onClick={this.revert}>
          Cancel
          </button>
          <button
            disabled={uIP}
            onClick={this.handleDelete}>
          Delete Account
          </button>
        </form>
      </div>
    )
  }
}

export default ProfilePanel

