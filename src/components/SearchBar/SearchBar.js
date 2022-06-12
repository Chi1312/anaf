import React from "react";

class SearchBar extends React.Component {
  state = {
    focus: true,
  };

  focus = (event) => {
    event.preventDefault();
    this.setState({
      focus: !this.state.focus,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <input
            type="text"
            className={this.state.focus && "focused"}
            placeholder="Search"
          />
          <button
            onClick={this.focus}
            id="search-button"
            className={this.state.focus && "active"}
          >
            🔍
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
