import React from 'react';
import HomePage from './components/homepage/HomePage'
import Header from './components/header/Header'
import AdminPanel from './components/admin-panel/AdminPanel';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <AdminPanel />
      </div>
    );
  }
}

export default App;
