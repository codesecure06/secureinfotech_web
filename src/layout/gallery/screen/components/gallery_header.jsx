import React from "react";
import Lottie from "react-lottie";
import images from "../../../../apis/images";

const GalleryHeader = () => {
  return (
    <div className="container-fluid about-main">
      <div className="about-compo-1"></div>
      <div className="about-compo-2"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-end">
            <div className="about-header-left">
              <div data-aos="fade-up">Secure culture</div>
              <p data-aos="fade-up" data-aos-delay="200">
                we’re all about taking initiative, aspiring to greatness, and
                acting with integrity. We are always testing and optimizing to
                move beyond simply accomplishing our goals to actually beating
                them.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: images.galleryVector,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
