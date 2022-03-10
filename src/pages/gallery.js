import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery, useScrollRestoration } from 'gatsby';

import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'

import { FaTimes, FaChevronCircleLeft, FaChevronCircleRight, FaGalacticSenate } from 'react-icons/fa'

import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

// Import AOS
import AOS from "aos";

// Import Custom CSS
import "aos/dist/aos.css";

// Custom CSS

import './gallery.scss'

// SEO 

import SEO from '../components/SEO'

export default function Gallery({ location }) {

  const galleryScrollRest = useScrollRestoration(`gallery-main`)

  const data = useStaticQuery(query)

  const [error, setError] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [fade, setFade] = useState(false)

  const { allFile: { nodes } } = data

  // get main image

  const { childImageSharp: { gatsbyImageData } } = nodes[imgIndex]



  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null;
  }

  const increment = (imgIndex) => {
    if (imgIndex >= nodes.length - 1) {
      setImgIndex(nodes.length - 1)
    } else {
      setImgIndex((imgIndex) => imgIndex + 1)
    }
    setTimeout(() => {
      setLoading(false)
      setAnimate(true)
    }, 250)
  }

  const decrement = (imgIndex) => {
    if (imgIndex <= 0) {
      setImgIndex(0)
    } else {
      setImgIndex((imgIndex) => imgIndex - 1)
    }
    setTimeout(() => {
      setLoading(false)
      setAnimate(true)
    }, 250)

  }


  return (
    <>
      <SEO title="Example Of Ours Works" description="Absolutely Gorgeous Interiors is an interior and exterior construction group based in Traverse City, Michigan" location={location} />
      <Container as="main" className="mx-auto p-3">
        <Row className="mb-3">
          <Col className="mx-auto p-3 text-center">
            <h1>Gallery: Some Of Our Recent Work</h1>
          </Col>
        </Row>
        {open &&
          <section
            data-aos="fade"
            data-aos-delay="0"
            data-aos-duration="1250"
            className="gallery-wrapper mx-auto text-center">
            <div className="inner-wrapper">
              <Container className="mx-auto p-3">
                <FaTimes size={40} className="ms-auto me-2 text-white shadow-md spin" onClick={() => setOpen(false)} />
                <Row className="text-center">
                  <Col sm={12} className="d-flex align-items-center justify-content-center mx-auto text-center">
                    {
                      loading && <Spinner animation="border" variant="warning" className="mx-auto" />
                    }
                    {
                      error && <p className="text-center p-3">Cannot fetch image at this time.</p>
                    }
                    {!loading &&
                      <GatsbyImage
                        className="fade-in mx-auto my-4 rounded-lg"
                        layout="constrained"
                        image={gatsbyImageData}
                        height={gatsbyImageData.height}
                        width={gatsbyImageData.width}

                      />
                    }
                  </Col>
                </Row>
              </Container>
              {imgIndex > 0 &&
                <FaChevronCircleLeft
                  aria-role="button"
                  aria-label="decrement gallery slide"
                  className="text-white"
                  id="prevSlide"
                  size={40}
                  onClick={() => {
                    setAnimate(false)
                    setFade(false)
                    setLoading(true)
                    decrement(imgIndex)
                  }} />
              }
              {imgIndex !== nodes.length - 1 && <FaChevronCircleRight as="button"
                aria-role="button"
                aria-label="increment gallery slide"
                className="text-white"
                id="nextSlide"
                size={40}
                onClick={() => {
                  setAnimate(false)
                  setFade(false)
                  setLoading(true)
                  increment(imgIndex)
                }} />
              }
            </div>
          </section>
        }
        <Row className="image-gallery">
          {nodes.map((node, index) => {
            const image = getImage(node)
            const spans = Math.ceil(image.height / 10);
            return (
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                aria-label="image"
                role="button"
                alt={`gallery-image-${node.id}`}
                data-fullsize-target={node.id}
                key={node.id}
                data-index={index}
                className="mx-auto mb-3 rounded"
                onClick={() => {
                  setOpen(true)
                  setImgIndex(index)
                  setAnimate(true)
                }}
                style={{
                  maxWidth: `300px`,
                  gridRowEnd: `span ${spans + 2}`
                }}
              />
            )

          })}
        </Row>
      </Container >
    </>
  )
}

export const query = graphql`
            {
              allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
              nodes {
              id
        childImageSharp {
              gatsbyImageData(
                width: 1366
                webpOptions: {quality: 100}
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                sizes: "300, 600, 900, 1200"
            )
        }
      }
  }
}
            `