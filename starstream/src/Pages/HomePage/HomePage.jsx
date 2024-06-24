import React, { useState, useEffect } from 'react';
import Trending from '../Components/Trending/Trending';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=d1296bd66e7521efa2f1facf5b9ea2fe');
    const data = await response.json();
    setTrendingMovies(data.results);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div style={{ backgroundColor: '#000000' }}>
      <Trending items={trendingMovies} />
    </div>
  );
};

export default HomePage;