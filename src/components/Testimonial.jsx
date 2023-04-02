import React from "react";

import img1 from "../images/profile-1.jpg";
import img2 from "../images/profile-2.jpg";
import img3 from "../images/profile-3.jpg";

import quotes from "../images/bg-quotes.png";

import "./Testimonial.css";

function Testimonial() {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 ">
            <div className="testimonial-card">
              <img className="quote" src={quotes} alt="quote" />
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has became a
                well-oiled collaboration machine.
              </p>
              <div className="user">
                <div className="user-img">
                  <img src={img1} alt="user" />
                </div>
                <div className="user-info">
                  <p>Satish Patel</p>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-card">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has became a
                well-oiled collaboration machine.
              </p>
              <div className="user">
                <div className="user-img">
                  <img src={img2} alt="user" />
                </div>
                <div className="user-info">
                  <p>Satish Patel</p>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-card">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has became a
                well-oiled collaboration machine.
              </p>
              <div className="user">
                <div className="user-img">
                  <img src={img3} alt="user" />
                </div>
                <div className="user-info">
                  <p>Satish Patel</p>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
