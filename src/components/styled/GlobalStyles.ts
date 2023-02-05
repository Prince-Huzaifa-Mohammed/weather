import { createGlobalStyle } from "styled-components";
import theme from "../../theme/theme";

export type ThemeProps = {
  theme: typeof theme;
};

const GlobalStyles = createGlobalStyle<ThemeProps>`

  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&display=swap');

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
   font-size: 1.4rem;

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.2rem;
   }
  }

  h1 {
   font-size: 3.2rem;

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 2.4rem;
   }
  }

  p {
   line-height: 1.5;
  }

  img {
   width: 100%;
  }

`;

export default GlobalStyles;
