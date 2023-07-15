import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Growth from "./components/growth/Growth";
import Testimonial from "./components/testimonial/Testimonial";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Growth />
      <Testimonial />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
