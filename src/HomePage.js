import React, {Component} from 'react'
import TankCollection from './TankCollection'
import PlaneCollection from './PlaneCollection'
import UserArmory from './UserArmory'
// import tanks from './tanks_data'
import tanksTwo from './tanks_score'
import planes from './planes_data'
import Search from './Search'
import ItemSpecs from './ItemSpecs'
import Compare from './Compare'



export default class HomePage extends Component {

    state = {
        armory: [],
        // tanks: tanks,
        planes: planes,
        clickedTank: null,
        clickedItem: null,
        inpoutValue: "",
        tanks: tanksTwo,
        activeIndex: 0,
        compareItems:[],
    }

   
    addItemToCompare = (itemId) => {
        console.log("firing")
        const foundCompare = this.state.armory.find(item => item.id === itemId)
        console.log("foundCompare", foundCompare)
        if(this.state.compareItems.length === 0){
            this.setState({
                compareItems: [...this.state.compareItems, foundCompare],
            })
         } else if (this.state.compareItems.length === 1 && this.state.compareItems.type === foundCompare.type){
                this.setState({
                    compareItems: [...this.state.compareItems, foundCompare],
                })
            } else if (this.state.compareItems.length === 1 && this.state.compareItems.type !== foundCompare.type){
                alert("You can only compare weapons of the same type")
        } else { alert("You Can Only Compare Two Items")}
    }

    handleChange = (e)=> {
        this.setState ({inputValue: e.target.value})
      }
        
      handleFilter = () => {  return this.state.armory.filter(item => item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))}

    addTankArmory = (tankId) => {
        // console.log("firing")
        const foundTank = this.state.tanks.find(tank => tank.id === tankId)
        // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
        this.setState({
            armory: [...this.state.armory, foundTank],
            tanks: this.state.tanks,
        }) // add conditional so no repeats
    }

    removeFromArmory = (itemId) => {
        // console.log("firing")
        // console.log("itemId", itemId)
        const foundTank = this.state.tanks.find(tank => tank.id === itemId)
        const foundPlane = this.state.planes.find(plane => plane.id === itemId)
        // console.log("found tank", foundTank, "foundPlane", foundPlane)

        // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
        if(foundPlane === undefined){
        this.setState({
            armory: this.state.armory.filter((item) => { return (item !== foundTank)}),
        }) 
        } else {
            this.setState({
            armory: this.state.armory.filter((item) => { return (item !== foundPlane)}),
            })
        }
    }

    showDetails = (itemId) => {
        // console.log("showing")
        const clickedItem = this.state.armory.find(item => item.id === itemId)
  
      this.setState({
        clickedItem: clickedItem
        })
      }

      handleClick = () => {
        // console.log("firing")
        this.setState({
          clickedItem: null
        })
      }

      renderContent = () => {
            if(this.state.tanks.length){
              return(
                <div>
                  <h1>{this.state.tanks[this.state.activeIndex].name}</h1>
                  <li>{this.state.tanks[this.state.activeIndex].side}</li>
                  <li>{this.state.tanks[this.state.activeIndex].country}</li>
                  <br></br>
                  <li>{this.state.tanks[this.state.activeIndex].role}</li>
                  <li>{this.state.tanks[this.state.activeIndex].firepower}</li>
                  <p>{this.state.tanks[this.state.activeIndex].description}</p>
                </div>
              )
            }
          }
        



    addPlaneArmory = (planeId) => {
        // console.log("firing")

        const foundPlane = this.state.planes.find(plane => plane.id === planeId)
        // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
        this.setState({
            armory: [...this.state.armory, foundPlane],
            planes: this.state.planes,
        }) // add conditional so no repeats
    }

    // removeTankArmory = (tankId) => {
    //     console.log("firing")
    //     const foundTank = this.state.tanks.find(tank => tank.id === tankId)
    //     // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
    //     this.setState({
    //         armory: this.state.armory.filter(tank => tank !== foundTank),
    //         tanks: this.state.tanks,
    //     }) 
    // }

    // playVideo = (tankId) => {
    //     console.log("firing")
    //     const foundTank = this.state.tanks.find(tank => tank.id === tankId)
    //     // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
    //     this.setState({
    //         armory: this.state.armory.filter(tank => tank !== foundTank),
    //         tanks: this.state.tanks,
    //     }) 
    // }


    render(){
        console.log("state in homepage", this.state)
        return(
        <div>
            <Search inputValue={this.state.inputValue} handleChange={this.handleChange} />
            <div className="thumbnail"style={thumbnailStyle}>
            <Compare compareItems={this.state.compareItems} handleClick={this.handleClick} />
            <UserArmory addItemToCompare={this.addItemToCompare} armory={this.state.armory} showDetails={this.showDetails} removeFromArmory={this.removeFromArmory} />
            
            </div>
            {this.state.clickedItem ?
                <ItemSpecs {...this.state.clickedItem} handleClick={this.handleClick} />  :
                     <div>
                    <TankCollection tanks={this.state.tanks} addToArmory={this.addTankArmory}  /> 
                    <PlaneCollection planes={this.state.planes} addToArmory={this.addPlaneArmory}  /> 
                    </div> }
                
            
        </div>)
    }
    }

    const thumbnailStyle = {
        // background: '#ddd',
        // height: '500px',
        // width: '1024px',
        // margin: '40px auto',
        // display: 'flex',
        // direction: 'row',

    }
    
