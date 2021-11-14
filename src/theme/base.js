import { createTheme } from "@mui/material";

const titleProps = {
	fontFamily: '"Playfair Display", serif'
};
const baseTheme = createTheme({
  // breakpoints: {
  //   values: {
  //     xsm: 400,
  //   },
  // },
  palette: {
    mode: 'light',
    common: {
      one: '#9294A6',
      two: '#F2DED5',
      three: '#EDEEF2',
      four: '#DFF2D5',
      five: '#9BA695',
    },
    background: {
      paper: '#EDEEF2',
      default: '#EDEEF2'
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      'sans-serif',
    ].join(','),
    h1: {
      ...titleProps,
      fontSize: 121.50,
    },
    h2: {
      ...titleProps,
      fontSize: 81,
    },
    h3: {
      ...titleProps,
      fontSize: 54,
    },
    h4: {
      ...titleProps,
      fontSize: 36,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: '600',
    },
    body2: {
      fontSize: 16,
    },
  }
});

export default baseTheme;