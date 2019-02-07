import React, { Component, Fragment } from 'react';
import Login from './Login'
import Signup from './Signup'
// import { Redirect } from 'react-router-dom'


export default class LogReg extends Component {

    state={ // consider moving this down
        signup: false,
        login: true,
        signEmail: "",
        signPassword:"",
        confirmInput:"",
        firstInput:"",
        lastInput:"",
        logEmail: "",
        logPassword:"",
    }

    handleSubmit= (event) => {
        console.log("submitting")
        event.preventDefault();
      }
    

     handleChange = (event) => {
        console.log("typing")
         console.log(event.target)
        //  console.log(event.target.value)
         
         const target = event.target;
         const value = target.value;
         const name = target.name;

        this.setState({[name]: value});
     }


    switch = (word) => {
        console.log("switching", word, this.state.signup, this.state.login )
        if( word === 'signup'){
           return this.setState({ 
                signup: true,
                login: false
            })
        } else {
           return this.setState({
                signup: false,
                login: true
                })
            }
        }
    
    render(){
        return (
        <div>
                    {this.state.signup ? <Signup handleSubmit={this.handleSubmit} handleChange={this.handleChange} emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput} confirmInput={this.state.confirmInput} firstInput={this.state.firstInput} lastInput={this.state.lastInput}/> : null}
                    {this.state.login?  <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput}/> : null}
            <div id="buttons">
                 <button id="signupButton" onClick={() => this.switch("signup")} className={this.state.signup ? "yellow":"blue"}>Sign In</button>
                 <button id="loginButton" onClick={() => this.switch("login")} className={this.state.login ? "yellow":"blue"}> Login</button>
             </div>
        </div>
        )
    }

}


