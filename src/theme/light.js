import { createTheme } from "@mui/material";
import baseTheme from "./base";

const lightTheme = createTheme({
	...baseTheme,
  palette: {
    ...baseTheme.palette,
	  mode: 'light',
    background: {
    	paper: '#EDEEF2',
      default: '#EDEEF2'
    },
  },
  ...baseTheme.typography,
});

export default lightTheme;