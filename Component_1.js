import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../json/Comp_1.json'; // Import JSON data

export default class Component_1 extends Component {
  render() {
    return (
      <div className="services_section layout_padding">
        <div className="container">
          <h1 className="services_taital">
            <span>Our</span> <img src="images/icon-1.png" alt="icon-1" />{' '}
            <span style={{ color: '#1f1f1f' }}>Services</span>
          </h1>
          <p className="services_text">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {servicesData.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="services_section_2 layout_padding">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="box_section active">
                          <div className="tiles_img"></div>
                          <h3 className="tile_text active">{item.title}</h3>
                          <p className="lorem_text active">{item.text}</p>
                        </div>
                      </div>
                      {/* Add similar code for the second column */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
