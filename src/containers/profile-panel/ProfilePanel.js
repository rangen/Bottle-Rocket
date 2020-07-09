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
      <div className='profile-container'>
        <form onSubmit={(e) => this.handleEditSubmit(e)}>
          <div className='row'>
            <div className='col s12'>
              <Input 
                name='mobileNumber' 
                defaultValue={mobileNumber}
                label={'Mobile Number for SMS'} 
                type='tel'
                autoFocus
                classOverRide='input-field col s6'
                icon='phone_android'
                prefilled
                disabled={uIP} 
                handleChange={this.handleChange} 
              />
              <Input 
                name='email' 
                defaultValue={email}
                label={'Email'} 
                type='email'
                classOverRide='input-field col s6'
                prefilled
                disabled={uIP} 
                handleChange={this.handleChange} 
              />
              <Input 
                name='firstName' 
                defaultValue={firstName}
                label={'First Name'}
                type='text'
                icon='person'
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
                name='shippingAddress1' 
                defaultValue={shippingAddress1}
                type='text'
                prefilled            
                disabled={uIP}
                icon='local_shipping'
                label={'Delivery Address'} 
                handleChange={this.handleChange}
                />
              <Input 
                name='shippingAddress2' 
                defaultValue={shippingAddress2}
                type='text'
                prefilled
                disabled={uIP}
                label={'Apartment / Unit / Other'}
                handleChange={this.handleChange} 
              />
              <Input 
                name='city' 
                defaultValue={city}
                type='text'
                prefilled
                disabled={uIP}
                classOverRide='input-field col s4 offset-s1'
                label={'City'} 
                handleChange={this.handleChange} 
              />
              <div className='input-field col s2'>
                <select
                  className='browser-default' 
                  name='state'
                  disabled={uIP} 
                  onChange={this.handleChange}
                  value={this.state.state || state}  
                >
                {Object.entries(states).map(([abb, name]) => (<option key={abb} value={abb}>{abb}</option>))}
                </select>
              </div>
              <Input 
                name='zipcode' 
                defaultValue={zipcode}
                type='text'
                prefilled
                classOverRide='input-field col s3'
                disabled={uIP}
                label={'ZIP'} 
                handleChange={this.handleChange} 
              />
              <div className='buttons'>
                <button 
                  disabled={uIP}
                  className="btn waves-effect waves-light lighten-2"
                  onClick={this.revert}>
                Cancel
                </button>
                <button 
                  disabled={!this.state.formDirty}
                  className="btn waves-effect waves-light" 
                  type='submit'>
                    {this.state.formDirty ? 'Update Profile' : 'Profile Saved'}
                  </button>
                <button
                className='btn red lighten-1'
                  disabled={uIP}
                  onClick={this.handleDelete}>
                Delete Account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ProfilePanel

