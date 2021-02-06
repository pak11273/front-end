import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

const Header = props => {
  useEffect(() => {
    let cb = function (e) {
      let menu = document.querySelector('#menu');
      let nav = document.querySelector('#nav');
      if (!menu.contains(e.target) && !nav.contains(e.target)) {
        menu.style.transform = 'translateX(20em)';
      }
    };
    document.addEventListener('click', cb);
    return (
      () => {
        document.removeEventListener('click', cb);
      },
      []
    );
  });

  let loggedIn = localStorage.getItem('token');
  console.log(loggedIn);
  const NotLoggedIn = (
    <>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
    </>
  );

  const handleClick = () => {
    let menu = document.querySelector('#menu');
    menu.style.transform = 'translateX(0)';
  };

  return (
    <header id="header" className="alt">
      <h1>
        <Link to="/">African Marketplace</Link>
      </h1>
      <nav id="nav">
        <ul>
          <li className="special">
            <a href="#menu" className="menuToggle" onClick={handleClick}>
              <span>Menu</span>
            </a>
            <div id="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="team.html">Meet the Team</a>
                    </li> */}
                {/* {loggedIn !== 'null' && <NotLoggedIn />} */}
                {loggedIn != null && (
                  <li>
                    {' '}
                    <Link to="/logout">Log Out</Link>{' '}
                  </li>
                )}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
