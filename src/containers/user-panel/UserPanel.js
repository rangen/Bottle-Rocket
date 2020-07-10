import React, { Component } from 'react'
import './user-panel.styles.scss'
import { Route, Switch } from 'react-router-dom'
import SignOut from '../../pages/sign-out/SignOut'
import ProfilePanel from '../../containers/profile-panel/ProfilePanel'
import About from '../../components/about/About'
import api from '../../services/api'

class UserPanel extends Component {
  state = {
    profile: {},
    trans: [],
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

  afterUpdate = (profile) => {
    this.setState({
      profile: profile
    }, this.props.afterUpdate(profile.firstName, profile.email))
  }

  getNewData = () => {
    const { dataFetchInProgress, dataNeedsUpdate } = this.state

    if (!dataFetchInProgress && dataNeedsUpdate) {
      this.setState({
        dataFetchInProgress: true
      }, () => {
              api.user.getData()
                .then(res => res.json())            //check for random fucking errors when time
                .then(json => {
                  console.log(json)
                  this.setState({ 
                    profile: json.profile.data.attributes,
                    trans: json.transactions.data,
                    dataFetchInProgress: false,
                    dataNeedsUpdate: false
                    })
                  })
        })
    }  
  }

  render() {
    const { afterLogout, afterDestroy } = this.props

    return (
      <div>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/signout' render={() =>(<SignOut afterLogout={afterLogout} />)} />
          {/* <Route path='/transactions' render={() => (<WinesPanel wines={this.state.wines} updateData={this.dataNeedsUpdate} />)} /> */}
          <Route path='/profile' render={() => (<ProfilePanel profile={this.state.profile} afterUpdate={this.afterUpdate} afterDestroy={afterDestroy} updateData={this.dataNeedsUpdate} />)} />
        </Switch>
      </div>
    )
  }
}

export default UserPanel
