import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, GetImage } from 'gatsby-plugin-image';

import { Container, Row, Col, Button } from 'react-bootstrap'

import ContactAside from '../../components/ContactAside';


export default function ServiceTemplate({ data }) {
    console.log(data)
    const {
        title,
        description: { description },
        date,
        featured,
        featuredImage: { gatsbyImageData },
        slug,
        content: { childMarkdownRemark },
        serviceOptions
    } = data.contentfulService

    console.log(childMarkdownRemark.rawMarkdownBody)
    return (
        <Container as="main" className="mx-auto">
            <Row className="p-3">
                <Col md={9} className="mx-auto p-3 text-center">
                    <h1 className="mb-3">{title}</h1>
                  <GatsbyImage image={gatsbyImageData} alt={title} className="mb-3" />
                    <p className="text-start mb-3 mx-auto" style={{maxWidth: `75ch`}}>{description}</p>
                </Col>
            </Row>
            <Row as="section">
                <Col lg={3} className="mb-3">
                  <ContactAside title="Get A Free Quote" options={serviceOptions} />
                  <Col className="text-center p-3 mx-auto">
              <h3 className="h3 text-uppercase text-start">Schedule A <span className="text-success">Free Consultation</span> Now</h3>
              <hr width="100px" className="mx-auto shadow text-white"></hr>
            </Col>
            <Col className="mx-auto p-3 text-center d-flex align-items-center justify-content-center">
              <a href="https://tidycal.com/absolutely-gorgeous-interiors" target="_blank" rel="noreferrer" className="btn btn-large d-block w-100 shadow rounded btn-warning">Schedule Now</a>
            </Col>
                  
                </Col>
                <Col lg={9} className="mx-auto" dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}} >
                    
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
      serviceOptions
      description {
        description
      }
      featuredImage {
        gatsbyImageData(width: 768)
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

