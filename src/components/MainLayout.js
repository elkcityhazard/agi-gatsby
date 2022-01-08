import React from 'react'

// Custom Components

import MainNavBar from './MainNavBar'
import BookNow from './BookNow'

export default function MainLayout( {children}) {
    return (
        <>
        <MainNavBar />
        {children}
        <BookNow />
        </>
    )
}
