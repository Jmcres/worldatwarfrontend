import React, { Component } from "react";
import CompareSpecs from "../components/CompareSpecs";
import { Divider, Grid, Segment, Container } from "semantic-ui-react";

export default class Compare extends Component {
  // state={
  //     isHidden: true
  // }

  // toggleHidden = () => {
  //     this.setState({
  //       isHidden: !this.state.isHidden
  //     })
  //   }

  jiMoney = () => {
    this.props.letsBattle();
    this.props.toggleHidden();
  };

  render() {
    // console.log("props in Compare", this.props)
    const compareArrayLength = this.props.compareItems.length;
    // console.log("compare", this.props)
    return (
      <Segment>
        {compareArrayLength === 2 ? (
          <Segment>
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical>Or</Divider>
              <Grid.Row verticalAlign="middle">
                {this.props.compareItems.map(item => {
                  return (
                    <Grid.Column>
                      <CompareSpecs
                        key={item.id}
                        {...item}
                        style={{ flex: 1 }}
                        compareBack={this.props.compareBack}
                      />{" "}
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
              <button onClick={this.jiMoney}>Lets Battle</button>
            </Grid>
          </Segment>
        ) : (
          <div>
            {this.props.compareItems.map(item => {
              return (
                <CompareSpecs
                  key={item.id}
                  {...item}
                  style={{ flex: 1 }}
                  compareBack={this.props.compareBack}
                />
              );
            })}
          </div>
        )}
      </Segment>
    );
  }
}
