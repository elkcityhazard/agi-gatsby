import React, { useEffect } from 'react'

// Background Image
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

import { Container, Row, Col, Card } from 'react-bootstrap'

// data

import data from '../constants/process'

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Custom CSS
import './AboutUs.scss'

function AboutUs() {
    const { placeholderImage } = useStaticQuery(
        graphql`
    {
      placeholderImage: file(relativePath: {eq: "architectual-planning.png"}) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 1920
            webpOptions: {quality: 100}
            breakpoints: [300, 768, 968, 1200, 1500]
          )
        }
      }
    }
  `)

    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <BackgroundImage
            Tag="section"
            className="d-flex align-items-center justify-content-center"
            style={{
                backgroundPosition: `fixed`,
            }}
            {...bgImage}
            preserveStackingContext
        >
            <Container
                fluid
                className="h-100 p-3"
                style={{
                    background: `linear-gradient(0.5turn, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 25%, rgba(255,255,255,0.85) 50%,  rgba(255,255,255,1.0))`,
                }}
            >
                <Row className="p-3">
                    <Col md={9} className="mx-auto text-center">
                        <h3 className="h1 text-uppercase">Our <span className="text-success">Process</span></h3>
                        <hr width="100px" className="mx-auto text-dark shadow" />
                    </Col>
                </Row>
                <Row
                    className="justify-content-center p-3"
                >
                    {
                        data.map((process, index) => {
                            return (
                                <Col
                                    key={process.id}
                                    lg={4}
                                    className="process-card"
                                    data-aos="fade-up"
                                    data-aos-delay={process.id * 250}
                                    data-aos-duration="1250"
                                    data-aos-once="true"
                                >
                                    <Card className="h-100 bg-transparent">
                                        <Card.Header bg="transparent" className="text-center bg-transparent">
                                            <div className="rounded-circle border border-none circle-id">
                                                {process.id}
                                            </div>
                                        </Card.Header>
                                        <Card.Body style={{ overflow: `hidden` }}>
                                            <div className="text-center">{process.icon}</div>
                                            <Card.Title className="text-center text-uppercase fw-bolder">{process.title}</Card.Title>
                                            <Card.Text
                                                data-aos="fade-left"
                                                data-aos-delay={process.id * 100 + 250}
                                                data-aos-duration="1250"
                                                data-aos-once="true"
                                            >{process.text}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </BackgroundImage>
    )
}

export default AboutUs
