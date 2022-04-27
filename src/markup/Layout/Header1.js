import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/new-aisef.png';
import logo2 from './../../images/new-aisef.png';
import HeaderMenu from './HeaderMenu';

class Header1 extends Component {
  componentDidMount() {
    // sidebar open/close

    var Navicon =
      document.querySelector('.navicon');
    var sidebarmenu =
      document.querySelector('.myNavbar ');

    function toggleFunc() {
      sidebarmenu.classList.toggle('show');
      //   Navicon.classList.toggle('open');
    }
    Navicon.addEventListener('click', toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(
      document.querySelectorAll(
        '.navbar-nav > li > a, .sub-menu > li > a'
      )
    );
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener(
        'click',
        function () {
          checkLi(this);
        }
      );
    }

    function checkLi(current) {
      current.parentElement.parentElement
        .querySelectorAll('li')
        .forEach((el) =>
          current.parentElement !== el
            ? el.classList.remove('open')
            : ''
        );

      setTimeout(() => {
        current.parentElement.classList.toggle(
          'open'
        );
      }, 100);
    }
  }

  render() {
    return (
      <>
        <header
          className="site-header header-transparent mo-left"
          id="fix-header"
        >
          <div className="top-bar">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="dlab-topbar-left">
                  <ul>
                    <li>
                      <i className="flaticon-phone-call m-r5"></i>
                      +62 817-7091-4129
                    </li>
                    <li>
                      <i className="ti-location-pin m-r5"></i>
                      Jl. Kemang No. 63 RT 03 RW 06 Kp. Kekupu
                    </li>
                  </ul>
                </div>
                <div className="dlab-topbar-right">
                  <ul>
                    <li>
                      <i className="ti-world m-r5"></i>
                      Official Website
                    </li>
                    <li>
                      <i className="ti-email m-r5"></i>
                      aseaninnovative.aisef@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix ">
              <div className="container clearfix">
                <div className="logo-header mostion">
                  <Link
                    to={'./'}
                    className="dez-page"
                  >
                    <img src={logo} alt="" />
                  </Link>
                </div>

                <button
                  className="navbar-toggler collapsed navicon justify-content-end"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <div className="extra-nav">
                  <div className="extra-cell">
                    <a
                      href="https://forms.gle/gFKwbzodhggSz7GK7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dez-page site-button primary"
                    >
                      Register Now
                    </a>
                  </div>
                </div>

                <div
                  className="header-nav navbar-collapse collapse myNavbar justify-content-end"
                  id="navbarNavDropdown"
                >
                  <div className="logo-header mostion d-md-block d-lg-none">
                    <Link
                      to={'./'}
                      className="dez-page"
                    >
                      <img src={logo2} alt="" />
                    </Link>
                  </div>
                  {/*  Header Menu Contents  */}
                  <HeaderMenu />
                  {/*  Header Menu Contents End */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header1;
