import React, {Component} from 'react'
import WeaponCard from "../components/WeaponCard";
// import PlaneCard from "./PlaneCard";



export default class UserArmory extends Component {

   
    render(){
        console.log("userArmory", this.props)
        return (
          <div className="ui segment inverted olive User-Armory">
            {/* <div className="ui five column grid">
              <div className="row user-army-row"> */}
              {this.props.armory.map(weapon => { return (
                            <WeaponCard key={weapon.id} {...weapon}  showDetails={this.props.showDetails} addItemToCompare={this.props.addItemToCompare} removeFromArmory={this.props.removeFromArmory}  /> )})}
          
          
            {/* {this.props.armory.map(plane => { return (
                            <PlaneCard key={plane.id} {...plane} checked removeFromArmory={this.props.removeFromArmory} /> )})} */}
        

              </div>
              
          //   </div>
          // </div>
        );
      }
      
    };
