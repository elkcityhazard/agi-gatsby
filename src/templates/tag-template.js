import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'

import { graphql } from 'gatsby';

import slugify from 'slugify'

import ServiceCard from '../components/ServiceCard'
import TagsList from '../components/TagsList';

//
// text, icon, aos, image, description, url
//

function TagTemplate({ data: { allContentfulBlogPost: { nodes } }, pageContext }) {
  console.log(nodes, pageContext)
  return (
    <>
      <Container as="main" margin="mx-auto" style={{ maxWidth: `100ch` }}>
        <Row className="p-3">
          <Col className="text-center mx-auto p-3"><h1>{pageContext.tag}</h1></Col>
        </Row>
        <Row as="section" className="justify-content-center">
          <Col xl={9} className="p-3">
            {nodes.map((tag, index) => {
              const { title, slug, image, description } = tag
              const newSlug = slugify(slug, {
                trim: true,
                replacement: '-',
                lower: true
              })
              return (
                <div key={index} className="mx-auto p-3">
                  <ServiceCard text={title} aos="fade-up" url={`/blog/${newSlug}`}></ServiceCard>
                </div>
              )
            })}
          </Col>
          <Col xl={3}>
            <TagsList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TagTemplate;

export const tagQuery = graphql`
query getPageByTag($tag: String!) {
    allContentfulBlogPost(
      sort: {fields: title, order: ASC}
      filter: {tags: {eq: $tag}}
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
