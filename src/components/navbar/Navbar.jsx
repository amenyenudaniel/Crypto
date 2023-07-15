import React from "react";
import "./Navbar.css";
import MenuBtn from "../../assets/menuBtn.png";
import logo from "../../assets/logo.png";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(null);
  return (
    <nav id="nav">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>
      <div className="menu__icon" onClick={() => setToggleMenu(true)}>
        <img src={MenuBtn} alt="menu-btn" />
      </div>
      {toggleMenu && (
        <div className="smallscreen__overlay slide-bottom">
          <RiCloseLine className="close" onClick={() => setToggleMenu(false)} />
          <div className="smallscreen">
            <li>
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setToggleMenu(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
