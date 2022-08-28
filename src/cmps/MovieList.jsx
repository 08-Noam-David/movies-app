import React from 'react';

import SearchBar from './SearchBar.jsx';
import Preview from './Preview.jsx';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        <SearchBar />
        <ul>
          {movies.map((m) => (
            <li>
              <Preview movie={m} key={m.id} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MovieList;
