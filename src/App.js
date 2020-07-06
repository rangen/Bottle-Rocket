import React from 'react';
import Header from './components/header/Header'
import MainContainer from './containers/main-container/MainContainer'
import { withRouter } from 'react-router-dom'
import './App.css';

const rootURL = 'http://localhost:3000'

class App extends React.PureComponent {
  state = {
    loggedIn: false,
    isAdmin: false,
    email: null,
    firstName: null,
    loginError: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/autologin', {credentials: 'include'})
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

  logout = () => {
    this.setState({
      loggedIn: false,
      isAdmin: false,
      email: null,
      firstName: null,
      logsOutAt: null,
      loginError: 'Your session timed out. Please login.'
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
    this.setState({
      loggedIn: false,
      isAdmin: false,
      email: null,
      firstName: null
    })
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
        />
      </div>
    );
  }
}

export default withRouter(App);
