import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import PrivateRoutes from '../routes/PrivateRoutes'
import Footer from '../components/Footer'

const HomeWrapper = () => {
    return (
        <>
            <HomeNavbar />
            <PrivateRoutes />
            <Footer />
        </>
    )
}

export default HomeWrapper