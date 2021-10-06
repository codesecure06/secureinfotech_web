import React from "react";
import AOS from 'aos'

AOS.init()

const ContactForm = () => {
  return (
    <div className="container-fluid current-opening-main">
      <div className="container py-5">
        <div className="content-title my-3">
          <span>Current Openings</span>
        </div>
        <div className="content-tagline my-3">
          <span>What's your expertise? See where do you fit in.</span>
        </div>
        <div className="carrer-form p-4 mt-5">
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
                <textarea
                  type="text"
                  className="career-job-input-area w-100 py-3 px-3"
                  placeholder="Description"
                />
              </div>
            </div>
          </div>


          <div className="career-job-submit my-5 d-flex justify-content-center">
            <button className="px-5 py-2 rounded-pill">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
