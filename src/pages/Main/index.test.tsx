import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Main from '.';

jest.mock('hooks/useDebounce', () => {
  return jest.fn().mockImplementation((v = '') => v);
});

jest.mock('hooks/useCountry', () => {
  return jest.fn().mockReturnValue({
    countries: [
      {
        area: 1,
        capital: 'brasilia',
        distanceToOtherCountries: [{ countryName: 'test', distanceInKm: 100 }],
        flag: { svgFile: 'url' },
        id: 1,
        population: 100,
        name: 'brazil',
      },
    ],
  });
});

const mockedHistoryPush = jest.fn();
jest.mock('services/history', () => {
  return { push: (param: string) => mockedHistoryPush(param) };
});

describe('Main page', () => {
  it('should be able to search for a Country', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>,
    );

    const searchInput = getByTestId('_searchInput');

    fireEvent.change(searchInput, { target: { value: 'brazil' } });

    expect(getByTestId('_cardContainer')).toBeTruthy();
    expect(getByText('brazil')).toBeTruthy();
  });

  it('should not show cards when the search input does not match', () => {
    const { getByTestId, queryByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>,
    );

    const searchInput = getByTestId('_searchInput');

    fireEvent.change(searchInput, { target: { value: 'test001012' } });
    expect(queryByText('brazil')).toBeFalsy();
  });

  it('should navigate to details page', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>,
    );

    const cardElement = getByTestId('_cardContainer');

    fireEvent.click(cardElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/details/1');
  });
});
