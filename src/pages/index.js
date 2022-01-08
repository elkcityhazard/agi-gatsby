import * as React from "react"

// Import Custom Components
import MainLayout from '../components/MainLayout'
import Header from '../components/Header'
import LocaleCard from '../components/LocaleCard'

// CSS Global Import 
import '../assets/css/bootstrap.min.css';




// markup
const IndexPage = () => {

  const title = "Absolutely Gorgeous Interiors"
  const subTitle = "Build For Beauty & Accessibility"

  return (
    <>
    <MainLayout>
    <Header title={title} subTitle={subTitle} />
    <LocaleCard />
    </MainLayout>
    </>
  )
}

export default IndexPage
