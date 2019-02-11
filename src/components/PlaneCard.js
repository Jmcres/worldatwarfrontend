import React from 'react'
// import { Card, CardTitle } from 'react-materialize'



const PlaneCard =(props) => {
    // console.log(props)
     return (
            <div className="ui column">
                        <div
                        className="ui card"
                        key={props.id}
                        // onClick={()=> props.playVideo(props.id)
                        >
                        <div className="image">
                            <img alt="oh no!" src={props.img_url} />
                        </div>
                        <div className="content">
                            <div className="header">
                            {props.name} 
                            {props.role} 
                            </div>

                            <div className="meta text-wrap">
                            <small>{props.side}{props.country}</small>
                            </div>
                        </div>
                        <div className="extra content">
                            <li>{props.main}</li>
                            <li>{props.speed}</li>
                            <li>{props.range}</li>
                        </div>
                        </div>
                        <button onClick={()=> props.removeFromArmory(props.id)}>X</button>
                        </div>
                        );
}

export default PlaneCard