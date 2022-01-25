import React from 'react';

import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { Container, Row, Col, Button } from 'react-bootstrap';

import './aboutUs.scss'

function AboutUs() {

    const title = `Our Story - Absolutely Gorgeous Interiors`
    console.log(title)

    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
        placeholderImage: file(relativePath: {eq: "young-man-carpenter.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          breakpoints: [300, 768, 968, 1200, 1600, 1900]
        )
      }
    }
  }
`    )

    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)


    return (
        <BackgroundImage
            Tag="section"
            style={{
                backgroundPosition: `50% 25%`
            }}
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
        >
            <Container fluid as="header" style={{
                background: `rgba(0,0,0,0.5)`,
                height: `100%`,
                minHeight: `75vh`,
                minWidth: `1000`,
                display: `grid`
            }}
                className="p-5"
            >
                <Row className="align-items-center">
                    <Col lg={9} className="mx-auto p-3">
                        <h1 className="display-1 text-white text-start text-xl-start">{title}</h1>
                    </Col>
                    <Col lg={3} className="mx-auto p-3"></Col>
                </Row>
            </Container>
        </BackgroundImage>
    )
}

export default AboutUs;
