import React from 'react'
import Logo from '../../../../assets/images/logo.png'
import {Link} from '@reach/router'

function LogoSection() {
    return (
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div class="full">
                <div class="center-desk">
                    <div class="logo">
                        <Link to="/"><img src={Logo} alt="#" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSection
