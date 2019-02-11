import React from "react";




const CompareSpecs = props => {

  function findScore (){
    const totalScore =  ((((((props.firepowergun *(.75)) +
          (props.firepowerammo *(.25)))/ 2)*(.20)) +
          (props.speedscore *(.20)) +
          (props.health *(.20)) +
          (props.protection *(.20)) +
          (props.rangescore *(.20)) ) /5)
    return (
        Math.round((totalScore * (100)) )
        )
  }

  const itemScore =findScore()

  console.log("CompareSpecs Props", props)
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
            <h2>
              <ul>Role: {props.role}</ul>
              <ul> Side: {props.side} </ul>
              <ul> Country: {props.country} </ul>
            </h2>
            <h3>Features: 
                <li> Firepower: {props.gun}</li>
                <li> Ammo Capacity: {props.ammo}</li>
                <li> Armor: {props.armor}</li>
                <li> Speed: {props.speed}</li>
                <li> Range: {props.range}</li>
                <li> Crew: {props.crew}</li>
                </h3>
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
          </div>
        </div>
      </div>
    </div>
  );

};

export default CompareSpecs;