import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import SingleMoviePage from './pages/SingleMoviePage.jsx';
import ActorsPage from './pages/ActorsPage.jsx';
import SingleActorPage from './pages/SingleActorPage.jsx';
import './App.css';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" component={<HomePage />} />
        <Route path="/movies" component={<MoviesPage />} />
        <Route path="/movies/:id" component={<SingleMoviePage />} />
        <Route path="/actors" component={<ActorsPage />} />
        <Route path="/actors/:id" component={<SingleActorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
