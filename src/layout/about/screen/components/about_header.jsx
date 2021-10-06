import React from "react";
// import Lottie from "react-lottie";
// import images from "../../../../apis/images";
// import Particles from "react-particles-js";
// import about from '../../../../assets/images/abc.svg'

const AboutHeader = () => {
  return (
    <div className="container-fluid about-main">
      {/* <div className="about-compo-1"></div>
      <div className="about-compo-2"></div> */}
      <div className="container h-100 about-main-section">
        <div className="about-header-comp-A"></div>
        <div className="about-header-comp-B"></div>
        <div className="about-header-comp-C"></div>
        <div className="row">
          <div className="about-header-title">
            <div>About Us</div>
            <div>Home</div>
          </div>
          {/* <div className="col-md-6 d-flex flex-column justify-content-center align-items-end">
            <div className="about-header-left">
              <div data-aos="fade-up">About Us</div>
              <p data-aos="fade-up" data-aos-delay="200">
                We experience our clients business hypothesis to become shoutout
                their routine circumstances in easy going with our expertise
                technical teamwork for object completion and feel relaxation in
                management, professional and personal workout.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: images.aboutvector,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
