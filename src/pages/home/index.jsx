import React, { Component } from 'react'



import '../../assets/styles/style.css'
import Header from '../../components/header'
import Footer from '../../components/home-layout/footer'
import About from '../../components/home-layout/home-about'
import Brand from '../../components/home-layout/home-brand'
import Contact from '../../components/home-layout/home-contact'
import HoroArea from '../../components/home-layout/horo-area'
import Testimonial from '../../components/home-layout/testimonial'





export class HomePage extends Component {
    render() {
        return (
            <div className="main-layout ">
                <Header />
                {/* end header  */}
                {/* horo area  */}
                <HoroArea />
                {/* end horo area  */}
                {/* about  */}
                <About />
                {/* end about  */}
                {/* brand  */}
                <Brand />
                {/* barnd end  */}
                {/* testimonials  */}
                <Testimonial />
                {/* end testimonial  */}
                {/* contact  */}
                <Contact />

                {/* end contact  */}

                {/* footer  */}
                <Footer />


            </div>
        )
    }
}

export default HomePage
