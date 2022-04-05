import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import HomeOwlSlider from './../Element/HomeOwlSlider';
import HomeOwlSlider2 from './../Element/HomeOwlSlider2';
import ImgCarouselContent from './../Element/ImgCarouselContent';
// import HomeTab from './../Element/HomeTab';
// import Counter from './../Element/Counter';
import PortfolioCarousel from './../Element/PortfolioCarousel';
import TestimonialCarousel from './../Element/TestimonialCarousel';
// import FormStyle from './../Element/FormStyle';
import Index7ClientCarousel from './../Element/Index7ClientCarousel';

//Images
import pic4 from './../../images/main/img.jpg';
// import bgimg from './../../images/background/bg1.jpg';
import bgimg2 from './../../images/background/bg-map.jpg';
// import bgimg3 from './../../images/background/bg1.jpg';

class Homepage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page-wraper">
        <Header />
        <div className="page-content bg-white">
          {/*  Slider Banner */}
          <div className="owl-slider-banner main-slider">
            <HomeOwlSlider />
            {/*  Service   */}
            <div className="service-box-slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <ImgCarouselContent />
                  </div>
                </div>
              </div>
            </div>
            {/*  Service End  */}
          </div>
          {/*  Slider Banner */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white content-inner-1 about-us">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-7 col-md-8">
                    <div className="abuot-box row">
                      <div className="col-lg-4">
                        <h2 className="box-title m-tb0">
                          About Us
                          <span className="bg-primary"></span>
                        </h2>
                        <h4 className="text-gray-dark">
                          Share your experiences
                          to us
                        </h4>
                      </div>
                      <div className="col-lg-8">
                        <p>
                          "Innovation" is a must
                          in today's modern era.
                          This simple word demands
                          a huge result within
                          creating a new works
                          which is called
                          "Invention" .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 about-img">
                    <img
                      src={pic4}
                      data-tilt
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- About Us End --> */}
            {/* <!-- Our Services --> */}
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h2 className="box-title m-tb0">
                    Categories{' '}
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    Wich catgories for join with
                    us
                  </p>
                </div>
              </div>
              <div className="development-box">
                <div className="container">
                  <HomeOwlSlider2 />
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            {/* <div
              className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix"
              style={{
                backgroundImage:
                  'url(' + bgimg + ')',
              }}
            >
              <div className="container">
                <div className="section-head text-white text-center">
                  <h2 className="box-title m-tb0">
                    Why Chose Us
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    Contrary to popular belief,
                    Lorem Ipsum is not simply
                    random text. It has roots in a
                    piece of classical Latin
                    literature from 45 BC, making
                    it over
                  </p>
                </div>
              </div>
              <HomeTab />
              <div className="choses-info text-white">
                <Counter />
              </div>
            </div> */}
            {/* <!-- Why Chose Us End --> */}
            {/* <!-- Our Portfolio --> */}
            <div className="section-full content-inner-1 mfp-gallery">
              <div className="container-fluid">
                <div className="section-head text-center">
                  <h4 className="text-gray-dark m-b10">
                    Event Story
                  </h4>
                  <h2 className="box-title m-tb0">
                    Our Success Event
                    <br /> 2020 - 2021
                    <span className="bg-primary"></span>
                  </h2>
                </div>
                <PortfolioCarousel />
              </div>
            </div>
            {/* <!-- Our Portfolio END --> */}
            {/* <!-- Testimonials --> */}
            <div
              className="section-full content-inner"
              style={{
                backgroundImage:
                  'url(' + bgimg2 + ')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="box-title m-tb0">
                    Our Testimonials
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    {' '}
                    Success stories from
                    participant joined in our
                    event event{' '}
                  </p>
                </div>
                <div className="section-content m-b30 ">
                  <TestimonialCarousel />
                </div>
              </div>
            </div>
            {/* <!-- Testimonials END --> */}
            {/* <!-- Pricing Table --> */}
            {/* <div className="section-full content-inner bg-gray pricing-bx">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <h2 className="text-uppercase ">
                        <span
                          className="font-weight-300"
                          id="tab-pay"
                        >
                          Check The Paymnet
                        </span>{' '}
                        <br /> for register & Get
                        a Reward
                      </h2>
                      <h5 className="font-weight-400 text-gray-dark max-w800 m-auto">
                        Don't forget to check
                        again before your
                        registration and all for
                        this event only online
                        because C19
                      </h5>
                    </div> */}
            {/* text-data-1  */}
            {/* <div className="section-head text-center">
                      <h2 className="text-uppercase ">
                        <span
                          className="font-weight-300"
                          id="tab-pay"
                        ></span>{' '}
                        <br /> Online
                      </h2>
                    </div> */}
            {/* <!-- Pricing table --> */}
            {/* <div className="section-content box-sort-in button-example m-t80">
                      <div className="pricingtable-row">
                        <div className="row max-w1000 m-auto">
                          <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                            <div className="pricingtable-wrapper style1 left">
                              <div className="pricingtable-inner">
                                <div className="pricingtable-price">
                                  <div className="pricingtable-icon">
                                    <i className="flaticon-city-hall-1"></i>
                                  </div>
                                  <h4 className="font-weight-300 m-t10 m-b0">
                                    National
                                  </h4>
                                  <span className="pricingtable-bx text-primary">
                                    Rp 500
                                  </span>{' '}
                                  <span className="pricingtable-type">
                                    Team
                                  </span>
                                </div>
                                <ul className="pricingtable-features">
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each team will
                                    get 1 medal{' '}
                                  </li>
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each
                                    participant
                                    will get
                                    Certicate
                                  </li>
                                </ul>
                                <div className="m-t20">
                                  <Link
                                    to={'#'}
                                    className="site-button outline outline-2 radius-xl button-md"
                                  >
                                    Register
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                            <div className="pricingtable-wrapper style1 active">
                              <div className="pricingtable-inner">
                                <div className="pricingtable-price">
                                  <div className="pricingtable-icon">
                                    <i className="flaticon-diamond"></i>
                                  </div>
                                  <h4 className="font-weight-300 m-t10 m-b0">
                                    International
                                  </h4>
                                  <span className="pricingtable-bx text-primary">
                                    $25
                                  </span>{' '}
                                  <span className="pricingtable-type">
                                    Team
                                  </span>
                                </div>
                                <ul className="pricingtable-features">
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    E-Certicate
                                    only{' '}
                                  </li>
                                </ul>
                                <div className="m-t20 m-b5">
                                  <Link
                                    to={'#'}
                                    className="site-button white outline outline-2 radius-xl button-md"
                                  >
                                    Register
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                            <div className="pricingtable-wrapper style1 right">
                              <div className="pricingtable-inner">
                                <div className="pricingtable-price">
                                  <div className="pricingtable-icon">
                                    <i className="flaticon-internet"></i>
                                  </div>
                                  <h4 className="font-weight-300 m-t10 m-b0">
                                    International
                                  </h4>
                                  <span className="pricingtable-bx text-primary">
                                    $150
                                  </span>{' '}
                                  <span className="pricingtable-type">
                                    Team
                                  </span>
                                </div>
                                <ul className="pricingtable-features">
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each team will
                                    get 1 medal{' '}
                                  </li>
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each
                                    participant
                                    will get
                                    Certicate
                                  </li>
                                </ul>
                                <div className="m-t20">
                                  <Link
                                    to={'#'}
                                    className="site-button outline outline-2 radius-xl button-md"
                                  >
                                    Register
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
            {/* data-text-2 */}
            {/* <div className="section-head text-center">
                      <h2 className="text-uppercase ">
                        <span
                          className="font-weight-300"
                          id="tab-pay"
                        ></span>{' '}
                        <br /> Offline
                      </h2>
                    </div> */}
            {/* second table  */}
            {/* <div className="section-content box-sort-in button-example m-t80">
                      <div className="pricingtable-row">
                        <div className="row max-w1000 m-auto">
                          <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                            <div className="pricingtable-wrapper style1 left">
                              <div className="pricingtable-inner">
                                <div className="pricingtable-price">
                                  <div className="pricingtable-icon">
                                    <i className="flaticon-city-hall-1"></i>
                                  </div>
                                  <h4 className="font-weight-300 m-t10 m-b0">
                                    National
                                  </h4>
                                  <span className="pricingtable-bx text-primary">
                                    Rp 500
                                  </span>{' '}
                                  <span className="pricingtable-type">
                                    Team
                                  </span>
                                </div>
                                <ul className="pricingtable-features">
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each team will
                                    get 1 medal{' '}
                                  </li>
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each
                                    participant
                                    will get
                                    Certicate
                                  </li>
                                </ul>
                                <div className="m-t20">
                                  <Link
                                    to={'#'}
                                    className="site-button outline outline-2 radius-xl button-md"
                                  >
                                    Register
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                            <div className="pricingtable-wrapper style1 active">
                              <div className="pricingtable-inner">
                                <div className="pricingtable-price">
                                  <div className="pricingtable-icon">
                                    <i className="flaticon-diamond"></i>
                                  </div>
                                  <h4 className="font-weight-300 m-t10 m-b0">
                                    International
                                  </h4>
                                  <span className="pricingtable-bx text-primary">
                                    $25
                                  </span>{' '}
                                  <span className="pricingtable-type">
                                    Team
                                  </span>
                                </div>
                                <ul className="pricingtable-features">
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    E-Certicate
                                    only{' '}
                                  </li>
                                </ul>
                                <div className="m-t20 m-b5">
                                  <Link
                                    to={'#'}
                                    className="site-button white outline outline-2 radius-xl button-md"
                                  >
                                    Register
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                            <div className="pricingtable-wrapper style1 right">
                              <div className="pricingtable-inner">
                                <div className="pricingtable-price">
                                  <div className="pricingtable-icon">
                                    <i className="flaticon-internet"></i>
                                  </div>
                                  <h4 className="font-weight-300 m-t10 m-b0">
                                    International
                                  </h4>
                                  <span className="pricingtable-bx text-primary">
                                    $150
                                  </span>{' '}
                                  <span className="pricingtable-type">
                                    Team
                                  </span>
                                </div>
                                <ul className="pricingtable-features">
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each team will
                                    get 1 medal{' '}
                                  </li>
                                  <li>
                                    <i className="fa fa-check text-primary"></i>{' '}
                                    Each
                                    participant
                                    will get
                                    Certicate
                                  </li>
                                </ul>
                                <div className="m-t20">
                                  <Link
                                    to={'#'}
                                    className="site-button outline outline-2 radius-xl button-md"
                                  >
                                    Register
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!-- Pricing Table End --> */}

            {/* <!-- Get in touch --> */}
            {/* <div
              className="section-full overlay-primary-dark bg-img-fix"
              style={{
                backgroundImage:
                  'url(' + bgimg3 + ')',
              }}
            >
              <FormStyle />
            </div> */}
            {/* <!-- Get in touch --> */}
          </div>
        </div>
        <div className="section-full bg-primary-dark p-tb15">
          <div className="container">
            <Index7ClientCarousel />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Homepage;
