import { useEffect, useState } from "react";
import Logo from "../images/logo.svg";
import "./Navbar.css";

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.pageYOffset > 0);
    });
  }, []);

  return (
    <nav className={isSticky ? "navbar sticky" : "navbar"}>
      <div className="container nav-content d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links d-flex gap-3 h-100">
          <a href="#features">features</a>
          <a href="#team">team</a>
          <a href="#signin">sign in</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
