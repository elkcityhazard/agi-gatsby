import React from 'react'

import {useState, useEffect} from 'react'

import {graphql, useStaticQuery} from 'gatsby';

import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

// React bootstrap

import {Container, Row, Col} from 'react-bootstrap'

export default function BookNow( { children }) {

    const [loaded, setLoaded] = useState(false)

    const {placeholderImage} = useStaticQuery(graphql`
  {
    placeholderImage: file(relativePath: {eq: "concrete-foundation-construction-1920x713.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          webpOptions: {quality: 100}
          breakpoints: [300, 768, 968, 1200, 1500]
        )
      }
    }
  }
`
    )

    console.log(placeholderImage)

 const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleLoad = () => {
      setLoaded(true)
  }

    return (
        <>
        <BackgroundImage
        tag="section"
        loading="lazy"
        placeholder="blurred"
        {...bgImage}
        >
            <Container fluid
            as="section" 
            className="book-now h-100"
            style={{
                background: `linear-gradient(0.25turn, rgba(255, 163, 28, 0.5), rgba(255, 163, 28, 0.5))`,
            }}
            >
            <Row className="p-3 text-light" style={{ 
                minHeight: `50vh`,
                display: `grid`,
                placeItems: `center`
                }}>
                <Col xl={9} className="text-center mx-auto">
                    <h3 className="h1">Schedule A Free Consultation Now</h3>
                </Col>
            </Row>
            <Row>
                <Col xl={9} className="mx-auto">
                    {loaded && <div id="tidycal-embed" data-path="mark2/30-minute-meeting"></div>}                    
                </Col>
            </Row>
        </Container>
        </BackgroundImage>
        </>
    )
}
