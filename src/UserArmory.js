import React, {Component} from 'react'
import TankCard from "./TankCard";
// import PlaneCard from "./PlaneCard";



export default class UserArmory extends Component {

   
    render(){
        console.log("userArmory", this.props.armory.length)
        return (
          <div className="ui segment inverted olive User-Armory">
            <div className="ui five column grid">
              <div className="row user-army-row">
              {this.props.armory.map(tank => { return (
                            <TankCard key={tank.id} {...tank}  showDetails={this.props.showDetails} addItemToCompare={this.props.addItemToCompare} removeFromArmory={this.props.removeFromArmory}  /> )})}
          
          
            {/* {this.props.armory.map(plane => { return (
                            <PlaneCard key={plane.id} {...plane} checked removeFromArmory={this.props.removeFromArmory} /> )})} */}
        

              </div>
              
            </div>
          </div>
        );
      }
      
    };
