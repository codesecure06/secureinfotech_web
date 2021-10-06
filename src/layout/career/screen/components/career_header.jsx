import React from "react";
// import Lottie from "react-lottie";
import images from "../../../../apis/images";

const CareerHeader = () => {
  return (
    <div className="container-fluid about-main">
      <div className="about-compo-1"></div>
      <div className="about-compo-2"></div>
      <div className="container h-100">
      <div className="row h-100 ">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-end">
          <div className="about-header-left">
            <div data-aos="fade-up">Careers</div>
            <p data-aos="fade-up" data-aos-delay="200"> 
              We allow all developers & designers to show own creativity. Submit
              your resume with your key skills.Secure is a leading IT company
              based in Surat, Gujarat, India, started with a principal
              commitment to deliver high-quality IT Services to fulfill their
              client's unique goals and objectives.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <img src={images.hiring} alt="" className="img-fluid" />
            {/* <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: images.careervector,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={"100%"}
              width={"100%"}
            /> */}
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default CareerHeader;
