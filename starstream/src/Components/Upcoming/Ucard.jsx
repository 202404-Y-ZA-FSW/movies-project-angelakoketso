import React from "react";

const Ucard = ({ item: { id, poster_path, title, vote_average, release_date } }) => {
  return (
    <div className='box'>
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
    </div>
  );
};

export default Ucard;
