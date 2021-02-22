import React from 'react'
import {Link} from '@reach/router'

function Socali_link() {
    return (
        <div>
            <ul className="location_icon">
                <li> <Link  to="#"><i className="fa fa-facebook"></i></Link></li>
                <li> <Link  to="#"><i className="fa fa-twitter"></i></Link></li>
                <li> <Link to="#"><i className="fa fa-instagram"></i></Link></li>
            </ul>
        </div>
    )
}

export default Socali_link
