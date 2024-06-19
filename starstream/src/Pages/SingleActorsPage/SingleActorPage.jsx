import React from 'react';
import './SingleActorPage.css';

const SingleActorPage = () => {
  const [actor, setActor] = useState({});

  const fetchActor = async () => {
    const response = await fetch(`(link unavailable));
    const data = await response.json();
    setActor(data);
  };

  useEffect(() => {
    fetchActor();
  }, []);

  return (
    <div className='container'>
      <h1>{actor.name}</h1>
      <div className='content'>
        <img src={`(link unavailable)} alt={actor.name} />
        <h3>Biography:</h3>
        <p>{actor.biography}</p>
      </div>
    </div>
  );
};

export default SingleActorPage;