// src/Pages/MoviesPage.js
import React, { useState, useEffect } from 'react';
import Ucard from '../Components/Upcoming/Ucard';
import './MoviePage.css'; // Add any specific styling if needed

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d1296bd66e7521efa2f1facf5b9ea2fe');
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='container'>
      <h1>Movies</h1>
      <div className='content'>
        {movies.map(movie => (
          <Ucard key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
