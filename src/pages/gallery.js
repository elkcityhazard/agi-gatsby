import React from 'react';
import { graphql } from 'gatsby';

import {Container, Row, Col } from 'react-bootstrap'

import {GatsbyImage, getImage} from 'gatsby-plugin-image'

export default function gallery( {data} ) {
   const {allFile: {edges }} = data
  return (
      <Container as="main" className="mx-auto p-3">
          <Row>
          {edges.map((edge, index) => {
              const { node } = edge
              const image = getImage(node)
              return (
                  <Col key={node.id} md={4} className="mx-auto mb-3 p-3"><GatsbyImage image={image} alt={`gallery-image-${node.id}`} data-fullsize-target={node.id}  /></Col>
                  )
              
          })}
          </Row>
      </Container>
  )
}


export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(
            width: 1200
            webpOptions: {quality: 100}
            quality: 100
            layout: CONSTRAINED
            placeholder: BLURRED
            breakpoints: [300, 499, 768, 968, 1200, 1500]
          )
        }
      }
    }
  }
}
`