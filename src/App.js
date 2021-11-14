import React from 'react';
import './App.css';
import { responsiveFontSizes, ThemeProvider, useMediaQuery } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';
import LandingPage from './landing';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = React.useState(responsiveFontSizes(prefersDarkMode ? darkTheme : lightTheme));

  React.useEffect(() => {
    setTheme(responsiveFontSizes(prefersDarkMode ? darkTheme : lightTheme));
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <LandingPage />
      </StyledEngineProvider>
    </ThemeProvider>
  )
};

export default App;
