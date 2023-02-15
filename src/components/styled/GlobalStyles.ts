import { createGlobalStyle } from "styled-components";
import theme from "../../theme/theme";

export type ThemeProps = {
  theme: typeof theme;
};

const GlobalStyles = createGlobalStyle<ThemeProps>`

  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&display=swap');

  *, *:before, *:after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  html {
   font-size: 62.5%;
  }

  body {
   font-family: 'Jost', sans-serif;
   color: ${({ theme }) => theme.colors.text};
   font-size: 1.6rem;

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.4rem;
   }
  }

  h1 {
   font-size: 3.2rem;
   font-family: 'Jost', sans-serif;
   font-weight: 300;

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 2.4rem;
   }
  }

  h2 {
   font-size: 2.4rem;
   font-weight: 300;
   

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 2rem;
   }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.4rem;
    }
  }

  h4 {
    font-size: 2rem;
    font-weight: 400;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.4rem;
    }
  }

  p {
   line-height: 1.5;
  }

  img {
   width: 100%;
  }

  a {
    color: inherit;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  /* input {
    display: flex;
    align-items: center;
  } */

  button {
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.round};
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1.6rem 4rem;
    transition: all 0.3s ease;
    display: block;
    outline: none;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }

    &:active {
      outline: none;
      transform: scale(1);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      padding: 1rem 2.5rem;
      letter-spacing: 1.5px;
    }
  }

  select {
    border: none;
    outline: none;
    background-color: white;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    display: block;
  }

`;

export default GlobalStyles;
