import React from "react";
import images from "../../../../apis/images";
import { BsArrowRightShort } from "react-icons/bs";

const GalleryImg = () => {
  return (
    <div className="container-fluid gallery-imgs py-5">
      <div className="container">
        <div className="content-title my-3">
          <span>Celebrations & Culture</span>
        </div>
        <div className="content-tagline my-3">
          <span>
            Life is a celebration of events. Secure celebrates small moments
            which are loaded with fun-filled activities.
          </span>
        </div>
        <div className="row text-center">
          <div className="col-md-6 px-md-5 py-3 position-relative" data-aos="fade-up">
            <div className="gallery-img-1">
              <div className="w-100 h-100 position-relative">
                <div className="gallery-img-date px-5 py-2">21/01/2021</div>
                <div className="gallery-img-more px-3 py-1">
                  <BsArrowRightShort size="1.8em" />
                </div>
                <img src={images.galleryImg1} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">Enjoy In Matheran</div>
            </div>
          </div>
          {/* <div className="col-md-6 px-md-5 py-3" data-aos="fade-up" data-aos-delay="200">
            <div className="gallery-img-1">
              <div className="w-100 h-100 position-relative">
                <div className="gallery-img-date px-5 py-2">21/01/2021</div>
                <div className="gallery-img-more px-3 py-1">
                  <BsArrowRightShort size="1.8em" />
                </div>
                <img src={images.galleryImg2} alt="" className="img-fluid" />
              </div>
              <div className="mt-2">Enjoy In Matheran</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryImg;
