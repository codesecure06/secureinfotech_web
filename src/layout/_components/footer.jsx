import React, { useEffect } from "react";
import images from "../../apis/images";
import AOS from "aos";
import { BiPhone } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { useHistory } from "react-router-dom";
// import $ from "jquery";

AOS.init();

const Footer = () => {
  // const [scrollActive, setScrollActive] = useState(false);
  // const [scrollT, setScrollT] = useState(false);
  const history = useHistory()

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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
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
                <div className="footer-link" onClick={() => history.push("/")}>
                  <div></div>
                  <span>Home</span>
                </div>
                <div className="footer-link" onClick={() => history.push("/about")}>
                  <div></div>
                  <span>About Us</span>
                </div>
                <div className="footer-link" onClick={() => history.push("/career")}>
                  <div></div>
                  <span>Career</span>
                </div>
                <div className="footer-link" onClick={() => history.push("/gallery")}>
                  <div></div>
                  <span>Gallery</span>
                </div>
                <div className="footer-link" onClick={() => history.push("/contactus")}>
                  <div></div>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 position-relative px-md-4 mt-md-0 mt-5 d-flex flex-column justify-content-between">
              <div className="footer-content">
                <div>
                  <span>INFO</span>
                </div>
                <div className="footer-title-divider"></div>
                <div className="footer-details">
                  <BiPhone size="1.2em" color="#00AFFF" />
                  <span>+91 (261) 351-8743</span>
                </div>
                <div className="footer-details">
                  <MdMailOutline size="1.2em" color="#00AFFF" />
                  <span>secure.games.studio@gmail.com</span>
                </div>
                <div className="footer-details align-items-start">
                  <VscHome size="30px" className="mr-4" color="#00AFFF" />
                  <span className="">
                    303/304, Shantiniketan Flora Business Hub,<br /> Abrama Rd, beside
                    Sanskartirth school, Mota Varachha, Surat, Gujarat 394105.
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
    </div>
  );
};

export default Footer;
