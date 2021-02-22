import React from 'react'
import NextPrev from './Next-Prev'
import Slide from './slide'

function HoroArea() {
    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                <div className="carousel-inner">
                    <Slide />
                </div>
                <NextPrev />
            </div>
        </section>
    )
}

export default HoroArea
