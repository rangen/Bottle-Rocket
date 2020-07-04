import React, { Component } from 'react'
import ViewOrEditProfile from '../../pages/profile/ViewOrEditProfile'
import './profile-container.styles.scss'

export class ProfileContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  state = {

  }

  componentDidMount() {
    const request = async () => {
      const response = await fetch('http://localhost:3000/user/profile', {credentials: 'include'})
      const json = await response.json()
      this.setState({ user: json})
    }
    request();
  }

  handleDelete = () => {
    //gives an error but still kin of works, basically trying to both log out and delete user
    //if I just run a delete user, the cookies still recognize the person logged in
    //even though they dont exist in the DB anymore
    Promise.all(
      fetch('http://localhost:3000/logout', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          "accept": "application/json",
          "content-type": "application/json"
          }
      }), 
      fetch('http://localhost:3000/user/profile',{
        credentials: 'include',
        method: "DELETE"
      }))
      .then(console.log)
}


  render() {
    return (
      <div>
        <ViewOrEditProfile user={this.state.user} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default ProfileContainer
