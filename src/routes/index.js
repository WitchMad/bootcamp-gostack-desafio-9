import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Plans from '../pages/Plans';
import Registers from '../pages/Registers';
import Help from '../pages/Help';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/registers" component={Registers} isPrivate />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
