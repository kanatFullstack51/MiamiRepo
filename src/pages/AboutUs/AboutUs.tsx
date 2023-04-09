import React from "react";

import logo from "@/assets/images/logo.svg";
import signImg from "@/assets/images/sign.svg";
import ellBlue from "@/assets/images/ellipse-blue.png";
import ellOrange from "@/assets/images/ellipse-orange.png";

import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__title">
            <img src={logo} alt="" />
            <h1>About Us</h1>
          </div>
          <div className="about__info">
            <div className="about__info_text">
              <p>
                Мы предлагаем широкий ассортимент одежды принадлежащих
                иностранным брендам, включая Dior, Off White и многие другие.
              </p>
              <p>
                Если Вы ищете брендовую одежду на заказ с гарантией доступности,
                быстрой доставкой и выбором сервиса, обратитесь к нам. Мы готовы
                помочь Вам выбрать и заказать идеальную одежду, которая
                подчеркнет Ваш индивидуальный стиль и Вы будете чувствовать себя
                уверенно и стильно в любой ситуации.
              </p>
              <span>With love, Miami Team</span>
            </div>
            {/* <img src={ellBlue} alt="" />
            <img src={ellOrange} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
