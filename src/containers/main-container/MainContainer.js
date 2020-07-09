import React from 'react'
import SignIn from '../../pages/sign-in/SignIn'
import SignOut from '../../pages/sign-out/SignOut'
import SignUp from '../../pages/sign-up/SignUp'
import UserPanel from '../user-panel/UserPanel'
import AdminPanel from '../admin-panel/AdminPanel'
import ProfileContainer from '../profile-panel/ProfilePanel'
import { Route, Switch } from 'react-router-dom'
class MainContainer extends React.Component  {
  
  render() {
    const { loggedIn, isAdmin, afterLogin, afterLogout, afterDestroy, loginError, clearLoginError, firstName } = this.props
    if (loggedIn) {
      if (isAdmin) {
        //Admin is logged in
        return (
        <>
          <AdminPanel afterLogout={afterLogout} />
        </>
        )
      } else {
        // SubscribedUser is logged in
        return (
          <>
            <UserPanel afterLogout={afterLogout} afterDestroy={afterDestroy} />
          </>
        )
      }
    } else {
      // No One is Logged In
      return (
          <>
          <Switch>
            <Route exact path='/signin' render={() =>(<SignIn error={loginError} clearError={clearLoginError} afterLogin={afterLogin} />)} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
          </>
      )
    }
  }
}

export default MainContainer
