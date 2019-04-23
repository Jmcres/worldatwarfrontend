import React, {Component} from 'react'
import {Form, Container, Segment } from 'semantic-ui-react'





export default class WeaponForm extends Component {
    state = {
        weaponsystem: "",
        name: "",
        imgurl: "",
        role: "",
        country: "",
        side: "",
        gun: "",
        ammo: "",
        speed: "",
        armor: "",
        range: "",
        crew: "",
        firepowergun: "",
        firepowerammo: "",
        speedscore: "",
        health: "",
        protection: "",
        rangescore: "",
    }

   

    addWeapon = (event) => {
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        event.preventDefault()
        // console.log(event.target)
        fetch("http://localhost:3000/api/v1/weapons", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                weaponsystem: this.refs.weaponsystem.value,
                name: this.refs.name.value,
                imgurl: this.refs.imgurl.value,
                role: this.refs.imgurl.value,
                country: this.refs.country.value,
                side: this.refs.side.value,
                gun: this.refs.gun.value,
                ammo: this.refs.ammo.value,
                speed: this.refs.speed.value,
                armor: this.refs.armor.value,
                range: this.refs.range.value,
                crew: this.refs.crew.value,
                firepowergun: this.refs.firepowergun.value,
                firepowerammo: this.refs.firepowerammo.value,
                speedscore: this.refs.speedscore.value,
                health: this.refs.health.value,
                protection: this.refs.protection.value,
                rangescore: this.refs.rangescore.value,
            })
        })
        .then(response  => response.json())
            .then(newWeapon => this.props.addNewWeaponToWeapons(newWeapon))
    }
                
                
        
    

    handleChange = (event) => {
                console.log("typing")
                 console.log(event.target)
                //  console.log(event.target.value)
                 const target = event.target;
                 const value = target.value;
                 const name = target.name;
                this.setState({[name]: value});
             }

    render(){
        // console.log("props in form", this.props)
        return (
                
           
        <Form onSubmit={this.addWeapon}>
         <Form.Group widths='equal'>
         <Container>
                <Segment.Group stacked>
        
       Weapon Type: <input type="text" ref= "weaponsystem" name="weaponsystem" placeholder="Tank or Plane Only" value={this.state.weaponsystem} onChange={this.handleChange} />
       Name: <input type="text" ref= "name" name="name" placeholder="Weapon Name" value={this.state.name} onChange={this.handleChange} />
       Image: <input type="text" ref= "imgurl" name="imgurl" placeholder="Image" value={this.state.imgurl} onChange={this.handleChange} />
       Role: <input type="text"  ref= "role" name="role" placeholder="Role" value={this.state.role} onChange={this.handleChange} />
        <input type="text" ref= "country" name="country" placeholder="Country" value={this.state.country} onChange={this.handleChange} />
        <input type="text" ref= "side" name="side" placeholder="Side" value={this.state.side} onChange={this.handleChange} />
        <input type="text"  ref= "gun" name="gun" placeholder="Weapon" value={this.state.gun} onChange={this.handleChange} />
        <input type="text"  ref= "ammo" name="ammo" placeholder="Ammo Capacity" value={this.state.ammo} onChange={this.handleChange} />
        <input type="text" ref= "speed" name="speed" placeholder="Speed" value={this.state.speed} onChange={this.handleChange} />
        <input type="text" ref= "armor" name="armor" placeholder="Armor" value={this.state.armor} onChange={this.handleChange} />
        <input type="text" ref= "range" name="range" placeholder="Range" value={this.state.range} onChange={this.handleChange} />
        <input type="number" ref= "crew" name="crew" placeholder="Crew" value={this.state.crew} onChange={this.state.handleChange} />
        <input type="number" ref= "firepowergun" min="1" max="5" name="firepowergun" placeholder="Gun Firepower" value={this.state.firepowergun} onChange={this.handleChange} />
        <input type="number" ref= "firepowerammo" min="1" max="5" name="firepowerammo" placeholder="Ammo Capacity" value={this.state.firepoweramo} onChange={this.handleChange} />
        <input type="number" ref= "speedscore" min="1" max="5" name="speedscore" placeholder="Speed Score" value={this.state.speedscore} onChange={this.handleChange} />
        <input type="number" ref= "health" min="1" max="5" name="health" placeholder="Health" value={this.state.health} onChange={this.handleChange} />
        <input type="number" ref= "protection" min="1" max="5" name="protection" placeholder="Protection" value={this.state.protection} onChange={this.handleChange} />
        <input type="number" ref= "rangescore" min="1" max="5" name="rangescore" placeholder="Range Score" value={this.state.rangescore} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
        <button onClick={()=> this.props.formBack()}>Back</button>
       
        </Segment.Group>
            </Container>
            </Form.Group>
            </Form>
            
           
                
        )
    }
}

