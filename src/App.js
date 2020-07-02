import React from 'react';
import HomePage from './components/homepage/HomePage'
import Header from './components/header/Header'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
