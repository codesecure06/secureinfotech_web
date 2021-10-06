import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RiEmotionHappyLine } from "react-icons/ri";
// import $ from "jquery";
import { CgNotes } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const Exp = () => {
  const history = useHistory();

  useEffect(() => {
    // var a = 0;
    // $(window).scroll(function () {
    //   var oTop = $("#counter").offset().top - window.innerHeight;
    //   if (a === 0 && $(window).scrollTop() > oTop) {
    //     $(".counter-value").each(function () {
    //       var $this = $(this),
    //         countTo = $this.attr("data-count");
    //       $({
    //         countNum: $this.text(),
    //       }).animate(
    //         {
    //           countNum: countTo,
    //         },

    //         {
    //           duration: 2000,
    //           easing: "swing",
    //           step: function () {
    //             $this.text(Math.floor(this.countNum));
    //           },
    //           complete: function () {
    //             $this.text(this.countNum);
    //             //alert('finished');
    //           },
    //         }
    //       );
    //     });
    //     a = 1;
    //   }
    // });
  }, [history.location.pathname]);

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
            <div
              className="col-md-3 exp-content-item mt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <RiEmotionHappyLine size="2em" color="#fff" />
                  </div>
                </div>
                <div id="counter">
                  <span className="counter-value" data-count="300"></span>
                  <span>300+</span>
                  <div>Happy Clients</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div
              className="col-md-3 exp-content-item mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <CgNotes size="1.8em" color="#fff" />
                  </div>
                </div>
                <div>
                  <span className="counter-value" data-count="450"></span>
                  <span>450+</span>
                  <div>Projects</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div
              className="col-md-3 exp-content-item mt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <BiSupport size="1.8em" color="#fff" />
                  </div>
                </div>
                <div>
                  <span className="counter-value" data-count="4000"></span>
                  <span>4000+</span>
                  <div>Hours Of Support</div>
                </div>
                {/* <div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div
              className="col-md-3 exp-content-item mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="exp-content-main px-2 pb-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <FaUsers size="1.8em" color="#fff" />
                  </div>
                </div>
                <div>
                  <span className="counter-value" data-count="25"></span>
                  <span>25+</span>
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
