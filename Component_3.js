import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../json/Comp_3.json'; // Adjust the path to your data.json file

export default class Component_3 extends Component {
  render() {
    const {
    title,
    iconSrc,
    titleColor,
    description,
    boxes,
    imageSrc,
    getQuoteLink,
    getQuoteText
  } = jsonData.component_3;

    return (
      <div className="choose_section layout_padding">
        <div className="container">
          <h1 className="choose_taital">
            <span>{title}</span> <img src={iconSrc} alt="icon-1" />{' '}
            <span style={{ color: titleColor }}>Choose Us</span>
          </h1>
          <p className="choose_text">{description}</p>
          <div className="choose_section_2 layout_padding">
            <div className="row">
              {boxes.map((box, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="choose_box">
                    <h1 className="client_taital">{box.count}</h1>
                    <h4 className="client_text">{box.text}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="image_3">
              <img src={imageSrc} alt="Image 3" />
            </div>
            <div className="get_bt">
              <Link to={getQuoteLink}>{getQuoteText}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
