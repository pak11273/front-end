import React, { useEffect } from 'react';
import { useUpdateLogin, useUser } from '../../utils/UserContext';

import { Link } from 'react-router-dom';

const Header = props => {
  const loggedIn = useUser();
  const removeToken = useUpdateLogin();
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

  const logout = () => {
    removeToken();
  };

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
                {!loggedIn && (
                  <li>
                    {' '}
                    <Link to="/signup" onClick={logout}>
                      Sign Up
                    </Link>{' '}
                  </li>
                )}
                {!loggedIn && (
                  <li>
                    {' '}
                    <Link to="/login" onClick={logout}>
                      Log In
                    </Link>{' '}
                  </li>
                )}
                {loggedIn && (
                  <li>
                    {' '}
                    <Link to="/logout" onClick={logout}>
                      Log Out
                    </Link>{' '}
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
