import React, { useEffect } from "react";
// import images from "../apis/images";
// import wave from "./wave.svg";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
// import logo from "../assets/images/logo-top-white.png";
import { HiHome } from "react-icons/hi";
// import $ from "jquery";

const Demo = () => {
  useEffect(() => {
    // function onScrollAnimation() {
    //   window.onscroll = () => {
    //     let scrollY = window.pageYOffset;
    //     if (scrollY > 0) {
    //     //   $(".main-logo").css({
    //     //     position: "a",
    //     //   });
    //     }
    //   };
    // }
    // onScrollAnimation();
  }, []);
  
  return (
    <>
      {/* <div className="wave-img"> */}
      {/* <img src={wave} alt="" className="img-fluid" /> */}
      {/* </div> */}
      <div className="container-fluid headers-main">
        <nav className="navs-main">
          <div className="container">
            <div className="navs-logo">
              <img src={logo3} alt="" className="img-fluid" />
              <img src={logo4} alt="" className="img-fluid" />
              <img src={logo5} alt="" className="img-fluid" />
            </div>
            <div className="navs-menu">
              <div>
                <div className="navs-menu">
                  <span className="active">Home</span>
                  <span>About us</span>
                  <span>Services</span>
                  <span>Carrer</span>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="headers-title">
            <div>
              <span>ABOUT US</span>
              <div></div>
            </div>
            <div className="headers-page-path">
              <span>
                <HiHome />
              </span>
              <span>Home &bull; About Us</span>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container">
        <div className="headers-title">
          <div>
            <span>ABOUT US</span>
          </div>
          <div>
            <span>- Home - About Us</span>
          </div>
        </div>
      </div> */}
      {/* <nav>
                <div className="container navbars-main">
                    <div>
                        <img src={images.logo} alt="" className="img-fluid" />
                    </div>
                    <div className="navbars-menu">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Carrer</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid headers-main">
            </div> */}
    </>
  );
};

export default Demo;
