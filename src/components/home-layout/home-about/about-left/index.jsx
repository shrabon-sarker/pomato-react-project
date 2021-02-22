import React from 'react'
import AboutPhone from '../../../../assets/images/about.png'

function AboutLeft() {
    return (
        <div className="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
            <div className="about_img">
                <figure><img src={AboutPhone} alt="img" /></figure>
            </div>
        </div>
    )
}

export default AboutLeft
