import React from 'react';
import Ucard from '../../../Upcoming/Ucard';

const RelatedMovies = ({ relatedMovies }) => {
  if (!relatedMovies || !Array.isArray(relatedMovies.results)) {
    return <div>No related movies available.</div>;
  }

  return (
    <div className="related-movies">
      <h2>Related Movies</h2>
      <div className="related-movies-list">
        {relatedMovies.results.slice(0, 5).map(movie => (
          <Ucard key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
