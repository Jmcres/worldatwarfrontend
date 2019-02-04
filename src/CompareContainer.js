
import React, { Component } from 'react';
// import Window from './Window'
// import ThumbnailGrid from './ThumbnailGrid'



class CompareContainer extends Component {

  state = {
    activeIndex: 0,
  }



  // rednerThumbnails = () => {
  //   if(this.state.tanks.length){
  //     return( 
  //       <div>
  //       <Window activeTank={this.state.tanks[this.state.activeIndex]} />
  //       <ThumbnailGrid tanks={this.state.tanks} clickAction={this.clickAction}/>
  //       </div>
  //   )}
  //   return null
  // }

//   renderContent = () => {
//     if(this.state.tanks.length){
//       return(
//         <div>
//           <h1>{this.state.tanks[this.state.activeIndex].name}</h1>
//           <li>{this.state.tanks[this.state.activeIndex].side}</li>
//           <li>{this.state.tanks[this.state.activeIndex].country}</li>
//           <br></br>
//           <li>{this.state.tanks[this.state.activeIndex].role}</li>
//           <li>{this.state.tanks[this.state.activeIndex].firepower}</li>
//           <p>{this.state.tanks[this.state.activeIndex].description}</p>
//         </div>
//       )
//     }
//   }

//   clickAction = (event) => {
//     const newActiveIndex  = event.target.getAttribute('data-index')
//     this.setState({activeIndex: newActiveIndex})
    
//   }

  render() {
    console.log(this.state)
    return (
      <div className="thumbnail"style={thumbnailStyle}>

        <div style={{flex: 1}} >
           Right
        </div>
        <div style={{flex: 1}}> 
            left
        </div>
       {/* <div style={{flex: 1}}>
       {this.rednerThumbnails()}
       </div>
       <div style={{flex: 1, padding: '40px' }}> {this.renderContent()}</div> */}
      </div>
    //   <button>Lets Battle</button>
    );
  }
}


const thumbnailStyle = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex'
}


export default CompareContainer;


