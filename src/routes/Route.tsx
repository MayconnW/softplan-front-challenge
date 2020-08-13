import React from 'react';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
} from 'react-router-dom';

interface RouteProps extends DefaultRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return <DefaultRoute {...rest} render={() => <Component />} />;
};

export default Route;
