import React, { Component } from 'react';


export  default class Login extends Component {


    
     

    render(){
        return (
            <div>                
                <div id="login">
                <form onSubmit={this.props.handleSubmit}>
                <input type="email" id="email" placeholder="Email" value={this.props.logEmail} onChange={this.props.handleChange} />
                <input type="password" id="password" placeholder="Password" value={this.props.logPassword} onChange={this.props.handleChange}/>
                <input type="submit" value="Submit" />
                </form>
                </div>
             </div>
        )
    }
}