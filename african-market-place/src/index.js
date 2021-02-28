import './assets/sass/main.scss';

import App from './App';
import { Footer } from './components/common/Footer';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './utils/UserContext';
import { store } from 'src/state/store';

// if (
//   process.env.NODE_ENV !== 'production' ||
//   process.env.NODE_ENV === 'development'
// ) {
const { worker } = require('./mocks/browser');
worker.start();
// }

// import { LoadingComponent } from './components/common';
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <UserProvider>
          <div className="landing is-preload">
            <div id="page-wrapper">
              <Header />
              <App />
              <Footer />
            </div>
          </div>
        </UserProvider>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
