import React from 'react';
import HomePage from './pages/homepage/HomePage'
import Header from './components/header/Header'
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'
import OffersPanel from './pages/offers/OffersPanel'
import WinesPanel from './pages/wines-panel/WinesPanel'
import { Route, Switch } from 'react-router-dom'
import './App.css';

const rootURL = 'http://localhost:3000'

class App extends React.Component {
  state = {
    adminSignedIn: true
  }

  handleSignOut = () => {
    this.setState({ adminSignedIn: false })
  }

  render() {
    return (
      <div>
        <Header adminSignedIn={this.state.adminSignedIn} handleSignOut={this.handleSignOut} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/offers' component={OffersPanel} />
          <Route path='/offers' component={OffersPanel} />
          <Route path='/wines' component={WinesPanel} />
        </Switch>
      </div>
    );
  }
}

export default App;
