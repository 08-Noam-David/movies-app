import React from 'react';
import SearchBar from './SearchBar.jsx';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
        <SearchBar />
    );
  }
}

export default MovieList;
