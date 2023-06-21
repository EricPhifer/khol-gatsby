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

const FlexItem = styled.a`
  width: 100%;
  display: inline-flex;
  position: relative;
  padding: 4rem 2rem;
  border-radius: 0.5rem;
  &:hover {
    border: 0.1rem solid var(--white);
    box-shadow: 0.25rem 0.25rem 0.75rem var(--white);
  }
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
  background: var(--red);
  color: var(--white);
`

const Container = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
`

const Day = styled.p``

const Month = styled.p``

const DayofWeek = styled.span``

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

const Time = styled.h4`
  font-size: 1.75rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`

export default function Events() {
  const { calendar, dates } = useStaticQuery(graphql`
    query {
      calendar: allCalendarEvent {
        nodes {
          id
          summary
          start {
            date(formatString: "dddd")
            dateTime
            timeZone
          }
          end {
            date(formatString: "dddd")
            dateTime
            timeZone
          }
          description
          htmlLink
          allDay
        }
      }
      dates: calendarEvent {
        id
        start {
          dateTime
          timeZone
        }
        end {
          dateTime
          timeZone
        }
      }
    }
  `)

  // converts datetime from military to standard
  function timeFormat(time, format) {
    const parts = time.split(':')
    let hour = parseInt(parts[0])
    let suffix = ''
    if (format === 'ampm') {
      suffix = hour >= 12 ? 'pm' : 'am'
      hour = ((hour + 11) % 12) + 1
    }
    return `${`${hour}`.substring(-2)}:${parts[1]}${suffix}`
  }

  const dayOfWeek = new window.Date(dates.start.dateTime).getDay()

  const { nodes } = calendar
  return (
    <FlexContainer id="threeColumnGallery">
      {nodes.map(node => (
        <FlexItem
          href={node.htmlLink}
          rel="noopener noreferrer"
          target="_blank"
          key={node.id}
        >
          <Date>
            <Container>
              <Month>{node.start.dateTime.slice(5, 7)}</Month>/
              <Day>{node.start.dateTime.slice(8, 10)}</Day>
            </Container>
            <Year>{node.start.dateTime.slice(0, 4)}</Year>
          </Date>
          <Summary>
            <h3>{node.summary}</h3>
            <Time>
              <DayofWeek>
                {{
                  0: 'Sunday',
                  1: 'Monday',
                  2: 'Tuesday',
                  3: 'Wednesday',
                  4: 'Thursday',
                  5: 'Friday',
                  6: 'Saturday',
                }[dayOfWeek] || null}{' '}
                |{' '}
              </DayofWeek>
              {node.allDay
                ? 'All Day'
                : `${timeFormat(node.start.dateTime.slice(-14, -9), 'ampm')} -
              ${timeFormat(node.end.dateTime.slice(-14, -9), 'ampm')}`}
            </Time>
          </Summary>
        </FlexItem>
      ))}
    </FlexContainer>
  )
}
