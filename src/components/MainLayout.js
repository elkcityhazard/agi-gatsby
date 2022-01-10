import React from 'react'

// Custom Components

import MainNavBar from './MainNavBar'
import BookNow from './BookNow'
import WhyChooseUs from "../components/WhyChooseUs"
import GoogleMap from '../components/GoogleMap'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function MainLayout( {children}) {
    return (
        <>
        <MainNavBar />
        {children}
        <WhyChooseUs />
        <BookNow />
        <GoogleMap></GoogleMap>
        <ContactSection />
        <Footer />
        </>
    )
}
