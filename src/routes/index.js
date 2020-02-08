import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Plans from '../pages/Plans';
import Registers from '../pages/Registers';
import Help from '../pages/Help';
import CreateStudent from '../pages/CreateStudent';
import CreatePlan from '../pages/CreatePlan';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/student/new" exact component={CreateStudent} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/new" component={CreatePlan} isPrivate />
      <Route path="/registers" component={Registers} isPrivate />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
