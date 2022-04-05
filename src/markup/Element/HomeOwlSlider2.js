import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

/* function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick}/>
	</div>
  );
} */

class EventSlider extends Component {
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 4,
      speed: 1500,
      navSpeed: 1500,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Slider
        className="img-carousel-content owl-carousel owl-none"
        {...settings}
      >
        <div className="item p-1">
          <div className="box-item-service text-center">
            <div className="item-service-content m-b40">
              <h5>Entrepreneur</h5>
              <p className="m-b0">
                Entrepreneur is a categories that
                focus on business plan,
                management, marketing, etc.
              </p>
            </div>
            <div className="clearfix">
              <span className="text-primary round-center"></span>
            </div>
            <div className="icon-bx-md radius border-1 m-t40 m-b20">
              <span className="icon-cell">
                <i className="flaticon-business"></i>
              </span>
            </div>
            <Link
              to={'#'}
              className="site-button outline outline-2"
            >
              <span className="font-weight-500">
                Read More
              </span>
            </Link>
          </div>
        </div>
        <div className="item p-1">
          <div className="box-item-service text-center">
            <div className="icon-bx-md radius border-1 m-b20 m-t0">
              <span className="icon-cell">
                <i className="flaticon-leadership"></i>
              </span>
            </div>
            <Link
              to={'#'}
              className="site-button outline outline-2 m-b40"
            >
              <span className="font-weight-500">
                Read More
              </span>
            </Link>
            <div className="clearfix">
              <span className="text-primary round-center"></span>
            </div>
            <div className="item-service-content m-t40">
              <h5>Social Science</h5>
              <p className="m-b0">
                Social science is the branch of
                science devoted to the study of
                societies and the relationships
                among individuals within those
                societies.
              </p>
            </div>
          </div>
        </div>
        <div className="item p-1">
          <div className="box-item-service text-center">
            <div className="item-service-content m-b40">
              <h5>Environmental Science</h5>
              <p className="m-b0">
                environmental science is the field
                of science
              </p>
            </div>
            <div className="clearfix">
              <span className="text-primary round-center"></span>
            </div>
            <div className="icon-bx-md radius border-1 m-t40 m-b20">
              <span className="icon-cell">
                <i className="flaticon-knowledge"></i>
              </span>
            </div>
            <Link
              to={'#'}
              className="site-button outline outline-2"
            >
              <span className="font-weight-500">
                Read More
              </span>
            </Link>
          </div>
        </div>
        <div className="item p-1">
          <div className="box-item-service text-center">
            <div className="icon-bx-md radius border-1 m-b20 m-t0">
              <span className="icon-cell">
                <i className="flaticon-creative"></i>
              </span>
            </div>
            <Link
              to={'#'}
              className="site-button outline outline-2 m-b40"
            >
              <span className="font-weight-500">
                Read More
              </span>
            </Link>
            <div className="clearfix">
              <span className="text-primary round-center"></span>
            </div>
            <div className="item-service-content m-t40">
              <h5>Innovation Science</h5>
              <p className="m-b0">
                teaching aids and creative
                findings that have relevance to
                the field of science.
              </p>
            </div>
          </div>
        </div>

        <div className="item p-1">
          <div className="box-item-service text-center">
            <div className="item-service-content m-b40">
              <h5>
                Cluster Mechanical and Shipping
              </h5>
              <p className="m-b0">
                Cluster Mechanical and Shipping
              </p>
            </div>
            <div className="clearfix">
              <span className="text-primary round-center"></span>
            </div>
            <div className="icon-bx-md radius border-1 m-t40 m-b20">
              <span className="icon-cell">
                <i className="flaticon-knowledge"></i>
              </span>
            </div>
            <Link
              to={'#'}
              className="site-button outline outline-2"
            >
              <span className="font-weight-500">
                Read More
              </span>
            </Link>
          </div>
        </div>
        <div className="item p-1">
          <div className="box-item-service text-center">
            <div className="icon-bx-md radius border-1 m-b20 m-t0">
              <span className="icon-cell">
                <i className="flaticon-creative"></i>
              </span>
            </div>
            <Link
              to={'#'}
              className="site-button outline outline-2 m-b40"
            >
              <span className="font-weight-500">
                Read More
              </span>
            </Link>
            <div className="clearfix">
              <span className="text-primary round-center"></span>
            </div>
            <div className="item-service-content m-t40">
              <h5>Industrial Application</h5>
              <p className="m-b0">
                Industrial Application
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default EventSlider;
