import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default class Footer extends Component {
  render() {
    return (
<div className="copyright_section">
      <div className="container">
        <p className="copyright_text">
          Copyright 2023 All Right Reserved By{' '}
          <Link to="https://html.design">Free HTML Templates</Link>
        </p>
      </div>
    </div>
      
    );
  }
}
