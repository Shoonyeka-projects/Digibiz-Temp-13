import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default class Component_6 extends Component {
  render() {
    return (
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_main">
            <div className="footer_left">
              <h1 className="contact_taital">
                <span>Contact</span> <img src="images/icon-2.png" />{' '}
                <span>Us</span>
              </h1>
            </div>
            <div className="footer_left">
              <div className="location_text">
                <Link to="#">
                  <img src="images/map-icon.png" />
                  <span className="padding_left_15">Locations</span>
                </Link>
              </div>
            </div>
            <div className="footer_left">
              <div className="location_text">
                <Link to="#">
                  <img src="images/call-icon.png" />
                  <span className="padding_left_15">+71 9876543210</span>
                </Link>
              </div>
            </div>
            <div className="footer_left">
              <div className="location_text">
                <Link to="#">
                  <img src="images/map-icon.png" />
                  <span className="padding_left_15">demo@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact_section">
            <div className="row">
              <div className="col-md-6">
                <div className="mail_section">
                  <input
                    type="text"
                    className="email_text"
                    placeholder="Name"
                    name="Name"
                  />
                  <input
                    type="text"
                    className="email_text"
                    placeholder="Email"
                    name="Email"
                  />
                  <input
                    type="text"
                    className="email_text"
                    placeholder="Phone Number"
                    name="Phone Number"
                  />
                  <textarea
                    className="massage_text"
                    placeholder="Message"
                    rows="5"
                    id="comment"
                    name="Message"
                  ></textarea>
                  <div className="send_bt">
                    <Link to="#">send</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France"
                      width="600"
                      height="280"
                      frameBorder="0"
                      style={{ border: 0, width: '100%' }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="images/fb-icon1.png" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="images/twitter-icon1.png" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="images/linkden-icon1.png" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="images/instagram-icon1.png" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
