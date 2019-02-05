import React from 'react'


const TankSlide =(props) => {
    // console.log(props)
    return (
    <div id={`card-${props.activeTank.index}`} className="card">
        <h1>{props.activeTank.name}</h1>
        <h2>{props.activeTank.role}</h2>
        <h3>{props.activeTank.side}: {props.activeTank.country}</h3>
        <img src={props.activeTank.img_url}  />
    <div className="details">
        {/* <span className="index">{props.activeTank.id}</span> */}
        <br></br>
        <div className="features">
            <h3>
              <li className="main"> Weapons: {props.activeTank.gun}</li>
              <li className="secondary">Ammo Capacity: {props.activeTank.ammo} </li>
              <li className="armor"> Armor: {props.activeTank.armor}</li>
              <li className="armor"> Speed: {props.activeTank.speed}</li>
              <li className="armor"> Range: {props.activeTank.range}</li>
              {/* <p>Description: {props.activeTank.description}</p> */}
              </h3>
              <br></br>
              <button onClick={()=>props.addToArmory(props.activeTank.id)}>Add To Your Armory!</button>
        </div>
    </div>
</div>)
}

export default TankSlide