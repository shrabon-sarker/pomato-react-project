import React from 'react'
import AboutLeft from './about-left'
import AboutRigit from './about-right'

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <AboutLeft />
                    <AboutRigit />
                </div>
            </div>
        </div>
    )
}

export default About
