import { createGlobalStyle } from "styled-components";
import { Theme } from "../../types/Theme";

export const GlobalStyles = createGlobalStyle<{theme: Theme}>`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme}) => theme.background.primary};
  }
`