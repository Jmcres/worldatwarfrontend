import React from "react";
// import React, { Fragment } from 'react'

class SearchBar extends React.Component {
  render() {
    // console.log("search props", this.props)
    return (
      <div className="search">
        <br />
        <br />
        SEARCH:{" "}
        <input
          onChange={this.props.handleChange}
          type="text"
          value={this.props.inputValue}
          name="input"
        />
        <br />
        <br />
        <br />
        <button onClick={() => this.props.toggleFormHide()}>
          Add New Weapon
        </button>
        <br />
      </div>
    );
  }
}

export default SearchBar;
