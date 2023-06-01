import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const FlexContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 60rem;
  border: 0;
`

const FlexItem = styled.a`
  width: 100%;
  display: inline-flex;
  position: relative;
  padding: 4rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem var(--darkgray);
`

const Date = styled.div`
  min-width: 10rem;
  height: 10rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem var(--darkgray);
  font-size; 3rem;
`

const Day = styled.p`
  font-size: 3rem;
  font-weight: 600;
`

const Month = styled.p`
  font-size: 3rem;
  font-weight: 600;
`

const Year = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`

const Summary = styled.div`
  padding: 0 2rem;
  h3 {
    padding-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`

export default function Social() {
  const { calendar } = useStaticQuery(graphql`
    query {
      calendar: allCalendarEvent {
        nodes {
          id
          summary
          start {
            dateTime
            timeZone
          }
          end {
            dateTime
            timeZone
          }
          description
          htmlLink
          allDay
        }
      }
    }
  `)
  const { nodes } = calendar
  return (
    <FlexContainer id="threeColumnGallery">
      <Iframe
        src="https://calendar.google.com/calendar/embed?src=calendar%40kinnashouseoflove.com&ctz=America%2FChicago"
        title="khol-calendar"
      />
      {nodes.map(node => (
        <FlexItem key={node.id}>
          <Date>
            <Day>{node.start.dateTime.slice(5, 7)}</Day>/
            <Month>{node.start.dateTime.slice(8, 10)}</Month>
            <br />
            <Year>{node.start.dateTime.slice(0, 4)}</Year>
          </Date>
          <Summary>
            <h3>{node.summary}</h3>
            <p>{node.description}</p>
          </Summary>
        </FlexItem>
      ))}
    </FlexContainer>
  )
}
