import { Route, Switch } from 'react-router-dom';

import { CardEdit } from './components/common/CardEdit';
import Dashboard from './components/pages/Dashboard';
import { LandingPage } from './components/pages/Landing';
import { LoginPage } from './components/pages/Login';
import Marketplace from './components/pages/Marketplace';
import { NotFoundPage } from './components/pages/NotFound';
import { PrivateRoute } from './utils/PrivateRout';
import React from 'react';
import SignUpCompleted from './components/pages/SignUpCompleted';
import { SignUpPage } from './components/pages/SignUp';

export default function mainApp() {
  return (
    <Switch>
      <Route path="/" exact component={() => <LandingPage />} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/success" component={SignUpCompleted} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/marketplace" component={Marketplace} />
      <PrivateRoute exact path="/edititem" component={CardEdit} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
