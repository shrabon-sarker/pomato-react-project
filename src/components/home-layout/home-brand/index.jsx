import React from 'react'
import {Link} from '@reach/router'
import Phone1 from '../../../assets/images/1.png'
import Phone2 from '../../../assets/images/2.png'
import Phone3 from '../../../assets/images/3.png'
import Phone4 from '../../../assets/images/4.png'
import Phone5 from '../../../assets/images/5.png'
import Phone6 from '../../../assets/images/6.png'
import SectionTitle from '../../sectionTitle'
import Card from './Card'


function Brand(props) {
    return (
        <div className="brand">
            <SectionTitle title="Our Brand" />
            <div className="brand-bg">
                <div className="container">
                    <div className="row">
                        <Card  phoneImage={Phone1} />
                        <Card  phoneImage={Phone2} />
                        <Card  phoneImage={Phone3} />
                        <Card  phoneImage={Phone4} />
                        <Card  phoneImage={Phone5} />
                        <Card  phoneImage={Phone6} />
                        
                        <div className="col-md-12">
                            <Link to="" className="read-more">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
