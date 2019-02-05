import React from "react";
// import React, { Fragment } from 'react'

class Search extends React.Component {

//   state = {
//     search: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//       search: e.target.value
//     }, () => {
//       this.props.filterCategories(this.state.search)
//     })
//   }

//   render() {
//     return (
//       <Fragment>
//         {/* <Navbar brand='Recipe App' right /> */}

//         <div className='container'>
//           <h5>Filter by Category:</h5>
//           <input type='text' onChange={this.handleChange} value={this.state.search} />
//         </div>
//       </Fragment>
//     )
//   }

// }
  render(){
		
  	return (
  	  <div className="header">
    		SEARCH:	<input onChange={this.props.handleChange} type="text" value={this.props.inputValue} name="input"/>
  	  </div>
  	);
  }

};

export default Search;