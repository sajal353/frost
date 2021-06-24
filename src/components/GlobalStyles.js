import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Satoshi', sans-serif;
    }

    body {
        background: #1b1b1b;
        color: #ffffff;
    }

    h1, h2, h3, h4, h5, h6, b {
        font-weight: 500;
    }

    p{
        font-weight: 400;
    }

    a{
        color: #ffffff;
    }
`;

export default GlobalStyles;