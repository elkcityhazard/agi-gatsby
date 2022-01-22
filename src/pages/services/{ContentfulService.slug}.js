import React from 'react'
import { graphql } from 'gatsby';

import { Container, Row, Col, Button } from 'react-bootstrap'

export default function ServiceTemplate({ data }) {
    console.log(data)
    const {
        title,
        description: { description },
        date,
        featured,
        featuredImage: { gatsbyImageData },
        slug,
        content: { childMarkdownRemark }
    } = data.contentfulService

    console.log(childMarkdownRemark.rawMarkdownBody)
    return (
        <Container as="main" className="mx-auto">
            <Row className="p-3">
                <Col md={9} className="mx-auto p-3 text-center">
                    <h1 className="mb-3">{title}</h1>
                    <p className="text-start">{description}</p>
                </Col>
            </Row>
            <Row as="section">
                <Col md={9} className="mx-auto" dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}} >
                    
                </Col>
            </Row>
        </Container>
    )
}

export const query = graphql`
query getSingleService($slug: String!){
    contentfulService(slug: {eq: $slug}) {
      id
      slug
      title
      date
      description {
        description
      }
      featuredImage {
        gatsbyImageData(width: 10)
      }
      featured
      content {
        content
        childMarkdownRemark {
          id
          frontmatter {
            title
          }
          rawMarkdownBody
          html
        }
      }
    }
  }
`

