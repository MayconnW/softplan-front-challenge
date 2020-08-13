import React from 'react';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import store from 'state/store';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <Provider store={store}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

export default AppProvider;
