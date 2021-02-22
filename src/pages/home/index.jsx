import React, { Component } from 'react'
import CallIcon from '../../assets/icon/call.png'
import EmailIcon from '../../assets/icon/email.png'
import Locartion from '../../assets/icon/loc.png'
import Tes from '../../assets/icon/testimonial_qoute.png'
import Phone1 from '../../assets/images/1.png'
import Phone2 from '../../assets/images/2.png'
import Phone3 from '../../assets/images/3.png'
import Phone4 from '../../assets/images/4.png'
import Phone5 from '../../assets/images/5.png'
import Phone6 from '../../assets/images/6.png'
import AboutPhone from '../../assets/images/about.png'
import Bainner from '../../assets/images/banner.jpg'
import Logo from '../../assets/images/logo.png'
import SearchIcom from '../../assets/images/search_icon.png'
import Star from '../../assets/images/star.png'
import '../../assets/styles/style.css'





export class HomePage extends Component {
    render() {
        return (
            <div class="main-layout ">
                <header>
                    {/* header inner  */}
                    <div class="header">

                        <div class="container">
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                    <div class="full">
                                        <div class="center-desk">
                                            <div class="logo">
                                                <a href="index.html"><img src={Logo} alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                    <div class="menu-area">
                                        <div class="limit-box">
                                            <nav class="main-menu">
                                                <ul class="menu-area-main">
                                                    <li class="active"> <a href="index.html">Home</a> </li>
                                                    <li> <a href="about.html">About</a> </li>
                                                    <li><a href="brand.html">Brand</a></li>
                                                    <li><a href="special.html">Specials</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li class="last">
                                                        <a href="#"><img src={SearchIcom} alt="icon" /></a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 offset-md-6">
                                    <div class="location_icon_bottum">
                                        <ul>
                                            <li><img src={CallIcon} all="icons" />(+71)9876543109</li>
                                            <li><img src={EmailIcon} all="icons" />demo@gmail.com</li>
                                            <li><img src={Locartion} all="icons" />Location</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* end header inner  */}
                </header>
                {/* end header  */}
                {/* horo area  */}
                <section class="slider_section">
                    <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="first-slide" src={Bainner} alt="First slide" />
                                <div class="container">
                                    <div class="carousel-caption relative">
                                        <span>All New Phones </span>
                                        <h1>up to 25% Flat Sale</h1>
                                        <p>It is a long established fact that a reader will be distracted by the readable content
                                            <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                        <a class="buynow" href="#">Buy Now</a>
                                        <ul class="social_icon">
                                            <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="second-slide" src={Bainner} alt="Second slide" />
                                <div class="container">
                                    <div class="carousel-caption relative">
                                        <span>All New Phones </span>
                                        <h1>up to 25% Flat Sale</h1>
                                        <p>It is a long established fact that a reader will be distracted by the readable content
                                            <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                        <a class="buynow" href="#">Buy Now</a>
                                        <ul class="social_icon">
                                            <li> <a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="third-slide" src={Bainner} alt="Third slide" />
                                <div class="container">
                                    <div class="carousel-caption relative">
                                        <span>All New Phones </span>
                                        <h1>up to 25% Flat Sale</h1>
                                        <p>It is a long established fact that a reader will be distracted by the readable content
                                            <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                        <a class="buynow" href="#">Buy Now</a>
                                        <ul class="social_icon">
                                            <li> <a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <i class='fa fa-angle-left'></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <i class='fa fa-angle-right'></i>
                        </a>
                    </div>
                </section>
                {/* end horo area  */}
                {/* about  */}
                <div class="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                                <div class="about_img">
                                    <figure><img src={AboutPhone} alt="img" /></figure>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                                <div class="about_box">
                                    <h3>About Us</h3>
                                    <span>Our Mobile Shop</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end about  */}
                {/* brand  */}
                <div class="brand">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>Our Brand</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="brand-bg">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div class="brand_box">
                                        <img src={Phone1} alt="img" />
                                        <h3>$<strong class="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div class="brand_box">
                                        <img src={Phone2} alt="img" />
                                        <h3>$<strong class="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div class="brand_box">
                                        <img src={Phone3} alt="img" />
                                        <h3>$<strong class="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="brand_box">
                                        <img src={Phone4} alt="img" />
                                        <h3>$<strong class="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                    <div class="brand_box">
                                        <img src={Phone5} alt="img" />
                                        <h3>$<strong class="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                    <div class="brand_box">
                                        <img src={Phone6} alt="img" />
                                        <h3>$<strong class="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                        <i><img src={Star} alt='star' /></i>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <a class="read-more">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* barnd end  */}
                {/* testimonials  */}
                <div class="clients">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>what say our clients</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clients_red">
                    <div class="container">
                        <div id="testimonial_slider" class="carousel slide" data-ride="carousel">
                            {/* Indicators  */}
                            <ul class="carousel-indicators">
                                <li data-target="#testimonial_slider" data-slide-to="0" class=""></li>
                                <li data-target="#testimonial_slider" data-slide-to="1" class="active"></li>
                                <li data-target="#testimonial_slider" data-slide-to="2" class=""></li>
                            </ul>
                            {/* The slideshow  */}
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <div class="testomonial_section">
                                        <div class="full center">
                                        </div>
                                        <div class="full testimonial_cont text_align_center cross_layout">
                                            <div class="cross_inner">
                                                <h3>Due markes<br /><strong class="ornage_color">Rental</strong></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                </p>
                                                <div class="full text_align_center margin_top_30">
                                                    <img src={Tes} alt="testimonial" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item active">

                                    <div class="testomonial_section">
                                        <div class="full center">
                                        </div>
                                        <div class="full testimonial_cont text_align_center cross_layout">
                                            <div class="cross_inner">
                                                <h3>Due markes<br /><strong class="ornage_color">Rental</strong></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                </p>
                                                <div class="full text_align_center margin_top_30">
                                                    <img src={Tes} alt="testimonial" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="carousel-item">

                                    <div class="testomonial_section">
                                        <div class="full center">
                                        </div>
                                        <div class="full testimonial_cont text_align_center cross_layout">
                                            <div class="cross_inner">
                                                <h3>Due markes<br /><strong class="ornage_color">Rental</strong></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                </p>
                                                <div class="full text_align_center margin_top_30">
                                                    <img src={Tes} alt="testimonial" /> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                {/* end testimonial  */}


            </div>
        )
    }
}

export default HomePage
