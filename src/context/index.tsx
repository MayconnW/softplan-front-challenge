import React from 'react';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import store from 'state/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'services/appolo';
import Apollo from './Apollo';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Apollo />
      <ThemeContext.Provider value={defaultTheme}>
        <Provider store={store}>{children}</Provider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
};

export default AppProvider;
