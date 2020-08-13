import React from 'react';
import { Provider } from 'react-redux';
import store from 'state/store';

const AppProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;