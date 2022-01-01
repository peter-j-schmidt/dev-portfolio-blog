import React from 'react'

import { Helmet } from 'react-helmet'

import BootstrapNavbar from './BootstrapNavbar'

import Footer from './Footer'

export default function Layout({children}) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Peter J. Schmidt</title>
                <html lang="en" />
                <meta name="description" content="Portfolio Website" />
            </Helmet>

            <BootstrapNavbar />

            <div>
                {children}
            </div>

            <Footer />
        </>
    )
}

