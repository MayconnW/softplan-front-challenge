import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { Country } from 'interfaces/Country';

export const countries = makeVar<Country[]>([]);

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          countries: {
            read() {
              return countries();
            },
          },
        },
      },
    },
  }),
});

export default client;
