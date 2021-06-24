import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Satoshi', sans-serif;
        z-index: 2;
    }

    body {
        background: #1b1b1b;
        color: #f5f3f4;
    }

    .webgl {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }

    .curtain{
        position: fixed;
        top: -64px;
        left: 0;
        width: 100%;
        background: #fff;
        mix-blend-mode: difference;
        z-index: 50;
        pointer-events: none;
    }

    h1, h2, h3, h4, h5, h6, b {
        cursor: default;
        font-weight: 500;
    }

    p{
        font-weight: 400;
    }

    a{
        color: #f5f3f4;
    }
`;

export default GlobalStyles;