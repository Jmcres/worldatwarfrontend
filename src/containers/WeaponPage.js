import React, { Component } from "react";
import TankCollection from "./TankCollection";
import PlaneCollection from "./PlaneCollection";
import UserArmory from "./UserArmory";
import SearchBar from "../components/SearchBar";
import ItemSpecs from "../components/ItemSpecs";
import Compare from "./Compare";
import Popup from "../components/Popup";
// import UserProfile from './UserProfile'
// import Form from './Form'
import { Segment, Grid, Container, Table, Message } from "semantic-ui-react";

export default class WeaponPage extends Component {
  state = {
    armory: [],
    clickedTank: null,
    clickedItem: null,
    inputValue: "",
    activeIndex: 0,
    compareItems: [],
    itemWinner: [],
    isHidden: true
  };

  //

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
    // } else { this.setState({
    //     isHidden: true
    //   })
  };

  toggleFormHidden = () => {
    console.log("rendering Form");
    this.setState({
      formHidden: !this.state.formHidden,
      compareItems: []
    });
    // } else { this.setState({
    //     isHidden: true
    //   })
  };

  toggleClose = () => {
    this.setState({
      isHidden: true,
      compareItems: []
    });
  };

  letsBattle = () => {
    console.log("Battle Time", this.state.compareItems);

    const scoreOne = Math.round(
      ((((this.state.compareItems[0].firepowergun * 0.75 +
        this.state.compareItems[0].firepowerammo * 0.25) /
        2) *
        0.2 +
        this.state.compareItems[0].speedscore * 0.2 +
        this.state.compareItems[0].health * 0.2 +
        this.state.compareItems[0].protection * 0.2 +
        this.state.compareItems[0].rangescore * 0.2) /
        5) *
        100
    );

    const scoreTwo = Math.round(
      ((((this.state.compareItems[1].firepowergun * 0.75 +
        this.state.compareItems[1].firepowerammo * 0.25) /
        2) *
        0.2 +
        this.state.compareItems[1].speedscore * 0.2 +
        this.state.compareItems[1].health * 0.2 +
        this.state.compareItems[1].protection * 0.2 +
        this.state.compareItems[1].rangescore * 0.2) /
        5) *
        100
    );

    if (this.state.compareItems.length === 2) {
      if (scoreOne > scoreTwo) {
        return this.setState({
          itemWinner: this.state.compareItems[0]
        });

        //    alert(this.state.compareItems[0].name + " " + "Wins")
      } else if (scoreOne < scoreTwo) {
        return this.setState({
          itemWinner: this.state.compareItems[1]
        });
      } else {
        return this.setState({
          itemWinner: null
        });
      }
      // alert( this.state.compareItems[1].name + " " + "Wins")
    } else {
      alert("YOU CANT BATTLE YOURSELF");
    } //You can battle your slef at least on planes
  };

  addItemToCompare = itemId => {
    const foundCompare = this.state.armory.find(item => item.id === itemId);
    // console.log("foundCompare", foundCompare.type, this.state.compareItems.type)
    if (this.state.compareItems.length === 0) {
      this.setState({
        compareItems: [...this.state.compareItems, foundCompare]
      });
    } else if (
      this.state.compareItems.length === 1 &&
      this.state.compareItems[0].weaponsystem === foundCompare.weaponsystem &&
      this.state.compareItems[0].id !== foundCompare.id
    ) {
      this.setState({
        compareItems: [...this.state.compareItems, foundCompare]
      });
    } else if (
      this.state.compareItems.length === 1 &&
      this.state.compareItems[0].weaponsystem !== foundCompare.weaponsystem
    ) {
      alert("You can only compare weapons of the same type");
    } else if (
      this.state.compareItems.length === 1 &&
      this.state.compareItems[0].weaponsystem === foundCompare.weaponsystem &&
      this.state.compareItems[0].id === foundCompare.id
    ) {
      alert("You Cannot Compare the same Weapon System");
    } else {
      alert("You Can Only Compare Two Items");
    }
  };

  compareBack = itemId => {
    // console.log("firing")
    const foundCompareTwo = this.state.compareItems.find(
      item => item.id === itemId
    );
    this.setState({
      compareItems: this.state.compareItems.filter(item => {
        return item !== foundCompareTwo;
      })
    });
  };

  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterArmory = () =>
    this.state.armory.filter(item => {
      return (
        item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        item.weaponsystem
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.side.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        item.country.toLowerCase().includes(this.state.inputValue.toLowerCase())
      );
    });

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
      .then(response => response.json())
      .then(userArmory =>
        this.setState({
          armory: userArmory.weapons
        })
      );
  }

  addTankArmory = tankId => {
    // console.log("firing")
    const foundTank = this.props.tanks.find(tank => tank.id === tankId);
    const preventDoubles = this.state.armory.find(tank => tank.id === tankId);
    if (!preventDoubles) {
      this.setState({
        armory: [...this.state.armory, foundTank]
      });

      fetch("http://localhost:3000/api/v1/user_weapons/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id: this.props.currentUser.id,
          weapon_id: tankId
        })
      });
    }
  };

  addPlaneArmory = planeId => {
    // console.log("firing")
    const foundPlane = this.props.planes.find(plane => plane.id === planeId);
    const preventDoubles = this.state.armory.find(
      plane => plane.id === planeId
    );
    if (!preventDoubles) {
      this.setState({
        armory: [...this.state.armory, foundPlane]
      });

      fetch("http://localhost:3000/api/v1/user_weapons/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user_id: this.props.currentUser.id,
          weapon_id: planeId
        })
      });
    }
  };

  deleteWeapon = itemId => {
    const deleteWeapon = this.state.armory.find(item => item.id);
    console.log("user weapons", deleteWeapon);
    // const deleteWeapon = userWeapons.find(item => item.id === itemId);
    // console.log("delete weapon", deleteWeapon);
    const updateArmory = this.state.armory.filter(item => {
      return item.id !== itemId;
    });
    console.log("update Armory", updateArmory);
    if (deleteWeapon) {
      this.setState({
        armory: updateArmory
      });

      fetch(`http://localhost:3000/api/v1/user_weapons/${deleteWeapon.id}`, {
        method: "DELETE"
      });
    }
  };

  showDetails = itemId => {
    // console.log("showing")
    const clickedItem = this.state.armory.find(item => item.id === itemId);
    this.setState({
      clickedItem: clickedItem
    });
  };

  handleClick = () => {
    // console.log("firing")
    this.setState({
      clickedItem: null
    });
  };

  render() {
    console.log("armory", this.state.armory);
    console.log("props in homepage", this.props.weapons.order);
    // console.log("itermWinner in homepage", this.state.itemWinner)

    return (
      <div>
        <SearchBar
          toggleFormHide={this.props.toggleFormHide}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          toggleFormHidden={this.toggleFormHidden}
        />
        <div className="thumbnail" style={thumbnailStyle}>
          <div>
            {!this.state.isHidden ? (
              <Popup
                toggleClose={this.toggleClose}
                itemWinner={this.state.itemWinner}
              />
            ) : (
              <div>
                <Compare
                  toggleHidden={this.toggleHidden}
                  compareItems={this.state.compareItems}
                  compareBack={this.compareBack}
                  letsBattle={this.letsBattle}
                />
                <UserArmory
                  armory={this.filterArmory()}
                  addItemToCompare={this.addItemToCompare}
                  showDetails={this.showDetails}
                  removeFromArmory={this.deleteWeapon}
                  weapons={this.props.weapons}
                  tanks={this.props.tanks}
                  planes={this.props.planes}
                />
                {this.state.clickedItem ? (
                  <ItemSpecs
                    {...this.state.clickedItem}
                    handleClick={this.handleClick}
                    weapons={this.props.weapons}
                  />
                ) : (
                  <div>
                    <Segment>
                      <Grid columns={2} divided>
                        <Grid.Row>
                          <Grid.Column width={8}>
                            <Container>
                              <Table color="grey" inverted>
                                <Message color="brown">
                                  <h1>TANKS AT WAR</h1>
                                </Message>
                              </Table>
                              <TankCollection
                                tanks={this.props.tanks}
                                addToArmory={this.addTankArmory}
                              />
                            </Container>
                          </Grid.Column>

                          <Grid.Column width={8}>
                            <Container>
                              <Table color="grey" inverted>
                                <Message color="blue">
                                  <h1>PLANES AT WAR</h1>
                                </Message>
                              </Table>
                              <PlaneCollection
                                planes={this.props.planes}
                                addToArmory={this.addPlaneArmory}
                              />
                            </Container>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div />
      </div>
    );
  }
}

const thumbnailStyle = {
  // background: '#ddd',
  // height: '500px',
  // width: '1024px',
  // margin: '40px auto',
  // display: 'flex',
  // direction: 'row',
};
