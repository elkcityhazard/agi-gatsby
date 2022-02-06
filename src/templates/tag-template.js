import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'

import { graphql } from 'gatsby';

import slugify from 'slugify'

import ServiceCard from '../components/ServiceCard'

//
// text, icon, aos, image, description, url
//

function TagTemplate({ data: { allContentfulBlogPost: { nodes } }, pageContext }) {
    console.log(nodes, pageContext)
    return (
        <>
            <Container as="main">
                <Row className="p-3">
                    <Col className="text-center mx-auto p-3"><h1>{pageContext.tag}</h1></Col>
                </Row>
                <Row as="section">
                    {nodes.map((tag, index) => {
                        const { title, slug, image, description } = tag
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
