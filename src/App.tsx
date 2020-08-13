import dotenv from 'dotenv';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import history from 'services/history';
import AppProvider from 'context';

dotenv.config();

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AppProvider>
  );
};

export default App;
