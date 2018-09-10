import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    let arr = movieData.map(mov => {
      return (
        <MovieCard
          title={mov.title}
          IMDBRating={mov.IMDBRating}
          genres={mov.genres}
          poster={mov.poster}
        />
      );
    });
    return arr;
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
