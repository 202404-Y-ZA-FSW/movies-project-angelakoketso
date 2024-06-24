import React, { useState, useEffect } from 'react';
import './SingleMoviePage.css';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});
  const movieId = 1; // Replace with the actual movie ID

  const fetchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className='container'>
      <h1>{movie.title}</h1>
      <div className='content'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default SingleMoviePage;