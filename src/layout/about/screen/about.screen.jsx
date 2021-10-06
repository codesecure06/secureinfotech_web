import React from "react";
import AOS from 'aos'
import Navbar from "../../_components/nav";
import Footer from "../../_components/footer";
// import AboutHeader from "./components/about_header";
import AboutTeam from "./components/about_team";
import AboutWeAre from "./components/about_we_are";
import Header from "../../_components/header";

AOS.init()

const AboutScreen = () => {
  return (
    <div>
      <Navbar />
      <Header page={"about us"} />
      <AboutWeAre />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default AboutScreen;
