import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'

import { graphql } from 'gatsby';

import slugify from 'slugify'

import ServiceCard from '../components/ServiceCard'
import SEO from '../components/SEO'


function CategoryTemplate({ location, data: { allContentfulBlogPost: { nodes } }, pageContext }) {
  console.log(nodes, pageContext)
  return (
    <>
      <SEO title={pageContext.category} description={pageContext.description} location={location}>

      </SEO>
      <Container as="main" >
        <Row className="p-3">
          <Col className="text-center mx-auto p-3"><h1>{pageContext.category}</h1></Col>
        </Row>
        <Row as="section">
          {nodes.map((category, index) => {
            const { title, slug } = category
            const newSlug = slugify(slug, {
              trim: true,
              replacement: '-',
              lower: true
            })
            return (
              <Col key={index} className="mx-auto p-3">
                <ServiceCard text={title} url={`/blog/${newSlug}`}></ServiceCard>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default CategoryTemplate;

export const tagQuery = graphql`
query getPageByCategory($category: String!) {
    allContentfulBlogPost(
      sort: {fields: title, order: ASC}
      filter: {category: {eq: $category}}
    ) {
      nodes {
        tags
        title
        slug
        publishDate
        featuredImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        description {
          description
        }
      }
    }
  }
`
