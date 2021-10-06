import React from "react";
// import images from "../../../../apis/images";
import Slider from "react-slick";
import { MdFormatQuote } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import images from "../../../../apis/images";

const Clientreview = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 3,
    infinite: true,
    lazyLoad: "ondemand",
    className: "d-flex align-items-start position-relative",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {}, []);

  // const next = () => {

  // }

  return (
    <div className="client-review-main pt-5">
      <div className="container overflow-hidden">
        <div className="content-title">Our Client Say</div>
          <div className="content-tagline px-md-5 my-4 d-flex flex-column align-items-center">
          <div className="col-md-8">We have the experience</div>
        </div>
        <div className="my-5">
          <Slider {...settings}>
            <div className="review-box">
              <div className="px-xl-5 px-4 py-4 h-100">
                <div className="d-flex justify-content-start align-items-center mt-3">
                  <div className="review-box-img">
                    <img src={images.client} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="review-box-name d-flex justify-content-between align-items-start mt-3">
                  <div className="d-flex flex-column">
                    <span>Alan Zara dilan</span>
                    <span>New York, America, USA</span>
                  </div>
                  <div className="mt-1">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
                <p className="mt-4">
                  Telehealth is fueled by digital technologies and DocTime
                  telemedicine app has brought a great revolution in medical
                  services specially an overpopulated country where virtual
                  chamber can create at anywhere thoughout country
                </p>
              </div>
              <div>
                <MdFormatQuote size="2rem" />
              </div>
            </div>
            <div className="review-box">
              <div className="px-xl-5 px-4 py-4 h-100">
                <div className="d-flex justify-content-start align-items-center mt-3">
                  <div className="review-box-img">
                    <img src={images.client} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="review-box-name d-flex justify-content-between align-items-start mt-3">
                  <div className="d-flex flex-column">
                    <span>Alex Maxwell</span>
                    <span>San Francisco, USA</span>
                  </div>
                  <div className="mt-1">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
                <p className="mt-4">
                  I visited my PCP for abdominal pain. My doctor told me that I
                  need to see Gastroenterologist. Earlier I used to call
                  multiple offices to schedule an appointment that suites my
                  time.
                </p>
              </div>
              <div>
                <MdFormatQuote size="2rem" />
              </div>
            </div>
            <div className="review-box">
              <div className="px-xl-5 px-4 py-4 h-100">
                <div className="d-flex justify-content-start align-items-center mt-3">
                  <div className="review-box-img">
                    <img src={images.client} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="review-box-name d-flex justify-content-between align-items-start mt-3">
                  <div className="d-flex flex-column">
                    <span>Alan Zara dilan</span>
                    <span>New York, America, USA</span>
                  </div>
                  <div className="mt-1">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
                <p className="mt-4">
                  Telehealth is fueled by digital technologies and DocTime
                  telemedicine app has brought a great revolution in medical
                  services specially an overpopulated country where virtual
                  chamber can create at anywhere thoughout country
                </p>
              </div>
              <div>
                <MdFormatQuote size="2rem" />
              </div>
            </div>
            <div className="review-box">
              <div className="px-xl-5 px-4 py-4 h-100">
                <div className="d-flex justify-content-start align-items-center mt-3">
                  <div className="review-box-img">
                    <img src={images.client} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="review-box-name d-flex justify-content-between align-items-start mt-3">
                  <div className="d-flex flex-column">
                    <span>Dr. Tasnim zara</span>
                    <span>Los Angeles, USA</span>
                  </div>
                  <div className="mt-1">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
                </div>
                <p className="mt-4">
                  Telehealth is fueled by digital technologies and DocTime
                  telemedicine app has brought a great revolution in medical
                  services specially an overpopulated country where virtual
                  chamber can create at anywhere thoughout country
                </p>
              </div>
              <div>
                <MdFormatQuote size="2rem" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

// function NextArrow(props) {
//   const { className,  onClick } = props;
//   return (
//     <div
//       className={`${className} slide-next-arrow`}
//       style={{ display: "block", background: "red" }}
//       onClick={onClick}
//     >{'>'}</div>
//   );
// }

// function PrevArrow(props) {
//   const { className,  onClick } = props;
//   return (
//     <div
//       className={`${className} slide-prev-arrow`}
//       style={{ display: "block", background: "green" }}
//       onClick={onClick}
//     >
//       {'<'}
//     </div>
//   );
// }

export default Clientreview;
