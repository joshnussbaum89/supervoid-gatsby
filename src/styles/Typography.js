import { createGlobalStyle } from 'styled-components'
import './font.css'

const Typography = createGlobalStyle`
    body {
        font-family: 'Bright Fate', sans-serif;
    }

    h1, h2, h3 {
        margin: 1rem 0;
    }

    h1 {
        font-size: var(--extraLarge);
    }

    h2 {
        font-size: var(--large);
        text-transform: uppercase;
        margin: 2rem;
    }

    h3 {
        font-size: var(--medium);
        margin: 0;
    }

    p {
        font-size: var(--small);
    }

    @media (min-width: 768px) {
        h2 {
            font-size: var(--extraLarge);
        }
        h3 {
            font-size: var(--large);
        }
    }

    @media (min-width: 1500px) {
        h3 {
        font-size: var(--extraLarge);
    }
    }
`

export default Typography
