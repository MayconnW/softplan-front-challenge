import React from 'react';
import Layout from 'pages/_layout';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
} from 'react-router-dom';

interface RouteProps extends DefaultRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <DefaultRoute
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
