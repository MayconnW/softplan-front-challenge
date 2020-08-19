import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import Button from '.';

const text = 'Click here';

describe('<Button />', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render the button with children', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Button type="button">{text}</Button>
      </ThemeProvider>,
    );

    expect(getByText(text)).toBeTruthy();
  });

  it('should render loader', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Button type="button" loading>
          {text}
        </Button>
      </ThemeProvider>,
    );
    expect(getByTestId('button-loader')).toBeInTheDocument();
  });
});
