import React, { useCallback } from 'react';
import Input from 'components/shared/Input';
import { FiCamera, FiMapPin, FiMap, FiActivity } from 'react-icons/fi';
import { Button, Back } from 'components/shared';
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
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('ops');
  }, []);
  return (
    <Container>
      <Back />
      <Card>
        <div>
          <img src={mock.flagUrl} alt={`${mock.countryName} flag`} />
          <FiCamera size={24} />
        </div>
        <form onSubmit={onSubmit}>
          <Input icon={FiMap} label="Country" />
          <Input icon={FiMapPin} label="Capital" />
          <Input icon={FiActivity} label="Area" />
          <Input icon={FiActivity} label="Population" />
          <Button type="submit">Salvar</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Main;
