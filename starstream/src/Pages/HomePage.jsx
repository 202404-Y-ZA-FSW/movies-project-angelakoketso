import React, { useState, useEffect } from 'react';
import useMovies from '../Components/Hooks/UseMovie';
import { Link } from 'react-router-dom';
import './HomePage.css';  

const HomePage = () => {
  const { trendingMovies, popularMovies, latestMovies, loading, error } = useMovies();
  const [randomTrendingMovies, setRandomTrendingMovies] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % trendingMovies.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [trendingMovies]);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      const getRandomMovies = () => {
        const shuffled = trendingMovies.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
      };
      setRandomTrendingMovies(getRandomMovies());
    }
  }, [trendingMovies, index]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='home-page'>
      <div className='movie-section trending-movies'>
        <h2>Trending Movies</h2>
        <div className='movie-grid'>
          {randomTrendingMovies.map(movie => (
            <div key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='movie-section latest-movies'>
        <h2>Latest Movies</h2>
        <div className='movie-grid'>
          {latestMovies.map(movie => (
            <div key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='movie-section popular-movies'>
        <h2>Popular Movies</h2>
        <div className='movie-grid'>
          {popularMovies.map(movie => (
            <div key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
