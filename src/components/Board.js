import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  min-height: 20rem;
  display: flex;
  margin: 5rem 0;
`

const Members = styled.ol`
  max-width: 80rem;
  display: flex;
  align-items: center;
`

const Member = styled.li`
  max-width: 30rem;
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

const H3 = styled.h3`
  font-variant: small-caps;
  font-weight: 700;
  padding-bottom: 1rem;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  justify-items: center;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

const Image = styled.a`
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`
export default function Board() {
  const { members } = useStaticQuery(graphql`
    query {
      members: allSanityMembers {
        nodes {
          id
          alt
          name
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
  const { nodes } = members

  return (
    <Section id="carousels-member" aria-label="member Gallery">
      <Grid>
        <Members className="members">
          {nodes.map((node, index) => (
            <Member className="member" id={`#member[${index}]`} key={node.id}>
              <Image href={node.link} rel="noopener" target="_blank">
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
              <H3>{node.name}</H3>
              <PortableText
                value={node._rawContent}
                components={defaultComponents}
              />
            </Member>
          ))}
        </Members>
      </Grid>
    </Section>
  )
}
