import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Details from '.';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({
      id: 1,
    }),
  };
});

jest.mock('hooks/useCountry', () => {
  return jest.fn().mockReturnValue({
    getCountry: () => ({
      area: 1,
      capital: 'brasilia',
      distanceToOtherCountries: [
        { countryName: 'nearCountry', distanceInKm: 100 },
      ],
      flag: { svgFile: 'url' },
      id: 1,
      population: 100,
      name: 'brazil',
    }),
    getCountryByName: () => ({
      area: 1,
      capital: 'brasilia',
      distanceToOtherCountries: [
        { countryName: 'nearCountry', distanceInKm: 100 },
      ],
      flag: { svgFile: 'url' },
      id: 1,
      population: 100,
      name: 'brazil',
    }),
  });
});

const mockedHistoryPush = jest.fn();

jest.mock('services/history', () => {
  return { push: (param: string) => mockedHistoryPush(param) };
});

describe('Details page', () => {
  it('should be able to render the Country', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Details />
      </ThemeProvider>,
    );

    expect(getByText('brazil')).toBeTruthy();
  });

  it('should navigate to edit page', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Details />
      </ThemeProvider>,
    );

    const editElement = getByTestId('_editTest');

    fireEvent.click(editElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/edit/1');
  });

  it('should show nearest countries', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Details />
      </ThemeProvider>,
    );

    expect(getByText(/nearCountry/)).toBeTruthy();
  });

  it('should be able to navigate to close Country', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Details />
      </ThemeProvider>,
    );

    const cardElement = getByTestId('_cardContainer');

    fireEvent.click(cardElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/details/1');
  });

  it('should be able to navigate to previous page', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Details />
      </ThemeProvider>,
    );

    const cardElement = getByTestId('_backComponent');

    fireEvent.click(cardElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
