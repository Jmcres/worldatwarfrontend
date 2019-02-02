

import React, {Component} from 'react'
// import { Card, CardTitle } from 'react-materialize'



class TankCard extends Component {
    state = {
        compare: false,
    }

    preventTooMany = () => {
        if(this.state.compare.length > 2){
            alert("Only Two")
        }
    }
    
    handleInputChange =(event)=> {
      // console.log("checked")
      // console.log(event.target)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(value.length, "value")
        // console.log(target.checked.length, "target")
        // console.log(name, "name")
        this.setState({
          [name]: value
        });
      }
    render() {
        // console.log("tankCard state", this.state)
     return (
            <div className="ui column">
                        <div
                        className="ui card"
                        key={this.props.id}
                        
                        >
                        <div className="image">
                            <img alt="oh no!" src={this.props.img_url} onClick={()=> this.props.showDetails(this.props.id)} />
                        </div>
                        <div className="content">
                            <div className="header">
                            <h1>{this.props.name}</h1> 
                            {this.props.role} 
                            </div>

                            <div className="meta text-wrap">
                            <h3>{this.props.side}
                            <br></br>
                            {this.props.country}</h3>
                            </div>
                        </div>
                        <div className="extra content">
                            <h6> Firepower: {this.props.gun}</h6>
                            <h6>Ammo: {this.props.ammo}</h6>
                            <h6>Armor: {this.props.armor}</h6>
                        </div>
                        <label>
                            Compare:
                            <input
                                name="compare"
                                type="checkbox"
                                checked={this.state.compare}
                                onChange={this.handleInputChange} />
                            </label>
                        </div>
                        <button onClick={()=> this.props.removeFromArmory(this.props.id)}>X</button>
                        </div>
                        );
     }
}

export default TankCard