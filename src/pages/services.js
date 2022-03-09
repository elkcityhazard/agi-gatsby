import React, { useEffect } from 'react'

import { graphql, Link, useStaticQuery } from 'gatsby'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, Row, Col, Card } from 'react-bootstrap'

import ServiceCard from '../components/ServiceCard'

import SEO from '../components/SEO'



export default function Services({ data, location }) {
  const { nodes } = data.allContentfulService

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <SEO title="Our Construction Services" description="Absolutely Gorgeous Interiors is a full service construction group specializing in residential and commercial design and remodeling." location={location} />
      <Container md={9} className="mx-auto p-3">
        {nodes.map((node, index) => {
          return (
            <Row className="p-3">
              <Col md={6} className="mx-auto p-3 card border-info mb-3">
                <Card className="bg-dark text-white">
                  <Card.Img src={node.featuredImage.gatsbyImageData.images.fallback.src} title={node.featuredImage.title} alt={node.featuredImage.title} width="300" className="opacity-25" />
                  <Card.ImgOverlay>
                    <Card.Title><h2 className="h5 fw-bold text-decoration-underline">{node.title}</h2></Card.Title>
                    <Card.Text>
                      {node.description.description}
                    </Card.Text>
                    <Card.Text><Link className="btn btn-warning" to={`/services/${node.slug}`}>{node.title}</Link></Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          )
        })}
      </Container>
    </>
  )
}

export const data = graphql`
  {
    allContentfulService {
      nodes {
        id
        title
        date
        slug
        description {
          id
          description
        }
        featuredImage {
          gatsbyImageData(width: 300)
          title
          description
        }
        featured
        content {
          content
        }
      }
      totalCount
    }
  }
`
