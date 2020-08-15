import React from 'react';

import { Container } from './styles';

interface CardContent {
  flagUrl: string;
  countryName: string;
  capitalName: string;
  onClick?(): void;
}

const Card: React.FC<CardContent> = ({
  flagUrl,
  countryName,
  capitalName,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
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
