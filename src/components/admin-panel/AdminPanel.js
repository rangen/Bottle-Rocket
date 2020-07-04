import React, { Component } from 'react'
import Analytics from '../analytics/Analytics'
import './admin-panel.styles.scss'
import SubscribedUsers from '../../containers/subscribed-users-container/SubscribedUsersContainer'

class AdminPanel extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/admin/data', {credentials: 'include'})
    .then(res => res.json())
    .then(json => {
      this.setState({ 
        offers: json.offers,
        wines: json.wines,
        users: json.users.data
      })
    })
  }

  render() {
    return (
      <div>
    <h1>Current Subscribers: </h1>
    <SubscribedUsers users={this.state.users} />
    <div>
      <Analytics />
    </div>
      </div>
    )
  }
}

export default AdminPanel
