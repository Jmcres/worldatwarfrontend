import React, {Component} from 'react'
import CompareSpecs from '../components/CompareSpecs'


export default class Compare extends Component {

    // state={
    //     isHidden: true
    // }
   
    // toggleHidden = () => {
    //     this.setState({
    //       isHidden: !this.state.isHidden
    //     })
    //   }

    jiMoney = () => {
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
                <button onClick={this.jiMoney} >Lets Battle</button>
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

    