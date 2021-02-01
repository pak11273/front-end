import { Route, Switch } from 'react-router-dom';

import { LandingPage } from './components/pages/Landing';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';
import React from 'react';
import { SignUpPage } from './components/pages/SignUp';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={() => <LandingPage />} />
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route component={NotFoundPage} />
    </Switch>
  );
}
