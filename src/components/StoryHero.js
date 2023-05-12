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
  align-items: center;
  color: var(--white);
  text-align: center;
  z-index: 10;
  h1,
  h2 {
    padding: 0 2rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    flex-flow: row wrap;
    height: auto;
    position: relative;
    top: 5rem;
  }
  @media only screen and (max-height: 600px) and (min-width: 884px) {
    flex-flow: column wrap;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 8rem;
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 3.75rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 3.75rem;
    margin: 0;
  }
`

const Motto = styled.h2`
  margin: 0;
  font-size: 3rem;
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 2rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 2rem;
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
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          ) : (
            <div />
          )}
          <Container>
            <Title>{node.title}</Title>
            <Motto>{node.tagline}</Motto>
          </Container>
        </Header>
      ))}
    </>
  )
}
