import React from "react";

const ItemSpecs = props => {
 

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.img_url}
            />
          </div>
          <div className="four wide column">
            <h1>Name: {props.name}</h1>
            <h2>Role: {props.role}</h2>
            <li>
              Side: {props.side}
              </li>
              <li>
              Country: {props.country}
            </li>
            <br />
            <h3>Description:
                <p>{props.description}</p>
                </h3>
            {/* <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.armor}</strong>
                  </div>
                </div>
              </div>
            </div> */}
            <button
              className="ui button fluid"
              onClick={props.handleClick}
            >
              Go Back
            </button>
            {/* <button
              className="ui button fluid"
               onClick={()=> props.addToArmy(props.id)}
              //   // console.log(
              //   //   "connect this to a function that adds this bot to your bot army list"
              //   // )
              // }
            >
              Enlist
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );

};

export default ItemSpecs;
