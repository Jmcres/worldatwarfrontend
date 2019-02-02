import React, {Component} from 'react'
import TankCard from "./TankCard";
// import PlaneCard from "./PlaneCard";



export default class UserArmory extends Component {

//   state = {
//     compare: true,
// }

// handleInputChange =(event)=> {
//   // console.log("checked")
//   // console.log(event.target)
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     console.log(value, "checking")
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }
   
    render(){
        console.log("userArmory", this.props)
        return (
          <div className="ui segment inverted olive User-Armory">
            <div className="ui five column grid">
              <div className="row user-army-row">
              {this.props.armory.map(tank => { return (
                            <TankCard key={tank.id} {...tank} showDetails={this.props.showDetails}  removeFromArmory={this.props.removeFromArmory} /> )})}
          
            {/* {this.props.armory.map(plane => { return (
                            <PlaneCard key={plane.id} {...plane} removeFromArmory={this.props.removeFromArmory} /> )})} */}
        

              </div>
              <button>Lets Battle</button>
            </div>
          </div>
        );
      }
      
    };
