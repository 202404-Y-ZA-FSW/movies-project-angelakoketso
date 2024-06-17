import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
  const { id } = useParams();
  return <div>Single Movie Page - {id}</div>;
};

export default SingleMoviePage;
