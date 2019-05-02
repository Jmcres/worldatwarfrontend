import React, { Component } from "react";
// import { Card, CardTitle } from 'react-materialize'
import {
  Card,
  Grid,
  Image,
  Message,
  Segment,
  Button,
  Item
} from "semantic-ui-react";

class WeaponCard extends Component {
  render() {
    // console.log("weaponCard props", this.props)
    return (
      <div>
        {/* <Segment> */}
        <Image
          size="medium"
          centered
          // circular
          // floated="left"

          src={this.props.img_url}
          onClick={() => this.props.showDetails(this.props.id)}
        />
        <Message color="olive">
          <Item>
            <Item.Content>
              <Item.Header>
                <strong>
                  <h3>{this.props.name}</h3>
                </strong>
              </Item.Header>
              <Item.Meta>
                <h4>
                  {this.props.type}
                  {this.props.role}
                </h4>
              </Item.Meta>
              <Item.Description />
            </Item.Content>
            <Item.Extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={() => this.props.addItemToCompare(this.props.id)}
                >
                  MOBILIZE
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={() => this.props.removeFromArmory(this.props.id)}
                >
                  Delete
                </Button>
              </div>
            </Item.Extra>
          </Item>
        </Message>
        {/* </Segment> */}
        <br />
      </div>
    );
  }
}

export default WeaponCard;
