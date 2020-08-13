import React from 'react';

import { ReactSVG } from 'react-svg';
import logo from 'assets/images/logo.svg';
import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <ReactSVG src={logo} />
    </Container>
  );
};

export default Layout;
