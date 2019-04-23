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
              <Item.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Item.Description>
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
                <Button basic color="red">
                  Delete
                </Button>
              </div>
            </Item.Extra>
          </Item>
        </Message>
        {/* </Segment> */}
        <br />
      </div>
      //   <Card>
      //     <Segment attached="top">
      //       <Image
      //         size="medium"
      //         src={this.props.img_url}
      //         onClick={() => this.props.showDetails(this.props.id)}
      //       />
      //     </Segment>
      //     <Message attached="middle" color="blue">
      //       <h1>{this.props.name}</h1>
      //       {this.props.type}
      //       {this.props.role}
      //       <h3>
      //         {this.props.side}
      //         <br />
      //         {this.props.country}
      //       </h3>
      //     </Message>
      //     <Message attached="bottom" color="blue">
      //       <h6> Firepower: {this.props.gun}</h6>
      //       <h6>Ammo: {this.props.ammo}</h6>
      //       <h6>Armor: {this.props.armor}</h6>
      //       {/* </Card.Meta>
      //       </Card.Content> */}
      //       <button onClick={() => this.props.addItemToCompare(this.props.id)}>
      //         Mobilize
      //       </button>
      //       <button onClick={() => this.props.removeFromArmory(this.props.id)}>
      //         X
      //       </button>
      //     </Message>
      //   </Card>
    );
  }
}

export default WeaponCard;
