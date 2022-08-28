import React from 'react';

import { nanoid } from 'nanoid/async';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      year: '',
      director: '',
      imageUrl: '',
    };
  }

  handleChange = (e) => {
    const { currentTarget: el } = e;

    this.setState(() => ({
      [el.name]: el.value,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const movie = {
      id: await nanoid(),
      ...this.state,
    };
    this.props.addMovie(movie);
  };

  render() {
    const { name, year, director, imageUrl } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          name="year"
          id="year"
          min="1900"
          max="2050"
          value={year}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          name="director"
          id="director"
          value={director}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={imageUrl}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Add movie</button>
      </form>
    );
  }
}

export default EditMovie;
