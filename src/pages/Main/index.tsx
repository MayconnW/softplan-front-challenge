import React, { useCallback, useState, useEffect } from 'react';
import history from 'services/history';

import { FiSearch } from 'react-icons/fi';
import Input from 'components/shared/Input';
import Card from 'components/main/Card';
import useCountry from 'hooks/useCountry';
import { Country } from 'interfaces/Country';
import useDebounce from 'hooks/useDebounce';
import { Container, CardsGrid } from './styles';

const Main: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const debounceInput = useDebounce<string>(searchInput);

  const { countries: data } = useCountry();

  useEffect(() => {
    setCountries(data);
  }, [data]);

  useEffect(() => {
    setCountries(
      data.filter(item =>
        item.name.toLowerCase().includes(debounceInput.toLowerCase()),
      ),
    );
  }, [debounceInput, data]);

  const handleCardClick = useCallback((id: string) => {
    history.push(`/details/${id}`);
  }, []);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Type the Country name"
        value={searchInput}
        onChange={e => setSearchInput(e.currentTarget.value)}
        icon={FiSearch}
        data-testid="_searchInput"
      />
      <CardsGrid>
        {countries.map(item => (
          <Card
            key={item.name}
            flagUrl={item.flag.svgFile}
            countryName={item.name}
            capitalName={item.capital}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </CardsGrid>
    </Container>
  );
};

export default Main;
