import React, { Component } from 'react';
import Slider from 'react-slick';

//Images
import pic1 from './../../images/testimonials/man.png';
import pic2 from './../../images/testimonials/woman.png';
import pic3 from './../../images/testimonials/man.png';
import Videoimg from './../../images/main/aisef2.jpg';

class TestimonialCarousel extends Component {
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 3,
      infinite: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider
          className="testimonial-box center-active-owl item-center owl-loaded owl-carousel owl-none  owl-dots-black-full "
          {...settings}
        >
          <div className="item">
            <div className="testimonial-8">
              <div className="testimonial-text">
                <p>
                  Event nya sangat menyenangkan,
                  saya merasakan feel yang sangat
                  senang sekali, terima kasih IYSA
                  telah menyelenggarakan aisef
                </p>
              </div>
              <div className="testimonial-detail clearfix">
                <div className="testimonial-pic radius shadow">
                  <img
                    src={pic1}
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
                <h5 className="testimonial-name m-t0 m-b5">
                  M. Thamrin
                </h5>
                <span>Participant</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-8">
              <div className="testimonial-text ">
                <div className="video-testimonial">
                  <img src={Videoimg} alt="" />
                  <div className="video-testimonial-play">
                    <a
                      href="https://drive.google.com/file/d/1dmxvyfYY4JMPz198YqvuB0-rvb5qFFQH/view?usp=sharing"
                      className="popup-youtube video"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ti-control-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="testimonial-detail clearfix">
                <div className="testimonial-pic radius shadow">
                  <img
                    src={pic2}
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
                <h5 className="testimonial-name m-t0 m-b5">
                  Dias
                </h5>
                <span>Participant</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-8">
              <div className="testimonial-text">
                <p>
                  Sangat bagus, tetap semangat
                  IYSA untuk kepedannya, Terima
                  kasih juga semoga aisef tahun
                  depan bisa ikut lagi
                </p>
              </div>
              <div className="testimonial-detail clearfix">
                <div className="testimonial-pic radius shadow">
                  <img
                    src={pic3}
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
                <h5 className="testimonial-name m-t0 m-b5">
                  Dwi
                </h5>
                <span>Participant</span>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}

export default TestimonialCarousel;
