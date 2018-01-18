import React, { Component } from 'react';
import Calculator from './Calculator.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Calculator</h1>
        </header>
        <p className="App-intro"></p>
        <Calculator />
      </div>
    );
  }
}

export default App;
