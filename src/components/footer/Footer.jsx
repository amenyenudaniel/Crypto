import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaSearchLocation,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <motion.div
        animate={{ rotate: [0, 180, 270, 360, 360, 270, 180, 0] }}
        transition={{ type: "tween", delay: 0, duration: 20, repeat: Infinity }}
        className="overlay__gradient3"
      ></motion.div>
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>
      <footer>
        <div className="footer__container">
          <h3>CONTACT US</h3>
          <div className="contact__info">
            <i>
              <FaSearchLocation />
            </i>
            <p>Location</p>
          </div>
          <div className="contact__info">
            <i>
              <FaPhone />
            </i>
            <p>call +01 1234567890</p>
          </div>
          <div className="contact__info">
            <i>
              <FaEnvelope />
            </i>
            <p>demo@gmail.com</p>
          </div>
          <p className="first-p">
            Readable content of a page when looking at its layoutreadable
            content of a page when looking at its layout
          </p>
        </div>

        <div className="footer__container">
          <h3>USEFUL LINKS</h3>
          <li>
            <a href="#nav">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#testimonial">TESTIMONIAL</a>
          </li>
          <li>
            <a href="#work">WORKS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </div>
        <div className="footer__container">
          <h3>OFFICES</h3>
          <p className="second-p">
            Readable content of a page when looking at its layoutreadable
            content of a page when looking at its layout
          </p>
        </div>
        <div className="footer__container">
          <h3>NEWSLETTER</h3>
          <input type="text" placeholder="Enter your email" />
          <button className="btn">SUBSCRIBE</button>

          <div className="social__icons">
            <div className="overlay__r"></div>
            <div className="overlay__l"></div>

            <i>
              <FaFacebook />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaLinkedin />
            </i>
            <i>
              <FaYoutube />
            </i>
          </div>
        </div>
      </footer>
      <div className="copyright__container">
        <p className="last-p">© 2020 All Rights Reserved</p>
        <div className="back" title="back to top">
          <i>
            <a href="#nav">
              <FaArrowUp />
            </a>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
