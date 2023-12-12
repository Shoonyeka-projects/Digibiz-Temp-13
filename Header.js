import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {Menu : true}

  //Menu | open close
  menu = () => {this.setState({Menu : !this.state.Menu})};
  render() {
    return (
      <div className="header_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <Link to="/">
                  <img src="images/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="menu_text">
                <ul>
                  <div className="togle_3">
                    <div className="menu_main">
                      <div className="padding_left0">
                        <Link to="/register">Register</Link>
                        <span className="padding_left0">
                          <Link to="/login">Login</Link>
                        </span>
                      </div>
                    </div>
                    <div className="shoping_bag">
                      <Link to="/search">
                        <img src="images/search-icon.png" alt="Search" />
                      </Link>
                    </div>
                  </div>
                  <div id="menu-toggle" className={this.state.Menu === true ? 'open' : null} onClick={this.menu}>
                  <div id="myNav" className="overlay">
                  <Link to="" className="closebtn" onClick={closeNav}>
                      &times;
                    </Link>
                    <div className="overlay-content">
                    <ul className={this.state.Menu === true ? "main-nav show-it" : "main-nav"}>
                      <Link to="/">Home</Link>
                      <Link to="/services">Services</Link>
                      <Link to="/about">About</Link>
                      <Link to="/choose">Choose</Link>
                      <Link to="/team">Team</Link>
                      <Link to="/contact">Contact Us</Link>
                      </ul>
                    </div>
                  </div>
                  </div>
                  <span className="navbar-toggler-icon"></span>
                  <span onClick={openNav}>
                    <img src="images/toggle-icon.png" className="toggle_menu" alt="Toggle" />
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="banner_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h1 className="banner_taital">Best YOUR</h1>
                <h1 className="banner_taital_1">house CLEAN</h1>
                <p className="banner_text">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                </p>
                <div className="contact_bt">
                  <Link to="/contact">
                    CONTACT US<span className="contact_padding"/>
                    <img src="images/contact-icon.png" alt="Contact" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="play_icon">
                  <Link to="#">
                    <img src="images/play-icon.png" alt="Play" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-5">
                <div>
                  <img src="images/img-1.png" className="image_1" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
 }
  function closeNav() {
  document.getElementById("myNav").style.width = "0%";
 }