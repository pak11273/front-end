import { Route, Switch } from 'react-router-dom';

import { LandingPage } from './components/pages/Landing';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';
import React from 'react';
import { SignUpPage } from './components/pages/SignUp';

export default function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();

  return (
    <Switch>
      {/* any of the routes you need secured should be registered as SecureRoutes */}
      <Route path="/" exact component={() => <LandingPage />} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
