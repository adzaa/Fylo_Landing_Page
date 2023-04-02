import React from "react";

import img from "../images/illustration-stay-productive.png";
import icon from "../images/icon-arrow.svg";

import "./How.css";

function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container justify-content-center d-flex">
        <div className="row how-content align-items-center justify-content-between flex-nowrap gap-5">
          <div className="col-md-6 how-img">
            <img src={img} alt="stay productive" />
          </div>
          <div className="col-md-6">
            <h1 className="heading-font">Stay producitve, wherever you are</h1>
            <p className="mt-3">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="#">
              See how Fylo works <img src={icon} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
