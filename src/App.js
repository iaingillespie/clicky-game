import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Wrapper />
      </div>
    );
  }
}

export default App;
