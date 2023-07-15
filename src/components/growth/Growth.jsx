import React, { useEffect } from "react";
import "./Growth.css";
import graph1 from "../../assets/graf1.jpg";
import graph2 from "../../assets/graf2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Growth = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="growth section__padding">
      <div className="growth__heading">
        <li>Bitcoin(BTC)</li>
        <li>Bitcoin Cash(BCH)</li>
        <li>Bitcoin Lite(LTC)</li>
        <li>Bitcoin Ethereum(ETH)</li>
        <li>Bitcoin Ripple(XRP)</li>
      </div>

      <div className="growth__content">
        <div className="growth__content__heading">
          <li>
            <span>USD</span> +34950
            <br />
            Last Price
          </li>
          <li>
            <span>USD</span> 123456.09
            <br />
            Daily Price
          </li>
          <li>
            <span>USD</span> 123456.09
            <br />
            24 Hour Low
          </li>
          <li>
            <span>USD</span> 123456.09
            <br />
            24 Hour High
          </li>
          <li>
            <span>USD</span> 123456.09
            <br />
            Today Open
          </li>
          <li>
            BTC 09876
            <br />
            24 Hour Volume
          </li>
        </div>
        <div className="growth__content__graph">
          <div className="growth__graph__container">
            <h3>Total Growth</h3>
            <div className="growth__graph__image" data-aos="fade-right">
              <img src={graph1} alt="graph" />
            </div>
          </div>

          <div className="growth__graph__container">
            <div className="graph__title">
              <h3>Total Growth</h3>
              <h4>4344 </h4>
            </div>
            <div className="growth__graph__image" data-aos="zoom-out">
              <img src={graph2} alt="graph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
