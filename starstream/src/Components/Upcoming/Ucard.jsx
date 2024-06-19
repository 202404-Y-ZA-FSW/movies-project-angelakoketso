import React from 'react';
import { Link } from 'react-router-dom';
import './Ucard.css';

const Ucard = ({ item: { id, poster_path, title, vote_average, release_date } }) => {
  return (
    <Link to={`/movie/${id}`} className='box'>
      <div className='coverImage'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      </div>
      <div className='content'>
        <h2>{title}</h2>
        <div className='rating'>
          <i className='fa fa-star'></i>
          <span>{vote_average}</span>
        </div>
        <span className='release_date'>{release_date}</span>
      </div>
    </Link>
  );
};

export default Ucard;
