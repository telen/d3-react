import React, { Component } from 'react';
import Alphabet from './components/Alphabet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <svg width="100%" height="160">
          <Alphabet x="10" y="80" />
        </svg>
      </div>
    );
  }
}

export default App;
