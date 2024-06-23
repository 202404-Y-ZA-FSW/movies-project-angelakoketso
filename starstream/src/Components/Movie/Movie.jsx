import React, { useEffect, useState } from 'react';

const Movie = ({ setFetchedMovies }) => {
  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d1296bd66e7521efa2f1facf5b9ea2fe')
      .then(response => response.json())
      .then(json => setFetchedMovies(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return null;
};

export default Movie;

