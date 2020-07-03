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
        <MainContainer 
          afterLogin={this.afterLogin}
          afterLogout={this.afterLogout}
          isAdmin={this.state.isAdmin}
        />
      </div>
    );
  }
}

export default withRouter(App);
