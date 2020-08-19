import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import { FiCloud } from 'react-icons/fi';
import Input from '.';

describe('<Input>', () => {
  const primaryColor = '#000';
  const secondaryColor = '#111';
  const tertiaryColor = '#222';

  const theme: DefaultTheme = {
    ...defaultTheme,
    color: {
      primary: primaryColor,
      secondary: secondaryColor,
      tertiary: tertiaryColor,
    },
  };
  it('should be able to render the Input', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="test" />
      </ThemeProvider>,
    );

    expect(getByPlaceholderText('test')).toBeTruthy();
  });

  it('should change border color on focus', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="test" />
      </ThemeProvider>,
    );

    const input = getByPlaceholderText('test');
    const inputContainer = getByTestId('_inputContainer');

    fireEvent.focus(input);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle(`border-color: ${tertiaryColor}`);
    });
  });

  it('should render the Inpt with an icon', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input icon={FiCloud} />
      </ThemeProvider>,
    );

    expect(getByTestId('_iconTest')).toBeInTheDocument();
  });

  it('should render the Input showing an error', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input icon={FiCloud} error="error" />
      </ThemeProvider>,
    );

    expect(getByTestId('_errorTest')).toBeInTheDocument();
  });

  it('should render the Input showing a label', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input icon={FiCloud} label="test" />
      </ThemeProvider>,
    );

    expect(getByTestId('_labelTest')).toBeInTheDocument();
  });

  it('should render the Input and call onFocus and onBlur function', async () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input placeholder="test" onFocus={onFocus} onBlur={onBlur} />
      </ThemeProvider>,
    );

    const input = getByPlaceholderText('test');
    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  it('should render the Input and call register function', async () => {
    const register = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Input register={register} />
      </ThemeProvider>,
    );

    expect(register).toHaveBeenCalled();
  });
});
