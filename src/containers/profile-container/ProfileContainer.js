import React, { Component } from 'react'
import ViewOrEditProfile from '../../pages/profile/ViewOrEditProfile'
import './profile-container.styles.scss'

export class ProfileContainer extends Component {
  state = {

  }

  componentDidMount() {
    const request = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/profile', {credentials: 'include'})
        const json = await response.json()
        this.assignState(json)
      } catch (err){
        console.log("error:", err)
      }
    }
    request();
  }

  assignState = (json) => {
    this.setState({ 
      firstName: json.user.data.attributes.firstName,
      lastName: json.user.data.attributes.lastName,
      email: json.user.data.attributes.email,
      mobileNumber: json.user.data.attributes.mobileNumber,
      shippingAddress1: json.user.data.attributes.shippingAddress1,
      shippingAddress2: json.user.data.attributes.shippingAddress2,
      city: json.user.data.attributes.city,
      state: json.user.data.attributes.state,
      zipcode: json.user.data.attributes.zipcode
    })
  }
  
  handleDelete = () => {
    //gives an error but still kind of works, basically trying to both log out and delete user
    //if I just run a delete user, the cookies still recognize the person logged in
    //even though they dont exist in the DB anymore
    Promise.all(
      fetch('http://localhost:3000/logout', {
        method: 'DELETE',
        credentials: 'include'
      }), 
      fetch('http://localhost:3000/user/profile',{
        credentials: 'include',
        method: "DELETE"
      }))
      .then(console.log)
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

    fetch('http://localhost:3000/user/profile', config)
      .then(res => res.json())
      .then(console.log)
  }


  render() {
    return (
      <div>
        <ViewOrEditProfile 
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
