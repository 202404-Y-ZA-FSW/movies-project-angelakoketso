import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/actors" component={ActorsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/actors/:id" component={SingleActorPage} />
        <Route path="/movies/:id" component={SingleMoviePage} />
        <Route path="/tv-shows" component={TVShowsPage} />
      </Switch>
      <Footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Help Center</h3>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Account</h3>
              <ul>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Create Account</a></li>
                <li><a href="#">Account Settings</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Social Media</h3>
              <ul>
                <li><a href="#">{/* Facebook */}</a></li>
                <li><a href="#">{/* Twitter */}</a></li>
                <li><a href="#">{/* Instagram */}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>{/* Copyright © 2023 Your Company Name. All rights reserved. */}</p>
        </div>
      </Footer>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));