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
        <div className="features">
              <li className="main">Armament: {props.activePlane.main}</li>
              <li className="secondary">Speed: {props.activePlane.speed} </li>
              <li className="armor">Range: {props.activePlane.range}</li>
              {/* <p>Description: {props.activePlane.description}</p> */}
              <br></br>
              <button onClick={()=>props.addToArmory(props.activePlane.id)}>Add To Your Armory!</button>
        </div>
    </div>
</div>)
}

export default PlaneSlide