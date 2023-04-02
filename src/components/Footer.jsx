import React from "react";
import EarlyAccess from "./EarlyAccess";

import logo from "../images/logo.svg";

import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <EarlyAccess />
      <div id="footer">
        <div className="container footer-content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="row mt-5 d-flex">
            <div className=" footer-info-container col-md-6 justify-content-center d-flex">
              <div className="info d-flex gap-4">
                <div className="location-info d-flex flex-direction-row gap-3">
                  <img src={locationIcon} alt="location" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, recusandae. Quia, optio quod nemo id,
                  </p>
                </div>

                <div className="contact-info">
                  <div className="phone d-flex align-items-center gap-3">
                    <img src={phoneIcon} alt="phone" />
                    <p className="m-0">+1-543-123-4567</p>
                  </div>
                  <div className="email mt-4 d-flex align-items-center gap-3">
                    <img src={emailIcon} alt="email" />
                    <p className="m-0">example@fylo.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 about-us justify-content-center d-flex">
              <div>
                <p className="heading-font">About Us</p>
                <div className="d-flex flex-column">
                  <a href="#">Jobs</a>
                  <a href="#">Press</a>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>

            <div className="col-md-2 contact-us justify-content-center d-flex">
              <div>
                <p className="heading-font">Contact Us</p>
                <div className="d-flex flex-column">
                  <a href="#">Terms</a>
                  <a href="#">Privacy</a>
                </div>
              </div>
            </div>

            <div className="col-md-2 footer-links justify-content-center d-flex">
              <div>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                  <span class="sr-only">Follow us on Facebook</span>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                  <span class="sr-only">Follow us on Twitter</span>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                  <span class="sr-only">Follow us on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
