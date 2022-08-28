import React from 'react';

import MovieList from '../cmps/MovieList.jsx';
import EditMovie from '../cmps/EditMovie.jsx';

import initialMovies from '../initialMovies.js';

class Home extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      movies: initialMovies,
      isAddMode: false,
      movieToAdd: null,
    };
  }

  render() {
    const { movies, isAddMode, movieToAdd } = this.state;

    return (
      <div>
        <h1>Movies App</h1>
        {!isAddMode && !movieToAdd ? (
          <MovieList movies={movies} />
        ) : (
          <EditMovie />
        )}
      </div>
    );
  }
}

export default Home;
