import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddTimezone from './AddTimezone';

const Pages = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/add" component={AddTimezone} />
    </Switch>
  </main>
);

export default Pages;
