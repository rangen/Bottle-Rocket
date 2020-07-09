import React from 'react';
import Header from './containers/header/Header'
import MainContainer from './containers/main-container/MainContainer'
import Footer from './containers/footer/Footer'
import { withRouter } from 'react-router-dom'
import './App.css';
import api from './services/api'

class App extends React.PureComponent {
  state = {
    loggedIn: false,
    isAdmin: false,
    email: null,
    firstName: null,
    loginError: null
  }

  componentDidMount() {
    api.auth.autoLogin()
      .then(resp=>resp.json())
      .then(json=>this.checkLogin(json))

  }

  checkLogin = (json) => {
    if (json.expires) {  //setTimeout interval IF logged in (has expiry key)
      const expiresIn = Date.parse(json.expires) - Date.now()
      setTimeout(this.logout, expiresIn)
    }
    this.setState({
      loggedIn: json.loggedIn,
      isAdmin: json.isAdmin,
      email: json.email,
      firstName: json.firstName,
      logsOutAt: json.expires || null,
      loginError: json.error || null
    })
  }

  logout = (accountDestroyed=false) => {
    this.setState({
      loggedIn: false,
      isAdmin: false,
      email: null,
      firstName: null,
      logsOutAt: null,
      loginError: accountDestroyed ? 'Thanks for using BottleRocket!' : 'Your session timed out. Please login.'
    }, () => this.props.history.push('/signin'))
  }

  clearLoginErrors = () => {
    this.setState({
      loginError: null
    })
  }

  afterLogout = (json) => {
    this.checkLogin(json)
    this.props.history.push('/')
  }

  afterLogin = (json) => {
    this.checkLogin(json)
    if (json.loggedIn) {     //Only re-route on successful login, otherwise leave login component and re-render with errors
      this.props.history.push('/')
    }
  }

  afterDestroy = () => {
    this.logout(true)
  }

  render() {
    return (
      <div>
        <Header 
            loggedIn={this.state.loggedIn} 
            isAdmin={this.state.isAdmin}
            email={this.state.email}
            firstName={this.state.firstName}
        />
        <MainContainer 
          loggedIn={this.state.loggedIn}
          loginError={this.state.loginError}
          isAdmin={this.state.isAdmin}
          clearLoginError={this.clearLoginErrors}
          afterLogin={this.afterLogin}
          afterLogout={this.afterLogout}
          afterDestroy={this.afterDestroy}
          firstName={this.state.firstName}
        />
        <div className='space'>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
