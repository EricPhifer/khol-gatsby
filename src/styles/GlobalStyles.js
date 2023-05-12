import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* CSS Reset by Mirkov Sasa https://github.com/mirkovsasa/CSS-Reset/blob/main/Reset.css */

/* Resetting defaults */
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}

/* Setting border box model for easier sizing of elements */
*, *::before, *::after {
  box-sizing: border-box;
}

  :root {
    --gold: #FFBF2E;
    --white: #EFEFEF;
    --red: #9E1E1B;
    --orange: #C39F4D;
    --darkgray: #585858;
    --blue: #1777BE;
    --black: #1B0F07;
  }
  html {
    // background-image: url();
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-attachment: fixed;
    font-size: 10px;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  html, body {
    min-height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    overflow-y: hidden;
  }

  button {
    display: flex;
    max-width: 800px;
    margin: 1.5rem auto;
    padding: 2rem 0;
    justify-content: center;
    box-shadow: 3px 3px 10px black;
    background: var(--orange);
    color: white;
    border: 0;
    border-radius: 40px;
    cursor: pointer;
    --cast: 2px;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.05s;
    a {
      text-decoration: none;
      color: white;
      font-size: 2.25rem;
    }
    &:hover {
      background: #fff;
      a {
        color: var(--orange);
      }
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } 

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) #fff;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow) ;
    border-radius: 6px;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export default GlobalStyles
