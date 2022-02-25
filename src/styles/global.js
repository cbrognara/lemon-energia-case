import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {

font-size: 10px;

--primary: #026C00;
--primary-hover: #079504;
--primary-disable: #B7D0B6;
--primary-pressed: #013C00;

--secondary: #F7C346;
--secondary-hover: #FFDF77;
--secondary-disable: #FFE58D;
--secondary-pressed: #DCAC0D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, a, li, button {
    font-family: 'Inter', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
  }
`
