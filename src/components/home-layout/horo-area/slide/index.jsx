import React from 'react'
import {Link} from '@reach/router'
import Bainner from '../../../../assets/images/banner.jpg'

function Slide() {
    return (
        <div className="carousel-item active">
            <img className="first-slide" src={Bainner} alt="First slide" />
            <div className="container">
                <div className="carousel-caption relative">
                    <span>All New Phones </span>
                    <h1>up to 25% Flat Sale</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content
                        <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                    <Link className="buynow" to="#">Buy Now</Link>
                    <ul className="social_icon">
                        <li> <Link to="#"><i className="fa fa-facebook"></i></Link></li>
                        <li> <Link to="#"><i className="fa fa-twitter"></i></Link></li>
                        <li> <Link to="#"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slide
