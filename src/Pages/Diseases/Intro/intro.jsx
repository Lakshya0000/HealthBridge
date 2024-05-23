import React from "react";
import "./intro.css";
import display from "../../../Images/disease/main2.jpg";
const Intro = () => {
  return (
    <div className="header">
      <div className="container-fluid gx-0">
        <div className="container">
          <div className="content-home">
            <div className="row content-home2">
              <div className="col-md-6">
                <div className="box-container">
                  <img src={display} className="img-home" alt="banner img" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="box-container2">
                  <h1 className="home-heading">
                    Empower Your Wellness Journey
                    <span>with Home Remedies</span>
                  </h1>
                  <p className="para home">
                    Discover effective home remedies for common ailments on our
                    medical website. From soothing teas to natural remedies,
                    find relief and improve your well-being with trusted advice
                    and easy-to-follow tips.
                  </p>
                  <div className="btn-home">
                    <a href="/remedies" className="home-links">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
