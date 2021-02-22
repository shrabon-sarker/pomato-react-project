import React from 'react'
import Tes from '../../../assets/icon/testimonial_qoute.png'
import SectionTitle from '../../sectionTitle'
import Indicators from './indicators'
import TestimonailSide from './indicators/TestimonialSlide'

function Testimonial() {
    return (
        <div>
            <div className="clients">
                <SectionTitle title="what say our clients" />
            </div>
            <div className="clients_red">
                <div className="container">
                    <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                        {/* Indicators  */}
                        <Indicators />
                        {/* The slideshow  */}
                        <div className="carousel-inner">
                            <TestimonailSide testimonial={Tes} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
