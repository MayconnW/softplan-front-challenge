import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Card, { CardContent } from '.';

describe('<Input>', () => {
  const onClick = jest.fn();
  const card: CardContent = {
    capitalName: 'capital',
    countryName: 'country',
    flagUrl: 'url',
    onClick,
  };

  it('should be able to render the Input', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Card {...card} />
      </ThemeProvider>,
    );

    expect(getByTestId('_cardContainer')).toBeTruthy();
  });

  it('should be able to render the Input with the Card Content Params', () => {
    const { getByAltText, getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Card {...card} />
      </ThemeProvider>,
    );

    expect(getByText(card.capitalName)).toBeTruthy();
    expect(getByText(card.countryName)).toBeTruthy();
    expect(getByAltText(card.countryName)).toBeTruthy();
  });

  it('should be able to call the provided function onClick', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Card {...card} />
      </ThemeProvider>,
    );

    const cardElement = getByTestId('_cardContainer');
    fireEvent.click(cardElement);

    expect(onClick).toHaveBeenCalled();
  });
});
