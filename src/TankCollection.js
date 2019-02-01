import React, {Component} from 'react'
import tanks from './tanks_data'
import TankCard from './TankCard'
import UserArmory from './UserArmory';

class TankCollection extends Component {
    state = {
        tanks: tanks,
        tank: tanks[0],
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
        // console.log("UserFavorites State", this.state.tank)
        // console.log(tanks.index)
        return (
            
            <div className="Favorites">
                
                <div className="Page">
                <h1>User's Armory</h1>
                <div className="col">
                <div className={`cards-slider active-slide-${tanks.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${tanks.index*(100/tanks.length)}%)`
                }}>
                 <TankCard activeTank={this.state.tanks[this.state.activeIndex]} />
                 </div>
                 <br></br>
                 <button onClick={()=>this.prevFavoritie()} disabled={this.state.activeIndex === 0}>Previous</button>
                 <button onClick={()=>this.nextFavoritie()} disabled={this.state.activeIndex === tanks.length-1}>Next</button>

                 <UserArmory />

                
                </div>
                </div>
                </div>
            </div>
        )
    }

}

export default TankCollection