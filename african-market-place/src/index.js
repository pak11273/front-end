import './assets/css/main.css';

import App from './App';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './utils/reducer';

// import { LoadingComponent } from './components/common';
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <div className="landing is-preload">
        <div id="page-wrapper">
          <Header />
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      </div>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
