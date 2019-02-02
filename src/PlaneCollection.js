import React, {Component} from 'react'
// import tanks from './tanks_data'
import PlaneSlide from './PlaneSlide'
// import TankCard from './TankCard'
// import UserArmory from './UserArmory';

class PlaneCollection extends Component {
    state = {
        // tanks: tanks,
        // tank: tanks[0],
        activeIndex: 0,
    }

        

    // renderTankCards = () => {
    //     return this.props.tanks.map(tank =>
    //       <TankCard key={tank.id} {...tank} addToArmory={this.props.addToArmory} />
    //     )
    //   }
        
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
                <h1>User's Armory</h1>
                <div className="col">
                <div className={`cards-slider active-slide-${this.props.planes.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${this.props.planes.index*(100/this.props.planes.length)}%)`
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