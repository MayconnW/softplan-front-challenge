import React from 'react';
import { Switch } from 'react-router-dom';

import Details from 'pages/Details';
import Edit from 'pages/Edit';
import Main from 'pages/Main';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/details" component={Details} />
    <Route exact path="/edit" component={Edit} />
  </Switch>
);

export default Routes;
