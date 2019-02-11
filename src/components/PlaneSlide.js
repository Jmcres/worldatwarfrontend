import React, {Component} from 'react'



class PlaneSlide extends Component{
   
    renderDetails= () => { 
     if(this.props.activePlane){
         return(
             <div id={`card-${this.props.activePlane}`} className="card">
                 <h1>{this.props.activePlane.name}</h1>
                 <h2>{this.props.activePlane.role}</h2>
                 <h3>{this.props.activePlane.side}: {this.props.activePlane.country}</h3>
                 <img src={this.props.activePlane.img_url}  />
                     <div className="details">
                         {/* <span className="index">{props.activeTank.id}</span> */}
                         <br></br>
                         <div className="features">
                             <h3>
                             <li className="main"> Weapons: {this.props.activePlane.gun}</li>
                             <li className="secondary">Ammo Capacity: {this.props.activePlane.ammo} </li>
                             <li className="armor"> Armor: {this.props.activePlane.armor}</li>
                             <li className="armor"> Speed: {this.props.activePlane.speed}</li>
                             <li className="armor"> Range: {this.props.activePlane.range}</li>
                             {/* <p>Description: {props.activeTank.description}</p> */}
                             </h3>
                             <br></br>
                             <button onClick={()=>this.props.addToArmory(this.props.activePlane.id)}>Add To Your Armory!</button>
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
 
 export default PlaneSlide









// const PlaneSlide =(props) => {
//     // console.log(props)
//     return (
//     <div id={`card-${props.activePlane.index}`} className="card">
//         <h1>{props.activePlane.name}</h1>
//         <h2>{props.activePlane.role}</h2>
//         <h3>{props.activePlane.side}: {props.activePlane.country}</h3>
//         <img src={props.activePlane.img_url}  />
//     <div className="details">
//         {/* <span className="index">{props.activePlane.id}</span> */}
//         <br></br>
//         <div className="features">
//             <h3>
//               <li className="main"> Weapons: {props.activePlane.gun}</li>
//               <li className="secondary">Bomb Capacity: {props.activePlane.ammo} </li>
//               <li className="armor"> Ceiling: {props.activePlane.armor}</li>
//               <li className="armor"> Speed: {props.activePlane.speed}</li>
//               <li className="armor"> Range: {props.activePlane.range}</li>
//               {/* <p>Description: {props.activeTank.description}</p> */}
//               </h3>
//               {/* <p>Description: {props.activePlane.description}</p> */}
//               <br></br>
//               <button onClick={()=>props.addToArmory(props.activePlane.id)}>Add To Your Armory!</button>
//         </div>
//     </div>
// </div>)
// }

// export default PlaneSlide