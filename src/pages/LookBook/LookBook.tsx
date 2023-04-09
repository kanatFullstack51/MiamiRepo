import React from "react";
import arrow from "../../assets/images/arrow.png";
import lookbook1 from "../../assets/images/lookbook/lookbook1.jpg";
import lookbook2 from "../../assets/images/lookbook/lookbook2.jpg";
import lookbook3 from "../../assets/images/lookbook/lookbook3.jpg";

import "./LookBook.scss";

const LookBook = () => {
  return (
    <section className="lookbook" id="look">
      <div className="lookbook__wrapper">
        <div className="container">
          <div className="lookbook__inner">
            <div className="lookbook__top">
              <div className="lookbook__top_info">
                <h2>LookBook</h2>
                <p>
                  Команда наших стилистов создает каждый день looks. Если Вы не
                  знаете, что надеть, Вы всегда можете обраться к этому разделу
                  на нашем сайте.
                </p>
              </div>
              <div className="lookbook__top_slideBtn">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="lookbook__slider">
              <img src={lookbook1} alt="" width={'330px'}/>
              <img src={lookbook2} alt="" />
              <img src={lookbook3} alt="" />
            </div>
            <div className="lookbook__qaBtn">
              <button>Задать вопрос</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookBook;
