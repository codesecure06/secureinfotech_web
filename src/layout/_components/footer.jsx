import React, { useEffect } from "react";
import images from "../../apis/images";
import AOS from "aos";
import { BiPhone } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
// import $ from "jquery";

AOS.init();

const Footer = () => {
  // const [scrollActive, setScrollActive] = useState(false);
  // const [scrollT, setScrollT] = useState(false);

  useEffect(() => {
    // window.onscroll = () => {
    //   let scrollY = window.pageYOffset;
    //   if (scrollY > 0) {
    //   }
    // };
    //   window.onscroll = () => {
    //     let scrollY = window.pageYOffset;
    //     if (scrollY > 0) {
    //       setScrollT(true);
    //     } else {
    //       setTimeout(() => {
    //         setScroll(false)
    //       }, 500)
    //       setScrollT(false);
    //       // setScroll(true)
    //     }
    //   };
  }, []);

  const handleScrollTop = async () => {
    await window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container-fluid footer-main pt-4 pb-3">
        <div className="container py-5 px-md-5">
          <div className="row">
            <div className="col-md-5 position-relative px-md-5">
              <div className="footer-content-divider d-md-flex d-none">
                <div></div>
              </div>
              <div className="footer-logo">
                <img src={images.logo} alt="" className="img-fluid" />
              </div>
              <div className="footer-about-detail">
                Secure Infotech is the fast Growing On Business IT Solution
                Services, With the aim to reach to the people Worldwide. We are
                on the way of success since we started with an experience of
                several years and extensive.
              </div>
              <div className="footer-contact-btn">
                <button className="rounded-pill">
                  <div className="px-4 py-2 rounded-pill">Contact Us</div>
                </button>
              </div>
            </div>

            <div className="col-md-3 position-relative px-md-5 mt-md-0 mt-5">
              <div className="footer-content-divider-B d-md-flex d-none">
                <div></div>
              </div>
              <div className="footer-content">
                <div>
                  <span>DIRECT LINK</span>
                </div>
                <div className="footer-title-divider"></div>
                <div className="footer-link">
                  <div></div>
                  <span>Home</span>
                </div>
                <div className="footer-link">
                  <div></div>
                  <span>About Us</span>
                </div>
                <div className="footer-link">
                  <div></div>
                  <span>Career</span>
                </div>
                <div className="footer-link">
                  <div></div>
                  <span>Gallery</span>
                </div>
                <div className="footer-link">
                  <div></div>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 position-relative px-md-5 mt-md-0 mt-5 d-flex flex-column justify-content-between">
              <div className="footer-content">
                <div>
                  <span>INFO</span>
                </div>
                <div className="footer-title-divider"></div>
                <div className="footer-details">
                  <BiPhone size="1.2em" color="#00AFFF" />
                  <span>Home</span>
                </div>
                <div className="footer-details">
                  <MdMailOutline size="1.2em" color="#00AFFF" />
                  <span>secureinfotech@gamil.com</span>
                </div>
                <div className="footer-details align-items-start">
                  <VscHome size="1.8em" color="#00AFFF" />
                  <span>
                    132, My Street, Kingston, New york 12401 United States
                  </span>
                </div>
              </div>

              <div className="footer-social-icons mt-md-0 mt-5 justify-content-md-start justify-content-center">
                <div>
                  <div>
                    <img
                      src={images.footerFacebook}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={images.footerTwitter} alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={images.footerInstagram} alt="" />
                  </div>
                </div>
                <div>
                  <div>
                    <img src={images.footerLinkedin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <hr />
          <span className="text-center footer-bottom-content">
            Copyright &copy; {new Date().getFullYear()} Secure Infotech . All
            Rights Reserved.
          </span>
        </div>
      </div>

      <div className="scroll-compo">
        <div>
          <div></div>
        </div>
      </div>

      <div className="scrollImg" onClick={handleScrollTop}>
        <img src={images.scrollTop} alt="" />
      </div>
    </>
  );
};

export default Footer;
