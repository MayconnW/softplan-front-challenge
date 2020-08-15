import React from 'react';

import { Container } from './styles';

interface CardContent {
  flagUrl: string;
  countryName: string;
  capitalName: string;
}

const Card: React.FC<CardContent> = ({ flagUrl, countryName, capitalName }) => {
  return (
    <Container>
      <img src={flagUrl} alt={countryName} />
      <span>
        Country: <strong>{countryName}</strong>
      </span>
      <span>
        Capital: <strong>{capitalName}</strong>
      </span>
    </Container>
  );
};

export default Card;
