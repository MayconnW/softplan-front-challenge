import React from 'react';
import { Switch } from 'react-router-dom';

import Details from 'pages/Details';
import Main from 'pages/Main';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/details" component={Details} />
  </Switch>
);

export default Routes;
