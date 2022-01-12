import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --bg-primary: #000;
        --text-primary: #f2f2f2;
        --accent-primary: #3700b3;
        --accent-secondary: #03dac5;
        --text-background: #3600b384;

        ${'' /* Font Sizes */}
        --small: 1.5rem;
        --medium: 1.8rem;
        --large: 2.25rem;
        --extraLarge: 3.5rem;
    }

    body {
        background: var(--bg-primary);
        color: var(--text-primary);
        scroll-behavior: smooth;
    }
`

export default GlobalStyles
