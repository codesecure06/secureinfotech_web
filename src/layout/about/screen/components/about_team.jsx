import React from "react";
import images from "../../../../apis/images";

const AboutTeam = () => {
  return (
    <div className="container-fluid team1 py-5">
      <div className="container">
        <div className="team_text">
          <h1>Our Team</h1>
          <p className="text-muted">
            We have such a inspiring polite and modernise top management team
            with aptitude dignity
          </p>
        </div>
        <div className="d-md-flex py-5 justify-content-center text-center justify-content-around">
          <div className="pt-md-0 pt-4" data-aos="zoom-in" >
            <img src={images.teamMember1} alt="" />
            <h5>Adaim mrala</h5>
            <p className="text-muted">IT Service officer</p>
          </div>
          <div className="pt-lg-5 pt-4" data-aos="zoom-in" data-aos-delay="100">
            <img src={images.teamMember2} alt="" />
            <h5>Adaim mrala</h5>
            <p className="text-muted">IT Service officer</p>
          </div>
          <div className="pt-md-0 pt-4" data-aos="zoom-in" data-aos-delay="200">
            <img src={images.teamMember3} alt="" />
            <h5>Adaim mrala</h5>
            <p className="text-muted">IT Service officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
