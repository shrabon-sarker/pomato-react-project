import React from 'react'

function TestimonailSide({testimonial}) {
    return (
        <div className="carousel-item active">
            <div className="testomonial_section">
                <div className="full center">
                </div>
                <div className="full testimonial_cont text_align_center cross_layout">
                    <div className="cross_inner">
                        <h3>Due markes<br /><strong className="ornage_color">Rental</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                        </p>
                        <div className="full text_align_center margin_top_30">
                            <img src={testimonial} alt="testimonial" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonailSide
