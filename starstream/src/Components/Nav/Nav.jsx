import React, { useState } from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [mobile, setMobile] = useState(false);

    return (
        <header>
            <div className='container flexSB'>
                <nav className="flexSB">
                    <div className='logo'>
                        <img src='./img/StarStream.png' alt='StarStream Logo' />
                    </div>
                    <ul className={mobile ? "navMenu" : "flexSB"} onClick={() => setMobile(false)}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/movies'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/genre'>Genre</Link>
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
                    <i className='fa fa-search'></i>
                    <i className='fa fa-bell'></i>
                    <i className='fa fa-user'></i>
                    <button>Subscribe Now</button>
                </div>
            </div>
        </header>
    );
}

export default Nav;
