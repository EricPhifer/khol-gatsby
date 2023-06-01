import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 1rem;
  justify-items: center;
  iframe {
    grid-column: 1 / span 3;
  }
  @media only screen and (max-width: 688px) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.a`
  width: 15rem;
  height: 15rem;
  position: relative;
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

// TODO: change allSanity to Social
export default function Social() {
  const { calendar } = useStaticQuery(graphql`
    query {
      calendar: allCalendarEvent {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = calendar
  return (
    <Grid id="threeColumnGallery">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=calendar%40kinnashouseoflove.com&ctz=America%2FChicago"
        style={{ border: '0' }}
        width="800"
        height="600"
        title="khol-calendar"
      />
      {nodes.map(node => (
        <div key={node.id} />
      ))}
    </Grid>
  )
}
