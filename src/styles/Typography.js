import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/100.css';

const Typography = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2 {
        font-size: var(--extraLarge);
        font-weight: 200;
    } 
     
    p {
        font-size: var(--medium);
        font-weight: 100;
    }
`;

export default Typography;
