import React from 'react'


const TankCard =(props) => {
    // console.log(props)
    return (
    <div id={`card-${props.activeTank.index}`} className="card">
        <h1>{props.activeTank.name}</h1>
        <h2>{props.activeTank.role}</h2>
        <h3>{props.activeTank.side}: {props.activeTank.country}</h3>
        <img src={props.activeTank.img_url}  />
    <div className="details">
        <span className="index">{props.activeTank.id}</span>
        <div className="features">
              <li className="main">Main Armament: {props.activeTank.main}</li>
              <li className="secondary">Secondary Armament: {props.activeTank.secondary} </li>
              <li className="armor">Armor: {props.activeTank.armor}</li>
              <p>Description: {props.activeTank.description}</p>
        </div>
    </div>
</div>)
}

export default TankCard