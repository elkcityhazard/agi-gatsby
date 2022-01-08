import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import './BackgroundImage.scss'

const HeroBackground = ({children}) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
    query {
        placeholderImage: file(relativePath: {eq: "hero-background.png"}) {
          id
          childImageSharp {
            gatsbyImageData(
                width: 1920, 
                quality: 100, 
                webpOptions: {quality: 100},
                pngOptions: {quality: 100},
                breakpoints: [300, 768, 968 1200 1500]
                )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)
 

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}  // needs to be spread into Background IMage
      className="hero-background"
      // preserveStackingContext
    >
      <div className="justify-content-center align-items-center">
        {children}
      </div>
    </BackgroundImage>
  )
}
export default HeroBackground