import React from 'react'

class Popup extends React.Component {

    messageWinner = () => {
        return (
        <div>
          <h1>Winner: {this.props.itemWinner.name}</h1>
          <img alt="oh no!" src={this.props.itemWinner.img_url}/>
          <button onClick={this.props.toggleClose}>close me</button>
      </div>)
    }
    
    
    
    messageTie = () => {
      return (
      <div>
          <h1>No Winner: The Battle Has Resulted in a Tie!</h1>
          {/* <img alt="oh no!" src={this.props.itemWinner.img_url}/> */}
          <button onClick={this.props.toggleClose}>close me</button>
        </div> 
    );}
  
        messageSelector =() => {
          if(this.props.itemWinner === null ){
            return this.messageTie()
          } else {
            return this.messageWinner()
          }
        }
    
    render() {
      return (
            <div>
              {this.messageSelector()}
            </div>
      );
    }
  }

  export default Popup