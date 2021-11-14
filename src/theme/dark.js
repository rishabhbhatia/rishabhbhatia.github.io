import { createTheme } from "@mui/material";
import baseTheme from "./base";

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    type: 'dark',
    common: {
      ...baseTheme.palette.common,
    },
    background: {
      paper: '#28282B',
      default: '#28282B'
    },
  },
});

export default darkTheme;