import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  html {
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;

    color: #000;
  }

  body {
    font-size: 1.5rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: var(--black);
  }
`

export default Typography
