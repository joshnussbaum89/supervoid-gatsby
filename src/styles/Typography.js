import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';

const Typography = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3 {
        margin: 1rem 0;
        font-weight: 200;
    }

    h1, h2 {
        font-size: var(--extraLarge);
    }
    
    h3 {
        font-size: var(--large);
    }

    h4 {
        font-size: var(--medium);
        font-weight: 300;
        margin: 0;
    }
     
    p {
        font-size: var(--small);
        font-weight: 100;
    }
`;

export default Typography;
