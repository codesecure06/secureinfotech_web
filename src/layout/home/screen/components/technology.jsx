import React from "react";
// import TechComp from "./techComp";
import { FiFigma } from "react-icons/fi";
import { FaWordpress } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { DiReact, DiPostgresql, DiIllustrator } from "react-icons/di";
import {
  SiNodeDotJs,
  SiMysql,
  SiMongodb /* SiPostgresql */,
  SiUnity,
  SiSwift,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiSlack,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiBlender,
  SiShopify,
  SiHeroku,
} from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io5";
// import $ from "jquery";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
// import images from "../../../../apis/images";

const Technology = () => {
  const data = [
    { id: 1, techName: "", icon: <RiAppleLine /> },
    { id: 2, techName: "", icon: <DiReact /> },
    { id: 3, techName: "", icon: <SiNodeDotJs /> },
    { id: 4, techName: "", icon: <DiPostgresql /> },
    { id: 5, techName: "", icon: <SiMysql /> },
    { id: 6, techName: "", icon: <SiUnity /> },
    { id: 7, techName: "", icon: <SiSwift /> },
    { id: 8, techName: "", icon: <SiMongodb /> },
    { id: 9, techName: "", icon: <SiGithub /> },
    { id: 10, techName: "", icon: <SiHtml5 /> },
    { id: 11, techName: "", icon: <SiCss3 /> },
    { id: 12, techName: "", icon: <SiSlack /> },
    { id: 13, techName: "", icon: <FaWordpress /> },
    { id: 14, techName: "", icon: <SiAdobephotoshop /> },
    { id: 15, techName: "", icon: <DiIllustrator /> },
    { id: 16, techName: "", icon: <SiAdobeaftereffects /> },
    { id: 17, techName: "", icon: <SiBlender /> },
    { id: 18, techName: "", icon: <SiShopify /> },
    { id: 19, techName: "", icon: <IoLogoBitbucket /> },
    { id: 20, techName: "", icon: <SiHeroku /> },
    { id: 21, techName: "", icon: <FiFigma /> },
  ];
  // const [active, setActive] = useState("mobile");
  useEffect(() => {
    // centerX = $(this).width();
    // centerY = $(this).height();
    // function techAnim() {
    // }
    // techAnim()
  }, []);

  return (
    <div className="our-tehnology-main pt-5">
      <div className="container-fluid">
        <div className="container">
          <div className="content-title">Our Technology</div>
          <div className="content-tagline px-md-5 my-4 d-flex flex-column align-items-center">
            <div className="col-md-8">
              Secure Infotech knows how to use technologies up to their full
              potential. Our focus is on bringing your ideas to life and making
              dreams a reality. Problem-solving and coming up with unique
              solutions fuels us to tread on the path of development.
            </div>
          </div>
        </div>
        <div className="our-technology-menu-1">
          <div className="row py-4 mt-5">
            {/* <Marquee
              key={key}
              velocity={12}
              scatterRandomly
              minScale={0.7}
              resetAfterTries={200}
            >
              {_.times(8, Number).map((id) => (
                <Motion
                  key={`marquee-example-company-${id}`}
                  initDeg={randomIntFromInterval(0, 360)}
                  direction={
                    Math.random() > 0.5 ? "clockwise" : "counterclockwise"
                  }
                  velocity={10}
                  radius={scale * 100}
                >
                  <Company scale={scale}>
                    <Circle scale={scale}>
                      <Logo src={icons[id]} />
                    </Circle>
                  </Company>
                </Motion>
              ))}
            </Marquee> */}
            <Marquee pauseOnHover={false} speed={50}>
              {/* <div className="col-md-2 d-flex justify-content-center our-tech"> */}
              {data.map((item, i) => {
                return (
                  <div className="our-technology-menu-1-item mx-md-5 mx-2 our-tech-item bg-none">
                    <div>{item.icon}</div>
                    {/* <div></div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div> */}
                  </div>
                );
              })}
              {/* </div> */}
            </Marquee>

            {/* <div className="col-md-3 d-flex justify-content-center our-tech">
              <div className="our-technology-menu-1-item our-tech-item">
                <div>
                  <RiAppleLine size="4em" color="#fff" />
                </div>
                <div></div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="our-technology-menu-1-item">
                <div>
                  <RiAppleLine size="4em" color="#fff" />
                </div>
                <div></div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="our-technology-menu-1-item">
                <div>
                  <RiAppleLine size="4em" color="#fff" />
                </div>
                <div></div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="our-technology-menu-1-item">
                <div>
                  <RiAppleLine size="4em" color="#fff" />
                </div>
                <div></div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>

                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          */}
          </div>
          {/* <div className="rounded-pill">
            <div
              className={active === "mobile" ? "active" : ""}
              onClick={() => setActive("mobile")}
            >
              Mobile
            </div>
            <div
              className={active === "frontend" ? "active" : ""}
              onClick={() => setActive("frontend")}
            >
              Front-end
            </div>
            <div
              className={active === "db" ? "active" : ""}
              onClick={() => setActive("db")}
            >
              Database
            </div>
            <div
              className={active === "backend" ? "active" : ""}
              onClick={() => setActive("backend")}
            >
              Back-end
            </div>
            <div
              className={active === "game" ? "active" : ""}
              onClick={() => setActive("game")}
            >
              Gaming
            </div>
          </div>*/}
        </div>
        {/* <TechComp active={active} />  */}
      </div>
    </div>
  );
};

export default Technology;
