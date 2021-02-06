import { Route, Switch } from 'react-router-dom';

import { CardAdd } from './components/common/CardAdd';
import { CardEdit } from './components/common/CardEdit';
import { LandingPage } from './components/pages/Landing';
import { LoginPage } from './components/pages/Login';
import { LogoutPage } from './components/pages/Logout';
import Marketplace from './components/pages/Marketplace';
import { NotFoundPage } from './components/pages/NotFound';
import { PrivateRoute } from './utils/PrivateRout';
import React from 'react';
import SignUpCompleted from './components/pages/SignUpCompleted';
import { SignUpPage } from './components/pages/SignUp';
import UserDashboard from './components/pages/Dashboard';

export default function mainApp() {
  return (
    <Switch>
      <Route path="/" exact component={() => <LandingPage />} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/success" component={SignUpCompleted} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <PrivateRoute exact path="/dashboard" component={UserDashboard} />
      <PrivateRoute exact path="/marketplace" component={Marketplace} />
      <PrivateRoute exact path="/edititem" component={CardEdit} />
      <PrivateRoute exact path="/additem" component={CardAdd} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
