import React from "react";


class Search extends React.Component {
  //your code here

  render(){
		
  	return (
  	  <div className="header">
    		SEARCH:	<input onChange={this.props.handleChange} type="text" value={this.props.inputValue} name="input"/>
  	  </div>
  	);
  }

};

export default Search;