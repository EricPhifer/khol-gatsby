import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 1rem;
  justify-items: center;
  @media only screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  @media only screen and (max-width: 688px) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.a`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
  position: relative;
  display: flex;
  border-radius: 0.5rem;
  figcaption {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--white);
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1rem 0.5rem;
    border-radius: 0.5rem;
  }
`

export default function Donate() {
  const { donate } = useStaticQuery(graphql`
    query {
      donate: allSanityDonate {
        nodes {
          id
          alt
          link
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
  const { nodes } = donate
  return (
    <Grid id="threeColumnGallery">
      {nodes.map(node => (
        <GridItem href={node.link} rel="noopener" key={node.id}>
          <SanityImage
            {...node.image}
            alt={node.alt}
            style={{
              objectFit: 'cover',
              auto: 'format',
            }}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
