import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
        box-sizing: border-box;
    }

    html {
        width: auto;
    }

    body {
        max-width: 100vw;
        height: 100vh;
    }
`