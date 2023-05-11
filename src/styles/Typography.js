import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  html {
    font-family: "Bodoni 72 Smallcaps", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;;
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
