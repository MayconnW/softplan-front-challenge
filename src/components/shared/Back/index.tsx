import React, { useCallback } from 'react';
import history from 'services/history';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

interface Props {
  location?: string;
}

const Back: React.FC<Props> = ({ location }) => {
  const handleClick = useCallback(() => {
    if (location) {
      history.push(location);
      return;
    }
    history.goBack();
  }, [location]);

  return (
    <Container onClick={handleClick} data-testid="_backComponent">
      <div>
        <FiArrowLeft size={32} />
        <span>Back</span>
      </div>
    </Container>
  );
};

export default Back;
