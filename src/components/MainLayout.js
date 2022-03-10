import React, { useState, useEffect } from 'react'

// Custom Components

import MainNavBar from './MainNavBar'
import BookNow from './BookNow'
import AboutUs from './AboutUs'
import WhyChooseUs from "../components/WhyChooseUs"
import GoogleMap from '../components/GoogleMap'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
        window.scrollTo(0, 0)
    }, [loaded])

    if (!loaded) {
        return null
    }

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
