import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="contact section__padding" id="contact">
      <h1>Contact Us</h1>
      <div className="contact__input">
        <div className="overlay__gradient5"></div>
        <input type="text" placeholder="Full Name" data-aos="fade-up" />
        <input type="text" placeholder="Email" data-aos="fade-down" />
        <input type="text" placeholder="Phone Number" data-aos="fade-up" />
        <input type="text" placeholder="Message" data-aos="fade-down" />
      </div>

      <motion.button whileTap={{ x: 20 }} type="button" className="btn">
        SEND
      </motion.button>
    </div>
  );
};

export default Contact;
