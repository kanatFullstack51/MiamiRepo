import Banner from "@/components/Banner/Banner";
import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Difference from "../Difference/Difference";
import { DiveIn } from "../DiveInWorldMIami/DiveIn";
import Hero from "../Hero/Hero";
import LookBook from "../LookBook/LookBook";

const Layout = () => {
  return (
    <>
      <Hero />
      <Banner />
      <AboutUs />
      <LookBook />
      <Difference />
      <DiveIn/>
    </>
  );
};

export default Layout;
