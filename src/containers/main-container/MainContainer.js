import React from 'react'
import SignIn from '../../pages/sign-in/SignIn'
import SignOut from '../../pages/sign-out/SignOut'
import SignUp from '../../pages/sign-up/SignUp'
import HomePage from '../../pages/homepage/HomePage'
import AdminPanel from '../../components/admin-panel/AdminPanel'
import ProfileContainer from '../profile-container/ProfileContainer'
// import StripeButton from '../../components/stripe-button/StripeButton'
import { Route, Switch } from 'react-router-dom'
class MainContainer extends React.Component  {
  
  render() {
    const { loggedIn, isAdmin, afterLogin, afterLogout, afterDestroy, loginError, clearLoginError, firstName } = this.props

    if (loggedIn) {
      if (isAdmin) {
        //Admin is logged in
        return (
        <>
        <h3>{`Welcome ${firstName}(Admin)!`}</h3>
          <AdminPanel afterLogout={afterLogout} />
        </>
        )
      } else {
        // SubscribedUser is logged in
        return (
          <>
            <Switch>
              <Route exact path='/' render={() => <HomePage isAdmin={isAdmin}/>} />
              <Route exact path='/signout' render={() =>(<SignOut afterLogout={afterLogout} />)} />
              <Route path='/user/profile' render={() =>(<ProfileContainer afterDestroy={afterDestroy} />)} />
            </Switch>
          </>
        )
      }
    } else {
      // No One is Logged In
      return (
          <>(need splash screen for app  i.e. HOW BOTTLEROCKET WORKS)
          <div className='group'>
          </div>
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
