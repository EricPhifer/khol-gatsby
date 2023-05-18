import { PortableText, defaultComponents } from '@portabletext/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
`

const Slider = styled.div`
  max-width: 80rem;
  min-height: 40rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
`

const Cards = styled.div`
  height: 90%;
  display: flex;
  align-items: baseline;
  text-align: left;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::marker {
    position: absolute;
    top: 0;
  }
`

const Card = styled.li`
  padding-top: 15vh;
  margin-top: -15vh;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  flex-shrink: 0;
  border-radius: 1rem;
  background: var(--white);
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  font-size: 10rem;
  color: var(--black);
  img {
    max-height: 50rem;
    width: 100%;
    margin: 0 2rem;
    box-shadow: 0.1rem 0.1rem 1rem var(--black);
  }
  figcaption {
    padding: 0.5rem 1rem 0;
    width: 100%;
    font-size: 1.5rem;
    text-align: right;
  }
  &:target {
    transform: scale(0.8);
  }
`

const Nav = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.25rem 0.25rem 0.5rem 0;
  padding: 1.5rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--white);
  color: var(--black);
  text-decoration: none;
  &:active {
    top: 0.1rem;
  }
  &:focus {
    background: var(--blue);
    color: var(--white);
  }
  &:hover {
    background: var(--blue);
    color: var(--white);
  }
`

const Content = styled.div`
  width: 96%;
  display: grid;
  padding: 1rem 1rem 2.5rem;
  overflow-x: auto;
  p {
    font-size: 2rem;
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const H3 = styled.h3`
  width: 100%;
  font-size: 4rem;
  padding: 2.5rem 2.5rem 0.5rem;
`

export default function PastEvents() {
  const { pastevents } = useStaticQuery(graphql`
    query {
      pastevents: allSanityPastevents {
        nodes {
          id
          title
          alt
          source
          _rawContent
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
  const { nodes } = pastevents
  return (
    <Section id="carousels-card">
      {nodes.map((node, index) => (
        <Nav to={`/#card${index}`} key={node.id}>
          {index + 1}
        </Nav>
      ))}
      <Slider>
        <Cards className="cards">
          {nodes.map((node, index) => (
            <Card className="card" id={`card${index}`} key={node.id}>
              <H3>{node.title}</H3>
              {node.image ? (
                <SanityImage
                  {...node.image}
                  alt={node.alt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              ) : (
                <div />
              )}
              <figcaption>
                {node.source ? `Source: ${node.source}` : ''}
              </figcaption>
              <Content>
                <PortableText
                  value={node._rawContent}
                  components={defaultComponents}
                />
              </Content>
            </Card>
          ))}
        </Cards>
      </Slider>
    </Section>
  )
}
