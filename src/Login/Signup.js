import React, { Component, Fragment } from 'react';



export default class Signup extends Component{
    render(){
        return (
            <div>
                <div>
                   <div id="signup">
                   <form onSubmit={this.props.handleSubmit}>
                         <input type="text" name="firstInput" placeholder="First Name" value={this.props.firstInput} onChange={this.props.handleChange}/>
                         <input type="text" name="lastInput" placeholder="Last Name" value={this.props.lastInput} onChange={this.props.handleChange}/>
                         <input type="text" name="emailInput" placeholder="Email" value={this.props.signEmail} onChange={this.props.handleChange}/>
                     <input type="password" name="passwordInput" placeholder="Password" value={this.props.signPassword} onChange={this.props.handleChange}/>
                     <input type="password" name="confirmInput" placeholder="Confirm Password"value={this.props.confirmInput} onChange={this.props.handleChange}/>
                     <input type="submit" value="Submit" />
                     </form>
                </div>
                </div>
            </div>
        )
    }
}