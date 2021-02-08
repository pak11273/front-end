import { Link } from 'react-router-dom';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <div id="page-wrapper">
      <div className="landing is-preload" id="login">
        <section id="banner">
          <div className="inner">
            <div
              style={{
                display: 'flex',
                flexFlow: 'column wrap',
                alignItems: 'center',
              }}
            >
              <h1>404 Page Not Found</h1>
              <Link to="/">
                <button>Back To Home</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
