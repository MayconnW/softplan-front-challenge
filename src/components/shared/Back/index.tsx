import React, { useCallback } from 'react';
import history from 'services/history';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

const Back: React.FC = () => {
  const handleClick = useCallback(() => {
    history.goBack();
  }, []);

  return (
    <Container onClick={handleClick}>
      <div>
        <FiArrowLeft size={32} />
        <span>Back</span>
      </div>
    </Container>
  );
};

export default Back;
