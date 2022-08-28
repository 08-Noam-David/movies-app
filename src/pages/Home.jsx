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
      movieToEdit: null,
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

  onAddMovie = () => {
    this.setState(() => ({
      isAddMode: true,
    }));
  };

  addMovie = (movie) => {
    const movies = [...this.state.movies, movie];
    this.setState(() => ({
      movies,
      isAddMode: false
    }));
  };

  render() {
    const { movies, isAddMode, movieToEdit } = this.state;

    return (
      <main>
        <h1>Movies App</h1>
        {!isAddMode && !movieToEdit ? (
          <MovieList
            movies={movies}
            onSearch={this.onSearch}
            onAddMovie={this.onAddMovie}
          />
        ) : (
          <EditMovie addMovie={this.addMovie} />
        )}
      </main>
    );
  }
}

export default Home;
