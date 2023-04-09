import React from "react";
import "./Header.scss";

import logo from "@/assets/images/logo.svg";
import {useNavigate} from 'react-router'
const Header = () => {
  const handleClick = (event:any) => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header__top">
        {/* <div className="header__top_logo"> */}
        {/* </div> */}
        <div className="header__top_nav">
          <ul className="header__top_nav_list">
            <a className=""  href="#about" onClick={handleClick}>
              О нас
            </a>
            <a href="#look" onClick={handleClick}>LookBook</a>
            <a href="#difference" onClick={handleClick}>Преимущества</a>
            <a href="#contacts" onClick={handleClick}>Контакты</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
