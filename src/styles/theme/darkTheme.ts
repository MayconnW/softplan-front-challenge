import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: '#312E38',
    secondary: '#F4EDE8',
    tertiary: '#FF9000',
  },
  tooltip: {
    error: {
      borderColor: '#e63027',
      backgroundColor: '#e63027',
      fontColor: '#f4ede8',
    },
    success: {
      borderColor: '#00cc00',
      backgroundColor: '#00cc00',
      fontColor: '#312e38',
    },
    info: {
      borderColor: '#ff9000',
      backgroundColor: '#ff9000',
      fontColor: '#312e38',
    },
  },
};

export default theme;
