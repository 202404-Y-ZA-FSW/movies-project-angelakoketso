import React, { useState, useEffect } from 'react';
import './SingleActorPage.css';

const SingleActorPage = () => {
  const [actor, setActor] = useState({});
  const actorId = 1; // Replace with the actual actor ID

  const fetchActor = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`);
    const data = await response.json();
    setActor(data);
  };

  useEffect(() => {
    fetchActor();
  }, []);

  return (
    <div className='container'>
      <h1 style={{ color: 'green' }}>{actor.name}</h1>
      <div className='content'>
        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
        <h3>Biography:</h3>
        <p>{actor.biography}</p>
      </div>
    </div>
  );
};

export default SingleActorPage;