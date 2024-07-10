import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#e6e8ff',
      200: '#c5c9ff',
      300: '#a4aaff',
      400: '#828bff',
      500: '#616cff',
      600: '#4e56cc',
      700: '#3b4099',
      800: '#282b66',
      900: '#141533',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Inter',
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

export default theme;
