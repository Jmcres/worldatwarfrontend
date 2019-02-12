import React, {Component} from 'react'
import MainPage from './MainPage'
import Login from '../Login/Login'
import Signup from '../Login/Signup'


export default class UserContainer extends Component {
    state={ // consider moving this down
        currentUser: {},
        signup: false,
        login: true,
        signEmail: "",
        signPassword:"",
        confirmInput:"",
        firstInput:"",
        lastInput:"",
        logEmail: "",
        logPassword:"",
        loggedIn: false
    }

    handleSubmit= (event) => {
        console.log("submitting")
        event.preventDefault();
        this.setState({ loggedIn: true})
        fetch('http://localhost:3000/api/v1/users')
        .then(response => response.json())
        .then(userList => {
            const foundUser = userList.find(user => user.username === this.state.logEmail && user.password === this.state.logPassword)
            this.setState({
                currentUser: foundUser
            })
        }
        )
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
        console.log("UserContainer", this.state)
        const logIn = 
        <div>
                    {this.state.signup ? <Signup handleSubmit={this.handleSubmit} handleChange={this.handleChange} emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput} confirmInput={this.state.confirmInput} firstInput={this.state.firstInput} lastInput={this.state.lastInput}/> : null}
                    {this.state.login?  <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput}/> : null}
            <div id="buttons">
                 <button id="signupButton" onClick={() => this.switch("signup")} className={this.state.signup ? "yellow":"blue"}>Sign Up</button>
                 <button id="loginButton" onClick={() => this.switch("login")} className={this.state.login ? "yellow":"blue"}> Login</button>
             </div>
        </div>
        return this.state.loggedIn ? <MainPage currentUser={this.state.currentUser} /> : logIn 
    }
}