import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --bg-primary: #050505;
        --text-primary: #f2f2f2;
        --accent-primary: #3700b3;
        --accent-secondary: #03dac5;
        
        ${'' /* Font Sizes */}
        --medium: 1.5rem;
        --large: 2.25rem;
        --extraLarge: 3.5rem;
    }

    body {
        background: var(--bg-primary);
        color: var(--text-primary);
    }
`;

export default GlobalStyles;
