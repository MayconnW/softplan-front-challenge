import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCountry from 'hooks/useCountry';
import history from 'services/history';
import { Country } from 'interfaces/Country';

import MainCard, { CardContent } from 'components/main/Card';
import { Back } from 'components/shared';
import { FiEdit, FiMapPin, FiMap, FiActivity } from 'react-icons/fi';
import { Container, Card, CardsGrid } from './styles';

interface Params {
  id: string;
}

const Main: React.FC = () => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [countriesAround, setCountriesAround] = useState<CardContent[]>([]);
  const { id } = useParams<Params>();
  const { getCountry, getCountryByName } = useCountry();

  useEffect(() => {
    setCountry(getCountry(id));
  }, [id, getCountry]);

  useEffect(() => {
    if (!country) return;
    setCountriesAround(
      country.distanceToOtherCountries.map(item => {
        const data = getCountryByName(item.countryName);
        return {
          flagUrl: data?.flag.svgFile || '',
          countryName: `${item.countryName} (${Math.ceil(
            item.distanceInKm,
          )}km)`,
          capitalName: data?.capital || '',
          onClick: () => {
            history.push(`/details/${data?.id}`);
          },
        };
      }),
    );
  }, [country, getCountryByName]);

  const handleEditClick = useCallback(() => {
    if (!country) return;
    history.push(`/edit/${country.id}`);
  }, [country]);

  return (
    <Container>
      <Back location="/" />
      {country && (
        <Card data-testid="_showCardContainer" key={`country-${country.id}`}>
          <FiEdit size={28} onClick={handleEditClick} data-testid="_editTest" />
          <div>
            <img src={country.flag.svgFile} alt={`${country.name} flag`} />
            <h3>{country.name}</h3>
          </div>
          <ul>
            <li>
              <FiMap size={24} />
              <span>Capital </span>
              <strong>{country.capital}</strong>
            </li>
            <li>
              <FiMapPin size={24} />
              <span>Área </span>
              <strong>{country.area}</strong>
            </li>
            <li>
              <FiActivity size={24} />
              <span>Population </span>
              <strong>{country.population}</strong>
            </li>
            <li>
              <FiActivity size={24} />
              <span>Population </span>
              <strong>{country.population}</strong>
            </li>
          </ul>
        </Card>
      )}
      <h3>Nearest Countries</h3>
      <CardsGrid>
        {countriesAround.map(item => (
          <MainCard {...item} key={item.countryName} />
        ))}
      </CardsGrid>
    </Container>
  );
};

export default Main;
