import { createGlobalStyle } from 'styled-components'
import '@fontsource/montserrat/300.css'
import './font.css'

const Typography = createGlobalStyle`
    body {
      font-family: 'montserrat', sans-serif;
      font-weight: 300;
    }

    h1, h2, h3 {
      font-family: 'Bright Fate', sans-serif;
      margin: 0;
    }

    h1 {
      font-size: var(--titleLarge);
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
      margin: 0;
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
