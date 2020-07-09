import React, { Component } from 'react'
// import Analytics from '../analytics/Analytics'
import './admin-panel.styles.scss'
// import SubscribedUsers from '../../containers/subscribed-users-container/SubscribedUsersContainer'
import { Route, Switch } from 'react-router-dom'
import SignOut from '../../pages/sign-out/SignOut'
import WinesPanel from '../../pages/wines-panel/WinesPanel'
import OffersPanel from '../../pages/offers-panel/OffersPanel'
import api from '../../services/api'

class AdminPanel extends Component {
  state = {
    users: [],
    offers: [],
    wines: [],
    dataFetchInProgress: false,
    dataNeedsUpdate: true
  }

  componentDidMount() {
    this.getNewData()
  }

  dataNeedsUpdate = () => {
    this.setState({
      dataNeedsUpdate: true
      }, ()=> this.getNewData()
    )
  }

  getNewData = () => {
    const { dataFetchInProgress, dataNeedsUpdate } = this.state

    if (!dataFetchInProgress && dataNeedsUpdate) {
      this.setState({
        dataFetchInProgress: true
      }, () => {
              api.admin.getData()
                .then(res => res.json())
                .then(json => {
                  this.setState({ 
                    offers: json.offers.data,
                    wines: json.wines.data,
                    users: json.users.data,
                    dataFetchInProgress: false,
                    dataNeedsUpdate: false
                    })
                  })
        })
    }  
  }

  render() {
    const { afterLogout } = this.props

    return (
      <Switch>
            <Route exact path='/signout' render={() =>(<SignOut afterLogout={afterLogout} />)} />
            <Route path='/wines' render={() => (<WinesPanel wines={this.state.wines} updateData={this.dataNeedsUpdate} />)} />
            <Route path='/offers' render={() => (<OffersPanel wines={this.state.wines} offers={this.state.offers} updateData={this.dataNeedsUpdate} />)} />
            {/* <Route path='/subscribedusers' component={OffersPanel} /> */}
      </Switch>
    )
  }
}

export default AdminPanel
