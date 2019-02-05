import React, {Component} from 'react'
import CompareSpecs from './CompareSpecs'
// import Popup from './Popup'

// import PlaneCard from "./PlaneCard";



export default class Compare extends Component {

    // state={
    //     isHidden: true
    // }
   
    // toggleHidden = () => {
    //     this.setState({
    //       isHidden: !this.state.isHidden
    //     })
    //   }

    something = () => {
        this.props.letsBattle()
        this.props.toggleHidden()
    }

      
   
    render(){
        // console.log("props in Compare", this.props)
        const compareArrayLength = this.props.compareItems.length
        // console.log("compare", this.props)
        return (
           <div>
            { compareArrayLength === 2 ?
            <div>
            <div>
            {this.props.compareItems.map(item => { return (
                <CompareSpecs key={item.id} {...item} style={{flex: 1}} compareBack={this.props.compareBack} /> )})}
                </div>
                {/* onClick={()=> this.props.letsBattle()} */}
                <button onClick={this.something} >Lets Battle</button>
                </div> : 
                <div>
                {this.props.compareItems.map(item => { return (
                <CompareSpecs key={item.id} {...item} style={{flex: 1}} compareBack={this.props.compareBack} /> )})}
                </div>
            }
            {/* {!this.state.isHidden && <Popup />} */}
            </div>
            
        );
      }
      
    };

    