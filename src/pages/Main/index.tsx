import React, { useCallback } from 'react';
import history from 'services/history';

import { FiSearch } from 'react-icons/fi';
import Input from 'components/shared/Input';
import Card from 'components/main/Card';
import { Container, CardsGrid } from './styles';

const mock = [
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
  {
    flagUrl:
      'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
    countryName: 'Brazil',
    capitalName: 'Brasília',
  },
];

const Main: React.FC = () => {
  const handleCardClick = useCallback(() => {
    history.push('/details');
  }, []);

  return (
    <Container>
      <Input type="text" placeholder="Type the Country name" icon={FiSearch} />
      <CardsGrid>
        {mock.map(item => (
          <Card key={item.countryName} {...item} onClick={handleCardClick} />
        ))}
      </CardsGrid>
    </Container>
  );
};

export default Main;
