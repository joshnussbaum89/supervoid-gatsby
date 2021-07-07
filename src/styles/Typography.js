import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import './font.css';

const Typography = createGlobalStyle`
    h1, h2, h3 {
        margin: 1rem 0;
    }

    h1, h2 {
        font-size: var(--extraLarge);
    }
    
    h3 {
        font-size: var(--large);
    }

    h4 {
        font-size: var(--medium);
        margin: 0;
    }
     
    p {
        font-size: var(--small);
    }
`;

export default Typography;
