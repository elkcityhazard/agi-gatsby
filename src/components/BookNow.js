import React from "react";

import { useState, useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import BookingWidget from './BookingWidget'

// React bootstrap

import { Container, Row, Col } from "react-bootstrap";


const bookingForm = `<div id="tidycal-embed" data-path="mark2/30-minute-meeting"></div>`;

export default function BookNow() {

  const { placeholderImage } = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "concrete-foundation-construction-1920x713.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            webpOptions: { quality: 100 }
            breakpoints: [300, 768, 968, 1200, 1500]
          )
        }
      }
    }
  `);

  const image = getImage(placeholderImage);

  const bgImage = convertToBgImage(image);

  return (
    <>
      <BackgroundImage
        tag="section"
        loading="lazy"
        placeholder="blurred"
        {...bgImage}
      >
        <Container
          fluid
          as="section"
          className="book-now h-100"
          style={{
            background: `linear-gradient(0.25turn, rgba(0,0,0, 0.5), rgba(0,0,0,0.5))`,
          }}
        >
          <Row
            className="p-3 text-light"
            style={{
              minHeight: `50vh`,
              display: `grid`,
              placeItems: `center`,
            }}
          >
            <Col xl={9} className="text-center mx-auto">
              <h3 className="h1 text-uppercase">Schedule A <span className="text-success">Free Consultation</span> Now</h3>
              <hr width="100px" className="mx-auto shadow text-white"></hr>
            </Col>
            <Col xl={9} className="mx-auto text-center d-flex align-items-center justify-content-center">
              <a href="https://tidycal.com/absolutely-gorgeous-interiors" target="_parent" rel="noreferrer" className="btn btn-large btn-rounded btn-primary">Schedule Now</a>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </>
  );
}
