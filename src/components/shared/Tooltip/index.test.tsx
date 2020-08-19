import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Tooltip from '.';

describe('Back header component', () => {
  it('should be able to render the Component', () => {
    const title = 'test1234test';
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Tooltip title={title} type="success" />
      </ThemeProvider>,
    );

    expect(getByTestId('_tooltipContainer')).toBeTruthy();
  });
});
