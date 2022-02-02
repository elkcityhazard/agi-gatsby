import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap'

import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'

// Custom CSS

import './gallery.scss'

export default function Gallery({ data }) {

  console.log(data)

  const [open, setOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)

  const { allFile: { edges } } = data

  // get main image

  const { childImageSharp: { gatsbyImageData } } = edges[imgIndex].node

  useEffect(() => {
    console.log(currentImg, open)
  }, [currentImg, open])

  const handleClick = (e, index) => {
    setCurrentImg(e)
    setOpen(true)
    setImgIndex(index)
  }


  return (
    <Container as="main" className="mx-auto p-3">
      <Row className="mb-3">
        <Col className="mx-auto p-3 text-center">
          <h1>Gallery: Some Of Our Recent Work</h1>
        </Col>
      </Row>
      {open &&
        <section className="gallery-wrapper">
          <div className="inner-wrapper">
            <Container>
              <Row>
                <Col sm={12} className="mx-auto p-3 text-center">
                  <GatsbyImage className={open ? `fade-in mx-auto p-3 my-4` : `mx-auto-p-3 my-4`} image={gatsbyImageData} />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      }
      <Row className="image-gallery">
        {edges.map((edge, index) => {
          const { node } = edge
          const image = getImage(node)
          const spans = Math.ceil(image.height / 10);
          return (
            <GatsbyImage
              onClick={(e) => handleClick(image, index)}
              image={image}
              alt={`gallery-image-${node.id}`}
              data-fullsize-target={node.id}
              key={node.id}
              data-index={index}
              className="mx-auto mb-3"
              style={{
                maxWidth: `300px`,
                gridRowEnd: `span ${spans + 2}`
              }}
            />
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
            sizes: "300, 600, 900, 1200"
            )
        }
      }
    }
  }
}
`