import React from 'react';
import HomePage from './components/homepage/HomePage'
import Header from './components/header/Header'
import SignIn from './pages/sign-in/SignIn'
import SignOut from './pages/sign-out/SignOut'
import SignUp from './pages/sign-up/SignUp'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';

const rootURL = 'http://localhost:3000'

class App extends React.PureComponent {
  state = {
    loggedIn: false,
    isAdmin: false,
    email: null,
    firstName: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/autologin', {credentials: 'include'})
      .then(resp=>resp.json())
      .then(json=>this.checkLogin(json))
  }

  checkLogin = (json) => {
    this.setState({loggedIn: json.loggedIn, isAdmin: json.isAdmin, email: json.email, firstName: json.firstName})
  }

  afterLogout = (json) => {
    this.checkLogin(json)
    this.props.history.push('/')
  }

  afterLogin = (json) => {
    this.checkLogin(json)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Header 
            loggedIn={this.state.loggedIn} 
            email={this.state.email}
            firstName={this.state.firstName}
            isAdmin={this.state.isAdmin}
        />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' render={() =>(<SignIn afterLogin={this.afterLogin} />)} />
          <Route exact path='/signout' render={() =>(<SignOut afterLogout={this.afterLogout} />)} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
