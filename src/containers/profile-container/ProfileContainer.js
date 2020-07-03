import React, { Component } from 'react'
import ViewOrEditProfile from '../../pages/profile/ViewOrEditProfile'
import './profile-container.styles.scss'

export class ProfileContainer extends Component {
  state = {
    user: []
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/user/profile')
  //   .then(res => res.json())
  //   .then(this.setState({ user }))
  // }


  render() {
    return (
      <div>
      <ViewOrEditProfile user={this.state.user} />
      </div>
    )
  }
}

export default ProfileContainer
