import React from 'react'

import { graphql, Link } from 'gatsby'

import { Container, Row, Col } from 'react-bootstrap'

export default function PrivacyPolicy({ data }) {

    const { allContentfulPrivacyPolicy: { nodes } } = data

    return (
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