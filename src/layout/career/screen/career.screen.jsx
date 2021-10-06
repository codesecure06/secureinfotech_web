import React from "react";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
// import CareerHeader from "./components/career_header";
import CareerJob from "./components/career_job";
import AOS from 'aos'
import Header from "../../_components/header";

AOS.init()

const CareerScreen = () => {
  return (
    <div>
      <Navbar />
      <Header page={"carrer"} />
      <CareerJob />
      <Footer />
    </div>
  );
};

export default CareerScreen;
