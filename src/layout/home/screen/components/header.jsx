import React, { useEffect } from "react";
// import images from "../../../../apis/images";
// import wave from "../../../../assets/images/wave.svg";
// import Lottie from "react-lottie";
// import { GoPlusSmall } from "react-icons/go";
// import BIRDS from "vanta/src/vanta.birds";
// import * as THREE from "three";
import { TweenMax, Expo } from "gsap";
import $ from "jquery";
import Particles from "react-particles-js";

const Header = () => {
  useEffect(() => {
    var $body = $("body");
    var $panel = $(".home");

    function initTilt() {
      TweenMax.set([$panel], { transformStyle: "preserve-3d" });

      $body.mousemove(function (e) {
        tilt(e.pageX, e.pageY);
      });
    }

    function tilt(cx, cy) {
      var sxPos = ((cx / $body.width()) * 100 - 50) * 2;
      var syPos = ((cy / $body.height()) * 100 - 50) * 2;
      TweenMax.to($panel, 2, {
        rotationY: -0.03 * sxPos,
        rotationX: 0.03 * syPos,
        transformPerspective: 400,
        transformOrigin: "center center -300",
        ease: Expo.easeOut,
      });
    }

    $body.mouseleave(function () {
      tilt($body.width() / 2, $body.height() / 2);
    });

    initTilt();
  }, []);
  
  return (
    <div className="container-fluid header-main">
      {/* <div className="row position-absolute px-0 mt-5 justify-content-end home-header-wave">
        
      </div> */}

      <div className="home-header-circle-main">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="compA">
        <div>
          <span>&#10005;</span>
        </div>
      </div>
      <div className="compB">
        <div>
          <span>&#10005;</span>
        </div>
      </div>
      <div className="container h-100 px-md-5">
        <div className="row h-100 position-relative">
          <div className="position-relative d-flex flex-column align-items-center justify-content-center">
            <div className="text-center home-header-tag home d-flex flex-column align-items-center">
              <div className="home-header-main-title col-xl-9 bg-danger"> 
                We give wings to your business decide Where to Fly
              </div>
              <p className="col-md-6">
                The association of technological experts from leading IT
                organizations gave birth to secure infotech.
              </p>
              <div className="home-header-vertical-line">
                <div></div>
              </div>
              <div className="home-header-btn">
                <div className="rounded-pill">
                  <button className="rounded-pill">
                    <span>Contact us</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-100 home-scroll-btn">
              <span>SCROLL DOWN</span>
              <a href="#serives">
                <div>
                  <div></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Particles
        className="position-absolute w-100 h-100 top-0"
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: false,
              },
            },
            color: "#0053ff",
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
                color: "#00d3ff"
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Header;


// {/* <img src={wave} className="img-fluid w-50 px-0" alt="" /> */}
//         {/* <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 1920 1080"> */}
//         {/* {paths()} */}
//         {/* <path
//             d="M 0 450 q 100 10 206 150 q 100 130 250 -100 q 150 -230 350 50 q 60 80 120 -40 q 50 -100 100 0 q 60 140 120 -40 q 60 -170 100 -175 q 60 -10 150 200 q 40 100 100 200 q 60 100 150 -20 q 210 -300 300 -5"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           /> */}
//         {/* <path
//             d="M 0 450 q 100 10 206 150 q 100 130 250 -100 q 150 -230 350 50 q 60 80 120 -40 q 50 -100 100 0 q 60 140 120 -40 q 60 -170 100 -175 q 60 -10 150 200 q 40 100 100 200 q 60 100 150 -20 q 210 -300 300 -5"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           />
//           <path
//             d="M 0 450 q 100 10 206 150 q 100 130 250 -100 q 150 -230 350 50 q 60 80 120 -40 q 50 -100 100 0 q 60 140 120 -40 q 60 -170 100 -175 q 60 -10 150 200 q 40 100 100 200 q 60 100 150 -20 q 210 -300 300 -5"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           />
//           <path
//             d="M 0 450 q 100 10 206 150 q 100 130 250 -100 q 150 -230 350 50 q 60 80 120 -40 q 50 -100 100 0 q 60 140 120 -40 q 60 -170 100 -175 q 60 -10 150 200 q 40 100 100 200 q 60 100 150 -20 q 210 -300 300 -5"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           />
//           <path
//             d="M 0 450 q 100 10 206 150 q 100 130 250 -100 q 150 -230 350 50 q 60 80 120 -40 q 50 -100 100 0 q 60 140 120 -40 q 60 -170 100 -175 q 60 -10 150 200 q 40 100 100 200 q 60 100 150 -20 q 210 -300 300 -5"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           />
//           <path
//             d="M 0 450 q 100 10 206 150 q 100 130 250 -100 q 150 -230 350 50 q 60 80 120 -40 q 50 -100 100 0 q 60 140 120 -40 q 60 -170 100 -175 q 60 -10 150 200 q 40 100 100 200 q 60 100 150 -20 q 210 -300 300 -5"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           /> */}
//         {/* <linearGradient id="FirstGradient">
//             <stop offset="0%" style={{ stopColor: "#00D5FF" }} />
//             <stop offset="100%" style={{ stopColor: "#0053FF" }} />
//           </linearGradient>
//           <linearGradient id="FirstGradient2">
//             <stop offset="0%" style={{ stopColor: "#0053FF" }} />
//             <stop offset="100%" style={{ stopColor: "#00D5FF" }} />
//           </linearGradient> */}
//         {/* <defs>
//             <linearGradient
//               id="New_Gradient_Swatch_1"
//               x1="-0.4"
//               y1="596.36"
//               x2="1920.91"
//               y2="596.36"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop offset="0" stop-color="#00D5FF" />
//               <stop offset="1" stop-color="#0053FF" />
//             </linearGradient>
//           </defs>
//           <path
//             class="cls-1"
//             style={{
//               fill: "none",
//               strokeMiterlimit: 10,
//               strokeWidth: "1px",
//               stroke: "url(#New_Gradient_Swatch_1)",
//             }}
//             d="M0,391c94.17,26.18,115.15,133,177.5,194.7,9.74,9.64,20.6,18.24,32.77,24.61,80.84,42.33,134.26-57.66,149.73-120,0,0,29.65-142.24,104.12-145.41,82.73-3.53,113.42,88.36,153.18,144.18a35.68,35.68,0,0,0,3.52,4.76C633.77,514,660,543.08,686.56,531.13c17.13-7.7,25.4-29.23,34.43-44.31,20.63-34.43,56.43-68.52,95.44-37.86,10.56,8.3,18.75,19.27,25,31.1,8.35,15.9,11.14,34.31,21.18,49.43,13.69,20.63,36,19.38,52,1.3,0,0,22.12-20.24,39.53-102.83A213.86,213.86,0,0,1,975,370.73c9.24-17.08,24.25-34.33,43.7-39.51,20.35-5.42,38.68,6.92,52.89,20.35,29.51,27.89,44.79,68.21,59.52,105.11,19.35,48.47,31.92,99.23,45.36,149.54,9.15,34.26,18.71,68.46,31.07,101.72q10.74,28.92,23.58,57c18.55,40.3,48.54,92.5,98.51,97.5,62.71,6.28,95.64-73.59,111.81-120.61,9.24-33.26,20.29-66.11,32.09-98.54C1494,586.89,1517,528.66,1552,479.44c20.36-28.63,44.24-52.65,81.72-46.33,23.46,3.95,45.12,21.39,62.62,36.24a459.89,459.89,0,0,1,36.82,35.32S1804.59,599,1920,511.49"
//           />
//           <path
//             class="cls-1"
//             style={{
//               fill: "none",
//               strokeMiterlimit: 10,
//               strokeWidth: "1px",
//               stroke: "url(#New_Gradient_Swatch_1)",
//             }}
//             d="M0,39c99.17,26.18,115.15,133,177.5,194.7,9.74,9.64,20.6,18.24,32.77,24.61,80.84,42.33,134.26-57.66,149.73-120,0,0,29.65-142.24,104.12-145.41,82.73-3.53,113.42,88.36,153.18,144.18a35.68,35.68,0,0,0,3.52,4.76C633.77,514,660,543.08,686.56,531.13c17.13-7.7,25.4-29.23,34.43-44.31,20.63-34.43,56.43-68.52,95.44-37.86,10.56,8.3,18.75,19.27,25,31.1,8.35,15.9,11.14,34.31,21.18,49.43,13.69,20.63,36,19.38,52,1.3,0,0,22.12-20.24,39.53-102.83A213.86,213.86,0,0,1,975,370.73c9.24-17.08,24.25-34.33,43.7-39.51,20.35-5.42,38.68,6.92,52.89,20.35,29.51,27.89,44.79,68.21,59.52,105.11,19.35,48.47,31.92,99.23,45.36,149.54,9.15,34.26,18.71,68.46,31.07,101.72q10.74,28.92,23.58,57c18.55,40.3,48.54,92.5,98.51,97.5,62.71,6.28,95.64-73.59,111.81-120.61,9.24-33.26,20.29-66.11,32.09-98.54C1494,586.89,1517,528.66,1552,479.44c20.36-28.63,44.24-52.65,81.72-46.33,23.46,3.95,45.12,21.39,62.62,36.24a459.89,459.89,0,0,1,36.82,35.32S1804.59,599,1920,511.49"
//           /> */}
//         {/* </svg> */}
//         {/* <svg height="700" width="1000px">
//           <path
//             d="M 0 350 q 150 300 400 100 q 190 -160 400 5 q 150 120 130 -50"
//             stroke="url(#FirstGradient)"
//             stroke-width="1"
//             fill="none"
//           />
//           <linearGradient id="FirstGradient">
//             <stop offset="0%" style={{ stopColor: "#00D5FF" }} />
//             <stop offset="100%" style={{ stopColor: "#0053FF" }} />
//           </linearGradient>
//           <linearGradient id="FirstGradient2">
//             <stop offset="0%" style={{ stopColor: "#0053FF" }} />
//             <stop offset="100%" style={{ stopColor: "#00D5FF" }} />
//           </linearGradient>
//         </svg> */}



