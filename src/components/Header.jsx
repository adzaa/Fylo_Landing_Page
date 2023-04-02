import React from "react";
import Navbar from "./Navbar";

import "./Header.css";
import img from "../images/illustration-intro.png";

function Header() {
  return (
    <div id="header">
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center">
        <div className="hero d-flex flex-column align-items-center justify-content-center text-center">
          <img src={img} alt="img" />
          <h1 className="heading-font mt-5">
            All your files in one secure location, accesible anywhere.
          </h1>
          <p className="mt-5 ">
            Fylo stores all your most important files in one secure location.
            <br />
            Access them wherever you need, share and collaborate with <br />
            friends family, and co-workers.
          </p>
          <button className="mt-3">get started</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
