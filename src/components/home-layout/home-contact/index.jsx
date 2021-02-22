import React from 'react'
import SectionTitle from '../../sectionTitle'
import Form from './Form'

function Contact() {
    return (
        <div className="contact">
            <SectionTitle title="Contact us" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
