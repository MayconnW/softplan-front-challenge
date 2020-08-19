import { useCallback } from 'react';
import { Country } from 'interfaces/Country';
import produce from 'immer';

import { useQuery } from '@apollo/client';
import { countries as countriesClient } from 'services/appolo';
import { LOCAL_COUNTRIES } from 'context/Apollo/gql';

interface Data {
  Country: Country[];
}

interface Result {
  countries: Country[];
  setCountries(data: Country[]): void;
  getCountry(id: string): Country | undefined;
  getCountryByName(name: string): Country | undefined;
  updateCountry(country: Country): void;
}

const useCountry = (): Result => {
  const { data } = useQuery<{ countries: Country[] }>(LOCAL_COUNTRIES);

  const setCountries = useCallback((countries: Country[]): void => {
    countriesClient(countries);
  }, []);

  const getCountry = useCallback(
    (id: string): Country | undefined => {
      return data?.countries.find(item => item.id === id);
    },
    [data],
  );

  const getCountryByName = useCallback(
    (name: string): Country | undefined => {
      return data?.countries.find(item => item.name === name);
    },
    [data],
  );

  const updateCountry = useCallback(
    (country: Country) => {
      const index =
        data?.countries.findIndex(item => item.id === country.id) || -1;
      if (index === -1 || !data) return;
      countriesClient(
        produce(data.countries, draft => {
          draft[index] = country;
          return draft;
        }),
      );
    },
    [data],
  );

  return {
    setCountries,
    getCountry,
    getCountryByName,
    updateCountry,
    countries: data?.countries || [],
  };
};

export default useCountry;
