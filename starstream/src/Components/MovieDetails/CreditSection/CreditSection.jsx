import React from 'react';
import './CreditSection.css';

const CreditSection = ({ credits }) => {
  if (!credits) return null;

  const mainActors = credits.cast.slice(0, 5);

  return (
    <div className='credit-section'>
      <h2>Main Actors</h2>
      <div className='actors'>
        {mainActors.map(actor => (
          <div key={actor.id} className='actor'>
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditSection;
