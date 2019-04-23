import React from "react";
import {
  Header,
  Image,
  Message,
  Grid,
  Segment,
  Container
} from "semantic-ui-react";

const ItemSpecs = props => {
  console.log("item specs", props);

  return (
    // <div className="itemspec">
    //   <div className="itemspecoicture">
    <Container>
      <Segment inverted>
        <div>
          <Image src={props.img_url} size="medium" centered circular />
        </div>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
        <li>{props.side}</li>
        <li>{props.country}</li>
        <br />
        <Message color="blue">
          <h3>
            <p>{props.description}</p>
          </h3>
        </Message>
        <button className="ui button fluid" onClick={props.handleClick}>
          Go Back
        </button>
      </Segment>
    </Container>
  );
};

export default ItemSpecs;
