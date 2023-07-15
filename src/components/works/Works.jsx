import React, { useEffect } from "react";
import "./Works.css";
import Bitcoin from "../../assets/Bitcoin.mp4";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const [playVideo, setPlayVideo] = React.useState(null);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div id="works" className="works__container">
      <h1 className="works__heading">HOW ITS WORKS</h1>
      <div className="works " data-aos="zoom-in">
        <video src={Bitcoin} loop ref={vidRef} controls={false} muted />
        <div className="works__overlay">
          <div className="works__overlay__circle" onClick={handleVideo}>
            {playVideo ? (
              <BsPauseFill className="pause" />
            ) : (
              <BsFillPlayFill className="play" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
