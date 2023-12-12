import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../json/Comp_2.json'; // Adjust the path to your data.json file

export default class Component_2 extends Component {
  render() {
    const {
      imageSrc,
      title,
      iconSrc,
      titleColor,
      text,
      readMoreLink,
      readMoreText,
      readMoreIconSrc
    } = jsonData.component_2;

    return (
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={imageSrc} className="image_2" alt="Image 2" />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="services_taital">
                <span>{title}</span> <img src={iconSrc} alt="icon-1" />{' '}
                <span style={{ color: titleColor }}>Cleaning</span>
              </h1>
              {text.map((paragraph, index) => (
                <p key={index} className="ipsum_text">
                  {paragraph}
                </p>
              ))}
              <div className="contact_bt_1">
                <Link to={readMoreLink}>
                  {readMoreText}
                  <span className="contact_padding">
                    <img src={readMoreIconSrc} alt="Read More" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
