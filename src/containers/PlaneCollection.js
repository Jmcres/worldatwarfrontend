
// import tanks from './tanks_data'

// import TankCard from './TankCard'
// import UserArmory from './UserArmory';

import React, { Component} from 'react';
import PlaneSlide from '../components/PlaneSlide'

class PlaneCollection extends Component {
   
   
    state = {
        // tanks: tanks,
        // tank: tanks[0],
        activeIndex: 0,
    }

        
        nextFavoritie =()=>{
            const newIndex= this.state.activeIndex + 1
            this.setState({
                activeIndex: newIndex
            })
        }

        prevFavoritie =()=>{
            const newIndex= this.state.activeIndex - 1
            this.setState({
                activeIndex: newIndex
            })
        }

        

    render() {
        // console.log("Props in TankCollection", this.props)
        // console.log(tanks.index)
        return (
            <div>
            <div className="Favorites">
                
                <div className="Page">
                <div className="col">
                <div className={`cards-slider active-slide-${this.props.planes.order}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${this.props.planes.order*(100/this.props.planes.length)}%)`
                }}> 
                 <PlaneSlide activePlane={this.props.planes[this.state.activeIndex]} addToArmory={this.props.addToArmory} />
                 </div>
                 <br></br>
                 <button onClick={()=>this.prevFavoritie()} disabled={this.state.activeIndex === 0}>Previous</button>
                 <button onClick={()=>this.nextFavoritie()} disabled={this.state.activeIndex === this.props.planes.length-1}>Next</button>
                

                </div>

             </div>
             </div>
            
             </div>
        </div>
        )
    }

}

export default PlaneCollection