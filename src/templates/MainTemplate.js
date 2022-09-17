import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as ThemeProviderMUI } from '@material-ui/core/styles';
import { Slide, ToastContainer } from 'react-toastify';
import { theme } from '../theme/mainTheme';

const themeMUI = () => {
  return createTheme({
    typography: {
      htmlFontSize: 10,
    },
  });
};

const MainTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <ThemeProviderMUI theme={themeMUI()}>{children}</ThemeProviderMUI>
    </ThemeProvider>
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
