import React from 'react'
import NavItem from './nav'
import ContactNav from './nav/ContactNav'
import LogoSection from './nav/logo'

function Header() {
    return (
        <header>
            {/* header inner  */}
            <div class="header">

                <div class="container">
                    <div class="row">
                        <LogoSection />
                        <NavItem />
                        <ContactNav />
                    </div>
                </div>
            </div>
        {/* end header inner  */}
        </header>
    )
}

export default Header
