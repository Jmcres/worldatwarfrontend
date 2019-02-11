import React from "react";
// import React, { Fragment } from 'react'

class Search extends React.Component {

  render(){
		// console.log("search props", this.props)
  	return (
  	  <div className="header">
    		SEARCH:	<input onChange={this.props.handleChange} type="text" value={this.props.inputValue} name="input"/>
						<button onClick={()=> this.props.toggleFormHidden()} > Add New Weapon</button>
  	  </div>
  	);
  }

};

export default Search;