import React, { Component } from 'react';

export default class ThemeButton extends Component {
  render() {
    return (
      <>
        <a
          href="https://forms.gle/gFKwbzodhggSz7GK7"
          target="_blank"
          rel="noopener noreferrer"
          className="bt-buy-now theme-btn"
        >
          <i className="ti-shopping-cart"></i>
          <span>Register Now</span>
        </a>
        <a
          href="https://wa.me/6281770914129"
          target="_blank"
          rel="noopener noreferrer"
          className="bt-support-now theme-btn"
        >
          <i className="ti-headphone-alt"></i>
          <span>Call Us</span>
        </a>
      </>
    );
  }
}
