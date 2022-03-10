import React from 'react';

import { StaticImage } from "gatsby-plugin-image"

// Background Image
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

// custom components

import CallNow from './CallNow'


// custom css

import './GoogleMap.scss'

const title = "#1 Flooring & Concrete Construction Contractor in Traverse City, Michigan"

export default function LocaleCard() {

  const { placeholderImage } = useStaticQuery(
    graphql`
    {
      placeholderImage: file(relativePath: {eq: "traverse-city.jpg"}) {
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

  return (
    <BackgroundImage
      Tag="div"
      className="d-flex align-items-center justify-content-center p-0"
      style={{
        backgroundPosition: `fixed`,
      }}
      {...bgImage}
      preserveStackingContext
    >
      <section
        className="full-width p-3"
        style={{
          background: `linear-gradient(rgba(255,255,255,0.66), rgba(255,255,255,0.66))`
        }}
      >
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-xl-6 mx-auto p-3 text-center">
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.504838409727!2d-85.63905168446499!3d44.79089927909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9bd515e1608f756!2sAbsolutely%20Gorgeous%20Interiors%2C%20LLC!5e0!3m2!1sen!2sus!4v1642964608303!5m2!1sen!2sus`} width="100%" height="450" title="map to absolutely gorgeous interiors" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="col-12 col-xl-6 mx-auto p-3">
              <h3>{title}</h3>
              <p className="lead">
                We are an interior construction contractor that provides services for clients all over the city, and we would love to help you too! We are committed to providing a superior service that helps our customers solve ADA accessibility compliance, flooring, concrete, and all other construction concerns. You can find additional information about our interior construction contractor services on our website. Absolutely Gorgeous Interiors looks forward to helping you achieve your construction vision, so <a href="https://tidycal.com/absolutely-gorgeous-interiors" target="_parent" rel="noreferrer" title="book an appointment now" className="text-dark">schedule an appointment</a> today!
              </p>
              <CallNow />
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage >
  )
}
