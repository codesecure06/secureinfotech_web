import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RiEmotionHappyLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const Exp = () => {
  const history = useHistory();

  useEffect(() => {}, [history.location.pathname]);

  return (
    <div className="exp-main pt-5">
      <div className="container">
        <div className="content-title">Our experience</div>
        <div className="content-tagline px-md-5 my-4 d-flex flex-column align-items-center">
          <div className="col-md-8">
            We campaign a team of Developers from individuals and set up the
            business with a Change + Positive Progressive frame of mind in every
            aspect of the work line.
          </div>
        </div>
        <div className="exp-content">
          <div className="row my-5">
            <div className="col-md-3 exp-content-item mt-5">
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <RiEmotionHappyLine size="2em" color="#fff" />
                  </div>
                </div>
                <div>
                  <div>291</div>
                  <div>Happy Clients</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div className="col-md-3 exp-content-item mt-5">
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <CgNotes size="1.8em" color="#fff" />
                  </div>
                </div>
                <div>
                  <div>521</div>
                  <div>Projects</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div className="col-md-3 exp-content-item mt-5">
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <BiSupport size="1.8em" color="#fff" />
                  </div>
                </div>
                <div>
                  <div>1463</div>
                  <div>Hours Of Support</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div className="col-md-3 exp-content-item mt-5">
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <FaUsers size="1.8em" color="#fff" />
                  </div>
                </div>
                <div>
                  <div>15</div>
                  <div>Hard Workers</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-md-6 exp-content-left pt-4 px-md-0 px-4">
              <div className="my-3">Successful campaigns</div>
              <p>
                We campaign a team of Developers from individuals and set up the
                business with a Change + Positive Progressive frame of mind in
                every aspect of the work line. We satisfied our clients with
                this approach and gain unbelievable success within a short
                period of time.
              </p>
            </div>
            <div className="col-md-6 py-5">
            
              <div className="row px-5 py-5 exp-total h-100">
                <div className="col-6">
                  <div className="exp-total-item" id="counter">
                    <div>
                      <span className="counter-value" data-count="3"></span>
                      <span>+</span>
                    </div>
                    <div>Years of Experience</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="exp-total-item" id="counter">
                    <div>
                      <span className="counter-value" data-count="60"></span>
                      <span>+</span>
                    </div>
                    <div>Our Employees</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="exp-total-item" id="counter">
                    <div>
                      <span className="counter-value" data-count="250"></span>
                      <span>+</span>
                    </div>
                    <div>Worked on Projects</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="exp-total-item" id="counter">
                    <div>
                      <span className="counter-value" data-count="450"></span>
                      <span>+</span>
                    </div>
                    <div>Freelance Hours</div>
                  </div>
                </div>
              </div>
            
            </div>
           */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
