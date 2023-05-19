import * as React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
// Story Components
import StoryHero from '../components/StoryHero'
// Body Components
import About from '../components/About'
// import Connect from '../components/Connect'
// import Donate from '../components/Donate'
import Partners from '../components/Partners'
import PastEvents from '../components/PastEvents'
import Testimonials from '../components/Testimonials'
import TestimonialForm from '../components/TestimonialForm'
import Volunteer from '../components/Volunteer'

const Hero = styled.div`
  display: block;
  height: 100vh;
  position: relative;
  top: 4rem;
  z-index: 10;
`

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

const IndexPage = () => (
  <Layout>
    <Hero id="top">
      <StoryHero />
    </Hero>
    <Main>
      <H2 id="about">About Us</H2>
      <HR />
      <About />
      <H2 id="partners">Our Partners</H2>
      <HR />
      <Partners />
      <H2 id="events">Upcoming Events</H2>
      <HR />
      <H2>Past Events</H2>
      <HR />
      <PastEvents />
      <H2 id="testimonials">Testimonials</H2>
      <HR />
      <Testimonials />
      <TestimonialForm />
      <H2 id="volunteer">Volunteer</H2>
      <HR />
      <Volunteer />
      <H2 id="connect">Connect</H2>
      <HR />
      {/* 
      <Connect />
    */}
      <H2 id="donate">Donate</H2>
      <HR />
      {/* 
      <Donate /> 
      */}
    </Main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
