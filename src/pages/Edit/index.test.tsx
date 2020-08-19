import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Edit from '.';

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({
      id: 1,
    }),
  };
});

/* jest.mock('react-hook-form', () => {
  return {
    useForm: () => ({
      handleSubmit: jest.fn(),
      register: jest.fn(),
    }),
  };
}); */

const mockedUpdateCountry = jest.fn();
const mockedGetCountry = jest.fn().mockReturnValue({
  area: 1,
  capital: 'brasilia',
  distanceToOtherCountries: [{ countryName: 'nearCountry', distanceInKm: 100 }],
  flag: { svgFile: 'url' },
  id: 1,
  population: 100,
  name: 'brazil',
});

jest.mock('hooks/useCountry', () => {
  return jest.fn().mockImplementation(() => ({
    getCountry: mockedGetCountry,
    updateCountry: mockedUpdateCountry,
  }));
});

const mockedHistoryPush = jest.fn();

jest.mock('services/history', () => {
  return {
    push: (param: string) => mockedHistoryPush(param),
    goBack: () => mockedHistoryPush(),
  };
});

describe('Details page', () => {
  it('should be able to edit theCountry', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Edit />
      </ThemeProvider>,
    );

    const countryInput = getByTestId('_countryInputTest');
    const capitalInput = getByTestId('_capitalInputTest');
    const areaInput = getByTestId('_areaInputTest');
    const populationInput = getByTestId('_populationInputTest');
    const saveButton = getByTestId('_saveButtonTest');

    fireEvent.change(countryInput, { target: { value: 'newCountryName' } });
    fireEvent.change(capitalInput, { target: { value: 'newCapital' } });
    fireEvent.change(areaInput, { target: { value: '200' } });
    fireEvent.change(populationInput, { target: { value: '150' } });
    act(() => {
      fireEvent.click(saveButton);
    });

    await waitFor(() => {
      expect(mockedUpdateCountry).toHaveBeenCalledWith({
        area: '200',
        capital: 'newCapital',
        distanceToOtherCountries: [
          {
            countryName: 'nearCountry',
            distanceInKm: 100,
          },
        ],
        flag: {
          svgFile: 'url',
        },
        id: 1,
        name: 'newCountryName',
        population: '150',
      });
    });
  });

  it('should be able to navigate to previous page', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Edit />
      </ThemeProvider>,
    );

    const backElement = getByTestId('_backComponent');

    fireEvent.click(backElement);

    expect(mockedHistoryPush).toHaveBeenCalled();
  });
});
