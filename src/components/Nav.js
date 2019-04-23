import React, { Component } from "react";
import { Header, Image, Message, Grid, Segment } from "semantic-ui-react";

export default class NAV extends Component {
  render() {
    return (
      <div>
        <Message color="olive">
          {/* <Grid columns={2} compact divided>
            <Grid.Row>
              <Grid.Column width={2}>
                <Image
                  fluid
                  // floated="left"
                  size="medium"
                  bordered
                  src="https://previews.123rf.com/images/vadimmmus/vadimmmus1301/vadimmmus130100001/17194158-high-detailed-world-war-2-military-silhouettes-set-vector.jpg"
                />
              </Grid.Column>
              <Grid.Column width={14}> */}
          <Segment color="grey" inverted>
            <Header size="huge">WORLD AT WAR</Header>
          </Segment>
          <Grid>
            <Grid.Row columns={8}>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ6oVG7Lgrmwxyy2jTe9PYjerLolmiuurR2IYg_Si9iYnRhW6"
                />
              </Grid.Column>

              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vintage-world-war-two-poster-john-malone.jpg"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://images-na.ssl-images-amazon.com/images/I/816uryoec8L._SY679_.jpg"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://worldwarera.com/images/2x/normal/playing-for-keeps.jpg"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://ih0.redbubble.net/image.375241272.0995/flat,550x550,075,f.u3.jpg"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="http://www.nocgms.com/al/media/World-War-Two-Posters/06.jpg"
                />
              </Grid.Column>

              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://www.rare-posters.com/3599t.jpg"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src="https://i.pinimg.com/originals/3a/8e/0d/3a8e0ddbbcce44263f64657bc1af1811.png"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* </Grid.Column>
            </Grid.Row>
          </Grid> */}
        </Message>
      </div>
    );
  }
}
