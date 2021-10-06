import React, { useState } from "react";
import images from "../../apis/images";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";

const Navbar = () => {
  // const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const history = useHistory();

  const handleMenu = () => setMenu(!menu);

  useEffect(() => {
    function animJS() {
      window.onscroll = () => {
        let scrollY = window.pageYOffset;
        // var oTop = $("#counter").offset().top - window.innerHeight;
        // var a = 0
        // console.log(scrollY);
        if (scrollY > 0) {
          $(".navbar-main").addClass("active");

          $(".navbar-main").css({
            background: "#fff",
            height: "100px",
          });

          $(".main-logo").css({
            width: "250px",
          });

          $(".scroll-compo").addClass("active");
          $(".scroll-compo").css({ bottom: "5%", opacity: 1 });
          $(".scrollImg").css({ display: "block" });
        } else {
          $(".navbar-main").removeClass("active");

          $(".navbar-main").css({
            background: "#fff",
            height: "100px",
          });

          $(".main-logo").css({
            width: "250px",
          });

          $(".scroll-compo").removeClass("active");
          $(".scroll-compo").css({ bottom: "0%", opacity: 0 });
          $(".scrollImg").css({ display: "none" });
        }

        // if (a === 0 && (scrollY > oTop)) {
        //   $(".counter-value").each(function () {
        //     var $this = $(this),
        //       countTo = $this.attr("data-count");
        //     $({
        //       countNum: $this.text(),
        //     }).animate(
        //       {
        //         countNum: countTo,
        //       },

        //       {
        //         duration: 2000,
        //         easing: "swing",
        //         step: function () {
        //           $this.text(Math.floor(this.countNum));
        //         },
        //         complete: function () {
        //           $this.text(this.countNum);
        //           //alert('finished');
        //         },
        //       }
        //     );
        //   });
        //   a = 1;
        // }
      };
    }

    // function animJS2() {
    //   var a = 0;
    //   $(window).scroll(function () {
    //     var oTop = $("#counter").offset().top - window.innerHeight;
    //     if (a === 0 && $(window).scrollTop() > oTop) {
    //       $(".counter-value").each(function () {
    //         var $this = $(this),
    //           countTo = $this.attr("data-count");
    //         $({
    //           countNum: $this.text(),
    //         }).animate(
    //           {
    //             countNum: countTo,
    //           },

    //           {
    //             duration: 2000,
    //             easing: "swing",
    //             step: function () {
    //               $this.text(Math.floor(this.countNum));
    //             },
    //             complete: function () {
    //               $this.text(this.countNum);
    //               //alert('finished');
    //             },
    //           }
    //         );
    //       });
    //       a = 1;
    //     }
    //   });
    // }

    animJS();
    // animJS2();
  }, [history.location.pathname]);

  const handleClick = (item) => {
    if (item === "home") {
      history.push("/");
      window.location.reload(true);
    } else {
      history.push(`/${item}`);
      window.location.reload(true);
    }
  };

  return (
    <div>
      <nav className="navbar-main shadow-sm">
        <div className="container">
          <div className="navbar-logo d-lg-block d-none">
            <img
              src={images.logo}
              className="img-fluid main-logo"
              alt=""
              onClick={() => history.push("/")}
            />
          </div>
          <div className="navbar-logo d-lg-none d-block">
            <img
              src={images.logoTopBlue}
              className="img-fluid main-logo-res"
              alt=""
              onClick={() => history.push("/")}
            />
          </div>

          <div className="nav-menu d-lg-block d-none">
            <span
              className={
                history.location.pathname === "/"
                  ? "nav-menu-items active rounded-pill"
                  : "nav-menu-items "
              }
              onClick={() => {
                handleClick("home");
              }}
            >
              Home
            </span>
            <span
              className={
                history.location.pathname === "/about"
                  ? "nav-menu-items active rounded-pill"
                  : "nav-menu-items "
              }
              onClick={() => {
                handleClick("about");
              }}
            >
              About Us
            </span>
            <span
              className={
                history.location.pathname === "/gallery"
                  ? "nav-menu-items active rounded-pill"
                  : "nav-menu-items "
              }
              onClick={() => {
                handleClick("gallery");
              }}
            >
              Gallery
            </span>
            <span
              className={
                history.location.pathname === "/career"
                  ? "nav-menu-items active rounded-pill"
                  : "nav-menu-items "
              }
              onClick={() => {
                handleClick("career");
              }}
            >
              Career
            </span>
            <span
              className={
                history.location.pathname === "/contactus"
                  ? "nav-menu-items active rounded-pill"
                  : "nav-menu-items "
              }
              onClick={() => {
                handleClick("contactus");
              }}
            >
              Contact Us
            </span>
          </div>

          <div className="nav-menu-main d-lg-none d-block">
            <div
              className={`navbar-menu-trigger ${menu ? "active" : ""}`}
              onClick={handleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className={`navbar-active-menu ${menu ? "active" : ""}`}>
          <div>
            <div className="navbar-active-menu-item">
              <div
                className={history.location.pathname === "/" ? "active" : ""}
                onClick={() => {
                  handleClick("home");
                }}
              >
                <div></div>
                <div>Home</div>
              </div>
              <div
                className={
                  history.location.pathname === "/about" ? "active" : ""
                }
                onClick={() => {
                  handleClick("about");
                }}
              >
                <div></div>
                <div>About Us</div>
              </div>
              <div
                className={
                  history.location.pathname === "/gallery" ? "active" : ""
                }
                onClick={() => {
                  handleClick("gallery");
                }}
              >
                <div></div>
                <div>Gallery</div>
              </div>
              <div
                className={
                  history.location.pathname === "/career" ? "active" : ""
                }
                onClick={() => {
                  handleClick("career");
                }}
              >
                <div></div>
                <div>Career</div>
              </div>
              <div
                className={
                  history.location.pathname === "/contactus" ? "active" : ""
                }
                onClick={() => {
                  handleClick("contactus");
                }}
              >
                <div></div>
                <div>Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
