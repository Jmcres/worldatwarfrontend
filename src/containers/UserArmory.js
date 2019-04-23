import React, { Component } from "react";
import WeaponCard from "../components/WeaponCard";
// import PlaneCard from "./PlaneCard";
import {
  Segment,
  Card,
  Button,
  Item,
  Container,
  List
} from "semantic-ui-react";

export default class UserArmory extends Component {
  state = {
    startIdx: 0,
    endIdx: 5
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 1,
        endIdx: prevState.endIdx + 1
      };
    });
  };
  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 1,
        endIdx: prevState.endIdx - 1
      };
    });
  };
  render() {
    const armoryItems = Object.values(this.props.armory).slice(
      this.state.startIdx,
      this.state.endIdx
    );
    console.log("Armory", this.props);
    return (
      <div>
        <Segment inverted>
          <Segment inverted>
            <Button
              floated="left"
              onClick={() => this.showLess()}
              content="Back"
              icon="left arrow"
              labelPosition="left"
            />
            <Button
              floated="right"
              onClick={() => this.showMore()}
              content="Next"
              icon="right arrow"
              labelPosition="right"
            />

            <List horizontal>
              {/* <Container> */}
              {armoryItems.map(weapon => {
                return (
                  <List.Item>
                    <WeaponCard
                      key={weapon.id}
                      {...weapon}
                      showDetails={this.props.showDetails}
                      addItemToCompare={this.props.addItemToCompare}
                      removeFromArmory={this.props.removeFromArmory}
                    />
                  </List.Item>
                );
              })}
              {/* </Container> */}
            </List>
          </Segment>
          {/* </Segment> */}
        </Segment>
      </div>
    );
  }
}
