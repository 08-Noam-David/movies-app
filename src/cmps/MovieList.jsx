import React from 'react';

import SearchBar from './SearchBar.jsx';
import Preview from './Preview.jsx';

class MovieList extends React.Component {
  render() {
    const { movies, onSearch, onAddMovie } = this.props;

    return (
      <section>
        <SearchBar onSearch={onSearch} />
        <button role="button" onClick={onAddMovie}>+ Add new movie</button>
        <ul>
          {movies.map((m) => (
            <li key={m.id}>
              <Preview movie={m} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MovieList;
