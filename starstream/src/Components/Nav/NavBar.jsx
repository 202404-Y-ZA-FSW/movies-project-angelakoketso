import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Navbar = () => {
  const [genres, setGenres] = React.useState([]);
  const [movies, setMovies] = React.useState([]);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <DropdownButton id="dropdown-basic-button" title="Genres">
                {genres.map(genre => (
                  <Dropdown.Item key={genre.id} href={`/movies?genre=${genre.name}`}>
                    {genre.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </li>
            <li className="nav-item dropdown">
              <DropdownButton id="dropdown-basic-button" title="Movies">
                {movies.map(movie => (
                  <Dropdown.Item key={movie.id} href={`/movies/${movie.id}`}>
                    {movie.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;