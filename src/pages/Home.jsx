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

  onSearch = (query) => {
    this.setState(() => ({
      movies: this.searchMovies(query),
    }));
  };

  searchMovies = (query) =>
    query
      ? initialMovies.filter((movie) =>
          movie.name.toLowerCase().includes(query.toLowerCase())
        )
      : initialMovies;

  render() {
    const { movies, isAddMode, movieToAdd } = this.state;

    return (
      <main>
        <h1>Movies App</h1>
        {!isAddMode && !movieToAdd ? (
          <MovieList movies={movies} onSearch={this.onSearch} />
        ) : (
          <EditMovie />
        )}
      </main>
    );
  }
}

export default Home;
