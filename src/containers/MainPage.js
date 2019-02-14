import React, { Component} from 'react';
import WeaponPage from './WeaponPage'
// import LoginBox from './LoginBox'
// import RegisterBox from './RegisterBox'
import UserProfile from './UserProfile'
import Form from '../components/Form'




class MainPage extends Component {

  state ={ 
    weapons:[],
    formHidden: true,
  }



		toggleFormHide = () => {
      console.log("Where you be Hiding Form")
      this.setState({formHidden: false})
		}
  
    formBack = () => {
      this.setState({formHidden: true })
    }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/weapons')
    .then(r => r.json())
     .then( weapons => {
      const updatedWeapons = weapons.map( (weapon, index) => { return ({...weapon, order: index})})
        this.setState({ weapons: updatedWeapons,})
      })
    }
    

    addNewWeaponToWeapons = (newWeapon) =>{
      this.setState({
        weapons: [...this.state.weapons, newWeapon]
      })
    }
    


  render() {
      // console.log("State in MainPage", this.state, "currentUser", this.props.currentUser)      
      // const tankArray = this.state.weapons.filter(weapon => weapon.weaponsystem === "tank")
      // console.log(planeArray)
    return (
      <div className="App">
           <UserProfile currentUser={this.props.currentUser} />
    {!this.state.formHidden ? <Form  addNewWeaponToWeapons={this. addNewWeaponToWeapons} formBack={this.formBack} weapons={this.state.weapons}/> :  <WeaponPage weapons={this.state.weapons} currentUser={this.props.currentUser} toggleFormHide={this.toggleFormHide} formBack={this.formBack} tanks={this.state.weapons.filter(weapon => weapon.weaponsystem === "tank")} planes={this.state.weapons.filter(weapon => weapon.weaponsystem === "plane")}/> }
      </div>
    );
  }
}

export default MainPage;
