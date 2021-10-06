import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { DiAndroid } from "react-icons/di";
import { FaReact, FaSwift } from "react-icons/fa";

const TechComp = ({ active }) => {
  return (
    <div className="mx-2 my-5">
      {active === "mobile" ? (
        <div className="row our-technology-menu-item">
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="100">
            <div className="ios-icon">
              <IoLogoApple size="6rem" />
            </div>
            <div>iOS</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="android-icon">
              <DiAndroid size="6rem" />
            </div>
            <div>Android</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="300">
            <div className="react-native">
              <FaReact size="6rem" />
            </div>
            <div>React Native</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="swift">
              <FaSwift size="6rem" />
            </div>
            <div>Swift</div>
          </div>
        </div>
      ) : active === "frontend" ? (
        <div className="row our-technology-menu-item">
        <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="100">
            <div className="react-native">
              <FaReact size="6rem" />
            </div>
            <div>React Native</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="android-icon">
              <DiAndroid size="6rem" />
            </div>
            <div>Android</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="300">
            <div className="react-native">
              <FaReact size="6rem" />
            </div>
            <div>React Native</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="swift">
              <FaSwift size="6rem" />
            </div>
            <div>Swift</div>
          </div>
        </div>
      ) : active === "db" ? (
        <div className="row our-technology-menu-item">
        <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="100">
            <div className="ios-icon">
              <IoLogoApple size="6rem" />
            </div>
            <div>iOS</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="android-icon">
              <DiAndroid size="6rem" />
            </div>
            <div>Android</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="300">
            <div className="react-native">
              <FaReact size="6rem" />
            </div>
            <div>React Native</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="swift">
              <FaSwift size="6rem" />
            </div>
            <div>Swift</div>
          </div>
        </div>
      ) : active === "backend" ? (
        <div className="row our-technology-menu-item">
        <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="100">
            <div className="ios-icon">
              <IoLogoApple size="6rem" />
            </div>
            <div>iOS</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="android-icon">
              <DiAndroid size="6rem" />
            </div>
            <div>Android</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="300">
            <div className="react-native">
              <FaReact size="6rem" />
            </div>
            <div>React Native</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="swift">
              <FaSwift size="6rem" />
            </div>
            <div>Swift</div>
          </div>
        </div>
      ) : (
        <div className="row our-technology-menu-item">
        <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="100">
            <div className="ios-icon">
              <IoLogoApple size="6rem" />
            </div>
            <div>iOS</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="android-icon">
              <DiAndroid size="6rem" />
            </div>
            <div>Android</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="300">
            <div className="react-native">
              <FaReact size="6rem" />
            </div>
            <div>React Native</div>
          </div>
          <div className="col-md-3 col-6 pt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="swift">
              <FaSwift size="6rem" />
            </div>
            <div>Swift</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechComp;
