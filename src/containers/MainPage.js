import React, { Component} from 'react';
import WeaponPage from './WeaponPage'
// import LoginBox from './LoginBox'
// import RegisterBox from './RegisterBox'
import UserProfile from './UserProfile'



class MainPage extends Component {

  state ={ 
    weapons:[],
    // tanks:[],
    // planes:[],
  }

  

  componentDidMount(){

    fetch('http://localhost:3000/api/v1/weapons')
    .then(r => r.json())
     .then( weapons => {
      const updatedWeapons = weapons.map( (weapon, index) => { return ({...weapon, order: index})})
        this.setState({
            weapons: updatedWeapons,
        })
      }
        )
    }
    
    // getPlanes = () => {
    //   const planesArray = this.state.weapons.filter( weapon => weapon.weaponsystem === "plane")
    //   this.setState({
    //     planes: planesArray,
    //   })
    // }

    // getTanks = () => {
    //   const tanksArray = this.state.weapons.filter( weapon => weapon.weaponsystem === "tank")
    //   this.setState({
    //     tanks: tanksArray,
    //   })
    // }


  render() {
      console.log("State in MainPage", this.state)

      
      // const tankArray = this.state.weapons.filter(weapon => weapon.weaponsystem === "tank")
      // console.log(planeArray)
    return (
      <div className="App">
           <UserProfile currentUser={this.props.currentUser} />
           <WeaponPage tanks={this.state.weapons.filter(weapon => weapon.weaponsystem === "tank")} planes={this.state.weapons.filter(weapon => weapon.weaponsystem === "plane")}/>
      </div>
    );
  }
}

export default MainPage;
