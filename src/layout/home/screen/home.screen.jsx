import React from "react";
import Footer from "../../_components/footer";
// import images from "../../../apis/images";
import Navbar from "../../_components/nav";
import Clientreview from "./components/clientreview";
import Exp from "./components/exp";
import Header from "./components/header";
import Services from "./components/services";
import Technology from "./components/technology";
import AOS from 'aos'

AOS.init()

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Technology />
      <Exp />
      <Clientreview />
      <Footer />
    </>
  );
};

export default HomeScreen;
