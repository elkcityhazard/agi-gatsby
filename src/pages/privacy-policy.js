import React from 'react'

import { graphql, Link } from 'gatsby'

import { Container, Row, Col } from 'react-bootstrap'

import SEO from '../components/SEO'

export default function PrivacyPolicy({ data, location }) {

  const { allContentfulPrivacyPolicy: { nodes } } = data

  return (
    <>
      <SEO title="Privacy Policy" description="privacy policy - Absolutely Gorgeous Interiors, LLC" location={location} />
      <Container className="text-center">
        <Row>
          <Col><h1>Absolutely Gorgeous Interiors, LLC - Privacy Policy</h1></Col>
        </Row>
        <Row>
          {nodes.map((node, index) => {
            return (
              <Col key={index} className="mx-auto text-start" dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }}>

              </Col>
            )
          })}

        </Row>
      </Container >
    </>
  )
}




export const getPrivacyPolicy = graphql`
query GetPrivacyPolicy {
    allContentfulPrivacyPolicy {
      nodes {
        title
        publishDate
        nofollow
        description
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`