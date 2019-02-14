// import React, {Component} from 'react'
// // import MainPage from './MainPage'
// // import Login from '../Login/Login'
// // import Signup from '../Login/Signup'


// export default class UserContainer extends Component {
//     state={ // consider moving this down
//         // currentUser: {},
//         // users: [],
//         signup: false,
//         login: true,
//         // signEmail: "",
//         // signPassword:"",
//         // confirmInput:"",
//         // firstInput:"",
//         // lastInput:"",
//         // username: "",
//         // password:"",
//         // loggedIn: false
//     }
    

//     // componentDidMount(){
//     //     fetch('http://localhost:3000/api/v1/users')
//     //     .then(response => response.json())
//     //     .then(userList => this.setState({
//     //         users: userList,
//     //                }))
//     //         }


//     // handleSubmit= (event) => {
//     //     console.log("submitting", event.target)
//     //     event.preventDefault();
//     //     // this.setState({ loggedIn: true})
//     //     fetch('http://localhost:3000/api/v1/users')
//     //     .then(response => response.json())
//     //     .then(userList => {
//     //         // console.log(userList)
//     //         const foundUser = userList.find(user => { return (user.username === this.state.logEmail) && (user.password === this.state.logPassword)})
//     //         console.log("foundUser", foundUser)
//     //         this.setState({
//     //             currentUser: foundUser,
//     //         })
//     //     })
//     //     }

//     // handleSubmit = (event) => {
//     //     // console.log('users', event.target.value)
//     //         event.preventDefault();
//     //         // if(this.state.users.length > 0 ){
//     //         // let foundUser = this.state.users.find(user => user.username === this.state.logEmail && user.password === this.state.logPassword)
//     //          const foundUser = this.state.users.find(user => user.username === this.state.username && user.password === this.state.password)
//     //         //         console.log("foundUser", foundUser)
//     //             if(foundUser !== undefined){
//     //                 this.setState({
//     //                     currentUser: foundUser,
//     //                     loggedIn: true,
//     //                 })
//     //                 } else { alert("Invalid Password or Username")}
//     //     }

    
//         // addUser = (event) => {
//         //     const target = event.target;
//         //     const value = target.value;
//         //     const name = target.name;
//         //     event.preventDefault()
//         //     // console.log(event.target)
//         //     fetch("http://localhost:3000/api/v1/users", {
//         //         method: "POST",
//         //         headers: { 
//         //             "Content-Type": "application/json",
//         //             "Accept": "application/json"
//         //         },
//         //         body: JSON.stringify({ [name]: value})
//         //     })
//         //     .then(response  => response.json())
//         //         .then(newUser => console.log(newUser))
//         //  }

//     //  handleChange = (event) => {
//     //     // console.log("typing")
//     //     //  console.log(event.target)
//     //     //  console.log(event.target.value)
         
//     //      const target = event.target;
//     //      const value = target.value;
//     //      const name = target.name;

//     //     this.setState({[name]: value});
//     //  }


//     // switch = (word) => {
//     //     // console.log("switching", word, this.state.signup, this.state.login )
//     //     if( word === 'signup'){
//     //        return this.setState({ 
//     //             signup: true,
//     //             login: false
//     //         })
//     //     } else {
//     //        return this.setState({
//     //             signup: false,
//     //             login: true
//     //             })
//     //         }
//     //     }
    
//     // render(){
//     //     // console.log("UserContainer", this.state)
//     //     const logIn = 
//     //     <div>
//     //                 {/* emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput} confirmInput={this.state.confirmInput} firstInput={this.state.firstInput} lastInput={this.state.lastInput}/> : null} */}
//     //                 {this.state.signup ? <Signup   /> : null}
//     //                 {this.state.login?  <Login handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} username={this.props.username}  password={this.props.password}/> : null}
//     //         <div id="buttons">
//     //              <button id="signupButton" onClick={() => this.switch("signup")} className={this.state.signup ? "yellow":"blue"}>Sign Up</button>
//     //              <button id="loginButton" onClick={() => this.switch("login")} className={this.state.login ? "yellow":"blue"}> Login</button>
//     //          </div>
//     //     </div>
//     //     return this.state.loggedIn ? <MainPage currentUser={this.props.currentUser} /> : logIn 
//     // }
// }