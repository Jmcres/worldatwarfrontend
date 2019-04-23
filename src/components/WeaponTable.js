import React, { Component } from "react";
import { Menu, Table, Segment, Message, Grid } from "semantic-ui-react";

export default class WeaponTable extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => {
    console.log("tabling", name);
    this.setState({ activeItem: name });
    // this.switchFunc(name);
  };
  renderToggle = () => {
    if (this.state.activeItem === "weapons") {
      return this.renderWeapons();
    }
    if (this.state.activeItem === "armor") {
      return "armour";
    }
    if (this.state.activeItem === "combat") {
      return "stuff";
    } else {
      return this.renderProfile();
    }
  };

  // renderToggle = () => {
  //   if (this.state.activeItem === "weapons") {
  //     return this.renderWeapons();
  //   }
  //   if (this.state.activeItem === "armor") {
  //     return this.renderArmor();
  //   }
  //   if (this.state.activeItem === "combat") {
  //     return this.rendeWarProfile();
  //   } else {
  //     return this.renderProfile();
  //   }
  // };

  renderWeapons = () => {
    return (
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Score</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Weapon</Table.Cell>
            <Table.Cell>{this.props.weapon.gun}</Table.Cell>
            <Table.Cell>{this.props.weapon.firepowergun}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ammo Capacity</Table.Cell>
            <Table.Cell>{this.props.weapon.ammo}</Table.Cell>
            <Table.Cell>{this.props.weapon.firepowerammo}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Armor</Table.Cell>
            <Table.Cell>{this.props.weapon.armor}</Table.Cell>
            <Table.Cell>{this.props.weapon.protection}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Speed</Table.Cell>
            <Table.Cell>{this.props.weapon.speed}</Table.Cell>
            <Table.Cell>{this.props.weapon.speedscore}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Range</Table.Cell>
            <Table.Cell>{this.props.weapon.range}</Table.Cell>
            <Table.Cell>{this.props.weapon.rangescore}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Health</Table.Cell>
            <Table.Cell>Crew Members:{this.props.weapon.crew}</Table.Cell>
            <Table.Cell>{this.props.weapon.health}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  };

  renderProfile = () => {
    return (
      <Message attached="middle" color="blue">
        <Grid columns={2} compact divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Message.Header>
                <h4>{this.props.weapon.side.toUpperCase()}</h4>
              </Message.Header>
              <Message.Header>
                <h4>{this.props.weapon.country.toUpperCase()}</h4>
              </Message.Header>
              <Message.Header>
                <h2>{this.props.weapon.role.toUpperCase()}</h2>
              </Message.Header>
            </Grid.Column>
            <Grid.Column>
              <Message.Header>
                <h1>{this.props.weapon.name}</h1>
              </Message.Header>
              <Message color="violet">{this.props.weapon.description}</Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Message>
    );
  };

  render() {
    const { activeItem } = this.state;

    console.log("Weapons Table", this.props, this.state);

    return (
      <div>
        <Menu>
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            Profile
          </Menu.Item>

          <Menu.Item
            name="weapons"
            active={activeItem === "weapons"}
            onClick={this.handleItemClick}
          >
            Combat Profile
          </Menu.Item>
        </Menu>

        <Segment>{this.renderToggle()}</Segment>
      </div>
    );
  }
}
