import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
import { useHistory } from "react-router";
// import CareerHeader from "./components/career_header";

const CareerJobApply = () => {
  const history = useHistory()

  return (
    <>
      <Navbar />
      {/* <CareerHeader /> */}
      <div className="container-fluid current-opening-main pt-5">
        <div className="container py-5">
          <div className="content-title my-3">
            <span>Current Openings</span>
          </div>
          <div className="content-tagline my-3">
            <span>What's your expertise? See where do you fit in.</span>
          </div>
          <div className="carrer-form p-4 mt-5">
            <div className="d-flex align-items-center career-all-job" onClick={() => {
              history.goBack()
            }}>
              <span>
                <svg width="25" height="25">
                  <BsArrowLeftShort
                    size="22px"
                    style={{ fill: "url(#blue-gradient)" }}
                  />
                  <linearGradient
                    id="blue-gradient"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop stopColor="#00a7ff" offset="0%" />
                    <stop stopColor="#0080ff" offset="100%" />
                  </linearGradient>
                </svg>
              </span>
              <span>All Job openings</span>
            </div>
            <div className="career-job-tag my-2">
              <span>Apply For this job</span>
            </div>
            <div className="py-3">
              <div className="row justify-content-between career-job-form-input">
                <div className="col-md-6 my-3" data-aos="fade-up-left">
                  <input
                    type="text"
                    className="career-job-input w-100 py-3 px-3"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6 my-3" data-aos="fade-up-right">
                  <input
                    type="text"
                    className="career-job-input w-100 py-3 px-3"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row justify-content-between career-job-form-input">
                <div className="col-md-6 my-3" data-aos="fade-left">
                  <input
                    type="text"
                    className="career-job-input w-100 py-3 px-3"
                    placeholder="Mobile Phone"
                  />
                </div>
                <div className="col-md-6 my-3" data-aos="fade-right">
                  <input
                    type="text"
                    className="career-job-input w-100 py-3 px-3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row justify-content-between career-job-form-input">
                <div className="col-md-12 my-3" data-aos="fade-down">
                  <input
                    type="text"
                    className="career-job-input w-100 py-3 px-3"
                    placeholder="Links to your portfolio"
                  />
                </div>
              </div>
            </div>

            <div className="career-job-upload" data-aos="fade-down">
              <label for="file-upload" className="px-5 py-2">
                Upload CV
              </label>
              <input id="file-upload" type="file" />
            </div>

            <div className="career-job-submit my-5">
              <button className="px-5 py-2 rounded-pill">APPLY</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerJobApply;
