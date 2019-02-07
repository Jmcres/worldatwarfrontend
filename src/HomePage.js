import React, {Component} from 'react'
import TankCollection from './TankCollection'
import PlaneCollection from './PlaneCollection'
import UserArmory from './UserArmory'
// import tanks from './tanks_data'
import tanksTwo from './tanks_score'
import planesTwo from './plane_score'
import Search from './Search'
import ItemSpecs from './ItemSpecs'
import Compare from './Compare'
import Popup from './Popup'
import UserProfile from './UserProfile'
// import Form from './Form'




export default class HomePage extends Component {

    state = {
        armory: [],
        // filteredArmory: [],
        // tanks: [],
        planes: planesTwo,
        clickedTank: null,
        clickedItem: null,
        inputValue: "",
        tanks: tanksTwo,
        activeIndex: 0,
        compareItems:[],
        itemWinner: [],
        isHidden: true,
        formHidden: true,
    }


    // componentDidMount(){
    //     fetch("http://localhost:3000/api/v1/tanks")
    //     .then(r => r.json())
    //     .then(tanks => console.table(tanks))
    // }
    
    toggleHidden = () => {
        this.setState({
          isHidden: !this.state.isHidden
        })
    // } else { this.setState({
    //     isHidden: true
    //   })
        }

        toggleFormHidden = () => {
            console.log("rendering Form")
            this.setState({
              formHidden: !this.state.formHidden,
              compareItems:[],
            })
        // } else { this.setState({
        //     isHidden: true
        //   })
            }
    
        

      toggleClose = () => {
          this.setState({
            isHidden: true,
            compareItems:[],
          })
      }

    // renderContent = (itemWinner) => {
    //       return(
    //         <div>
    //           <h1>{itemWinner.name}</h1>
    //           <li>{itemWinner.side}</li>
    //           <li>{itemWinner.country}</li>
    //           <br></br>
    //           <li>{itemWinner.role}</li>
    //           <li>{itemWinner.firepower}</li>
    //           <p>{itemWinner.description}</p>
    //         </div>
    //       )
    //   }

   letsBattle =() => {
    //    console.log("Battle Time", this.state.compareItems)
      

       const scoreOne = Math.round((((((((this.state.compareItems[0].firepowergun *(.75)) +
       (this.state.compareItems[0].firepowerammo *(.25)))/ 2)*(.20)) +
       (this.state.compareItems[0].speedscore *(.20)) +
       (this.state.compareItems[0].health *(.20)) +
       (this.state.compareItems[0].protection *(.20)) +
       (this.state.compareItems[0].rangescore *(.20)) ) /5) * (100) ))

       const scoreTwo = Math.round((((((((this.state.compareItems[1].firepowergun *(.75)) +
       (this.state.compareItems[1].firepowerammo *(.25)))/ 2)*(.20)) +
       (this.state.compareItems[1].speedscore *(.20)) +
       (this.state.compareItems[1].health *(.20)) +
       (this.state.compareItems[1].protection *(.20)) +
       (this.state.compareItems[1].rangescore *(.20)) ) /5) * (100) ))

       if(this.state.compareItems.length === 2){
            if(scoreOne > scoreTwo) {
                return this.setState({
                    itemWinner: this.state.compareItems[0]
                })
           
        //    alert(this.state.compareItems[0].name + " " + "Wins")
            } else if (scoreOne < scoreTwo) {
                return this.setState({
                    itemWinner: this.state.compareItems[1]
                })} else {
                    return this.setState({
                        itemWinner: null
                    })
                }
        // alert( this.state.compareItems[1].name + " " + "Wins")
         } 
            else{alert("YOU CANT BATTLE YOURSELF")}  //You can battle your slef at least on planes
        }

        



//   
    addItemToCompare = (itemId) => {
        // console.log("firing", )
        const foundCompare = this.state.armory.find(item => item.id === itemId)
        // console.log("foundCompare", foundCompare.type, this.state.compareItems.type)
        if(this.state.compareItems.length === 0){
            this.setState({
                compareItems: [...this.state.compareItems, foundCompare],
            })
         } else if (this.state.compareItems.length === 1 && this.state.compareItems[0].type === foundCompare.type){
                this.setState({
                    compareItems: [...this.state.compareItems, foundCompare],
                })
            } else if (this.state.compareItems.length === 1 && this.state.compareItems[0].type !== foundCompare.type){
                alert("You can only compare weapons of the same type")
        } else { alert("You Can Only Compare Two Items")}
    }


    compareBack =(itemId)=> {
        // console.log("firing")
        const foundCompareTwo = this.state.compareItems.find(item => item.id === itemId)
        this.setState({
            compareItems: this.state.compareItems.filter((item) => { return (item !== foundCompareTwo)}),
        }) 
    }

    handleChange = (event) => {
		// console.log("Changing")
		// console.log (event.target.name)
		this.setState({
		inputValue: event.target.value
		})
    }
    
    // filterCategories = (search) => {
    //     this.setState({
    //       filteredArmory: this.state.armory.filter(item =>
    //         item.name.toLowerCase().includes(search.toLowerCase())
    //       )
    //     })
    //   }
        
      filterArmory = () => this.state.armory.filter(item => {return (
            item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            item.type.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
		    item.side.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
		    item.country.toLowerCase().includes(this.state.inputValue.toLowerCase()) 
        )})
        

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

        const foundCompareItem = this.state.compareItems.find(item => item.id === itemId)
       
        // console.log("found tank", foundTank, "foundPlane", foundPlane)

        // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
        if(foundPlane === undefined){
        this.setState({
            armory: this.state.armory.filter((item) => { return (item !== foundTank)}),
            compareItems: this.state.compareItems.filter((item) => { return (item !== foundCompareItem)})

        }) 
        } else {
            this.setState({
            armory: this.state.armory.filter((item) => { return (item !== foundPlane)}),
            compareItems: this.state.compareItems.filter((item) => { return (item !== foundCompareItem)})
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


    addPlaneArmory = (planeId) => {
        // console.log("firing")

        const foundPlane = this.state.planes.find(plane => plane.id === planeId)
        // this.state.tanks.splice(this.state.tanks.indexOf(foundBot), 1)
        this.setState({
            armory: [...this.state.armory, foundPlane],
            planes: this.state.planes,
        }) // add conditional so no repeats
    }

    

    render(){
        // console.log("state in homepage", this.state)
        // console.log("props in homepage", this.props)
        // console.log("itermWinner in homepage", this.state.itemWinner)
        return(
        <div>
            <UserProfile />
            <br></br>
            <Search handleChange={this.handleChange} inputValue={this.state.inputValue} toggleFormHidden={this.toggleFormHidden}/>
            <div className="thumbnail"style={thumbnailStyle}>
            <div>
            {!this.state.isHidden ? <Popup toggleClose={this.toggleClose} itemWinner={this.state.itemWinner}/> :
            <div>
            <Compare toggleHidden={this.toggleHidden} compareItems={this.state.compareItems} compareBack={this.compareBack} letsBattle={this.letsBattle}/>
            <UserArmory armory={this.filterArmory()} addItemToCompare={this.addItemToCompare}  showDetails={this.showDetails} removeFromArmory={this.removeFromArmory} />
            {this.state.clickedItem ?
                <ItemSpecs {...this.state.clickedItem} handleClick={this.handleClick} />  :
                     <div>
                    <TankCollection tanks={this.state.tanks} addToArmory={this.addTankArmory}  /> 
                    <PlaneCollection planes={this.state.planes} addToArmory={this.addPlaneArmory}  /> 
                    </div> }
            </div>
            
            }
                </div>
            
            </div>
            
           <div>
            
        </div>     
            
        </div>
        
        
        
        )
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
    
