import { createGlobalStyle } from "styled-components"

import { COLOR } from "../utils/constants"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  html, 
  body,
  #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-basis: auto;
    overflow-x: hidden;
  }

  body {
    background-color: ${COLOR.MYSTIC};
  }
`
