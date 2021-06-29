import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Satoshi', sans-serif;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    html {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body {
        background: #1b1b1b;
        /* color: #f5f3f4; */
        color: #e4e4e4;
    }

    .webgl {
        position: fixed;
        top: 0;
        left: 0;
        /* z-index: -1; */
        /* pointer-events: none; */
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
        color: #e4e4e4;
    }

    .webgl-img{
        opacity: 0;
    }
`;

export default GlobalStyles;