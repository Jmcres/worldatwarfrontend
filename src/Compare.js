import React, {Component} from 'react'
import CompareSpecs from './CompareSpecs'

// import PlaneCard from "./PlaneCard";



export default class Compare extends Component {

   
    render(){
        console.log("props in Compare", this.props)
        return (
            <div>
            {this.props.compareItems.map(item => { return (
                <CompareSpecs key={item.id} {...item} handleClick={this.handleClick}  /> )})}
                </div>
        );
      }
      
    };