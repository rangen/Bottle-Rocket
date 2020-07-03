import React from 'react'
import SignIn from '../../pages/sign-in/SignIn'
import SignOut from '../../pages/sign-out/SignOut'
import SignUp from '../../pages/sign-up/SignUp'
import HomePage from '../../pages/homepage/HomePage'
import WinesPanel from '../../pages/wines-panel/WinesPanel'
import OffersPanel from '../../pages/offers-panel/OffersPanel'
import ProfileContainer from '../profile-container/ProfileContainer'
import EditProfile from '../../pages/edit-profile/EditProfile'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component  {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/users', {credentials: 'include'})
    .then(res => res.json())
    .then(json => {
      this.setState({ 
        users: json
      })
    })
  }


  render() {
    const { isAdmin, afterLogin, afterLogout } = this.props
    return (
      <div>
      <Switch>
        <Route exact path='/' render={() => <HomePage isAdmin={isAdmin}/>} />
        <Route exact path='/signin' render={() =>(<SignIn afterLogin={afterLogin} />)} />
        <Route exact path='/signout' render={() =>(<SignOut afterLogout={afterLogout} />)} />
        <Route exact path='/user/profile' component={ProfileContainer }/>
        <Route path='/user/profile/edit' component={EditProfile}/>
        <Route exact path='/signup' component={SignUp} />
        <Route path='/wines' component={WinesPanel} />
        <Route path='/offers' component={OffersPanel} />
        <Route path='/subscribedusers' component={OffersPanel} />
      </Switch>
      </div>
    )
  }
}

export default MainContainer
