import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import '../../styles/landing-page.css';


const Footer = () => (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
              <Link to="/contact">Contact </Link>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">&copy; Sentinel 2018. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="#">
                <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                <i className="fab fa-reddit" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )

  export default Footer;