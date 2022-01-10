import React from 'react'
import {useEffect} from 'react'
import data from '../constants/services';

import ServiceCard from './ServiceCard'

import {Row, Container, Col} from 'react-bootstrap'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import './ServiceCard.scss'


export default function ServiceSection() {

    const { placeholderImage } = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "wood-flooring-bg.jpg" }
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
  `)
      const image = getImage(placeholderImage)

      // Use like this:
      const bgImage = convertToBgImage(image)


    return (
        <BackgroundImage 
        Tag="section"
        className="service-section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
        >
       <Container 
       fluid as="section" 
       className="h-100"
       style={{
           background: `linear-gradient(0.25turn, rgba(0,0,0,0.66), rgba(0,0,0,0.66))`
       }}
       >
         <Container>
         <Row className="p-3 text-center">
            <Col md={9} className="mx-auto text-center">
                <h3 className="h1 text-light text-uppercase">Our <span className="text-success">Services</span></h3>
                <hr width="100px" className="mx-auto text-white shadow" />
                <p class="text-light fw-bolder">Absolutely Gorgeous Interiors offers a full range of building contractor services in Traverse City, Michigan. Our team is dedicated to helping you find the right type of contractor services and building materials that will work best for your project or renovation.</p>
            </Col>
        </Row>
       <Row 
       className="justify-content-center align-items-center p-3" 
       style={{
           overflow: 'hidden'
       }}
       >
        
       {data.map((link, index) => {
           return (
            <Col xs={12} lg={9} md={9} xl={4} className="d-flex align-items-center justify-content-center mx-auto">
                <ServiceCard 
                aos={link.aos} 
                key={index} 
                image={link.image} 
                text={link.text} 
                description={link.description} 
                url={link.url} 
                icon={link.icon}
                className="mx-auto mb-3"
                />
            </Col>
           )
        })}
       </Row>
         </Container>
         
       </Container>
       </BackgroundImage>
    )
}
