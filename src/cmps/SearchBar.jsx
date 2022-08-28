import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => this.props.onSearch(e.target.value.trim())}
      />
    );
  }
}

export default SearchBar;
