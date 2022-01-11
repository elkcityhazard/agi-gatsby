import React from 'react'

import {graphql, useStaticQuery} from 'gatsby'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {Container, Row, Col} from 'react-bootstrap'

const query = graphql`
{
  allStrapiServices {
    nodes {
      Title
      description
      service_image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 500
              webpOptions: {quality: 75}
              jpgOptions: {quality: 85}
              breakpoints: [300, 768, 968, 1200]
            )
          }
        }
      }
      detailed_description {
        section_content
        section_title
        section_image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  }
}
`

export default function Services() {
    const data = useStaticQuery(query)
    const {nodes} = data.allStrapiServices
    console.log(nodes);
    return (
        <Container as="section">
            {nodes.map((section, index) => {
                const image = section.service_image.localFile.childImageSharp.gatsbyImageData
                return (
                    <>
                    <Row key="index"> 
                        <Col md={9} className="mx-auto p-3">
                            <h2>{section.Title}</h2>
                            <p class="lead">{section.description}</p>
                        </Col>
                        <Col md={9} className="mx-auto p-3">
                            <figure>
                                <GatsbyImage image={image} alt="image" placeholder="blurred" />
                            </figure>
                        </Col>
                    </Row>
                    <main>
                        {section.detailed_description.map((section, index) => {
                            return (
                                <Row key={index}>
                                    <Col md={9} className="mx-auto mb-3">
                                        {section.section_content}
                                    </Col>
                                </Row>
                            )
                        })}
                    </main>
                    </>
                )
            })}
        </Container>
    )
}
