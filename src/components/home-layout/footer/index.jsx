import React from 'react'
import NavItem from '../../header/nav'
import Address from './content/Address'
import FooterMune from './content/FooterMune'
import Socalilink from './content/Socali_link'
import CopyRight from './copyright'

function Footer() {
    return (
        <footer>
            <div id="contact" className="footer">
                <div className="container">
                    <div className="row pdn-top-30">
                        <div className="col-md-12 ">
                            <div className="footer-box">
                                <Address />
                                <Socalilink />
                                <FooterMune /> 
                              
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight />
            </div>
        </footer>
    )
}

export default Footer
