import React from 'react';
import { MovieItem, Loading } from './';
import './MovieList.css';

const MovieList = (props) => {
  const { movies, loading } = props;

  return loading ? <Loading /> : (
    <div className="movieList">
      { movies.length > 0 &&
        <div className="movieList-content">{ movies.map( movie => <MovieItem key={movie.id} movie={movie} /> )}</div>
      }
    </div>
  );
};

export { MovieList };
