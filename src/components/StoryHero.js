import { graphql, useStaticQuery } from 'gatsby'
// eslint-disable-next-line
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 100%;
  position: relative;
  z-index: 0;
  img {
    position: absolute;
    @media only screen and (max-height: 400px) {
      top: -5rem;
    }
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const Container = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: end;
  color: var(--white);
  text-align: right;
  z-index: 10;
  h1,
  h2 {
    padding: 0 2rem;
  }
  // Mobile view
  @media only screen and (max-width: 750px) {
    justify-content: normal;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 7rem;
  }
  // Landscape view
  @media only screen and (max-height: 950px) {
    height: 60%;
  }
  @media only screen and (max-height: 950px) {
    height: 77%;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10rem;
  font-family: 'Bodoni 72 Smallcaps';
  font-size: 8rem;
  line-height: 1;
  text-shadow: 0.1rem 0 0 var(--darkgray), -0.1rem 0 0 var(--darkgray),
    0 0.1rem 0 var(--darkgray), 0 -0.1rem 0 var(--darkgray);
  .kinna {
    font-family: 'Sarina';
    font-size: 16rem;
    @media only screen and (max-width: 750px) {
      font-size: 12rem;
    }
    @media only screen and (max-width: 615px) {
      font-size: 10rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 6rem;
    }
  }
  // Mobile view
  @media only screen and (max-width: 750px) {
    font-size: 6rem;
    margin-bottom: 5rem;
  }
  @media only screen and (max-width: 615px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 3.75rem;
    margin: 0;
    .kinna {
      font-size: 7.5rem;
    }
  }
`

const Motto = styled.h2`
  margin: 0;
  font-family: 'Bodoni 72 Smallcaps';
  font-size: 3.5rem;
  text-shadow: 0.1rem 0 0 var(--darkgray), -0.1rem 0 0 var(--darkgray),
    0 0.1rem 0 var(--darkgray), 0 -0.1rem 0 var(--darkgray);
  .address {
    font-size: 3rem;
    @media only screen and (max-width: 615px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2.15rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 2rem;
    .address {
      font-size: 2rem;
    }
  }
`

export default function StoryHero() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: allSanityHero {
        nodes {
          id
          alt
          title
          source
          tagline
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)
  const { nodes } = hero
  return (
    <>
      {nodes.map(node => (
        <Header key={node.id}>
          {node.image ? (
            <SanityImage
              {...node.image}
              alt={node.alt}
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'fixed',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          ) : (
            <div />
          )}
          <Container>
            <Title>
              <span className="kinna">Kinnas</span>
              <br />
              {node.title}
            </Title>
            <Motto>
              {node.tagline}
              <br />
              <span className="address">1 Corinthians 16:14</span>
            </Motto>
          </Container>
        </Header>
      ))}
    </>
  )
}

// Image Source: Kevin Carden https://www.lightstock.com/photos/a-mother-and-daughter-in-prayer-at-bedtime
