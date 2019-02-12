
import React, { Component } from 'react';
import UserContainer from './containers/UserContainer'
// import LoginBox from './LoginBox'
// import RegisterBox from './RegisterBox'
import './App.css';
// import Form from './Form'

class App extends Component {
  

  render() {
    return (
      <div className="App">
         <UserContainer />
      </div>
    );
  }
}

export default App;
