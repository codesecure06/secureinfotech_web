import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import images from "../../../../apis/images";
import { faq } from "../../../../apis/localdata";
import { GrFormDown } from "react-icons/gr";

const AboutWeAre = () => {
  const [activeId, setActiveId] = useState("");

  const toggleActive = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="container-fluid about_flu">
      <div className="container about_con">
        <div className="row">
          <div className="col-lg-6 parent">
            <div id="wrapper1" className="about-left-img">
              <div className="about-img-bg"></div>
              <div id="outer1" className="">
                <div className="itemwrapper2" data-aos="fade-right">
                  <img src={images.aboutpeople1} alt="bag" />
                </div>
                <div
                  className="itemwrapper1"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <img src={images.aboutpeople2} alt="pen" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 txt">
            <span data-aos="fade-up">Who we are?</span>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
              Secure infotech is an ISO 9001:2015 Certified Company with its
              physical presence in India, and serving its clients across the
              globe.
            </p>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
              Established in the year 2015, Secure Infotech has developed more
              than 400 Mobile and Web Apps for over 300 clients from all parts
              of the world. With a team of 20+ seasoned professionals, we offer
              innovative solutions from our well-established development centers
              as well as through onsite work environments.
            </p>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="300">
              With top-notch & affordable solutions, Secure Infotech has earned
              notable associations from technology leaders like Microsoft,
              NASSCOM, Amazon Web Services, Acquia, STPI, D&B and many more. We
              are appreciated by hundreds of clients on AppFutura, Clutch,
              GoodFirms, AppLancer, Appdexa and Extract, consistently being
              among the Top-10 Mobile App Developers on these platforms.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="d-md-flex justify-content-between vision1">
            <div className="col-md-4" data-aos="flip-up">
              <img src={images.vision} alt="" />
              <h5>Our Vision</h5>
              <p className="text-muted">
                Our vision is to develop in a constant manner and grow as a
                major IT service provider to become a leading performer, in
                providing quality Web and Software Development solutions in the
                competitive global marketplace.
              </p>
            </div>
            <div className="col-md-4" data-aos="flip-up" data-aos-delay="200">
              <img src={images.mission} alt="" />
              <h5>Our Mission</h5>
              <p className="text-muted">
                Our mission is to enhance business growth of our customers with
                creative design, development and to deliver market defining high
                quality solutions that create value and reliable competitive
                advantage to customers around the globe.
              </p>
            </div>
            <div className="col-md-4" data-aos="flip-up" data-aos-delay="400">
              <img src={images.value} alt="" />
              <h5>Our Value</h5>
              <p className="text-muted">
                Dedicated to providing high-quality products continually
                striving for the best through innovation. And to be open,
                honest, and fair... whatever we do, we do it right, and we do it
                together.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="faq text-center mt-5">
            <h1>F.A.Q</h1>
            <p className="text-muted">Frequently Asked Questions</p>
          </div>
          <Accordion
            className="py-4 d-flex flex-column justify-content-center align-items-center"
            defaultActiveKey={activeId}
            data-active={activeId}
          >
            {faq.map((item, i) => {
              return (
                <Card
                  className="col-md-8 col-12 faq-main-card mb-3"
                  key={i}
                  data-aos="fade-up"
                >
                  <Accordion.Toggle
                    eventKey={i + 1}
                    onClick={() => toggleActive(i + 1)}
                    className="faq-card-title px-md-4 px-2 py-3"
                  >
                    <span>{item.que}</span>
                    {/* <span className={active "faq-toggle"}> */}
                    <span
                      className={
                        activeId === i + 1 ? "faq-toggle active" : "faq-toggle"
                      }
                    >
                      <GrFormDown />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={i + 1}>
                    {/* <Card.Body> */}
                    <p className="faq-ans text-muted px-md-4 px-2 border-top pt-4">
                      {item.ans}
                    </p>
                    {/* </Card.Body> */}
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutWeAre;
