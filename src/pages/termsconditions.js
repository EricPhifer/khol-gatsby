// eslint-disable-next-line
import { defaultComponents, PortableText } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../components/Layout'

const TermStyles = styled.div`
  word-wrap: break-word;
  .overlord {
    max-width: 90rem;
    margin: 7rem auto 0;
    background-color: #fff;
    padding: 2rem 2rem 15rem;
    @media only screen and (max-width: 500px) {
      padding: 2rem 2rem 18rem;
    }
  }
  p {
    padding: 0.5rem 0;
  }
  p:first-child {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: 5rem;
    text-align: center;
  }
  .termsContainer {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .updateDate,
  h1 {
    text-align: center;
  }
  // change from 7rem for banner
  @media only screen and (max-width: 900px) {
    padding-top: 9rem;
  }
`

export default function TermsConditions() {
  const { terms } = useStaticQuery(graphql`
    query {
      terms: allSanityTermsconditions {
        nodes {
          id
          title
          _rawContent
        }
      }
    }
  `)
  const { nodes } = terms
  return (
    <Layout>
      <Seo title="Terms &amp; Conditions" />
      <TermStyles>
        <div className="overlord">
          {nodes.map(term => (
            <section key={term.id}>
              <h1>{term.title}</h1>
              <section className="termsContainer">
                <PortableText
                  value={term._rawContent}
                  components={defaultComponents}
                />
              </section>
            </section>
          ))}
        </div>
      </TermStyles>
    </Layout>
  )
}
