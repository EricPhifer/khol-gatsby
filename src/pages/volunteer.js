import * as React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../components/Layout'

// Body Components
import Volunteer from '../components/Volunteer'

const Main = styled.main`
  width: 80vw;
  margin: 0 auto;
  position: relative;
  bottom: 3rem;
  padding: 3rem 0;
  @media only screen and (max-width: 500px) {
    width: 98vw;
  }
  @media only screen and (max-height: 600px) {
    width: 96vw;
  }
`

const H2 = styled.h2`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  margin: 5rem 0 1rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`

const HR = styled.hr`
  border: 0.5rem solid var(--orange);
`

const VolunteerPage = () => (
  <Layout>
    <Main>
      <H2 id="volunteer">Volunteer</H2>
      <HR />
      <Volunteer />
    </Main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="Volunteer Form" />

export default VolunteerPage
