import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        --three-px: 3px;
        --seven-px: 7px;
        --ten-px: 10px;
        --gray:  #efefef9a;
    }
    body {
        box-sizing: border-box;
        max-width: 100vw;
        box-sizing: border-box;
        .gray {
            color: var(--gray);
        }
    }
`;
