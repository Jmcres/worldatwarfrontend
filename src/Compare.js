import React, {Component} from 'react'
import CompareSpecs from './CompareSpecs'

// import PlaneCard from "./PlaneCard";



export default class Compare extends Component {

   

   
    render(){
        console.log("props in Compare", this.props)
        const compareArrayLength = this.props.compareItems.length
        console.log("compare", compareArrayLength)
        return (
            <div>
            { compareArrayLength === 2 ?
            <div>
            <div>
            {this.props.compareItems.map(item => { return (
                <CompareSpecs key={item.id} {...item} compareBack={this.props.compareBack} /> )})}
                </div>
                <button onClick={()=> this.props.letsBattle()}>Lets Battle</button>
                </div> : 
                <div>
                {this.props.compareItems.map(item => { return (
                <CompareSpecs key={item.id} {...item} compareBack={this.props.compareBack} /> )})}
                </div>
            }
            </div>
        );
      }
      
    };