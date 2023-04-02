import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
