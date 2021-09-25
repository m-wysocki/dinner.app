import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Slide, ToastContainer } from 'react-toastify';
import { theme } from '../theme/mainTheme';

const MainTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
