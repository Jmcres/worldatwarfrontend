import React, { Component } from 'react';



export  default class Login extends Component {

    
    
     

    render(){
        return (
            <div>                
                <div id="login">
                <form onSubmit={this.props.handleSubmit}>
                <input type="text" id="username" name="username" placeholder="Username" value={this.props.username} onChange={this.props.handleChange} />
                <input type="password" id="password" name="password" placeholder="Password" value={this.props.password} onChange={this.props.handleChange}/>
                <input type="submit" value="Submit" />
                </form>
                </div>
             </div>
        )
    }
}