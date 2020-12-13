import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600,900&display=swap');
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  html {
    font-size: 0.525vw;
    @media (max-width: 1499px) {
      font-size: 0.625vw;
    }
    @media (max-width: 1199px) {
      font-size: 0.725vw;
    }
  }
  body {
      font-size: 1.6rem;
      font-family: 'Montserrat', sans-serif;
      margin: 0 0 10rem 0;
      padding: 0;
      color: #000000;
      line-height: 1.5;
  }
  a{
    text-decoration: none;
  }
  img{
    max-width: 100%;
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
  }
  .Toastify__toast-container {
    width: 400px;
    max-width: 95vw;
    text-align: center;
  }
  .Toastify__toast--success {
    background: ${theme.colors.green};
    color: ${theme.colors.text};
  }
  .Toastify__close-button {
    color: ${theme.colors.text};
  }
`;

export default GlobalStyle;
