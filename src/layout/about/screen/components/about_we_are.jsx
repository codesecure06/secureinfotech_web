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
                <div className="itemwrapper2"  data-aos="fade-right">
                  <img src={images.aboutpeople1} alt="bag" />
                </div>
                <div className="itemwrapper1" data-aos="fade-left" data-aos-delay="200">
                  <img src={images.aboutpeople2} alt="pen" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 txt">
            <span data-aos="fade-up">Who we are?</span>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos
              debitis harum nesciunt, earum corporis esse, non a laudantium quam
              voluptatum fuga culpa illo perspiciatis quo corrupti minus, ea
              sequi officiis fugit. Architecto temporibus vel ipsum quisquam sit
              pariatur delectus ullam amet. Quos, id assumenda temporibus nobis
              cupiditate est cum.
            </p>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos
              debitis harum nesciunt, earum corporis esse, non a laudantium quam
              voluptatum fuga culpa illo perspiciatis quo corrupti minus, ea
              sequi officiis fugit. Architecto temporibus vel ipsum quisquam sit
              pariatur delectus ullam amet. Quos, id assumenda temporibus nobis
              cupiditate est cum.
            </p>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos
              debitis harum nesciunt, earum corporis esse, non a laudantium quam
              voluptatum fuga culpa illo perspiciatis quo corrupti minus, ea
              sequi officiis fugit. Architecto temporibus vel ipsum quisquam sit
              pariatur delectus ullam amet. Quos, id assumenda temporibus nobis
              cupiditate est cum.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="d-md-flex justify-content-between vision1">
            <div data-aos="flip-up">
              <img src={images.vision} alt="" />
              <h5>Our Vision</h5>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                voluptatum aut in delectus ad quas rem perspiciatis,
              </p>
            </div>
            <div data-aos="flip-up" data-aos-delay="200">
              <img src={images.mission} alt="" />
              <h5>Our Mission</h5>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                voluptatum aut in delectus ad quas rem perspiciatis,
              </p>
            </div>
            <div data-aos="flip-up" data-aos-delay="400">
              <img src={images.value} alt="" />
              <h5>Our Value</h5>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                voluptatum aut in delectus ad quas rem perspiciatis,{" "}
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
                <Card className="col-md-8 faq-main-card mb-3" key={i} data-aos="fade-up">
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
