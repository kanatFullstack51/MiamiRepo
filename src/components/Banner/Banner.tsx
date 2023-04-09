import { useMarquee } from "@/utils/hooks";
import React from "react";
import "./Banner.scss";

import Marquee from "react-fast-marquee";
import images from "./images.js";

const Banner = () => {
  const playMarquee = useMarquee();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="banner">
      <Marquee speed={20}>
        <div className="banner__items">
          <div className="banner__logo">
            {images.map((logo) => (
              <img key={logo.id} src={logo.image} onClick={scrollToTop} />
            ))}
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
