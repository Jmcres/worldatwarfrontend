import React, {Component} from 'react'




 class TankSlide extends Component{
   
   renderDetails= () => { 
    if(this.props.activeTank){
        return(
            <div id={`card-${this.props.activeTank}`} className="card">
                <h1>{this.props.activeTank.name}</h1>
                <h2>{this.props.activeTank.role}</h2>
                <h3>{this.props.activeTank.side}: {this.props.activeTank.country}</h3>
                <img src={this.props.activeTank.img_url}  />
                    <div className="details">
                        {/* <span className="index">{props.activeTank.id}</span> */}
                        <br></br>
                        <div className="features">
                            <h3>
                            <li className="main"> Weapons: {this.props.activeTank.gun}</li>
                            <li className="secondary">Ammo Capacity: {this.props.activeTank.ammo} </li>
                            <li className="armor"> Armor: {this.props.activeTank.armor}</li>
                            <li className="armor"> Speed: {this.props.activeTank.speed}</li>
                            <li className="armor"> Range: {this.props.activeTank.range}</li>
                            {/* <p>Description: {props.activeTank.description}</p> */}
                            </h3>
                            <br></br>
                            <button onClick={()=>this.props.addToArmory(this.props.activeTank.id)}>Add To Your Armory!</button>
                            </div>
                        </div>
                    </div>
                            )}}

    render(){
    return ( 
        <div>
        {this.renderDetails()}
        </div>
            )
}
 }

export default TankSlide