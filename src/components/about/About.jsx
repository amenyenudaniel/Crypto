import React, { useEffect } from "react";
import "./About.css";
import AboutImg from "../../assets/about.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="about section__padding" id="about">
      <div className="about__container" data-aos="fade-down">
        <div className="about__content">
          <h1>About Us</h1>
          <div className="about__lists">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium animi ipsa numquam sed neque itaque dolores similique
              modi commodi deleniti! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Debitis, natus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cum incidunt tempore iure quidem
              molestiae illum! Sunt iusto minima ipsam, deleniti omnis saepe
              rerum! Asperiores nisi magnam tenetur aperiam. Rem, inventore?
            </p>
          </div>
          <button className="btn" type="button">
            Read More
          </button>
        </div>

        <div className="about__image">
          <div className="overlay__gradient2"></div>
          <motion.img
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ type: "tween", delay: 0, duration: 20 }}
            src={AboutImg}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
