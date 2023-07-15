import React, { useEffect } from "react";
import "./Services.css";
import { FaMobileAlt, FaBitcoin } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="services section__padding" id="services">
      <div className="services__container" data-aos="fade-up">
        <i>
          <BsWallet2 />
        </i>
        <h2>ONLINE WALLET</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          labore?
        </p>
      </div>

      <div className="services__container" data-aos="fade-down">
        <i>
          <FaBitcoin />
        </i>
        <h2>SEND COINS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          labore?
        </p>
      </div>

      <div className="services__container" data-aos="fade-up">
        <i>
          <FaMobileAlt />
        </i>
        <h2>MOBILE APP</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          labore?
        </p>
      </div>

      <div className="services__container" data-aos="fade-down">
        <i>
          <BiCoinStack />
        </i>
        <h2>COIN MINING</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          labore?
        </p>
      </div>
    </div>
  );
};

export default Services;
