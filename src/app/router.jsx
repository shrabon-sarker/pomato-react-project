import { Router } from '@reach/router'
import React from 'react'
import AboutPage from '../pages/about'
import BrandPage from '../pages/brand'
import ContactPages from '../pages/contact'
import Error from '../pages/error'
import HomePage from '../pages/home'
import SpecialPage from '../pages/specials'



function RouterApp() {
    return (
        <Router>
            <HomePage path='/' />
            {/* <Redirect from='about' to='about' noThrow /> */}
            <AboutPage path='about' />
            <BrandPage path='brand' />
            <SpecialPage path='special' />
            <ContactPages path='contact' />
            <Error default />
        </Router>
    )
}

export default RouterApp
