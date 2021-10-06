import React from "react";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
import GalleryHeader from "./components/gallery_header";
import GalleryImg from "./components/gallery_img";
import AOS from 'aos'

AOS.init()

const GalleryScreen = () => {
  return (
    <>
      <Navbar />
      <GalleryHeader />
      <GalleryImg />
      <Footer />
    </>
  );
};

export default GalleryScreen;
