import React from 'react';
import './TVShowsPage.css';

const TVShowsPage = () => {
  const [tvShows, setTVShows] = useState([]);

  const fetchTVShows = async () => {
    const response = await fetch('(link unavailable)');
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
          <div key={(link unavailable)} className='tv-show-card'>
            <img src={`(link unavailable)} alt={tvShow.name} />
            <h3>{tvShow.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsPage;