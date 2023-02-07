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
      transform: scale(1.2);
    }
  }

`;

export default GlobalStyles;
