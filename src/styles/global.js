import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        min-height: 100%;
    }

    body {
        background: #999;
    }
`;
