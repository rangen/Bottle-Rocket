import React, { Component } from 'react'
import ProfileForm from '../../pages/profile/ProfileForm'
import api from '../../services/api'

export class ProfileContainer extends Component {
  state = {

  }

  componentDidMount() {
    api.user.show()
      .then(resp=>resp.json())
      .then(json=>this.setFields(json.user.data.attributes))
  
  }

  setFields = (user) => {
    this.setState(user)
  }
  
  handleDelete = () => {
    const config = {
                  method: "DELETE",
                  credentials: 'include'
    }
    api.user.destroy(config)
      .then(res=>this.props.afterDestroy)
      
    }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleEditSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: "PATCH",
      credentials: 'include',
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state)
    };

    api.user.update(config)
      .then(res => res.json())
      .then(console.log)
  }


  render() {
    return (
      <div>
        <ProfileForm 
          firstName={this.state.firstName}
          lastName={this.state.lastName} 
          email={this.state.email}
          mobileNumber={this.state.mobileNumber} 
          shippingAddress1={this.state.shippingAddress1} 
          shippingAddress2={this.state.shippingAddress2} 
          city={this.state.city} 
          state={this.state.state} 
          zipcode={this.state.zipcode}  
          handleDelete={this.handleDelete}
          handleEditSubmit={this.handleEditSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default ProfileContainer
