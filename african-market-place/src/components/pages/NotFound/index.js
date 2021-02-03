import { Link } from 'react-router-dom';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        height: '100vh',
        marginTop: '100px',
      }}
    >
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};
