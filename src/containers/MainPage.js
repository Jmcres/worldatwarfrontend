import React, { Component } from "react";
import WeaponPage from "./WeaponPage";
// import LoginBox from './LoginBox'
// import RegisterBox from './RegisterBox'
// import UserProfile from "./UserProfile";
import WeaponForm from "../components/WeaponForm";
import NAV from "../components/NAV";
import { Header, Image, Message, Grid, Segment } from "semantic-ui-react";

class MainPage extends Component {
  state = {
    weapons: [],
    // tanks:[],
    // planes:[],
    formHidden: true
  };

  toggleFormHide = () => {
    // console.log("Where you be Hiding Form");
    this.setState({ formHidden: false });
  };

  formBack = () => {
    this.setState({ formHidden: true });
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/weapons")
      .then(r => r.json())
      .then(weapons => {
        const updatedWeapons = weapons.map((weapon, index) => {
          return { ...weapon, order: index };
        });
        this.setState({
          weapons: updatedWeapons
        });
      });
  }

  render() {
    // console.log(
    //   "State in MainPage",
    //   this.state,
    //   "currentUser",
    //   this.props.currentUser
    // );
    // const tankArray = this.state.weapons.filter(weapon => weapon.weaponsystem === "tank")
    // console.log(planeArray)
    return (
      <Segment>
        <NAV toggleFormHide={this.toggleFormHide} />
        {/* <UserProfile currentUser={this.props.currentUser} /> */}
        {!this.state.formHidden ? (
          <WeaponForm
            addNewWeaponToWeapons={this.addNewWeaponToWeapons}
            formBack={this.formBack}
            weapons={this.state.weapons}
          />
        ) : (
          <div className="mainpage">
            <WeaponPage
              weapons={this.state.weapons}
              currentUser={this.props.currentUser}
              seperateWeaponsArray={this.seperateWeaponsArray}
              toggleFormHide={this.toggleFormHide}
              formBack={this.formBack}
              tanks={this.state.weapons.filter(
                weapon => weapon.weaponsystem === "tank"
              )}
              planes={this.state.weapons.filter(
                weapon => weapon.weaponsystem === "plane"
              )}
            />
          </div>
        )}
      </Segment>
    );
  }
}

export default MainPage;
