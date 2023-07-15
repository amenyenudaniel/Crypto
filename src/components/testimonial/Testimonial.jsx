import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { TestimonialsData } from "./TestimonialData";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const [selected, setSelected] = useState(0);

  const testimonialLength = TestimonialsData.length;

  const transition = { type: "spring", duration: 1 };
  return (
    <div className="section__padding testimonial" id="testimonial">
      <div className="testimonial__content__container">
        <div className="testimonial__heading">
          <p className="p__opensans">Testimonial</p>
          <h2>What They</h2>
          <h4 className="stroke__text">Say About us</h4>
        </div>

        <div className="testimonial__content">
          <motion.h3
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            {TestimonialsData[selected].desc}
          </motion.h3>
          <div className="testimonial__status">
            <h5>
              {TestimonialsData[selected].name} <span>{"|"}</span>
            </h5>

            <h6>{TestimonialsData[selected].status}</h6>
          </div>
        </div>
      </div>
      <div className="testimonial__image">
        <div className="overlay__gradient"></div>
        <div className="testimonial__overlay1"></div>
        <div className="testimonial__overlay2"></div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={TestimonialsData[selected].Image}
          alt="testimonial"
          data-aos="zoom-in"
        />

        <div className="testimonial__buttons">
          <BsArrowLeftShort
            className="arrow"
            onClick={() => {
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />

          <BsArrowRightShort
            className="arrows"
            onClick={() => {
              selected === testimonialLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
