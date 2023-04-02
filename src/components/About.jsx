import React from "react";

import "./About.css";

import wave from "../images/bg-curvy-desktop.svg";

import anyFileIMG from "../images/icon-any-file.svg";
import collabIMG from "../images/icon-collaboration.svg";
import securityIMG from "../images/icon-security.svg";
import accesIMG from "../images/icon-access-anywhere.svg";

function About() {
  return (
    <section id="about">
      <div className="d-flex justify-content-center">
        <img className="wave" alt="wave" src={wave} />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center about-content">
          <div className="col about-card">
            <img src={accesIMG} alt="access" />
            <h6 className="heading-font">Access your files, anywhere</h6>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere
            </p>
          </div>
          <div className="col about-card">
            <img src={securityIMG} alt="security" />
            <h6 className="heading-font">Access your files, anywhere</h6>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your files
            </p>
          </div>
          <div className="w-100"></div>
          <div className="col about-card">
            <img src={collabIMG} alt="collaboration" />
            <h6 className="heading-font">Access your files, anywhere</h6>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="col about-card">
            <img src={anyFileIMG} alt="any file" />
            <h6 className="heading-font">Access your files, anywhere</h6>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
