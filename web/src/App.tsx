import { KeycloakProvider } from '@react-keycloak/web';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './AppRouter';
import keycloak from './keycloak';
import theme from './theme';

const App = () => {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </KeycloakProvider>
  )
}

export default App;
