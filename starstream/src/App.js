import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SingleMoviePage from './pages/SingleMoviePage';
import ActorsPage from './pages/ActorsPage';
import SingleActorPage from './pages/SingleActorPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/actors/:id" element={<SingleActorPage />} />
      </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;
