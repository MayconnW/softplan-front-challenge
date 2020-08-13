import dotenv from 'dotenv';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import history from 'services/history';

dotenv.config();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
