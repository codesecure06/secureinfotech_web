import React from "react";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
import CareerHeader from "./components/career_header";
import CareerJob from "./components/career_job";
import AOS from 'aos'

AOS.init()

const CareerScreen = () => {
  return (
    <>
      <Navbar />
      <CareerHeader />
      <CareerJob />
      <Footer />
    </>
  );
};

export default CareerScreen;
