import React, { useCallback } from 'react';
import history from 'services/history';

import { Back } from 'components/shared';
import { FiEdit, FiMapPin, FiMap, FiActivity } from 'react-icons/fi';
import { Container, Card } from './styles';

const mock = {
  flagUrl:
    'https://storage.vendavall.com.br/avatar/1597345196.5f358dac81f518.77815030.png',
  countryName: 'Brazil',
  capitalName: 'Brasília',
  area: '200.000.150',
  population: '255.500.147',
};

const Main: React.FC = () => {
  const handleEditClick = useCallback(() => {
    history.push('/edit');
  }, []);

  return (
    <Container>
      <Back />
      <Card>
        <FiEdit size={28} onClick={handleEditClick} />
        <div>
          <img src={mock.flagUrl} alt={`${mock.countryName} flag`} />
          <h3>{mock.countryName}</h3>
        </div>
        <ul>
          <li>
            <FiMap size={24} />
            <span>Capital: </span>
            <strong>{mock.capitalName}</strong>
          </li>
          <li>
            <FiMapPin size={24} />
            <span>Área: </span>
            <strong>{mock.area}</strong>
          </li>
          <li>
            <FiActivity size={24} />
            <span>População: </span>
            <strong>{mock.population}</strong>
          </li>
          <li>
            <FiActivity size={24} />
            <span>População: </span>
            <strong>{mock.population}</strong>
          </li>
        </ul>
        <span>MAPA</span>
      </Card>
    </Container>
  );
};

export default Main;
