import React from 'react';

const RenderLoginPage = ({ onChange, username, password }) => (
  <div id="page-wrapper">
    <div className="landing is-preload">
      <section id="banner">
        <form>
          <div className="inner">
            <h2>Login</h2>
            <label
              style={{
                maxWidth: '200px',
                margin: '40px auto',
              }}
            >
              username
              <input
                type="text"
                name="username"
                value={username}
                onChange={onChange}
              />
            </label>
            <label
              style={{
                maxWidth: '200px',
                margin: '40px auto',
              }}
            >
              password
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </label>
            <ul className="actions special">
              <li>
                <a href="#" className="button primary">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </form>
      </section>
    </div>
  </div>
);

export default RenderLoginPage;
