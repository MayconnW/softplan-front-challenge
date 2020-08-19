import React from 'react';
import { Country } from 'interfaces/Country';
import { useQuery } from '@apollo/client';
import useCountry from 'hooks/useCountry';
import { COUNTRIES } from './gql';

interface Data {
  Country: Country[];
}

const Apollo: React.FC = () => {
  const { setCountries } = useCountry();
  useQuery<Data>(COUNTRIES, {
    onCompleted: data => setCountries(data.Country),
  });

  return <></>;
};

export default Apollo;
