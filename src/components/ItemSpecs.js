import React, { Component } from "react";

import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Card,
  Button,
  Table
} from "semantic-ui-react";
import WeaponTable from "./WeaponTable";

export default class ItemSpecs extends Component {
  renderItemSpec = () => {
    return (
      <div>
        <Container>
          <Segment inverted color="grey" attached="top">
            <Image centered circular size="big" src={this.props.img_url} />
          </Segment>
          {/* <Segment attached="middle">

          </Segment> */}

          {/* <Message attached="middle" color="blue">
            <Grid columns={2} compact divided>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Message.Header>
                    <h4>{this.props.side.toUpperCase()}</h4>
                  </Message.Header>
                  <Message.Header>
                    <h4>{this.props.country.toUpperCase()}</h4>
                  </Message.Header>
                  <Message.Header>
                    <h2>{this.props.role.toUpperCase()}</h2>
                  </Message.Header>
                </Grid.Column>
                <Grid.Column>
                  <Message.Header>
                    <h1>{this.props.name}</h1>
                  </Message.Header>
                  <Message color="violet">{this.props.description}</Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Message> */}

          <Segment attached="bottom">
            <WeaponTable weapon={this.props.currentWeapon} />;
          </Segment>
          <button className="ui button fluid" onClick={this.props.handleClick}>
            Go Back
          </button>
        </Container>
      </div>
    );
  };
  render() {
    console.log("item Specs", this.props);
    return (
      <div>
        <Segment inverted>
          <div>{this.renderItemSpec()}</div>
        </Segment>
      </div>
    );
  }
}

// import React from "react";
// import {
//   Header,
//   Image,
//   Message,
//   Grid,
//   Segment,
//   Container
// } from "semantic-ui-react";

// const ItemSpecs = props => {
//   console.log("item specs", props);

//   return (
//     // <div className="itemspec">
//     //   <div className="itemspecoicture">
//     <Container>
//       <Segment inverted>
//         <div>
//           <Image src={props.img_url} size="medium" centered circular />
//         </div>
//         <h1>{props.name}</h1>
//         <h2>{props.role}</h2>
//         <li>{props.side}</li>
//         <li>{props.country}</li>
//         <br />
//         <Message color="blue">
//           <h3>
//             <p>{props.description}</p>
//           </h3>
//         </Message>
//         <button className="ui button fluid" onClick={props.handleClick}>
//           Go Back
//         </button>
//       </Segment>
//     </Container>
//   );
// };

// export default ItemSpecs;
