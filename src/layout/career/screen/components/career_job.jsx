import React from "react";
import { useHistory } from "react-router-dom";
import { data } from "../../../../localdata/data";

const CareerJob = () => {
  const history = useHistory();

  return (
    <div className="container-fluid current-opening-main">
      <div className="container py-5">
        <div className="content-title my-3">
          <span>Current Openings</span>
        </div>
        <div className="content-tagline my-3">
          <span>What's your expertise? See where do you fit in.</span>
        </div>
        <div className="row current-opening-vacancy py-5">
          {data.map((item, i) => {
            return (
              <div className="col-md-6 mb-4" key={i} data-aos="fade-up" data-aos-delay={(i+1) * 150}>
                <div className="shadow">
                  <div className="row py-4 px-4 position-relative">
                    <div className="col-md-4 d-flex flex-column justify-content-between">
                      <div className="current-opening-title">{item.title}</div>
                      <div className="current-opening-btn mt-3 mb-lg-0 mb-4">
                        <div className="rounded-pill">
                          <button
                            className="px-4 py-1 rounded-pill"
                            onClick={() => {
                              history.push(
                                `/career/${item.title
                                  .replace("devloper", "")
                                  .toLowerCase()}`,
                                item
                              );
                            }}
                          >
                            <span>APPLY</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="current-opening-detail">
                        <span>Experience :</span>
                        <span>{item.exp}</span>
                      </div>
                      <div className="current-opening-detail">
                        <span>Qualification :</span>
                        <span>{item.qualification}</span>
                      </div>
                      <div className="current-opening-detail">
                        <span>Location :</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="current-opening-detail">
                        <span>Vacancy :</span>
                        <span>{item.vacancy}</span>
                      </div>
                      <div className="current-opening-detail">
                        <span>Skills Required :</span>
                        <span>{item.skills}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerJob;
