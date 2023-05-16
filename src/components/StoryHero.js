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
  align-items: end;
  color: var(--white);
  text-align: right;
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
  margin-bottom: 10rem;
  font-family: 'Bodoni 72 Smallcaps';
  font-size: 8rem;
  line-height: 1;
  .kinna {
    font-family: 'Sarina';
    font-size: 16rem;
  }
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
  font-family: 'Bodoni 72 Smallcaps';
  font-size: 3.5rem;
  .address {
    font-size: 3rem;
  }
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
