import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import SingleActorPage from './pages/SingleActorPage';
import SingleMoviePage from './pages/SingleMoviePage';
import TVShowsPage from './pages/TVShowsPage';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/actors">Actors</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tv-shows">TV Shows</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/actors" component={ActorsPage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/actors/:id" component={SingleActorPage} />
          <Route path="/movies/:id" component={SingleMoviePage} />
          <Route exact path="/tv-shows" component={TVShowsPage} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
