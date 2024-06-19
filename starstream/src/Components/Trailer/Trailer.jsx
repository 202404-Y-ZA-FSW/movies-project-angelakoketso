import React from 'react'

const Trailer = ({trailers}) => {
    if (!trailers || trailers.length === 0) return null;
  return (
    <div>
      <h3>Trailers:</h3>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailers[0].key}`}
        title="Trailer"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Trailer
