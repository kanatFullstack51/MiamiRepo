import React from "react";
import "./Hero.scss";
import Header from "@/components/Header/Header";

import logoImg from "@/assets/images/logoImg.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Header />

      <div className="hero__inner">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__info">
              <div className="hero__info_title">
                Экслюзивные <br /> бренды со ШТАТОВ
              </div>
              <div className="hero__info_text">
                Доставку осущевстляем в Кыргызстан, Узбекистан, Казахстан,
                Россию.
              </div>
              <button className="hero__info_btn">Посмотреть образы</button>
            </div>
            <div className="hero__img">
              <img src={logoImg} alt="" />
              {/* <p>
                Персональный <span>стиль</span> <br />
                начинается здесь
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
