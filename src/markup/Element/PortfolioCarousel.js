import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import SimpleReactLightbox from 'simple-react-lightbox';
import {
  SRLWrapper,
  useLightbox,
} from 'simple-react-lightbox';

//Images
import pic1 from './../../images/main/aisef1.jpg';
import pic2 from './../../images/main/aisef2.jpg';
import pic3 from './../../images/main/aisef3.jpg';
import pic4 from './../../images/main/aisef4.jpg';

const contentBlog = [
  { images: pic1, desc: 2020 },
  { images: pic2, desc: 2020 },
  { images: pic3, desc: 2020 },
  { images: pic4, desc: 2020 },
  { images: pic2, desc: 2020 },
];
//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={'#'}
      onClick={() =>
        openLightbox(props.imageToOpen)
      }
      className="mfp-link"
      title="Preview"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  );
};

class PortfolioCarousel extends Component {
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 4,
      speed: 3000,
      navSpeed: 3000,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Slider
              className="img-carousel-content owl-carousel text-center text-white owl-none "
              {...settings}
            >
              {contentBlog.map((item, index) => (
                <div
                  className="item p-3"
                  key={index}
                >
                  <div className="dlab-box portfolio-box">
                    <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                      {' '}
                      <img
                        src={item.images}
                        alt=""
                      />
                      {/* Support button link */}
                      {/* <div className="dlab-info-has p-a15 bg-primary">
                        <Link
                          to={'#'}
                          className="site-button outline radius-xl white pull-left"
                        >
                          Download
                        </Link>
                        <Link
                          to={'#'}
                          className="site-button outline radius-xl white pull-right"
                        >
                          Vist
                        </Link>
                      </div> */}
                      <div className="overlay-bx">
                        <div className="overlay-icon text-white">
                          <h5>{item.desc}</h5>
                          {/* <p className="m-b10">
                            
                          </p> */}
                          {/* <a href={item.images} className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a> */}
                          <Iconimage />
                          <a
                            href="https://drive.google.com/drive/folders/1tBjV70psELyv-oKYqgliEsXaHasW2EWR?usp=sharing"
                            target="_bLank"
                            rel="noopener noreferrer"
                            title="see all"
                          >
                            <i className="ti-arrow-top-right icon-bx-xs"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </SRLWrapper>
        </SimpleReactLightbox>
      </>
    );
  }
}

export default PortfolioCarousel;
