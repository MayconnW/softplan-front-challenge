import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Back from '.';

describe('Back header component', () => {
  it('should be able to render the Component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Back />
      </ThemeProvider>,
    );

    expect(getByTestId('_backComponent')).toBeTruthy();
  });
});
