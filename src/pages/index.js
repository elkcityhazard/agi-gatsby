import * as React from "react"

import { Helmet } from 'react-helmet'

// Import Custom Components
import MainLayout from '../components/MainLayout'
import Header from '../components/Header'
import LocaleCard from '../components/LocaleCard'
import ServiceSection from '../components/ServiceSection'
import AboutUs from '../components/AboutUs'

import SEO from '../components/SEO'


// CSS Global Import 
import '../assets/css/bootstrap.min.css';




// markup
const IndexPage = () => {

  const title = "Absolutely Gorgeous Interiors"
  const subTitle = "Build For Beauty & Accessibility"
  const titleTag = "Luxury Interior Contractor Traverse City, Michigan"

  const description = "We are a luxury interior construction company In Traverse City Michigan.  We specialize in concrete, tile, flooring, and accessible building."

  return (
    <>
      <SEO title={titleTag} description={description}></SEO>
      <Header title={title} subTitle={subTitle} />
      <LocaleCard />
      <ServiceSection />
    </>
  )
}

export default IndexPage
