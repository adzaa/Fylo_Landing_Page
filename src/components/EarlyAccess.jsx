import React, { useState } from "react";

import "./Footer.css";

function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setShowError(false);
  }

  function handleButtonClick() {
    if (!validateEmail(email)) {
      setShowError(true);
    } else {
      console.log("Email submitted:", email);
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <section className="container early-acces">
      <h1 className="heading-font">Get early access today</h1>
      <p className="mt-2">
        It only takes a minute to sign up and our free starter tier is extremly
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="early-acces-input d-flex justify-content-center align-items-center mt-3">
        <input
          type="text"
          placeholder="email@example.com"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleButtonClick}>get started for free</button>
        {showError && (
          <p id="error" style={{ display: "flex" }}>
            Please enter a valid email address
          </p>
        )}
      </div>
    </section>
  );
}

export default EarlyAccess;
