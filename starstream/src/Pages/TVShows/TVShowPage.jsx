import React, { useState, useEffect } from 'react';
import './TVShowsPage.css';

const TVShowsPage = () => {
  const [tvShows, setTVShows] = useState([]);
  const apiKey = 'd1296bd66e7521efa2f1facf5b9ea2fe';

  const fetchTVShows = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`);
    const data = await response.json();
    setTVShows(data.results);
  };

  useEffect(() => {
    fetchTVShows();
  }, []);

  return (
    <div className='container'>
      <h1>TV Shows</h1>
      <div className='content'>
        {tvShows.map(tvShow => (
          <div key={tvShow.id} className='tv-show-card'>
            <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} alt={tvShow.name} />
            <h3>{tvShow.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsPage;