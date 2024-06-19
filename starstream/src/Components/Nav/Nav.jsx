import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseGenres from '../Hooks/UseGenre';
import './Nav.css';

const Nav = () => {
    const [mobile, setMobile] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { genres, loading: genresLoading, error: genresError } = UseGenres();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=d1296bd66e7521efa2f1facf5b9ea2fe&query=${searchTerm}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMovieCategoryClick = (category) => {
        navigate(`/movies?category=${category}`);
        setMobile(false);
    };

    const handleGenreClick = (genreId) => {
        navigate(`/movies?genre=${genreId}`);
        setMobile(false);
    };

    return (
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                    <div className='logo'>
                        <img src="./img/StarStream.png" alt='StarStream' />
                    </div>
                    <ul className={mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='dropdown'>
                            <span>Genres</span>
                            <div className='dropdown-content'>
                                {genresLoading && <span>Loading...</span>}
                                {genresError && <span>Error: {genresError}</span>}
                                {genres.map(genre => (
                                    <span key={genre.id} onClick={() => handleGenreClick(genre.id)}>{genre.name}</span>
                                ))}
                            </div>
                        </li>
                        <li className='dropdown'>
                            <span>Movies</span>
                            <div className='dropdown-content'>
                                <span onClick={() => handleMovieCategoryClick('top_rated')}>Top Rated</span>
                                <span onClick={() => handleMovieCategoryClick('popular')}>Popular</span>
                                <span onClick={() => handleMovieCategoryClick('latest')}>Latest</span>
                                <span onClick={() => handleMovieCategoryClick('now_playing')}>Now Playing</span>
                                <span onClick={() => handleMovieCategoryClick('upcoming')}>Upcoming</span>
                            </div>
                        </li>
                        <li>
                            <Link to='/actors'>Actors</Link>
                        </li>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!mobile)}>
                        {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
                <div className='account flexSB'>
                    <form onSubmit={handleSearch} className='search-form'>
                        <input
                            type='text'
                            placeholder='Search for a movie or actor...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {/* <button type='submit'><i className='fa fa-search'></i></button> */}
                    </form>
                    {loading && <div className='loading'>Loading...</div>}
                    {error && <div className='error'>Error: {error}</div>}
                    {searchResults.length > 0 && (
                        <div className='search-results'>
                            {searchResults.map(result => (
                                <Link key={result.id} to={`/${result.media_type === 'movie' ? 'movie' : 'actor'}/${result.id}`} className='search-result-item'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path || result.profile_path}`} alt={result.title || result.name} />
                                    <span>{result.title || result.name}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                    {/* <i className='fas fa-bell'></i>
                    <i className='fas fa-user'></i>
                    <button>Subscribe Now</button> */}
                </div>
            </div>
        </header>
    );
};

export default Nav;