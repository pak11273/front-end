import React from 'react';

const RenderSignUpPage = ({ onChange, username, password, confirm, email }) => (
  <div id="page-wrapper">
    <div className="landing is-preload">
      <section id="banner">
        <form>
          <div className="inner">
            <h2>Sign Up</h2>
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
              email
              <input
                type="email"
                name="email"
                value={email}
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
                value=""
                onChange={onChange}
              />
            </label>
            <label
              style={{
                maxWidth: '200px',
                margin: '40px auto',
              }}
            >
              confirm password
              <input
                type="password"
                name="confirm"
                value=""
                onChange={onChange}
              />
            </label>
            <ul className="actions special">
              <li>
                <a href="#" className="button primary">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </form>
      </section>
    </div>
  </div>
);

export default RenderSignUpPage;
