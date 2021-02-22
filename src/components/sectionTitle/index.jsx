import React from 'react'

function SectionTitle(poros) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>{poros.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle
