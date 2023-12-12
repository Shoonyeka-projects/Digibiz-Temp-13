import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../json/Comp_4.json'

export default class Component_4 extends Component {
  render() {
    const {
      title,
      iconSrc,
      titleColor,
      description,
      teamMembers
    } = jsonData.component_4;

    return (
      <div className="team_section layout_padding">
        <div className="container">
          <h1 className="choose_taital">
            <span>{title}</span> <img src={iconSrc} alt="icon-1" />{' '}
            <span style={{ color: titleColor }}>Team</span>
          </h1>
          <p className="choose_text">{description}</p>
          <div className="team_section_2 layout_padding">
            <div className="container">
              {teamMembers.map((member, index) => (
                <div key={index} className="images_main_1">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="image_4">
                        <img src={member.imageSrc} alt={`Image ${index + 4}`} />
                      </div>
                      <h6 className="follow_text">{member.followText}</h6>
                      <div className="follow_social_icon">
                        <ul>
                          {member.socialIcons.map((icon, i) => (
                            <li key={i}>
                              <a href="#">
                                <img src={icon.iconSrc} alt={icon.alt} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <h2 className="consectetur_text">{member.consecteturText}</h2>
                      <p className="dummy_text">{member.dummyText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
