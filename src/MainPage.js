import React, { Component } from 'react';
import HomePage from './HomePage'
// import LoginBox from './LoginBox'
// import RegisterBox from './RegisterBox'
import './App.css';
import LogReg from './Login/LogReg'

class MainPage extends Component {
  

  render() {
    return (
      <div className="App">
            <LogReg/>
            <HomePage />
      </div>
    );
  }
}

export default MainPage;
