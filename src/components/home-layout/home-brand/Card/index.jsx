import React from 'react'
import Star from '../../../../assets/images/star.png'

function Card({phoneImage}) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
            <div className="brand_box">
                <img src={phoneImage} alt="img" />
                <h3>$<strong className="red">100</strong></h3>
                <span>Mobile Phone</span>
                <i><img src={Star} alt='star' /></i>
                <i><img src={Star} alt='star' /></i>
                <i><img src={Star} alt='star' /></i>
                <i><img src={Star} alt='star' /></i>
            </div>
        </div>
    )
}

export default Card
