import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Layout from '.';

describe('Details page', () => {
  it('should be able to render a children inside the Layout', async () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <h1>Test</h1>
        </Layout>
      </ThemeProvider>,
    );
    expect(getByText(/Test/)).toBeTruthy();
  });
});
