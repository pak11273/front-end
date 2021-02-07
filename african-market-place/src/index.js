// import './assets/css/main.css';
import './assets/sass/main.scss';

import App from './App';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './utils/UserContext';
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
      <Provider store={store}>
        <UserProvider>
          <div className="landing is-preload">
            <div id="page-wrapper">
              <Header />
              <App />
            </div>
          </div>
        </UserProvider>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
