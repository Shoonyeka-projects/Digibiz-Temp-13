import React, { Component } from 'react';
import jsonData from '../json/Comp_5.json'; // Adjust the path to your data.json file

export default class Component_5 extends Component {
  render() {
    const {
      newsletterHeaderText,
      temporText,
      placeholderText,
      subscribeButtonText
    } = jsonData.component_5;

    return (
      <div className="newsletter_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="newsletter_text">{newsletterHeaderText}</h1>
              <p className="tempor_text">{temporText}</p>
            </div>
            <div className="col-md-6">
              <div className="mail_bt_main">
                <input type="text" className="mail_text" placeholder={placeholderText} name="Enter Your Mail" />
                <button className="subscribe_bt" onClick={this.subscribeNewsletter}>
                  {subscribeButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  subscribeNewsletter() {
    // Handle newsletter subscription logic here
  }
}
