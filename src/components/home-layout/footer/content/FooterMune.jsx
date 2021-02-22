import React from 'react'
import {Link} from '@reach/router'

function FooterMune() {
    return (
        <div className="menu-bottom">
            <ul className="link">
                <li> <Link to="#">Home</Link></li>
                <li> <Link to="#">About</Link></li>
                <li> <Link to="#">Brand </Link></li>
                <li> <Link to="#">Specials  </Link></li>
                <li> <Link to="#"> Contact us</Link></li>
            </ul>
        </div>
    )
}

export default FooterMune
