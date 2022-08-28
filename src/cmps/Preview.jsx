import React from 'react';

class Preview extends React.Component {
  render() {
    const { name, director, year, imageUrl } = this.props.movie;

    return (
      <article>
        {name} ({year})<br />
        Director: {director}
        <img src={imageUrl} />
      </article>
    );
  }
}

export default Preview;
