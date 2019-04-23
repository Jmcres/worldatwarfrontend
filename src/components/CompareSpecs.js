import React from "react";
import {
  List,
  Header,
  Icon,
  Message,
  Segment,
  Grid,
  Image
} from "semantic-ui-react";
const CompareSpecs = props => {
  function findScore() {
    const totalScore =
      (((props.firepowergun * 0.75 + props.firepowerammo * 0.25) / 2) * 0.2 +
        props.speedscore * 0.2 +
        props.health * 0.2 +
        props.protection * 0.2 +
        props.rangescore * 0.2) /
      5;
    return Math.round(totalScore * 100);
  }

  const itemScore = findScore();

  console.log("CompareSpecs Props", props);
  return (
    // <div className="ui segment">
    <Segment>
      <Grid columns="equal" divided>
        <Grid.Row>
          <Grid.Column>
            <Image
              size="medium"
              circular
              centered
              bordered
              src={props.img_url}
            />

            <Header as="h2" icon>
              <Icon name="chess knight" />
              <h1>{props.name}</h1>
              <Header.Subheader>WEAPON SYSTEM DETAILS</Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Message color="green">
              <Message.Header>
                <h2>{props.role}</h2>{" "}
              </Message.Header>
              <Message.Header>
                {" "}
                <h3>{props.side} </h3>
              </Message.Header>
              <Message.Header>
                <h4>{props.country}</h4>{" "}
              </Message.Header>
            </Message>
            <List divided relaxed>
              <List.Item>
                <List.Header>
                  <h3>Weapon System Specs</h3>
                </List.Header>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="crosshairs"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">Firepower: {props.gun}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="rocket" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">Ammo Capacity: {props.ammo}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="shield alternate"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">Armor: {props.armor}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="bolt" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">Speed: {props.speed}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="chess knight"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">Range: {props.range}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="heartbeat"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">Crew: {props.crew}</List.Header>
                </List.Content>
              </List.Item>
            </List>
            <h2> SCORE: {itemScore} </h2>
            <button
              className="ui button fluid"
              onClick={() => props.compareBack(props.id)}
            >
              Go Back
            </button>
            {/* <button
              className="ui button fluid"
              //  onClick={}
              //   // console.log(
              //   //   "connect this to a function that adds this bot to your bot army list"
              //   // )
              // }
            >
              Play Video
            </button> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    // {/* </div> */}
  );
};

export default CompareSpecs;
