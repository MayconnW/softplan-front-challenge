import { gql } from '@apollo/client';

export const COUNTRIES = gql`
  query countries {
    Country {
      _id
      id: _id
      name
      capital
      area
      population
      flag {
        svgFile
      }
      distanceToOtherCountries(first: 5, orderBy: distanceInKm_asc) {
        countryName
        distanceInKm
      }
    }
  }
`;

export const LOCAL_COUNTRIES = gql`
  query GetCountries {
    countries @client
  }
`;
