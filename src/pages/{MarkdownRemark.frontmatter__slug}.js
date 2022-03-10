import React from "react"
import { graphql, useScrollRestoration } from "gatsby"

import { Container, Row, Col } from 'react-bootstrap'

import SEO from '../components/SEO'

export default function Template({
  data, location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const markdownScrollRest = useScrollRestoration(`template-main-container`)
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} location={location}></SEO>
      <Container as="main" {...markdownScrollRest}>
        <Row>
          <Col lg={9} className="mx-auto p-3 text-center">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={9} className="mx-auto p-3">
            <div className="blog-post-container">
              <div className="blog-post">
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export const markdownQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`