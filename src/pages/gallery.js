import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap'

import { FaTimes, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

// Import AOS
import AOS from "aos";

// Import Custom CSS
import "aos/dist/aos.css";

// Custom CSS

import './gallery.scss'

export default function Gallery() {

  const data = useStaticQuery(query)

  console.log(data)
  const [hasMounted, setHasMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

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

  const increment = () => {
    imgIndex >= nodes.length - 1 ? setImgIndex(nodes.length - 1) : setImgIndex((imgIndex) => setImgIndex(imgIndex + 1))
    setAnimate(false)
    setAnimate(true)
  }

  const decrement = () => {
    imgIndex <= 0 ? setImgIndex(0) : setImgIndex((imgIndex) => setImgIndex(imgIndex - 1))
    setAnimate(false)
    setAnimate(true)
  }


  return (
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
          className="gallery-wrapper">
          <div className="inner-wrapper">
            <Container>
              <FaTimes size={40} className="float-end text-white shadow-md spin" onClick={() => setOpen(false)} />
              <Row>
                <Col sm={12} className="mx-auto p-3 text-center">
                  <GatsbyImage
                    className={animate ? `fade-in mx-auto p-3 my-4` : 'mx-auto p-3 my-4'}
                    image={gatsbyImageData}
                    onClick={() => setOpen(false)}
                    height={gatsbyImageData.height}
                    width={gatsbyImageData.width}

                  />
                </Col>
              </Row>
            </Container>
            <FaChevronCircleLeft className="text-white" id="prevSlide" size={40} onClick={decrement} />
            <FaChevronCircleRight className="text-white" id="nextSlide" size={40} onClick={increment} />
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
              className="mx-auto mb-3"
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
  )
}

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(
            width: 1200
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