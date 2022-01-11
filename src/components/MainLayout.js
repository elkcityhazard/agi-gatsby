import React from 'react'

// Custom Components

import MainNavBar from './MainNavBar'
import BookNow from './BookNow'
import AboutUs from './AboutUs'
import WhyChooseUs from "../components/WhyChooseUs"
import GoogleMap from '../components/GoogleMap'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function MainLayout( {children}) {
    return (
        <>
        <MainNavBar />
        {children}
        <AboutUs />
        <WhyChooseUs />
        <BookNow />
        <GoogleMap></GoogleMap>
        <ContactSection />
        <Footer />
        </>
    )
}
