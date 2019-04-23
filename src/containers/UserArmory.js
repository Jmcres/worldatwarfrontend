import React, { Component } from "react";
import WeaponCard from "../components/WeaponCard";
// import PlaneCard from "./PlaneCard";
import { Segment } from "semantic-ui-react";

export default class UserArmory extends Component {
  render() {
    console.log("userArmory", this.props);
    return (
      <Segment>
        <div className="armory">
          <div className="ui five column grid">
            <div className="row user-army-row">
              {this.props.armory.map(weapon => {
                return (
                  <WeaponCard
                    key={weapon.id}
                    {...weapon}
                    showDetails={this.props.showDetails}
                    addItemToCompare={this.props.addItemToCompare}
                    removeFromArmory={this.props.removeFromArmory}
                  />
                );
              })}
            </div>
            {/* {this.props.armory.map(plane => { return (
                          <PlaneCard key={plane.id} {...plane} checked removeFromArmory={this.props.removeFromArmory} /> )})} */}
          </div>
        </div>
      </Segment>
    );
  }
}
