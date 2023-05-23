import { Link, graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  min-height: 20rem;
  display: flex;
  margin: 5rem 0;
`

const Slider = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  perspective: 10rem;
`

const Logos = styled.ol`
  max-width: 80rem;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  li {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
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

const Logo = styled.li`
  width: 100%;
  padding-top: 50vh;
  margin-top: -50vh;
  position: relative;
  border-radius: 1rem;
  flex: 0 0 100%;
  counter-increment: item;
  &::marker {
    font-size: 0%;
  }
`

const Snapper = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 50%;
  display: flex;
  align-items: center;
  .prev svg {
    bottom: 30%;
    left: 0;
    @media only screen and (max-width: 900px) {
      bottom: 7%;
    }
    @media only screen and (max-width: 700px) {
      bottom: 15%;
    }
  }
  .next svg {
    bottom: 30%;
    right: 0;
    @media only screen and (max-width: 900px) {
      bottom: 7%;
    }
    @media only screen and (max-width: 700px) {
      bottom: 15%;
    }
  }
`

const Arrows = styled(Link)`
  width: 100%;
  height: 100%;
  svg {
    font-size: 5rem;
    color: var(--black);
    position: absolute;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    &:hover {
      color: var(--blue);
    }
  }
`

const Nav = styled(Link)`
  width: 0.75rem;
  height: 0.75rem;
  margin: 0.25rem 0.75rem 0.5rem 0;
  padding: 0.75rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--gray);
  color: var(--white);
  text-decoration: none;
  &:active {
    top: 0.1rem;
  }
  &:focus {
    background: var(--blue);
    color: var(--black);
  }
  &:hover {
    background: var(--blue);
    color: var(--black);
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  justify-items: center;
  overflow-x: auto;
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

const Image = styled.a`
  img {
    padding: 0 2rem;
  }
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`

export default function Partners() {
  const { partners } = useStaticQuery(graphql`
    query {
      partners: allSanityPartners {
        nodes {
          id
          alt
          link
          source
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
  const { nodes } = partners
  return (
    <Section id="carousels-logo" aria-label="Logo Gallery">
      <Slider>
        <Grid>
          {nodes.map((node, index) => (
            <Logos className="logos" key={node.id}>
              <Logo className="logo" id={`#logo[${index}]`}>
                <Image href={node.link} rel="noopener">
                  <SanityImage
                    {...node.image}
                    alt={node.alt}
                    style={{
                      width: '30rem',
                      height: '30rem',
                      objectFit: 'contain',
                      auto: 'format',
                    }}
                  />
                </Image>
              </Logo>
              {index.count > 3 ? (
                <Snapper>
                  <Arrows
                    to={`#logo${index !== 0 ? index - 1 : index.count}`}
                    className="prev"
                  >
                    <FaCaretLeft />
                  </Arrows>
                  <Arrows
                    to={`#logo${index.count !== index ? index + 1 : 0}`}
                    className="next"
                  >
                    <FaCaretRight />
                  </Arrows>
                </Snapper>
              ) : (
                <div />
              )}
            </Logos>
          ))}
        </Grid>
        {nodes.map((node, index) => (
          <div key={node.id}>
            <Nav to={`#logo[${index}]`} />
          </div>
        ))}
      </Slider>
    </Section>
  )
}
