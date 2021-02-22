import React from 'react'
import SearchIcom from '../../../assets/images/search_icon.png'
import {Link} from '@reach/router'

function NavItem() {
    return (
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <div class="menu-area">
                <div class="limit-box">
                    <nav class="main-menu">
                        <ul class="menu-area-main">
                            <li class="active"> <Link to="/">Home</Link> </li>
                            <li> <Link to="about">About</Link> </li>
                            <li><Link to="brand">Brand</Link></li>
                            <li><Link to="special">Specials</Link></li>
                            <li><Link to="contact">Contact Us</Link></li>
                            <li class="last">
                                <Link to="#"><img src={SearchIcom} alt="icon" /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavItem
