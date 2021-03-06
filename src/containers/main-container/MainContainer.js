import React from 'react'
import SignIn from '../../pages/sign-in/SignIn'
import SignUp from '../../pages/sign-up/SignUp'
import UserPanel from '../user-panel/UserPanel'
import AdminPanel from '../admin-panel/AdminPanel'
import About from '../../components/about/About'
import { Route, Switch } from 'react-router-dom'
class MainContainer extends React.Component  {
  
  render() {
    const { loggedIn, isAdmin, afterLogin, afterLogout, afterDestroy, afterUpdate, loginError, clearLoginError } = this.props
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
            <UserPanel afterLogout={afterLogout} afterUpdate={afterUpdate} afterDestroy={afterDestroy} />
          </>
        )
      }
    } else {
      // No One is Logged In
      return (
          <>
          <Switch>
            <Route exact path='/' render={() => <About loggedIn={loggedIn} />} />
            <Route exact path='/signin' render={() =>(<SignIn error={loginError} clearError={clearLoginError} afterLogin={afterLogin} />)} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
          </>
      )
    }
  }
}

export default MainContainer
