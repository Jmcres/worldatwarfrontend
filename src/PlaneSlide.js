import React from 'react'


const PlaneSlide =(props) => {
    // console.log(props)
    return (
    <div id={`card-${props.activePlane.index}`} className="card">
        <h1>{props.activePlane.name}</h1>
        <h2>{props.activePlane.role}</h2>
        <h3>{props.activePlane.side}: {props.activePlane.country}</h3>
        <img src={props.activePlane.img_url}  />
    <div className="details">
        {/* <span className="index">{props.activePlane.id}</span> */}
        <br></br>
        <div className="features">
            <h3>
              <li className="main"> Weapons: {props.activePlane.gun}</li>
              <li className="secondary">Bomb Capacity: {props.activePlane.ammo} </li>
              <li className="armor"> Ceiling: {props.activePlane.armor}</li>
              <li className="armor"> Speed: {props.activePlane.speed}</li>
              <li className="armor"> Range: {props.activePlane.range}</li>
              {/* <p>Description: {props.activeTank.description}</p> */}
              </h3>
              {/* <p>Description: {props.activePlane.description}</p> */}
              <br></br>
              <button onClick={()=>props.addToArmory(props.activePlane.id)}>Add To Your Armory!</button>
        </div>
    </div>
</div>)
}

export default PlaneSlide