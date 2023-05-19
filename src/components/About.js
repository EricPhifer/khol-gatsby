import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 108rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  p:last-child {
    padding-bottom: 1.5rem;
  }
`

const Expander = styled.div`
  width: 100%;
  min-height: 5rem;
  margin: 2rem 0;
  padding: 2rem;
  background-color: var(--red);
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-content: center;
  justify-items: center;
  border-radius: 0.5rem;
  svg {
    color: var(--white);
    font-size: 2rem;
    justify-self: end;
    transition: all 0.3s ease-in-out;
  }
  input:checked ~ svg {
    transform: rotate(180deg);
  }
  input:checked ~ svg {
    margin-bottom: 2rem;
  }
  input:checked ~ .content {
    height: 100%;
    padding: 2rem;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 200;
`

const Title = styled.h3`
  min-width: 20rem;
  color: var(--white);
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`

const Blank = styled.div`
  background-color: inherit;
`

const Content = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  background-color: var(--white);
  border-radius: 0.5rem;
  grid-column: 1 / span 3;
  transition: all 0.3s ease-in-out;
  p {
    color: inherit;
    padding: 0.5rem 0;
  }
`

export default function About() {
  const { about } = useStaticQuery(graphql`
    query {
      about: allSanityAbout {
        nodes {
          id
          title
          _rawDropcontent
        }
      }
    }
  `)
  const { nodes } = about
  return (
    <Section id="accordions">
      {nodes.map(node => (
        <Expander key={node.id}>
          <Input type="checkbox" />
          <Blank />
          <Title>{node.title}</Title>
          <FaAngleDown />
          <Content className="content">
            <PortableText
              value={node._rawDropcontent}
              components={defaultComponents}
            />
          </Content>
        </Expander>
      ))}
    </Section>
  )
}
