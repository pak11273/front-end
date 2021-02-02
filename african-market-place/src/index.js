import './assets/css/main.css';

import App from './App';
import { Header } from './components/common';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import { LoadingComponent } from './components/common';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <div className="landing is-preload">
        <div id="page-wrapper">
          <Header />
          <App />
        </div>
      </div>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
