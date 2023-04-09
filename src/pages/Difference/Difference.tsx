import React from "react";

import "./Difference.scss";

export default function Difference() {
  const differences = [
    "Вещи от лучших\nБрендов из США",
    "Бесплатная доставка\nпо всему миру",
    "Lookbook\nкоторый поможет",
  ];
  return (
    <section className="difference" id="difference">
      <div className="container">
        <div className="difference__inner">
          <div className="difference__title">Чем мы отличаемся?</div>
          <div className="difference__items">
            {differences.map((item) => (
              <pre className="difference__item">{item}</pre>
            ))}
          </div>
          <div className="difference__ship">
            <h2>В какие страны мы доставляем?</h2>
            <p>
              Доставку осущевстляем в такие страны, как Кыргызстан, Узбекистан,
              Казахстан, Россию. <br /> И в любые другие страны. Для уточнения
              оставьте заявку и мы свяжемся с Вами!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
