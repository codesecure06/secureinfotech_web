import React from "react";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
// import GalleryHeader from "./components/gallery_header";
import GalleryImg from "./components/gallery_img";
import AOS from 'aos'
import Header from "../../_components/header";

AOS.init()

const GalleryScreen = () => {
  return (
    <div>
      <Navbar />
      <Header page={"gallery"} />
      <GalleryImg />
      <Footer />
    </div>
  );
};

export default GalleryScreen;
