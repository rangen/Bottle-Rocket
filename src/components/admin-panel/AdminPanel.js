import React, { Component } from 'react'
import Analytics from '../analytics/Analytics'
import './admin-panel.styles.scss'

export class AdminPanel extends Component {
  state = {

  }

  componentDidMount() {
    fetch('http://localhost:3000/admin/data')
    .then(res => res.json())
    .then(json => {
      this.setState({ 
        offers: json.offers,
        wines: json.wines,
        users: json.users
      })
    })
  }

  render() {
    return (
      <div>
    <h1>Current Subscribers: place holder</h1>
    <div>
      <Analytics />
    </div>
      </div>
    )
  }
}

export default AdminPanel
