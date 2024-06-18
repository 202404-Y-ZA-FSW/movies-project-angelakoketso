import React from 'react';
import './SingleMoviePage.css';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const response = await fetch(`(link unavailable));
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
        <img src={`(link unavailable)} alt={movie.title} />
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default SingleMoviePage;