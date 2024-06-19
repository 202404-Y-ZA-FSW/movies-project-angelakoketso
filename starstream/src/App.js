import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviePage';
import ActorsPage from './Pages/ActorsPage';
import Nav from './Components/Nav/Nav';
import SingleActorPage from './Pages/SingleActorsPage';
import SingleMoviePage from './Pages/SingleMoviePage';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/movie/:movieId" element={<SingleMoviePage />} />
        <Route path="/actor/:actorId" element={<SingleActorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
