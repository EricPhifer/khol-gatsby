import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Copyright from './Copyright'
import Navigation from './Navigation'

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-bottom: 15rem;
  bottom: 0;
`

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return typeof window !== 'undefined' ? (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Navigation />
        {children}
        <Copyright />
      </SiteStyles>
    </>
  ) : null
}
