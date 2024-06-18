import React, {  useState } from 'react';
import "./Nav.css";


const Nav = () => {
    const [mobile, setMobile] = useState(false);

    return (
        <div>
            <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src="./img/StarStream.png" alt='' />
            </div>
            <ul className={mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Actors</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!mobile)}>
              {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
        </div>
    );
}

export default Nav;
