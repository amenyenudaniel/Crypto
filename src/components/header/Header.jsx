import { useEffect } from "react";
import "./Header.css";
import headerImg from "../../assets/header.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <header className="section__padding" id="home">
      <div className="header__image">
        <motion.img
          animate={{ scale: [0.9, 1.15, 0.9] }}
          transition={{ type: "tween", duration: 20, repeat: Infinity }}
          src={headerImg}
          alt="header-img"
        />
      </div>
      <div className="header__content" data-aos="fade-up">
        <div className="overlay__gradient1"></div>
        <h1>
          <p className="stroke__text">Progress</p> <br />
          Your
          <span>Bitcoin Money</span>
          <br />
          Success
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered
        </p>
        <motion.div initial={{ right: -30 }} className="header__buttons">
          <button className="btn" type="button">
            Read More
          </button>
          <button className="btn" type="button">
            Get A Quote
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
