import { createGlobalStyle } from 'styled-components';

import { theme } from './mainTheme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html {
    font-size: 0.525vw;
    @media (max-width: 1499px) {
      font-size: 0.625vw;
    }
    @media (max-width: 1199px) {
      font-size: 0.725vw;
    }
    @media ${theme.media.maxMobile} {
      font-size: 10px;
    }
  }

  body {
    font-size: 1.6rem;
    margin: 0 0 10rem 0;
    padding: 0;
    color: #000000;
    line-height: 1.5;
    @media ${theme.media.maxMobile} {
      font-size: 1.2rem
    }
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
  
  .isModalOpen {
    overflow: hidden;
  }

  .isModalOpen::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .Toastify__toast-container {
    width: 500px;
    max-width: 95vw;
    text-align: center;

    @media ${theme.media.maxMobile} {
      max-width: unset;
      width: 100%;
    }
  }

  .Toastify__toast--success {
    background: ${theme.colors.green};
    color: ${theme.colors.text};
  }

  .Toastify__close-button {
    color: ${theme.colors.text};
  }
`;
