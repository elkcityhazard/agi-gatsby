import React from 'react'

// Custom Components

import MainNavBar from './MainNavBar'

export default function MainLayout( {children}) {
    return (
        <>
        <MainNavBar />
        {children}
        </>
    )
}
