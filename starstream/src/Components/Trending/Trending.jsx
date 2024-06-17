import React from 'react';

const Trending = ({ items }) => {
  return (
    <div className="trending-grid">
      {items.map(item => (
        <div key={item.id} className="trending-card">
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Trending;